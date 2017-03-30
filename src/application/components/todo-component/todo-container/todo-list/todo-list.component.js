(function () {
    'use strict';

    angular
        .module('todoComponent')
        .component('todoList', {
            bindings: {
                items: '<',
                completeItem: '&',
                deleteItem: '&'
            },
            templateUrl: 'components/todo-component/todo-container/todo-list/todo-list.html'
        });
})();