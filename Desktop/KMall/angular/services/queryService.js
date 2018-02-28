myApp.factory('queryService',function queryFactory($http,authService,$q){

	var queryArray = {};

	queryArray.log = {};
	queryArray.sign = {};

	queryArray.login = function(logindata){
		return $http.post('/users/login',logindata);
	}

	queryArray.submit = function(signdata){
		return $gttp.post('/users/signup',signdata);
	}

});