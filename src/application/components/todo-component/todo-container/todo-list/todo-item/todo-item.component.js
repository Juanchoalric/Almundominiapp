(function () {
    'use strict';

    angular
        .module('todoComponent')
        .component('todoItem', {
            bindings: {
                task: '<'
            },
            templateUrl: 'components/todo-component/todo-container/todo-list/todo-item/todo-item.html'
        });
})();