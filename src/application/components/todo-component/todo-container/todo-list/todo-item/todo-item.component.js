(function () {
    'use strict';

    angular
        .module('todoComponent')
        .component('todoItem', {
            bindings: {
                item: '<',
                completeItem: '&',
                deleteItem: '&'
            },
            controller: TodoItemController,
            templateUrl: 'components/todo-component/todo-container/todo-list/todo-item/todo-item.html'
        });

    function TodoItemController() {
        this.onComplete = function () {
            this.completeItem({
                $event: {
                    item: this.item
                }
            });
        };

        this.onDelete = function () {
            this.deleteItem({
                $event: {
                    item: this.item
                }
            });
        }
    }
})();