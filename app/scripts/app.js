'use strict';
/**
 * @ngdoc overview
 * @name plutoApp
 * @description
 * # plutoApp
 *
 * Main module of the application.
 */
angular
    .module('plutoApp', [
        'oc.lazyLoad',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        '720kb.datepicker',
        'ngFileSaver',
        'jkuri.slimscroll',
        'plutoFilters',
        'angularUtils.directives.dirPagination',
        'am.multiselect',
        'ui.calendar',
        'ngDialog',
        'jsonFormatter'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        $ocLazyLoadProvider.config({
            debug: false,
            events: true
        });

        $urlRouterProvider.otherwise('/dashboard/home');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard/main.html',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'plutoApp',
                                files: [
                                    'scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
                                    'scripts/directives/sidebar/sidebar.js',
                                    'scripts/services/FormatService.js',
                                    'scripts/services/FetchDataService.js',
                                    'scripts/services/ValidationsService.js',
                                    'scripts/services/UploadDataService.js'
                                ]
                            }),
                            $ocLazyLoad.load(
                                {
                                    name: 'toggle-switch',
                                    files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                                        "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                                    ]
                                }),
                            $ocLazyLoad.load(
                                {
                                    name: 'ngAnimate',
                                    files: ['bower_components/angular-animate/angular-animate.js']
                                })
                        $ocLazyLoad.load(
                            {
                                name: 'ngCookies',
                                files: ['bower_components/angular-cookies/angular-cookies.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngResource',
                                files: ['bower_components/angular-resource/angular-resource.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngSanitize',
                                files: ['bower_components/angular-sanitize/angular-sanitize.js']
                            })
                        $ocLazyLoad.load(
                            {
                                name: 'ngTouch',
                                files: ['bower_components/angular-touch/angular-touch.js']
                            })
                    }
                }
            })
            .state('dashboard.home', {
                url: '/home',
                controller: 'MainCtrl',
                templateUrl: 'views/pages/blank.html',
                resolve: {
                    loadMyFiles: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'plutoApp',
                            files: [
                                'scripts/controllers/main.js'
                            ]
                        })
                    }
                }
            })
            .state('login', {
                templateUrl: 'views/pages/login.html',
                url: '/login'
            })



            .state('dashboard.main', {
                templateUrl: 'views/dashboard/main.html',
                url: '/upload-seller-serviceability',
                controller: 'MainsCtrl',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'chart.js',
                            files: []
                        }),
                            $ocLazyLoad.load({
                                name: 'plutoApp',
                                files: ['scripts/controllers/mainController.js']
                            })
                    }
                }
            })




    }]);

    
