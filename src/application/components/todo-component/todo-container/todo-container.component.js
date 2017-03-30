(function () {
    'use strict';

    angular
        .module('todoComponent')
        .component('todoContainer', {
            bindings: {},
            controller: TodoContainerController,
            templateUrl: 'components/todo-component/todo-container/todo-container.html'
        });

    TodoContainerController.$inject = ['todoService'];

    function TodoContainerController(TodoService) {
        this.getItems = function () {
            return TodoService.getTasks();
        };

        this.addItem = function ($event) {
            let itemTask = $event.item;

            TodoService.addTask(itemTask);
        };

        this.completeItem = function ($event) {
            let itemId = $event.item.id;

            TodoService.completeTask(itemId);
        };

        this.deleteItem = function ($event) {
            let itemId = $event.item.id;

            TodoService.deleteTask(itemId);
        };
    }
})();
