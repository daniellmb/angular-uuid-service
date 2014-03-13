/*
 * @license
 * angular-uuid-service v0.0.1
 * (c) 2014 Daniel Lamb http://daniellmb.com
 * License: MIT
 */
angular.module("uuid", []).factory("rfc4122", function () {
    return {
        v4: function () {
            var t = new Date().getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (m) {
                var r = (t + 16 * Math.random()) % 16 | 0;
                t = Math.floor(t / 16);
                return ("x" == m ? r : r & 7 | 8).toString(16);
            });
        }
    };
});
