var app = angular.module('todoApp', []);

const key = 'navicom';

app.controller('mainCtrl', function ($scope) {

	$scope.saved = localStorage.getItem(key);
	$scope.todos = (localStorage.getItem(key) !== null) ? JSON.parse($scope.saved) : [{
		text: 'new Task',
		done: false
	}, {
		text: 'another Task',
		done: false
	}];
	localStorage.setItem(key, JSON.stringify($scope.todos));

	$scope.addTodo = function () {
		$scope.todos.push({
			text: $scope.todoText,
			done: false
		});
		$scope.todoText = ''; //clear the input 
		localStorage.setItem(key, JSON.stringify($scope.todos));
	};

	$scope.remaining = function () {
		var count = 0;
		angular.forEach($scope.todos, function (todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	};

	$scope.archive = function () {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function (todo) {
			if (!todo.done)
				$scope.todos.push(todo);
		});
		localStorage.setItem(key, JSON.stringify($scope.todos));
	};

	$scope.done = function () {


		for (var i = 0; i < $scope.todos.length; i++) {
			if ($scope.todos[i].text == this.todo.text) {
				$scope.todos[i].done = this.todo.done
			}
		}

		localStorage.setItem(key, JSON.stringify($scope.todos));
	};
});
