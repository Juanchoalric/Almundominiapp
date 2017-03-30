(function () {
    'use strict';

    angular
        .module('todoComponent')
        .service('todoService', TodoService);

    TodoService.$inject = [];

    function TodoService() {
        this.tasks = [
            {
                id: 1,
                task: "Terminar el proyecto",
                complete: true
            },
            {
                id: 2,
                task: "Empezar el proyecto",
                complete: false
            }
        ];

        this.getTasks = () => this.tasks;

        this.getTasksLength = () => this.tasks.length;

        this.addTask = (value) => {
            this.tasks.push({
                id: this.getTasksLength() + 1,
                task: value
            });
        };

        this.completeTask = (value) => {
            this.tasks.forEach(function (task) {
                if (task.id === value)
                    task.complete = true;
            });
        };

        this.deleteTask = (value) => {
            this.tasks = this.tasks.filter(function (task) {
                return value !== task.id;
            });
        };
    }
})();
