/**
 * Created by xin12 on 2017/3/20.
 */
angular.module('myPhotoDirect',[])
    .directive('myPhotos',function () {
        return{
            restrict:'E',
            transclude:true,
            scope:{},
            controller:function ($scope) {
                var photos=$scope.photos=[];
                $scope.select=function (photo) {
                    angular.forEach(photos,function (photo) {
                        photo.selected=false;
                    });
                    photo.selected=true;
                };
                this.addPhoto=function (photo) {
                    photos.push(photo);
                };
            },
            templateUrl:'my_phtotos.html'
        };
    })
    .directive('myPhoto',function () {
        return{
            require:'^myPhotos',
            restrict:'E',
            transclude:true,
            scope:{title:'@'},
            link:function (scope,elem,attrs,fromMyPhotosCtrl) {
                fromMyPhotosCtrl.addPhoto(scope);
            },
            template:'<div ng-show="selected" ng-transclude></div>'
        };
    });