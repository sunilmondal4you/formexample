/**
 * Created by abc on 16/05/2016.
 */
var app=angular.module("myapp",[]);

app.controller("myctrl", function ($scope) {
    $scope.userbook=[];
    $scope.id=1;
    $scope.user={'id':$scope.id};

    $scope.education=['B.Tech', 'B.Com', 'B.Sc', 'BA'];



    $scope.savme=function(){
        $scope.userbook.push($scope.user);
         $scope.id = $scope.id +1 ;
        $scope.user={'id':$scope.id};
        debugger;
    };

    $scope.updatme=function($index){
        $scope.editg=false;
        $scope.user={'id':$scope.id};

    };

    $scope.edtme=function (val) {
        $scope.editg=true;
        $scope.user=$scope.userbook[val];
    };

    $scope.deleteme=function ($index) {
        $scope.userbook.splice($index,1);
    };



});