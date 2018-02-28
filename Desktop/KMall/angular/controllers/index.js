myApp.controller('indexCtrl',['$http','$location','queryService',function($http,$location,queryService){
	var main = this;


	this.logged = function(){
		        main.userID = queryService.userId;
        main.username = queryService.userName;
        //console.log(queryService.userId);
        //console.log(main.username);
        if (queryService.log == 1 && queryService.userId !== 'undefined') {
            return 1;
        } else {

            return 0;
        }
	}

	this.logged();

	this.sublog = function(){
		var data = {
			email : main.email,
			password : main.password,
		}

		queryService.login(data)
			.then(function successCallBack(reponse){
				if(reponse.data.error===true){
					alert(reponse.data.message);
				}

				else{
					var userId;
					var data = reponse.data.data;
					queryService.log = 1;
					queryService.userId = data._id;
					queryService.username = reponse.data.data.name;
					$location.path('/dashboard/'+data._id);
				}
			},function errorCallBack(reponse){
				alert("error check console")
			}

			);

	}

	this.submitsign = function(){
		        var data = {
		            name: main.name,
		            email: main.email,
		            password: main.password,
		            mobileNumber: main.mobileNumber,
		            security: main.security,
		            answer: main.securityAnswer
        }
        queryService.signUp(data)
        .then(function successCallBack(reponse){

        	if(reponse.data.error == true){
        		alert(reponse.data.message)
        	}
        	else{
        		if (response.data.data.name == "Admin"){
        			
        		}
        	}
        })
	}
}]);