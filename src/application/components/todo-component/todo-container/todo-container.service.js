(function (){
  'use strict';

  angular
  .module('todoComponent')
  .service('todoService', todoService);

  todoService.$inject = [];

  function todoService(){

    this.getTasks = getTasks;

    this.addTask = function addTask(task) {
      this.getTasks().push({
        id: this.getTasks().lenght + 1,
        task: task
      });
    }

    this.deleteTask = deleteTask;

    function getTasks(){
      return [
      {
        id:1,
        task:"Terminar el proyecto",
        finished: false
      },
      {
        id:2,
        task: "Empezar el proyecto",
        finished: true
      }];
    }

    function deleteTask(){
      this.tasks = this.tasks.filter(function(){
          return task.id !== item.id;
        });
    }
  }
})();
