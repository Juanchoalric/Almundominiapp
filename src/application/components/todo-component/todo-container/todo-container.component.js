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
        this.$onInit = function () {
            let defaultTasks = [{
                id: 1,
                task: '¡Mi primera tarea!',
                complete: false
            }];

            let tasks = TodoService.restoreTasks() || defaultTasks;

            TodoService.setTasks(tasks);
        };

        this.getItems = function () {
            return TodoService.getTasks();
        };

        this.addItem = function ($event) {
            let itemTask = $event.item;
            TodoService.addTask(itemTask);
            TodoService.saveTasks();
        };

        this.completeItem = function ($event) {
            let itemId = $event.item.id;
            TodoService.completeTask(itemId);
            TodoService.saveTasks();
        };

        this.deleteItem = function ($event) {
            let itemId = $event.item.id;
            TodoService.deleteTask(itemId);
            TodoService.saveTasks();
        };
    }
})();
