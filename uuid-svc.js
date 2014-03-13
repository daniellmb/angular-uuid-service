/*
 * @license
 * angular-uuid-service v0.0.1
 * (c) 2014 Daniel Lamb http://daniellmb.com
 * License: MIT
 */
angular.module("uuid", []).factory("rfc4122", function () {
    return {
        v4: function () {
            // get currrent time
            var time = new Date().getTime();
            // create UUID by replacing the template string
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (match) {
                var remainder = (time + 16 * Math.random()) % 16 | 0;
                // update for next match
                time = Math.floor(time / 16);
                // check matched character
                return (match == "x" ? remainder : remainder & 7 | 8).toString(16);
            });
        }
    };
});
