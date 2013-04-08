#BirdWatch 

This is a **[Play 2.1](http://www.playframework.com)** dynamic web application written for fun and for explaining the concept of **Iteratees** in combination with consuming the **[Twitter Streaming API](https://dev.twitter.com/docs/streaming-apis)** and updating a single page web app using a **[WebSocket](http://tools.ietf.org/html/rfc6455)** connection. The visualization is done through the awesome **[D3.js](http://d3js.org)** data visualization library. 

There will be a series of blog postings covering the individual steps and explaning the concept of Iteratees soon.

The idea behind this reactive web app is to explore processing a live stream of information using Scala and the Play Framework (making use of Akka actors). A rolling window of Tweets is analyzed in terms of certain parameters and displayed graphically, e.g. in Wordcloud that becomes alive and changes as new Tweets come in. Tweets are also stored within MongoDB. Storing the Tweets in a persistent data store allows allows reasoning time periods longer than the uptime of the application. 

The data model in its current form has plenty of room for improvement though. Storing a representation of a Tweet in any form except in its entirety will almost always be wrong. Even if a perfect representation can be found for a particular time, it will fall short when previous data items were stored in a different format.

Mathematically speaking, let _A_ be the set with all the properties of an observable Tweet and _a_ be a positive integer with the cardinality of _A_ such that _a_ = |_A_|.
Any case class that does not represent the entirety of the Tweet will be a member of the power set _P(A)_, combining only some of the properties / members of _A_. Now the cardinality of the power set _P_ grows large quickly: |_P_|=2^a, indicating that the chances of finding an ideal representation of the Tweet are slim at best. Storage is cheap enough to allow storing the entirety of the Tweet anyways. 

Storing entire Tweets in the original JSON string representation is certainly possible for example with Hadoop, but it falls short in terms of quick accessibility when trying to do (near) realtime reasoning over the data for immediate browser updates. A better way seems to be parsing the JSON  parsed and written into 


# License

This software is distributed under the **[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)** (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.