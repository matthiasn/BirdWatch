#BirdWatch  
BirdWatch is a reactive web application for visualizing a stream of live tweets. It started out as a playground for trying out different ways of solving the same problem. There is a server-side application which subscribes to the Twitter Streaming API and then allows a client-side single-page application to perform a live search, meaning that a search on historic tweets up until now will be performed and then updated as new tweets matching the same search are retrieved.

## Implementations
On the server side, there are currently two different implementations:

1. **[Play Framework](https://www.playframework.com)** (**[Scala](http://www.scala-lang.org)**) application with communication over **[Server-Sent Events](http://en.wikipedia.org/wiki/Server-sent_events)** and multiple clients: **[AngularJS](https://angularjs.org)**, **[ReactJS](http://facebook.github.io/react/)** and **[ClojureScript](https://github.com/clojure/clojurescript)**/**[Om](https://github.com/swannodette/om)**. Note that the ClojureScript/Om client is not actively maintained as the Clojure development has moved to the application below. **[Read more](./Scala-Play-SSE/)**

2. **[Clojure](https://github.com/clojure/clojure)** application communicating with the client over Websockets. The client side application is written in **[ClojureScript](https://github.com/clojure/clojurescript)** using **[Om](https://github.com/swannodette/om)** for rendering. **[Read more](./Clojure-Websockets/)**


## Installation
Installation instructions can be found with the respective implementations.

## Further Reading

There are a couple of blog posts covering this application. The best starting point for the **Play** application is the **[BirdWatch Explained](http://matthiasnehlsen.com/blog/2013/09/10/birdwatch-explained/)** article covering both the server side and the initial client using **AngularJS**. The **[BirdWatch: AngularJS vs. ReactJS](http://matthiasnehlsen.com/blog/2014/03/31/birdwatch-with-reactjs/)** article covers the **ReactJS** client. This article builds on the previous one. Then there is the **[BirdWatch with ClojureScript and Om explained](http://matthiasnehlsen.com/blog/2014/07/24/birdwatch-cljs-om/)** article. This one may still be useful as it covers how to build a **ClojureScript** client using **Server-Sent Events**. 

A series of articles about the all-Clojure version is currently in the works. Check out **[matthiasnehlsen.com](http://matthiasnehlsen.com)** and subscribe to the newsletter if you want to stay up to date.

## License
Copyright © 2014 **[Matthias Nehlsen](http://www.matthiasnehlsen.com)**. Distributed under the **GNU GENERAL PUBLIC LICENSE**, Version 3. See separate LICENSE file.
