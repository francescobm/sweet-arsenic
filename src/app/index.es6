import { HomeController } from './home/home.controller.es6';
import { ContactController } from './contact-us/contact.controller.es6';

let app = angular.module('marriageApp', ['firebase', 'ui.router','ui.bootstrap', 'ngMessages', 'ngAnimate'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		  $urlRouterProvider.otherwise("/");
		  //
		  // Now set up the states
		  $stateProvider
		    .state('home', {
				url: '/',
				views: {
					'': {
						templateUrl: 'app/home/home.tmpl.html',
						controller: 'HomeController',
						controllerAs: 'homeCtrl'
					}
				}
			})
	}])
    .controller('HomeController', HomeController)
    .controller('ContactController', ContactController);

// initialize app
angular.bootstrap(document, ['marriageApp']);
