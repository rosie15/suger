module.exports = function(ngModule) {
	ngModule.directive("navbar", function() {
		require('./navbar.less');
		return {
			restrict: "E",
			scope: {},
			templateUrl: "components/navbar/navbar.html",
			controllerAs: "NavbarController",
			controller: function() {
				this.menu={
					home:"首页",
					topic:"话题",
					find:"发现",
					message:"消息"
				}
			}
		}
	})
	.config(function($stateProvider) {
			$stateProvider
			.state("home", {
				url:"/",
				template:'<active-user></active-user>'
			})
	});
}