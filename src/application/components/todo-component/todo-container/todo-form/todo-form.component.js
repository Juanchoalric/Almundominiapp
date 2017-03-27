(function () {
    'use strict';

    angular
        .module('todoComponent')
        .component('todoForm', {
            bindings: {
                'newTask': '&'
            },
            controller: TodoFormController,
            templateUrl: 'components/todo-component/todo-container/todo-form/todo-form.html'
        });

    function TodoFormController() {
        let self = this;

        this.submitTask = function () {
            this.newTask({
                $event: {
                    task: this.task
                }
            });

            this.task = '';
        };
    };
})();
