(function () {
    'use strict';

    angular
        .module('todoComponent')
        .component('todoContainer', {
            controller: TodoContainerController,
            templateUrl: './todo-component/todo-container/todo-container.html'
        });

    function TodoContainerController() {
        let self = this;

        this.$onInit = function () {
            self.items = [
                {
                    id: 0,
                    label: 'PUTO',
                    complete: false
                }
            ];
        };

        this.addItem = function ($event) {
            let label = $event.label;

            _self.todos.push({label, id: _self.todos.length + 1});

            self.items.push({
                id: self.items.length + 1,
                label
            });
        };
    }
})();
