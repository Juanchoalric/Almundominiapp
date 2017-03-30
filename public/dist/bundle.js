(function () {
    'use strict';

    angular
        .module('Application', [
            'Components'
        ]);
})();
(function () {
    'use strict';

    angular
        .module('Components', [
            'todoComponent'
        ]);
})();
(function () {
    'use strict';

    angular
        .module('todoComponent', []);
})();
(function () {
    'use strict';

    angular
        .module('todoComponent')
        .component('todoContainer', {
            bindings: {},
            controller: TodoContainerController,
            templateUrl: 'components/todo-component/todo-container/todo-container.html'
        });

    TodoContainerController.$inject = ['todoService'];

    function TodoContainerController(TodoService) {
        this.getItems = function () {
            return TodoService.getTasks();
        };

        this.addItem = function ($event) {
            let itemTask = $event.item;

            TodoService.addTask(itemTask);
        };

        this.completeItem = function ($event) {
            let itemId = $event.item.id;

            TodoService.completeTask(itemId);
        };

        this.deleteItem = function ($event) {
            let itemId = $event.item.id;

            TodoService.deleteTask(itemId);
        };
    }
})();

(function () {
    'use strict';

    angular
        .module('todoComponent')
        .service('todoService', TodoService);

    TodoService.$inject = [];

    function TodoService() {
        this.tasks = [
            {
                id: 1,
                task: "Terminar el proyecto",
                complete: true
            },
            {
                id: 2,
                task: "Empezar el proyecto",
                complete: false
            }
        ];

        this.getTasks = () => this.tasks;

        this.getTasksLength = () => this.tasks.length;

        this.addTask = (value) => {
            this.tasks.push({
                id: this.getTasksLength() + 1,
                task: value
            });
        };

        this.completeTask = (value) => {
            this.tasks.forEach(function (task) {
                if (task.id === value)
                    task.complete = true;
            });
        };

        this.deleteTask = (value) => {
            this.tasks = this.tasks.filter(function (task) {
                return value !== task.id;
            });
        };
    }
})();

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
(function () {
    'use strict';

    angular
        .module('todoComponent')
        .component('todoList', {
            bindings: {
                items: '<',
                completeItem: '&',
                deleteItem: '&'
            },
            templateUrl: 'components/todo-component/todo-container/todo-list/todo-list.html'
        });
})();