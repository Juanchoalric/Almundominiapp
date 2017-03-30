(function () {
    'use strict';

    angular
        .module('todoComponent')
        .component('todoContainer', {
            bindings: {

            },
            controller: TodoContainerController,
            templateUrl: 'components/todo-component/todo-container/todo-container.html'
        });

    TodoContainerController.$inject = ['todoService'];

    function TodoContainerController(todoService) {
        let self = this;

        this.$onInit = function () {
            self.tasks = todoService.getTasks();
        };

        this.addTask = function ($event) {
            let task = $event.task;
            todoService.addTask(task);

            self.tasks = todoService.getTasks();
        };

        this.deleteTask = function ($event) {
            let task = $event.task;
        };
    }
})();
