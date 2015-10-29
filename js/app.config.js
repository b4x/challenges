angular.module('challengesApp').config(function($locationProvider, $urlRouterProvider, $stateProvider){

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('main', {
		url: '/challenges/',
		templateUrl: '/challenges/views/main.html',
		//controller: 'postsCtrl'
	})

	.state('challenges', {
		url: '/challenges/',
		templateUrl: '/challenges/views/challenges.html'
	})

	.state('00', {
		url: '/00',
		templateUrl: '/views/challenges/00.html'
	})

})
