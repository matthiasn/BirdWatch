#BirdWatch 

This is a **[Play 2.1](http://www.playframework.com)** dynamic web application written for learning the concept of **[Iteratees](http://www.playframework.com/documentation/2.0.4/Iteratees)** in combination with consuming the **[Twitter Streaming API](https://dev.twitter.com/docs/streaming-apis)** and updating a single page web app using a **[WebSocket](http://tools.ietf.org/html/rfc6455)** connection. The visualization is done through the **[D3.js](http://d3js.org)** data visualization library.

![Screenshot](./docs/screenshot.png)
The idea behind this reactive web app is to explore processing a live stream of information using Scala and the Play Framework (making use of Akka actors). A rolling window of Tweets is analyzed in terms of certain parameters and displayed graphically. The **[d3-cloud](https://github.com/jasondavies/d3-cloud)** project by Jason Davies is used for displaying the word cloud, adapted for dynamic updates as new data comes in through the WebSockets connection. Tweets are also stored within MongoDB. Storing the Tweets in a persistent data store allows allows reasoning time periods longer than the uptime of the application.

###Setup

A Twitter API consumer key and access token are required to consume the **[Twitter Streaming API](https://dev.twitter.com/docs/streaming-apis)**. Please **[create a Twitter application](https://dev.twitter.com/apps)** and store keys and secrets in a twitter.conf file, using the commented out section in the **[application.conf](https://github.com/matthiasn/BirdWatch/blob/master/conf/application.conf)** as a template.

###Architecture

![Architecture](./docs/BirdWatch.png)
The Twitter Streaming API is used to for subscribing to Tweets containing a search word. The stream is processed by an Iteratee which takes each chunk of data coming through the open HTTP connection, parses a Tweet and forwards it to the ImageProc supervisor for profile image retrieval (1) which forwards the message to the Image Retrieval Actor (2) which starts asynchronous WS requests for the profile images (3). Once an image is retrieved, it is forwarded to a Round Robin router (4) which distributes the conversion over several image conversion actors (5). Once completed, the supervisor is notified with a "done" message (6) which then forwards the Tweet to database persistence (7a) and to the event bus (7b). The BirdWatch controller has subscribed to the event bus and gets notified with each new Tweet (8). This controller holds a rolling window of Tweets, performs some statistical reasoning over this rolling window (word counts for word cloud, avg tweet length with standard deviation) and pushes information to the client using a WebSocket connection.       

Holding a rolling window of Tweets in memory might not scale well because it is kept for each connection. Different options come to mind here:

*   Centralizing the rolling window by performing the reasoning within an actor, pushing results to event bus, having controller subscribe to these messages. Would scale well, not a lot of overhead for additional connections, calculations only done once

*   No state. Only push information about availability of new Tweets, let web client decide when to retrieve new data from a REST service, only perform reasoning on demand and from database. Advantage: reasoning always over persisted data, no separate ways for in memory and for historic data. Little memory footprint. Disadvantage: potentially many database queries (MongoDB performs well with proper indexing though, cache hit rate will be high for current Tweets)



###Data Model

Tweets are stored directly into **[MongoDB](http://www.mongodb.org)**, without any intermediate case class modeling the Tweet because storing a representation of a Tweet in any form except in its entirety will almost always be wrong. Even if a perfect representation can be found for a particular point in time, it will fall short when previous data items were stored in a different format.

Mathematically speaking, let _A_ be the set with all the properties of an observable Tweet and _a_ be a positive integer with the cardinality of _A_ such that _a_ = | _A_ |.
Any case class that does not represent the entirety of the Tweet will be a member of the power set _P(A)_, combining only some of the properties / members of _A_. Now the cardinality of the power set _P_ grows large quickly: | _P_ | = 2^_a_, indicating that the chances of finding an ideal representation of the Tweet are slim at best. That being said, storage is cheap enough to allow storing the entirety of the Tweet within the database anyways.

Storing entire Tweets in the original **[JSON](https://tools.ietf.org/html/rfc4627)** string representation is certainly possible for example with **[Hadoop](http://hadoop.apache.org)**, but this approach falls short in terms of quick accessibility when trying to do (near) real-time reasoning over the data for immediate browser updates. A better way for this particular application seems to be parsing the JSON string into a **[JsValue](http://www.playframework.com/documentation/api/2.1.1/scala/index.html#play.api.libs.json.JsValue)** and storing it in its entirety within MongoDB. This way, not only is the original data preserved for further processing, but thanks to MongoDB it can always be (re-)indexed according to the current needs of the application. Case classes can still be used for convenience
within the application, but only after the entire Tweet has been stored. Any currently needed representation of the Tweet can then be changed as the need arises, while all past data also allows the conversion into the then current format.

The data model discussed above, storing the whole Tweet, is a work in progress, currently both the JSON representation and a (crippled) case class representation are stored in MongoDB. 

###Separation into separate JVMs
The retrieval of the Tweets and the converted profile images and their persistence into MongoDB is an ongoing process which potentially will not change all that much unless the Twitter data format changes. The further reasoning over the stream of Tweets is under development though and will go through numerous recompilations in the further development lifecycle of this application. The connection to Twitter would be terminated and reestablished every time this happens, making the database coverage of the stream spotty. The storage and persistence could be moved into a separate application running in another JVM In order to overcome this. **[Akka Remoting](http://doc.akka.io/docs/akka/snapshot/scala/remoting.html)** would allow to do this, where the persistence application uses a remote actor reference to inform the application serving the UI only when this is actually running, while keeping the connection to Twitter open and storing Tweets and profile images with or without the processing application being reachable. Connecting two instances of Akka directly might be too tightly coupled in terms of application architecture, the preferred way to go here would be the usage of a message-oriented middleware. An option might be **[RabbitMQ](http://www.rabbitmq.com)** connected through **[Camel](http://doc.akka.io/docs/akka/2.1.2/scala/camel.html)**. This would allow for persistence of messages when the Tweet processing / presenting app is not running, while the Twitter stream client / image processor does not need any knowledge of applications further processing the Tweets. Another option might be **[ZeroMQ](http://doc.akka.io/docs/akka/2.1.2/scala/zeromq.html)**, using a Publisher / Subscriber connection. It might be worth exploring both options to see which one fits the needs of the application better.  

#License

This software is distributed under the **[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)** (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.