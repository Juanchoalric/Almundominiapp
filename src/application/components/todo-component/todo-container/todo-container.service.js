(function (){
  'use strict';

  angular
    .module('todoComponent')
    .service('todoService', todoService);

  todoService.$inject = [];

  function todoService(){
    this.tasks = [
      {
        id:1,
        task:"Terminar el proyecto",
      },
      {
        id:2,
        task: "Empezar el proyecto",
      }
    ];

    this.getTasks = () => this.tasks;

    this.addTask = function addTask(task) {
      this.tasks.push({
        id: this.tasks.length + 1,
        task: task
      });
    }

    // ARREGLARLO
    function deleteTask(){
      this.tasks = this.tasks.filter(function(){
          return task.id !== item.id;
        });
    }
  }
})();
