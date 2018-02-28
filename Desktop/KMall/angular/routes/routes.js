myApp.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'views/home.html',
			controller: 'StoreController',
			controllerAs: 'StoreController'
		})

		.when('/cart',{
			templateUrl : 'views/cart.html',
			controller : 'StoreController',
			controllerAs : 'StoreController',

		})

		.when('/buy',{
			templateUrl : 'views/buy.html',
			controller : 'StoreController',
			controllerAs : 'StoreController',

		})
		.when('/checkout',{
			templateUrl : 'views/checkout.html',


		})


		.otherwise({
            template: '<p></br><h2 align="center" class="well" style="margin: 10%;">404, page not found</br></h2></p>\
		<p align="center"><a  class="btn btn-danger"   href="#/" >Home</button></p>'
        });

	}]);
