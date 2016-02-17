
angular.module("vocApp.Core")
.factory("dataService", ["$http", function ($http) {
    var baseUrl = 'http://localhost:52662/';

    //var baseUrl = 'http://192.168.10.88/VOC_API/';

    return {
        BaseUrl: baseUrl,
        GetTeams: getTeams,
        GetDesks: getDesks,
        GetSurveyTypes: getSurveyTypes,
        GetQuestions: getQuestions,
        GetCros: getCros,
        SearchByServeyLevel: searchByServeyLevel,
        SearchByQuestionLevel: searchByQuestionLevel
    }

    /// Function Implementation

    function getTeams(location) {
        return $http.get(baseUrl + 'api/Team/' + location)
            .then(onSuccess)
            .catch(function (xhr) {
                onError("get Teams")
            });

        function onSuccess(response) {
            return response.data;
        }
    }

    function getDesks(location) {
        return $http.get(baseUrl + 'api/Desk/' + location)
            .then(onSuccess)
            .catch(function () { onError("get Desks") });

        function onSuccess(response) {
            return response.data;
        }
    }

    function getSurveyTypes() {
        return $http.get(baseUrl + 'api/SurveyType')
                    .then(onSuccess)
                    .catch(function () { onError("Get Servey Types") });

        function onSuccess(response) {
            return response.data;
        }
    }

    function getQuestions(surveyType) {
        return $http.get(baseUrl + 'api/Question/Get/' + surveyType)
                    .then(onSuccess)
                    .catch(function () { onError("Get Questions") });

        function onSuccess(response) {
            return response.data;
        }
    }

    function getCros(cro) {
        return $http.get(baseUrl + 'api/Location')
            .then(onSuccess)
            .catch(function () { onError("get Cros") });

        function onSuccess(response) {
            return response.data;
        }
    }

    // search table by servey level based on the filters
    function searchByServeyLevel(filters) {
        return $http(
                {
                    method : "POST",
                    url: baseUrl + 'api/SurveyData/SurveyLevel',
                    data: filters
                }
            )
            .then(onSuccess)
            .catch(function () { onError("search the table") });

        function onSuccess(response) {
            return response.data;
        }
    }

    // search table by question level based on the filters
    function searchByQuestionLevel(filters) {
        return $http(
                {
                    method: "POST",
                    url: baseUrl + 'api/SurveyData/QuestionLevel',
                    data: filters
                }
            )
            .then(onSuccess)
            .catch(function () { onError("search the table") });

        function onSuccess(response) {
            return response.data;
        }
    }

    /// Global error handling function

    function onError(type) {
        console.error("Failed to fetch data - " + type);
    }

}]);
