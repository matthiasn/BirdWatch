'use strict';

/** utils service */
angular.module('birdwatch.services').factory('utils', function () {

    var formatTweet = function (t) {
        /** results from ElasticSearch are wrapped in object inside _source property */
        if (t.hasOwnProperty('_source')) { t = t._source; }
        
        var tags = t.entities.hashtags;
        var mentions = t.entities.user_mentions;
        var urls = t.entities.urls;

        t.htmlText = t.text;
        t.htmlText = t.htmlText.replace("RT ", "<strong>RT </strong>");
        
        for (var i = 0; i < tags.length; i++) {
            t.htmlText = t.htmlText.replace("#" + tags[i].text, "<a href='https://twitter.com/search?q=%23" + tags[i].text 
                + " ' target='_blank'>#" + tags[i].text + "</a>");
        }
        for (var j = 0; j < mentions.length; j++) {
            t.htmlText = t.htmlText.replace("@" + mentions[j].screen_name, "<a href='https://twitter.com/" 
                + mentions[j].screen_name + " ' target='_blank'>@" + mentions[j].screen_name + "</a>");
        }
        for (var k = 0; k < urls.length; k++) {
            t.htmlText = t.htmlText.replace(urls[k].url, "<a href='" + urls[k].url 
                + " ' target='_blank'>" + urls[k].display_url + "</a>");
        }
        return t;
    };

    /** build paginated query */
    var buildQuery = function (queryString, size, from) {
        return {
            size: size,
            from: from,
            query: {
                query_string: {
                    default_field: "text",
                    query: "(" + queryString + ") AND lang:en",
                    default_operator: "AND"
                }
            },
            sort: { "id": "desc" } 
        };
    };
  
    var legalStuff = function () {
        alert("Simple. Project is delivered as is. Use it in whichever way you see fit. The author, Matthias Nehlsen, does not make claims of any kind and cannot be held responsible for anything.\n\nHere in more legal terms, adapted from \nhttps://github.com/mbostock/d3/blob/master/LICENSE. Thanks, Michael Bostock!\n\nTHIS SOFTWARE AND ITS ONLINE DEMO IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL MATTHIAS NEHLSEN BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.");
    };
    
    return { formatTweet: formatTweet, buildQuery: buildQuery, legalStuff: legalStuff };
});
