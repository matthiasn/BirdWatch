#Building the ReactJS client

The ReactJS client is assembled by a build system that takes care of JavaScript concatenation and copying the result into the appropriate place for Play Framework. There is a watch task that monitors file system changes and builds the application automatically. It will do this only when JsHint reports no errors. You can start this process like so:

    grunt watch

The JSX to plain JavaScript conversion is currently not done by the build task. Instead, run the following from inside this folder in order to automatically run the JSX to JS conversion:

    jsx --watch jsx/ build/

For this to work, you need to have the react-tools available:

    npm install -g react-tools
