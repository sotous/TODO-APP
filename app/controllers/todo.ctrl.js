(function(){
  //no utilice into the function $scope
  angular.module("todo_application").controller("ToDoController", function($scope){
    //change $scope for variable "$scope"
    //$scope==$scope
    $scope.activities= [];
    $scope.newActv = {};

    $scope.addActv = () => {
      console.log();
      $scope.newActv.status=false;
      $scope.activities.push($scope.newActv);
      $scope.newActv={};
    };
    $scope.removeActv = activity => {
      // Calling the promise
      var index = $scope.activities.indexOf(activity);
      if (index > -1) {
        $scope.activities.splice(index,1);
      }
    };

    $scope.clean = () => {
      $scope.activities=[];
    };
    //call the signout into the service
  });
}());
