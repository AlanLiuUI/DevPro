/**
 * Created by xin12 on 2017/3/17.
 */
angular.module('myEvent',[])
    .controller('keyEvent',['$scope',function ($scope) {
        $scope.storedString='';
        $scope.keyInfo={};
        $scope.keyStrokes=[];
        $scope.keyState='Not Pressed';
        $scope.keyPressed=function (event) {
            if (event.keyCode==13){
                var element=angular.element(event.target);
                element.val('');
                $scope.keyInfo.keyCode=event.keyCode;
                $scope.keyState='Enter Pressed';
            }else {
                $scope.keyInfo.keyCode=event.keyCode;
                $scope.keyStrokes.push(event.keyCode);
                $scope.keyState='Not Pressed';
            }
        };
    }]);