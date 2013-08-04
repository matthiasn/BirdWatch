'use strict';

/** Controllers */
angular.module('birdwatch.controllers', ['birdwatch.services', 'charts.barchart', 'charts.wordcloud', 'ui.bootstrap']).
    controller('BirdWatchCtrl',function ($scope, $http, $location, utils, barchart, wordcloud, $timeout, $dialog, $window) {
        $scope.tweets = [];
        $scope.prevSize = 1000;
        $scope.pageSize = 10;
        $scope.stayOnLastPage = true;
        
        $scope.noOfPages = function () { return Math.ceil($scope.tweets.length / $scope.pageSize); };
        $scope.currentPage = 1;
        $scope.maxSize = 12;
        
        $scope.lastCloudUpdate = new Date().getTime() - 2000;

        $scope.tweetPage = function () {
            var startIndex = ($scope.currentPage - 1) * $scope.pageSize;
            var endIndex = Math.min(startIndex + $scope.pageSize, $scope.tweets.length);            
            return $scope.tweets.slice(startIndex, endIndex).reverse();
        };
        
        $scope.barchartDefined = false;
        $scope.searchText = $location.path().substr(1);

        /** starting new search */
        $scope.newSearch = function () {
            $scope.tweetFeed.close();
            $scope.tweets = [];
            $scope.listen();
        };

        /** adds a string to the search bar when for example clicking on a chart element */
        $scope.addSearchString = function (searchString) {
            if ($scope.searchText.length === 0) { $scope.searchText = searchString; }
            else if ($scope.searchText.indexOf(searchString) === -1) {
                $scope.searchText = $scope.searchText + " " + searchString;
            }
            $scope.$apply();  // I want the term to appear immediately, not only after search returns
            $scope.newSearch();            
        };

        /** update UI every 10 seconds to keep time ago for tweets accurate */
        $scope.updateInterval = 1000;
        $scope.onTimeout = function () {
            $scope.$apply();
            updateTimeout = $timeout($scope.onTimeout, $scope.updateInterval);
        };
        var updateTimeout = $timeout($scope.onTimeout, $scope.updateInterval);

        /** handle incoming tweets: add to tweets array */
        $scope.addTweet = function (msg) {
            $scope.$apply(function () {
                var t = utils.formatTweet(JSON.parse(msg.data));
                $scope.tweets.push(t);
                $scope.wordCount.insert([t]);
                $scope.barchart.redraw($scope.wordCount.getWords().slice(0, 25));

                if ((new Date().getTime() - $scope.lastCloudUpdate) > 5000) {
                    $scope.wordCloud.redraw($scope.wordCount.getWords());
                    $scope.lastCloudUpdate = new Date().getTime();
                }
                
                if ($scope.stayOnLastPage) {
                    $scope.currentPage = Math.ceil($scope.tweets.length / $scope.pageSize);                    
                }
            });
        };
        
        $scope.barchart = barchart.BarChart($scope.addSearchString, $("#wordBars").width() - 180);

        $scope.wordCloud = wordcloud.WordCloud($("#wordCloud").width(), $("#wordCloud").width() * 0.6, 250, $scope.addSearchString);

        /** load previous tweets, paginated. recursive function, calls itself with the next chunk to load until
         *  eventually n, the remaining tweets to load, is not larger than 0 any longer. guarantees at least n hits
         *  if available, potentially more if (n % chunkSize != 0) */
        $scope.loadPrev = function (searchString, n, chunkSize, offset) {
            if (n > 0) {
                $http({method: "POST", data: utils.buildQuery(searchString, chunkSize, offset), url: "/tweets/search"}).
                    success(function (data, status, headers, config) {

                        var tempData = data.hits.hits.reverse()
                            .map(function (t) { return t._source; })
                            .map(utils.formatTweet);

                        $scope.tweets = tempData.concat($scope.tweets); // prepend whole array

                        $scope.wordCount.insert(tempData);

                        if (n < 101) {     // only trigger drawing of wordcloud on last chunk of data, expensive 
                            $scope.wordCloud.redraw($scope.wordCount.getWords())
                        }

                        if ($scope.barchartDefined === false) {
                            $scope.barchart.init($scope.wordCount.getWords().slice(0, 26));
                            $scope.barchartDefined = true;
                        } else {
                            $scope.barchart.redraw($scope.wordCount.getWords().slice(0, 26))
                        }

                        if ($scope.stayOnLastPage) {
                            $scope.currentPage = Math.ceil($scope.tweets.length / $scope.pageSize);
                        }
                        
                        $scope.loadPrev(searchString, n - chunkSize, chunkSize, offset + chunkSize);
                    }).
                    error(function (data, status, headers, config) {
                    }
                );
            }
        };

        /** start listening for tweets with given query */
        $scope.listen = function () {
            $scope.tweets = [];
            $scope.wordCount = utils.wordCount();

            var searchString = "*";
            if ($scope.searchText.length > 0) {
                searchString = $scope.searchText;
                $location.path(searchString);
            }
            else $location.path("");

            $scope.tweetFeed = new EventSource("/tweetFeed?q=" + searchString);
            $scope.tweetFeed.addEventListener("message", $scope.addTweet, false);

            $scope.loadPrev(searchString, $scope.prevSize, 100, 0);
        };

        $scope.listen();

        $scope.openMessageBox = function(){          
            alert("Simple. Project is delivered as is. Use it in whichever way you see fit. The author, Matthias Nehlsen, does not make claims of any kind and cannot be held responsible for anything.\n\nHere in more legal terms, adapted from \nhttps://github.com/mbostock/d3/blob/master/LICENSE. Thanks, Michael Bostock!\n\nTHIS SOFTWARE AND ITS ONLINE DEMO IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL MATTHIAS NEHLSEN BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.");

            /** Todo: does not work as expected, shows black window in firefox, chrome and safari */
//            var title = 'This is a message box';
//            var msg = 'This is the content of the message box';
//            var btns = [{result:'cancel', label: 'Cancel'}, {result:'ok', label: 'OK', cssClass: 'btn-primary'}];
//            $dialog.messageBox(title, msg, btns)
//                .open()
//                .then(function(result){
//                    alert('dialog closed with result: ' + result);
//                });
        };

    })
    /** Todo: this shouldn't be here */
    .filter("fromNow", function () {
        return function (date) { return moment(date).fromNow(true); }
    })
    /** Todo: this shouldn't be here */
    .directive('profileImage', function () {
        return {
            restrict: 'A',
            template: '<span ng-model="tweet"><a href="http://www.twitter.com/{{ t.user.screen_name }}" target="_blank">' +
                      '<img class="thumbnail" src="{{t.user.profile_image_url}}" />' +
                      '</a></span>',
            scope: { tweet: "=" },
            link: function (scope, elem, attrs) {
                console.log(attrs);
            }
        }
    });