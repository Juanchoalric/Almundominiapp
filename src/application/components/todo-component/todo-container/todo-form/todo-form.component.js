(function () {
    'use strict';

    angular
        .module('todoComponent')
        .component('todoForm', {
            bindings: {
                'newTask': '&'
            },
            controller: TodoFormController,
            templateUrl: 'templates/todo-component/todo-container/todo-form/todo-form.html'
        });

    function TodoFormController() {
        this.createItem = function () {
            this.newTask({
                $event: {
                    task: this.task
                }
            });
        };
    };
})();