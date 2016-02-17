app.config(function($stateProvider, $urlRouterProvider) {
//
// For any unmatched url, redirect to /state1
// $urlRouterProvider.otherwise("/state1");
//
// Now set up the states

var url = "http://192.168.0.18";
$stateProvider

.state('etutor', {

url: "/",
templateUrl: "views/front.html"

})

.state('course', {
url: "/course/:id",
templateUrl: "views/cview.html",

controller: function($scope,$http,$stateParams) {

return $http.get(url+"/etutor/service/lessons.php?id="+$stateParams.id)
.then(onSuccess)
.catch(function (xhr) {
onError("get Names")
console.log("error");
});

function onSuccess(response) {
function chunk(arr, size) {
var newArr = [];
for (var i=0; i<arr.length; i+=size) {
newArr.push(arr.slice(i, i+size));
}
return newArr;
}

$scope.ldata = chunk(response.data.lesson,4); 

}}
})

// Lesson

.state('chapter', {
url: "/chapter/:id",
templateUrl: "views/chap.html",

controller: function($scope,$http,$stateParams) {

return $http.get(url+"/etutor/service/chapter.php?id="+$stateParams.id)
.then(onSuccess)
.catch(function (xhr) {
onError("get Names")
console.log("error");
});

function onSuccess(response) {
function chunk(arr, size) {
var newArr = [];
for (var i=0; i<arr.length; i+=size) {
newArr.push(arr.slice(i, i+size));
}
return newArr;
}

//$scope.udata = chunk(response.data.units,4); 
$scope.udata = response.data.units

var player = videojs('video');

//console.log($scope.udata[i].cname);
var l = [];
sn  = 1;
for(i=0;i<=$scope.udata.length-1;i++)
{

var x  = {
	name:$scope.udata[i].cname + (sn++),
  sources: [{
    src: $scope.udata[i].vpath,
    type: 'video/mp4'
  }],
   thumbnail: [
        {
          srcset: $scope.udata[i].ipath,
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: $scope.udata[i].ipath
        }
      ],
  poster: $scope.udata[i].ipath
};

l.push(x)

}



player.playlist(l);


player.playlistUi();

var np = ('.vjs-playlist-item');

var sp =0;
$('.vjs-playlist-item').each(function(){

	$(this).find(':nth-child(2)').html($scope.udata[sp++].cname +"<span style='float:right;padding-right:30px'>"+sp+"</span>");

});	



}
}
})

})

.run(["$location", function ($location) {
        $location.url('/');
    }]);

