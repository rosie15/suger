module.exports = function(ngModule) {
	ngModule.directive('kcdHello', function() {
		require('./kcd-hello.less');
		return {
			restrict: "E",
			scope: {},
			templateUrl: "directives/kcd-hello.html",
			controllerAs: "vm",
			controller: function() {
				this.greeting = "Hello, copy thathahaha"
			}
		}
	})
}