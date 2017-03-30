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
            // self.tasks = [
            //     {
            //       id: 1,
            //       task: "Terminar el proyecto"
            //     },
            //     {
            //       id: 2,
            //       task: "Empezar el proyecto"
            //     }
            // ];
        };

        this.addTask = function ($event) {
            //let task = $event.task;
            self.tasks = todoService.addTask($event.task);


            // self.tasks.push({
            //     id: self.tasks.length + 1,
            //     task: task
            // });
        };

        this.deleteTask = function ($event) {
          let task = $event. task;

          self.tasks = todoService.deleteTask();
          // self.tasks = self.tasks.filter(function(){
          //   return task.id !== item.id;
          // });
        };
    }
})();
