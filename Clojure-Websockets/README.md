# Birdwatch in Clojure and ClojureScript
This is an **all-Clojure** implementation of the **BirdWatch** application. There is a **book** being written about this application: **[Building a System in Clojure](https://leanpub.com/building-a-system-in-clojure)**

## Building blocks:
Here is a brief overview of the building blocks:

* The system is built out of smaller subsystems that communicate via asynchronous message passing. These subsystems instantiated and wired together using the **[systems-toolbox](https://github.com/matthiasn/systems-toolbox)** library. Subsystems on the server and on the connected web clients look very similar because they are, the library uses cljc so that the code can shared between Clojure and ClojureScript projects.
* A twitter client on top of **Adam Wynne**'s **[twitter-api](https://github.com/adamwynne/twitter-api)** connects to the **[Twitter Streaming API](https://dev.twitter.com/streaming/overview)** and subscribes to a number of terms.
* The *information grid* or pipes and tubes of the application is provided by **[core.async](https://github.com/clojure/core.async)**, but that part is abstracted away by the **systems-toolbox** library.
* Tweets are persisted into **[ElasticSearch](http://www.elasticsearch.org)** using **[@ClojureWerkz](https://twitter.com/clojurewerkz)** **[Elastisch](https://github.com/clojurewerkz/elastisch)** client. Note that currently, the latest supported version by this client is ElasticSearch 1.7.2.
* Clients connect over **[WebSockets](http://en.wikipedia.org/wiki/WebSocket)** provided by **[@ptaoussanis](https://twitter.com/ptaoussanis)** **[sente](https://github.com/ptaoussanis/sente)** library.
* Clients can perform **live searches**, where matching new tweets with running searches is done via ElasticSearch's **[Percolator](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/search-percolate.html)** feature. The client UI is then updated in (near)-real time over the existing WebSockets connection.
* The client UI is built using **[Reagent](https://github.com/reagent-project/reagent)** library on top of Facebook's **[react](https://github.com/facebook/react)**. UI components can observe the state of another component, this feature is also provided by the **[systems-toolbox](https://github.com/matthiasn/systems-toolbox)** library.

## Installation of MainApp
First of all, **[Leiningen](http://leiningen.org)** must be installed on your system. Then, you need to build the client-side application:

    lein cljsbuild once release
    lein cljsbuild once dev

Alternatively, you can use the following during development to detect file system changes and recompile MUCH FASTER:

    lein cljsbuild auto release
    lein cljsbuild auto dev

Another way for an even more interactive development experience is to use **[lein-figwheel](https://github.com/bhauman/lein-figwheel)** which will allow for live reloading while maintaining the client-side application state. For this, you use 

    lein figwheel

instead of the cljsbuild command above. Then, whenever code changes, only the changed namespace is recompiled, which typically only takes fractions of a second. Note however that this mode is only meant for use during development on a local machine. Instead of a single, optimized JavaScript file, the browser needs to download many small files. Also, the resulting JavaScript code is slower than the code that went through advanced compilation in the **[Closure compiler](https://developers.google.com/closure/compiler)**.

You also need **[Bower](http://bower.io)** for managing the client-side dependencies. Once you have it installed, all you need to do is run it once:

    bower install

In the conf.edn, you can specify

* the address under which your installation of **[ElasticSearch](http://www.elasticsearch.org)** is accessible (default is localhost)
* the index to use in ElasticSearch
* address and port of running instance of Redis (default localhost:6379)

## Installation of TwitterClient
You will need to create a file named twitterconf.edn. You can copy **twitterconf-tpl.edn** as a template. Edit it and fill out the credentials you have obtained from **[dev.twitter.com](dev.twitter.com)**:

      { :consumer-key             "<YOUR API KEY HERE>"
        :consumer-secret          "<YOUR API SECRET HERE>"
        :user-access-token        "<YOUR ACCESS TOKEN HERE>"
        :user-access-token-secret "<YOUR ACCESS TOKEN SECRET HERE>"
        :es-address               "http://127.0.0.1:9200"
        :es-index                 "birdwatch"
        :track                    "clojure,love"
        :tw-check-interval-sec    10
        :tw-restart-wait          60
        :pidfile-name             "twitterclient.pid"
        :redis-host               "127.0.0.1"
        :redis-port               6379}

In the twitterconf.edn, you can specify

* the address under which your installation of **[ElasticSearch](http://www.elasticsearch.org)** is accessible (default is localhost)
* the index to use in ElasticSearch
* the terms to track in the Streaming API connection with Twitter
* address and port of running instance of Redis (default localhost:6379)

## Usage
Once the steps described above are completed, usage is easy. You can start up the both applications in their respective directories like this:

    lein run

The command above will have the MainApp application listen on **[localhost:8888](http://localhost:8888)**. You can alternatively specify a different port or IP address to listen through environment variables, like so:

    PORT=9999 HOST=192.1.1.100 lein run

## License
Copyright © 2014 **[Matthias Nehlsen](http://www.matthiasnehlsen.com)**. Distributed under the **GNU GENERAL PUBLIC LICENSE**, Version 3. See separate LICENSE file.
