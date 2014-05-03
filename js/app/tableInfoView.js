var app = angular.module('tableInfoView', []);
app.directive('tableInfoView', [

    function() {
        return {
            templateUrl: 'infoTable.html',
            link: function($scope, $elem, $attr) {
                $scope.$on('data:sunBusrtView', function(ctx, val) {
                    if (!val) return;
                    // tidy data for infoTable
                    function getRecusiveSize(children) {
                        var sum = 0;
                        _.each(children, function(item) {
                            if (item.children) {
                                return sum += getRecusiveSize(item.children);
                            } else {
                                return sum += item.size;
                            }
                        });
                        return sum;
                    }
                    _.each(val.children, function(item) {
                        if (item && item.children) {
                            item.size = getRecusiveSize(item.children);
                        }
                    });
                    $scope.data = val;
                    $scope.data.itemList = _.sortBy(val.children, 'size').reverse();
                });
            }
        }
    }
]);