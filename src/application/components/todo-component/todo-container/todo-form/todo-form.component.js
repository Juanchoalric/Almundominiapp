(function () {
    angular
        .module('todoComponent')
        .component('todoForm', {
            controller: TodoFormController,
            templateUrl: 'todo-component/todo-container/todo-form.html',
            bindings: {
                'onAdd': '&'
            }
        });

    function TodoFormController() {
        this.createItem = function (label) {
            if (!this.label) {
                return;
            }

            this.onAdd({
                $event: {
                    label: this.label
                }
            });

            this.label = '';
        };
    };
})();