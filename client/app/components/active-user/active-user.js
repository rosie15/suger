module.exports=function(ngModule) {
	ngModule.directive("activeUser", function() {
		require("./active-user.less");
		return {
			restrict:"E",
			scope:{},
			templateUrl:"components/active-user/active-user.html",
			controllerAs:"ActiveUserController",
			controller: function() {
				this.fields=["自然科学领域活跃用户", "创业领域活动用户", "法律领域活动用户", "设计领域活动用户", "科技领域活动用户", "经济学领域活动用户"];
				this.field=this.fields[Math.floor(Math.random()*6)];

				this.mottos=[
					"To be a rock and not roll",
					"中二青年",
					"其实我的梦想是当一个谐星",
					"一本道专业户"
				]
				this.motto=this.mottos[Math.floor(Math.random()*4)]; 

				this.usernames=["张旭", "玉伯", "V2EX", "Busch", "言雀", "张佳伟"];
				this.username=this.usernames[Math.floor(Math.random()*4)];

				this.number=Math.floor(Math.random()*1000);
				
				this.isShown=false;
			}
		}
	})
}