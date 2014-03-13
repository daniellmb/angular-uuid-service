angular-uuid-service
====================

214 byte standalone AngularJS UUID/GUID generator service that is RFC4122 version 4 compliant

## Use
create something with `uuid` as a dependency, call the `rfc4122.v4()` service.

```javascript
angular.module('demo', ['uuid'])
.directive('uuid', ['rfc4122', function (rfc4122) {
  return function (scope, elm) {
    elm.text(rfc4122.v4());
  };
}]);
```
sample directive shows the new UUID/GUID

```html
<div ng-app="demo" uuid></div>
```
