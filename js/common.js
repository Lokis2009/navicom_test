var app = angular.module('todoApp',[]);

app.controller('mainCtrl', function($scope){
	
	$scope.todos = []
	
	$scope.addTodo = function(){
		$scope.todos.push({text: $scope.newText, done: false});
		$scope.newText = ''
		//console.log(todos)
	} 
	
});

/*app.factory('todos', function(){
	
});*/