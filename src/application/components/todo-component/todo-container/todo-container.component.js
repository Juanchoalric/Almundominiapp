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

    // TaskController.$inject = ['TodoService'];
    // 
    // /* @ngInject */

    function TodoContainerController() {
        let self = this;

        this.$onInit = function () {

          self.tasks = TodoService.getTasks();
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
            let task = $event.task;
            self.tasks = TodoService.addTask();
            // self.tasks.push({
            //     id: self.tasks.length + 1,
            //     task: task
            // });
        };

        this.deleteTask = function ($event) {
          let task = $event. task;

          self.tasks = TodoService.deleteTask();
          // self.tasks = self.tasks.filter(function(){
          //   return task.id !== item.id;
          // });
        };
    }
})();
