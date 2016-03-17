module.exports=function(ngModule) {
	ngModule.directive("topicChunk", function() {
		require('./topic-chunk.less');
		return {
			restrict:"E",
			scope:{},
			templateUrl:"./components/topic-chunk/topic-chunk.html",
			controllerAs:"TopicController",
			controller:function() {
				this.greeting="Hello";
			}
		}
	})
	.config(function($stateProvider) {
		$stateProvider
			.state('topic', {
				url:"/topic",
				templateUrl:"./components/topic-chunk/topic-chunk.html"
			})
	})
}