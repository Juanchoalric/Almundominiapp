(function () {
    'use strict';

    angular
        .module('todoComponent')
        .component('todoContainer', {
            controller: TODOController,
            templateUrl: 'todo-component/todo-container/todo-container.html'
        });

    function TODOController() {
        let _self = this;

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