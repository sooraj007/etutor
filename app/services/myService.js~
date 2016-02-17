app.factory("nameService", ["$http", function ($http) {
	
	var baseUrl = 'http://192.168.0.18/etutor/service/';
	return {
		
		    BaseUrl: baseUrl,
			GetNames: getNames
		
		
		}
		
		function getNames() {
        return $http.get(baseUrl)
            .then(onSuccess)
            .catch(function (xhr) {
                onError("get Names")
            });

        function onSuccess(response) {
            return response.data;
		
         }
        }
		
	
	
}]);
