(function () {
    'use strict';

    angular
        .module('todoComponent')
        .service('todoService', TodoService);

    TodoService.$inject = ['store'];

    function TodoService(store) {
        this.setTasks = (value) => {
            this.tasks = value;
        };

        this.getTasks = () => this.tasks;

        this.getTasksLength = () => this.tasks.length;

        this.addTask = (value) => {
            this.tasks.push({
                id: this.getTasksLength() + 1,
                task: value,
                complete: false
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

        this.saveTasks = () => {
            store.set('tasks', JSON.stringify(this.tasks));
        };

        this.restoreTasks = () => {
            let tasks = store.get('tasks');

            if (tasks !== undefined && tasks !== null) {
                return JSON.parse(tasks);
            }
        };
    }
})();
