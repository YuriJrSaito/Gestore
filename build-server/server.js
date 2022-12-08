"use strict";

var _appModulePath = _interopRequireDefault(require("app-module-path"));
var _http = _interopRequireDefault(require("http"));
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _routes = _interopRequireDefault(require("./routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//const routes = require('./routes');

_appModulePath["default"].addPath("".concat(__dirname));
var Api = (0, _express["default"])();
var HTTP = _http["default"].Server(Api);
Api.use((0, _cors["default"])());
Api.use(_express["default"].json());
Api.use(_routes["default"]);
Api.get('/test', function (req, res) {
  return res.status(200).send('success!');
});
Api.use(_express["default"]["static"](__dirname + '/public'));
HTTP.listen(3344, function () {
  console.log('listening on *:3344');
});