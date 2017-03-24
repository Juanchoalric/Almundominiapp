(function () {
    'use strict';

    angular
        .module('todoComponent', [])
        .component('todoContainer', {
            controller: TODOController,
            template: '<div><h1>prueba</h1></div>'
            //templateUrl: 'todo-component/todo-container/todo-container.html'
        });

    function TODOController() {
        let self = this;

        this.$onInit = function () {
            console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAH');
        };

        this.addItem = function ($event) {
            console.log($event);
        };

        this.removeItem = function ($event) {
            console.log($event);
        };

        this.tickItem = function ($event) {
            console.log($event);
        }
    }
})();