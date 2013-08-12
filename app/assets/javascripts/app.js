'use strict';

/** app level module which depends on services and controllers */
angular.module('birdwatch', ['birdwatch.services', 'birdwatch.controllers', 'birdwatch.directives', 'birdwatch.filters']);

/** services module initialization, allows adding services to module in multiple files */
angular.module('birdwatch.services', []);