#Reverse proxy with nginx

I wanted to run the BirdWatch application on port 80 on my Ubuntu server but I wasn't particularly comfortable with running it as root. Sure, I could have done a port redirect but I wanted more flexibility to run multiple applications, all accessible through the regular http port. I have tried to set up Nginx according to the play **[documentation](http://www.playframework.com/documentation/2.1.0/HTTPServer)** but that didn't work with the WebSocket connection. 

The problem is that Nginx directly supports WebSocket proxying only with versions >= 1.3.13. Through the Ubuntu repos you currently only get 1.2 something. Now you could either build from source or follow these **[instructions](https://github.com/mozilla-services/circus/issues/371)**.

The config file in this directory is adapted accordingly and seems to work fine, no guarantees for anything though.