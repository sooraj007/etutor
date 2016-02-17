  app.controller('hcontroller', function($scope,nameService) {
  
  
 nameService.GetNames().then(function(data){

function chunk(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

$scope.cnames = chunk(data.course,4); 

	 });
  
 

	  
	  
  });