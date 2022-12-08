"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var axios = require('axios');
var bd = require('../models/Database');
var Venda = require('../models/Venda');
var UsuarioController = require('./UsuarioController');
var ClienteController = require("./ClienteController");
var ContaReceberController = require('./ContaReceberController');
var ParcelaControllerCR = require("./ParcelaContaReceberController");
var ContaReceber = require('../models/ContaReceber');
var moment = require('moment');
var VendaController = /*#__PURE__*/function () {
  function VendaController() {
    _classCallCheck(this, VendaController);
  }
  _createClass(VendaController, [{
    key: "gravar",
    value: function () {
      var _gravar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, response) {
        var _request$body, dataVenda, idContaReceber, idAcesso, idCliente, msg, idUsuario, venda, resp;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _request$body = request.body, dataVenda = _request$body.dataVenda, idContaReceber = _request$body.idContaReceber, idAcesso = _request$body.idAcesso, idCliente = _request$body.idCliente;
                msg = "";
                _context.next = 4;
                return UsuarioController.procurarUsuarioAcesso(bd, idAcesso);
              case 4:
                idUsuario = _context.sent;
                venda = new Venda(0, dataVenda, idContaReceber, idUsuario, idCliente);
                _context.next = 8;
                return venda.gravar(bd);
              case 8:
                resp = _context.sent;
                if (resp > 0) msg += "Venda cadastrada com sucesso";else msg += "Algo deu errado";
                return _context.abrupt("return", response.send([resp]));
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function gravar(_x, _x2) {
        return _gravar.apply(this, arguments);
      }
      return gravar;
    }()
  }, {
    key: "listarTodasVendas",
    value: function () {
      var _listarTodasVendas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, response) {
        var venda, resp, x, nomeCliente, nomeUsuario, v;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                venda = new Venda();
                _context2.next = 3;
                return venda.listarTodasVendas(bd);
              case 3:
                resp = _context2.sent;
                x = 0;
              case 5:
                if (!(x < resp.length)) {
                  _context2.next = 17;
                  break;
                }
                _context2.next = 8;
                return ClienteController.buscarClienteNome(bd, resp[x].id_cliente);
              case 8:
                nomeCliente = _context2.sent;
                _context2.next = 11;
                return UsuarioController.buscarUsuarioNome(bd, resp[x].id_usuario);
              case 11:
                nomeUsuario = _context2.sent;
                v = {
                  id: resp[x].id,
                  dataVenda: resp[x].dataVenda,
                  idContaReceber: resp[x].id_contaReceber,
                  nomeUsuario: nomeUsuario,
                  idUsuario: resp[x].id_usuario,
                  nomeCliente: nomeCliente,
                  idCliente: resp[x].id_cliente
                };
                resp[x] = v;
              case 14:
                x++;
                _context2.next = 5;
                break;
              case 17:
                return _context2.abrupt("return", response.send(resp));
              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function listarTodasVendas(_x3, _x4) {
        return _listarTodasVendas.apply(this, arguments);
      }
      return listarTodasVendas;
    }()
  }, {
    key: "filtrarVendas",
    value: function () {
      var _filtrarVendas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request, response) {
        var filtro, venda, resp;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filtro = request.params.filtro;
                venda = new Venda();
                _context3.next = 4;
                return venda.filtrarVendas(bd, filtro);
              case 4:
                resp = _context3.sent;
                if (!(resp != undefined)) {
                  _context3.next = 9;
                  break;
                }
                return _context3.abrupt("return", response.send(resp));
              case 9:
                return _context3.abrupt("return", response.send("Não há Vendas cadastradas"));
              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function filtrarVendas(_x5, _x6) {
        return _filtrarVendas.apply(this, arguments);
      }
      return filtrarVendas;
    }()
  }, {
    key: "alterar",
    value: function () {
      var _alterar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request, response) {
        var msg, _request$body2, idVenda, dataVenda, idContaReceber, idUsuario, idCliente, venda, resp;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                msg = "";
                _request$body2 = request.body, idVenda = _request$body2.idVenda, dataVenda = _request$body2.dataVenda, idContaReceber = _request$body2.idContaReceber, idUsuario = _request$body2.idUsuario, idCliente = _request$body2.idCliente;
                venda = new Venda(idVenda, dataVenda, idContaReceber, idUsuario, idCliente);
                _context4.next = 5;
                return venda.alterar(bd);
              case 5:
                resp = _context4.sent;
                if (resp > 0) msg += "Alterado com sucesso !!";else msg += "Algo deu errado !!";
                return _context4.abrupt("return", response.send(msg));
              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function alterar(_x7, _x8) {
        return _alterar.apply(this, arguments);
      }
      return alterar;
    }()
  }, {
    key: "deletar",
    value: function () {
      var _deletar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, response) {
        var idVenda, msg, venda, resp;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                idVenda = request.params.idVenda;
                msg = "";
                venda = new Venda();
                _context5.next = 5;
                return venda.deletar(bd, idVenda);
              case 5:
                resp = _context5.sent;
                if (resp > 0) msg += "Deletado com sucesso !!";else msg += "Algo deu errado !!";
                return _context5.abrupt("return", response.send(msg));
              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
      function deletar(_x9, _x10) {
        return _deletar.apply(this, arguments);
      }
      return deletar;
    }()
  }, {
    key: "buscarClienteId",
    value: function () {
      var _buscarClienteId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(bd, idConta) {
        var venda, resp;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                venda = new Venda();
                _context6.next = 3;
                return venda.buscarClienteId(bd, idConta);
              case 3:
                resp = _context6.sent;
                return _context6.abrupt("return", resp);
              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));
      function buscarClienteId(_x11, _x12) {
        return _buscarClienteId.apply(this, arguments);
      }
      return buscarClienteId;
    }()
  }, {
    key: "buscarConta",
    value: function () {
      var _buscarConta = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(request, response) {
        var idConta, venda, resp;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                idConta = request.params.idConta;
                venda = new Venda();
                _context7.next = 4;
                return venda.buscarConta(bd, idConta);
              case 4:
                resp = _context7.sent;
                return _context7.abrupt("return", response.send([resp]));
              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));
      function buscarConta(_x13, _x14) {
        return _buscarConta.apply(this, arguments);
      }
      return buscarConta;
    }()
  }, {
    key: "buscarUsuario",
    value: function () {
      var _buscarUsuario = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(request, response) {
        var idUsuario, venda, resp;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                idUsuario = request.params.idUsuario;
                venda = new Venda();
                _context8.next = 4;
                return venda.buscarUsuario(bd, idUsuario);
              case 4:
                resp = _context8.sent;
                return _context8.abrupt("return", response.send(resp));
              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));
      function buscarUsuario(_x15, _x16) {
        return _buscarUsuario.apply(this, arguments);
      }
      return buscarUsuario;
    }()
  }, {
    key: "buscarCliente",
    value: function () {
      var _buscarCliente = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(request, response) {
        var idCliente, venda, resp;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                idCliente = request.params.idCliente;
                venda = new Venda();
                _context9.next = 4;
                return venda.buscarCliente(bd, idCliente);
              case 4:
                resp = _context9.sent;
                return _context9.abrupt("return", response.send(resp));
              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));
      function buscarCliente(_x17, _x18) {
        return _buscarCliente.apply(this, arguments);
      }
      return buscarCliente;
    }()
  }, {
    key: "relTodasVendas",
    value: function () {
      var _relTodasVendas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(request, response) {
        var venda, resp, lista, x, nomeCliente, nomeUsuario, contaReceber, conta, parcelas, naoPago, totalNaoPago, _iterator, _step, parcela, vetaux;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                venda = new Venda();
                _context10.next = 3;
                return venda.listarTodasVendas(bd);
              case 3:
                resp = _context10.sent;
                lista = [];
                x = 0;
              case 6:
                if (!(x < resp.length)) {
                  _context10.next = 29;
                  break;
                }
                _context10.next = 9;
                return ClienteController.buscarClienteNome(bd, resp[x].id_cliente);
              case 9:
                nomeCliente = _context10.sent;
                _context10.next = 12;
                return UsuarioController.buscarUsuarioNome(bd, resp[x].id_usuario);
              case 12:
                nomeUsuario = _context10.sent;
                contaReceber = new ContaReceber();
                _context10.next = 16;
                return contaReceber.buscarConta(bd, resp[x].id_contaReceber);
              case 16:
                conta = _context10.sent;
                _context10.next = 19;
                return ParcelaControllerCR.buscarParcelas(bd, conta[0].id);
              case 19:
                parcelas = _context10.sent;
                naoPago = 0;
                totalNaoPago = 0;
                _iterator = _createForOfIteratorHelper(parcelas);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    parcela = _step.value;
                    if (parcela.situacao == "Não pago") {
                      totalNaoPago = totalNaoPago + parseFloat(parcela.valor);
                      naoPago++;
                    }
                  }

                  /*var v = {
                      idVenda: resp[x].id,
                      nomeUsuario: nomeUsuario,
                      nomeCliente: nomeCliente,
                      dataVenda: moment.utc(resp[x].dataVenda).format('DD-MM-YYYY'),
                      qtdeParcelas: conta[0].qtdeParcelas,
                      qtdeParcelasNpago: naoPago,
                      valorTotal: parseFloat(conta[0].valorTotal).toFixed(2),
                      valorTotalNpago: parseFloat(totalNaoPago).toFixed(2),
                  }*/
                  //resp[x] = v;
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                vetaux = [resp[x].id, nomeUsuario, nomeCliente, moment.utc(resp[x].dataVenda).format('DD-MM-YYYY'), conta[0].qtdeParcelas, naoPago, parseFloat(conta[0].valorTotal).toFixed(2), parseFloat(totalNaoPago).toFixed(2)];
                lista.push(vetaux);
              case 26:
                x++;
                _context10.next = 6;
                break;
              case 29:
                return _context10.abrupt("return", response.send(lista));
              case 30:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));
      function relTodasVendas(_x19, _x20) {
        return _relTodasVendas.apply(this, arguments);
      }
      return relTodasVendas;
    }()
  }, {
    key: "buscarQtdeVendas",
    value: function () {
      var _buscarQtdeVendas = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(bd, idVenda) {
        var venda, resp;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                venda = new Venda();
                _context11.next = 3;
                return venda.buscarQtdeVendas(bd, idVenda);
              case 3:
                resp = _context11.sent;
                return _context11.abrupt("return", resp);
              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));
      function buscarQtdeVendas(_x21, _x22) {
        return _buscarQtdeVendas.apply(this, arguments);
      }
      return buscarQtdeVendas;
    }()
  }]);
  return VendaController;
}();
module.exports = new VendaController();