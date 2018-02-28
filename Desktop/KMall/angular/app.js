var myApp = angular.module('kmall',['ngRoute','ngCookies']);

myApp.controller('StoreController', ['$scope','$cookies', function($scope,$cookies){


	
		$scope.products = productsData;
		$scope.cart = [];
		var geocoder;
		geocoder = new google.maps.Geocoder();
	  	$scope.total = 0;
	  	$scope.address = []  ;




		
		if(!angular.isUndefined($cookies.get('total'))){
		  $scope.total = parseFloat($cookies.get('total'));
		}
		//Sepetimiz daha önceden tanımlıysa onu çekelim
		if (!angular.isUndefined($cookies.get('cart'))) {
		 		$scope.cart =  $cookies.getObject('cart');
		}
		
		$scope.addItemToCart = function(product){
		  
		 	if ($scope.cart.length === 0){
		 		product.count = 1;
		 		$scope.cart.push(product);
		 	} else {
		 		var repeat = false;
		 		for(var i = 0; i< $scope.cart.length; i++){
		 			if($scope.cart[i].id === product.id){
		 				repeat = true;
		 				$scope.cart[i].count +=1;
		 			}
		 		}
		 		if (!repeat) {
		 			product.count = 1;
		 		 	$scope.cart.push(product);	
		 		}
		 	}
		 	var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 1);
		 	$cookies.putObject('cart', $scope.cart,  {'expires': expireDate});
		 	$scope.cart = $cookies.getObject('cart');
		 
		  $scope.total += parseFloat(product.price);
      $cookies.put('total', $scope.total,  {'expires': expireDate});
		 };

		 $scope.removeItemCart = function(product){
		   
		   if(product.count > 1){
		     product.count -= 1;
		     var expireDate = new Date();
         expireDate.setDate(expireDate.getDate() + 1);
		     $cookies.putObject('cart', $scope.cart, {'expires': expireDate});
 			   $scope.cart = $cookies.getObject('cart');
		   }
		   else if(product.count === 1){
		     var index = $scope.cart.indexOf(product);
 			 $scope.cart.splice(index, 1);
 			 expireDate = new Date();
       expireDate.setDate(expireDate.getDate() + 1);
 			 $cookies.putObject('cart', $scope.cart, {'expires': expireDate});
 			 $scope.cart = $cookies.getObject('cart');
		     
		   }
		   
		   $scope.total -= parseFloat(product.price);
       $cookies.put('total', $scope.total,  {'expires': expireDate});
		   
		 };





		 $scope.removeAll = function(){
		 			$scope.cart = [];
 			   	$scope.total = 0;
       			var expireDate = new Date();
         expireDate.setDate(expireDate.getDate() + 1);
		     $cookies.putObject('cart', $scope.cart, {'expires': expireDate});
		     $cookies.putObject('total', $scope.total, {'expires': expireDate});
 			   $scope.cart = $cookies.getObject('cart');
 			   $scope.total = $cookies.getObject('total');

		 };



		  
			  
			if (navigator.geolocation) {
			    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
			} 
			//Get the latitude and the longitude;
			function successFunction(position) {
			    var lat = position.coords.latitude;
			    var lng = position.coords.longitude;
			    codeLatLng(lat, lng)
			}

			function errorFunction(){
			    alert("Geocoder failed");
			}



			  function codeLatLng(lat, lng) {

			    var latlng = new google.maps.LatLng(lat, lng);
			    geocoder.geocode({'latLng': latlng}, function(results, status) {
			      if (status == google.maps.GeocoderStatus.OK) {
			      console.log(results)
			        if (results[1]) {
			         //formatted address
			         var  address1 = results[0].formatted_address;
			         console.log(address1); 
			         $scope.address = address1.split(',');
			        
			        console.log($scope.address);
			        expireDate.setDate(expireDate.getDate() + 1);
		     		$cookies.putObject('address', $scope.address, {'expires': expireDate});
 			   		$scope.address = $cookies.getObject('address');
			         
			         
			         

			        //find country name
			             for (var i=0; i<results[0].address_components.length; i++) {
			            for (var b=0;b<results[0].address_components[i].types.length;b++) {

			            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
			                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
			                    //this is the object you are looking for
			                    //city= results[0].address_components[i];
			                    break;
			                }
			            }
			        }
			        //city data
			        //alert(city.short_name + " " + city.long_name)


			        } else {
			          alert("No results found");
			        }
			      } else {
			        alert("Geocoder failed due to: " + status);
			      }
			      
			    });

			    console.log("sJSDhksjhd"+address);
			  }
			  
				

					
								}]);
					






	var productsData = [{
		id: 1,
		name: 'product1',
		price: 100.0,
		image: 'themes/images/products/7.jpg'
	},{
		id: 2,
		name: 'product2',
		price: 14.5,
		image: 'themes/images/products/6.jpg'
	},{
		id: 3,
		name: 'product3',
		price: 100.43,
		image: 'themes/images/products/5.jpg'
	},{
		id: 4,
		name: 'product3',
		price: 100.43,
		image: 'themes/images/products/4.jpg'
	},{
		id: 5,
		name: 'product3',
		price: 100.43,
		image: 'themes/images/products/3.jpg'
	},{
		id: 6,
		name: 'product4',
		price: 99.9,
		image: 'themes/images/products/2.jpg'
	}];
