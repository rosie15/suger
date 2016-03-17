var angular = require('angular');
var uirouter = require('angular-ui-router');

var ngModule = angular.module('sugerApp', [uirouter]);
		

require('./components/navbar/index')(ngModule);
require('./components/active-user/index')(ngModule);
require('./components/topic-chunk/index')(ngModule);

require('./directives/index')(ngModule);