(function (){
  'use strict';

  angular
  .module('todoComponent')
  .service('todoService', TodoService);



  function TodoService(){

    this.getTasks = getTasks;

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

    function addTask(){
      this.tasks.push({
        id: this.tasks.lenght + 1,
        task: task
      });
    };

    function deleteTask(){
      this.tasks = this.tasks.filter(function(){
          return task.id !== item.id;
        });
    }
  }
})();
