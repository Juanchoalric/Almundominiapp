(function () {
    'use strict';

    angular
        .module('todoComponent')
        .component('todoForm', {
            bindings: {
                'addItem': '&'
            },
            controller: TodoFormController,
            templateUrl: 'components/todo-component/todo-container/todo-form/todo-form.html'
        });

    function TodoFormController() {
        this.submitItem = function () {
            if (!this.item) {
                return false;
            }

            this.addItem({
                $event: {
                    item: this.item
                }
            });

            this.item = '';
        };
    }
})();
