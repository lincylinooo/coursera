/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global angular */

(function (){
    'use strict';
    
    angular.module('LunchCheck',[])
    
            .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject = ['$scope'] ;
    function LunchCheckController($scope){
        $scope.output;
      $scope.itemList = "";
      $scope.colr;
      
      
      $scope.checkItem = function(){
      if($scope.itemList.length > 0)
      {
          var array = $scope.itemList.split(",");
          $scope.output = countItem(array);
          $scope.colr = "green";
      }
      else
      {
         $scope.output = "Please Enter the data first"; 
         $scope.colr = "red";
      }
      
      };  
    }
    function countItem(arr){
        var count = arr.length;
        for(var i=0;i<arr.length;i++)
            {
                if(arr[i]===" " || arr[i]==="")
                    count--;
            }
        if(count < 4)
            return "Enjoy";
        else
            return "Too much";
    }
    
})();
