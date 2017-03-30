(function () {
    'use strict';
    
    angular
        .module('todoComponent')
        .component('todoList', {
            bindings: {
                tasks: '<'
            },
            templateUrl: 'components/todo-component/todo-container/todo-list/todo-list.html'
        });
})();