(function () {
    'use strict';

    angular
        .module('todoComponent')
        .component('todoContainer', {
            controller: TodoContainerController,
            templateUrl: 'templates/todo-component/todo-container/todo-container.html'
        });



    function TodoContainerController() {
        let self = this;

        this.$onInit = function () {
            self.tasks = [
                {
                  id: 1,
                  task: "terminar el proyecto"
                },
                {
                  id: 2,
                  task: "Empezar el proyecto"
                }
            ];
        };

        this.addTask = function ($event) {
            let task = $event.task;

            self.tasks.push({
                id: self.tasks.length + 1,
                task: task
            });
        };

        // this.deleteTask = function ($event) {
        //   let task = $event. task;
        //
        //   self.tasks = self.tasks.filter(function(){
        //     return task.id !== item.id;
        //   });
        // };
    }
})();
