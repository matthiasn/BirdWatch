#Building the AngularJS client

The AngularJS client is assembled by a build system that takes care of JavaScript concatenation and copying the result into the appropriate place for Play Framework. You will need **[grunt](http://gruntjs.com)** and **[bower](http://bower.io)** for the build process to work.

With those installed, you will need to run the following commands initially:

    npm install
    bower install

Then, you can run the build task:

    grunt bw
