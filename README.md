angular-uuid-service
====================

214 byte standalone AngularJS UUID/GUID generator service that is RFC4122 version 4 compliant.

## Install

`bower install angular-uuid-service`

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
sample directive shows the new UUID/GUID ([live example](http://jsfiddle.net/daniellmb/Ppdq5/))

```html
<div ng-app="demo">
    <div uuid></div>
    <div uuid></div>
    <div uuid></div>
    <div uuid></div>
    <div uuid></div>
    <div uuid></div>
    <div uuid></div>
    <div uuid></div>
</div>
```

## License

(The MIT License)

Copyright (c) 2014 Daniel Lamb <dlamb.open.source@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
