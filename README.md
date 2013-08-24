#BirdWatch  

BirdWatch is a reactive web application for visualizing a stream of live Tweets making use of **[AngularJS](http://angularjs.org)**, **[BootStrap](http://getbootstrap.com)**, **[D3.js](http://d3js.org)**, **[ElasticSearch](http://www.elasticsearch.org)** and **[Play Framework](http://www.playframework.com)** (in alphabetical order).    

![Screenshot](./docs/screenshot.png)

A Play application connects to the **[Twitter Streaming API](https://dev.twitter.com/docs/streaming-apis)** and receives all Tweets that include at least one of a set of configured words. Twitter caps this to 1% of the FireHose, which basically means that the application will not receive more than one percent of all Tweets at any given moment of time. This limit still falls in the range of millions of Tweets per day; a well-defined area of interest should comfortably fit in.
 
Incoming Tweets are inserted into an **[ElasticSearch](http://www.elasticsearch.org)** index where they are almost instantly available for querying. Each Tweet is also compared with what is called a percolation query, a pre-registered query for each connected client. Every thus pre-registered query is run on every new Tweet. For every Tweet on which the query matches the client will immediately be informed by means of **[Server Sent Events (SSE)](http://dev.w3.org/html5/eventsource/)**. 

**[AngularJS](http://angularjs.org)** clients hold a local data copy of all the Tweets they have asked for using the 
**[ElasticSearch query syntax](http://www.elasticsearch.org/guide/reference/query-dsl/query-string-query/)**, with 'AND' being the default operator. Every query is not only run on the existing Tweets in the ElasticSearch index but is also registered as a percolation query. A user selectable amount of previous Tweets is loaded, and then every new Tweet for which the query matches is appended immediately, allowing Tweets analysis in near-realtime. Queries are bookmarkable, making it easy to frequently look at interesting and potentially complex queries.

Holding all data on the client may or may not be the most elegant way of doing this. Having loaded the Tweets already certainly means that the application can fully utilize a fast CPU on the client machine and respond instantly without having to ask the server every time the set of Tweets changes through new Tweets being added.  

A live version of this application is **[available](http://birdwatch.matthiasnehlsen.com)**. This instance listens to a bunch of software and data related terms, see the application.conf file for details. Interesting queries on this data set include:

<a target="_blank" href="http://birdwatch.matthiasnehlsen.com/#/(job%20OR%20hiring)%20java"><strong>(job OR hiring) java</strong></a>

<a target="_blank" href="http://birdwatch.matthiasnehlsen.com/#/python%20-monty"><strong>python -monty</strong></a>

<a target="_blank" href="http://birdwatch.matthiasnehlsen.com/#/sql%20london)"><strong>sql london</strong></a>

Please feel free to contribute, pull requests are happily accepted. I use this project to study the technologies involved and I would appreciate learning better ways of doing things. Contributions would for example be helpful in these areas:

- More sophisticated charts and data filters. This is a rich data set and the current tools only scratch the surface of what could be done with it. You have a question that a live stream of Tweets could answer? Share it or even better write the code yourself and contribute it.

- Code organization. Particularly the AngularJS part is far from ideal, it should be much cleaner and more modularized.
 
- Design. You have ideas for a flat and clean design and know Twitter Bootstrap? Awesome, let's see it. Please tidy up the CSS as you go :-) Particularly there should no be any handwritten CSS anywhere.

- Documentation

- Online help, something animated unobtrusively offered on startup that highlights how the application can be used would be really cool. 

- Any of the issues listed on here on github.

For more information check out my **[blog](http://matthiasnehlsen.com)**.

##Setup

Play Framework. You need a JVM on your machine. On a Mac the easiest way is to then install play using **[HomeBrew](http://brew.sh)**: 
 
    brew install play
    
If brew was installed on your machine already you want to run this first: 

    brew update
    brew upgrade

You also need ElasticSearch:
 
    brew install elasticsearch
    
You then run

    elasticsearch -f
    
An inside the application folder:
    
    play run

Twitter API consumer key and access token are required to consume the **[Twitter Streaming API](https://dev.twitter.com/docs/streaming-apis)**. You need to **[create a Twitter application](https://dev.twitter.com/apps)** and store keys and secrets in a twitter.conf file, using the commented out section in the **[application.conf](https://github.com/matthiasn/BirdWatch/blob/master/conf/application.conf)** as a template. 

That should be all there is to it before you can run your own instance listening on **[localhost:9000](http://localhost:9000)**. 

You may want to remove or alter the Google Analytics script in main.scala.html.

###Streaming API limitations 
Please be aware that only one connection to the Twitter Streaming API is possible from any one public IP address. Starting a connection to the Streaming API will potentially end other connections from the same network if **[NAT](http://en.wikipedia.org/wiki/Network_address_translation)** is in place using the same public IP address. Access from mobile networks is discouraged and most likely won't work.

## Licence

This software is licensed under the Apache 2 license, quoted below.

Copyright &copy; 2013 **[Matthias Nehlsen](http://www.matthiasnehlsen.com)**.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.