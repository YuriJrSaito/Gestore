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
var Cliente = require('../models/Cliente');
var TelefoneController = require('./TelefoneController');
var EnderecoController = require('./EnderecoController');
var Telefone = require('../models/Telefone');
var Venda = require('../models/Venda');
var ContaReceber = require('../models/ContaReceber');
var ParcelaControllerCR = require("./ParcelaContaReceberController");
var ClienteController = /*#__PURE__*/function () {
  function ClienteController() {
    _classCallCheck(this, ClienteController);
  }
  _createClass(ClienteController, [{
    key: "gravar",
    value: function () {
      var _gravar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, response) {
        var _request$body, nome, email, idade, sexo, cpf, telefones, cep, cidade, rua, bairro, numero, complemento, cliente, msg, retorno, idEndereco, idTelefone;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _request$body = request.body, nome = _request$body.nome, email = _request$body.email, idade = _request$body.idade, sexo = _request$body.sexo, cpf = _request$body.cpf, telefones = _request$body.telefones, cep = _request$body.cep, cidade = _request$body.cidade, rua = _request$body.rua, bairro = _request$body.bairro, numero = _request$body.numero, complemento = _request$body.complemento;
                cliente = new Cliente();
                msg = "";
                retorno = false;
                if (!(cpf != "")) {
                  _context.next = 8;
                  break;
                }
                _context.next = 7;
                return cliente.buscarPorCpf(bd, cpf);
              case 7:
                retorno = _context.sent;
              case 8:
                if (!(retorno == false)) {
                  _context.next = 21;
                  break;
                }
                _context.next = 11;
                return EnderecoController.gravarEndereco(bd, cep, cidade, rua, bairro, numero, complemento);
              case 11:
                idEndereco = _context.sent;
                _context.next = 14;
                return TelefoneController.gravarTelefones(bd, telefones);
              case 14:
                idTelefone = _context.sent;
                cliente = new Cliente(0, nome, email, idade, idEndereco, cpf, idTelefone, sexo);
                _context.next = 18;
                return cliente.gravar(bd);
              case 18:
                msg = "Cliente Cadastrado com Sucesso";
                _context.next = 22;
                break;
              case 21:
                msg = "Este CPF já esta cadastrado";
              case 22:
                return _context.abrupt("return", response.send(msg));
              case 23:
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
    key: "listarTodosClientes",
    value: function () {
      var _listarTodosClientes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, response) {
        var cliente, resp;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cliente = new Cliente();
                _context2.next = 3;
                return cliente.listarTodosClientes(bd);
              case 3:
                resp = _context2.sent;
                if (!(resp != undefined)) {
                  _context2.next = 8;
                  break;
                }
                return _context2.abrupt("return", response.send(resp));
              case 8:
                return _context2.abrupt("return", response.send("Não há clientes cadastrados"));
              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function listarTodosClientes(_x3, _x4) {
        return _listarTodosClientes.apply(this, arguments);
      }
      return listarTodosClientes;
    }()
  }, {
    key: "filtrarClientes",
    value: function () {
      var _filtrarClientes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request, response) {
        var filtro, cliente, resp;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filtro = request.params.filtro;
                cliente = new Cliente();
                _context3.next = 4;
                return cliente.filtrarClientes(bd, filtro);
              case 4:
                resp = _context3.sent;
                if (!(resp != undefined)) {
                  _context3.next = 9;
                  break;
                }
                return _context3.abrupt("return", response.send(resp));
              case 9:
                return _context3.abrupt("return", response.send("Não há clientes cadastrados"));
              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function filtrarClientes(_x5, _x6) {
        return _filtrarClientes.apply(this, arguments);
      }
      return filtrarClientes;
    }()
  }, {
    key: "alterarCliente",
    value: function () {
      var _alterarCliente = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request, response) {
        var _request$body2, idCliente, nome, email, idade, sexo, cpf, idTelefone, telefones, idEndereco, cep, cidade, rua, bairro, numero, complemento, msg, respTel, respEnd, cliente, respCli;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _request$body2 = request.body, idCliente = _request$body2.idCliente, nome = _request$body2.nome, email = _request$body2.email, idade = _request$body2.idade, sexo = _request$body2.sexo, cpf = _request$body2.cpf, idTelefone = _request$body2.idTelefone, telefones = _request$body2.telefones, idEndereco = _request$body2.idEndereco, cep = _request$body2.cep, cidade = _request$body2.cidade, rua = _request$body2.rua, bairro = _request$body2.bairro, numero = _request$body2.numero, complemento = _request$body2.complemento;
                msg = "";
                _context4.next = 4;
                return TelefoneController.alterarTelefone(bd, idTelefone, telefones);
              case 4:
                respTel = _context4.sent;
                _context4.next = 7;
                return EnderecoController.alterarEndereco(bd, idEndereco, rua, numero, bairro, cidade, cep, complemento);
              case 7:
                respEnd = _context4.sent;
                cliente = new Cliente(idCliente, nome, email, idade, idEndereco, cpf, idTelefone, sexo);
                _context4.next = 11;
                return cliente.alterar(bd);
              case 11:
                respCli = _context4.sent;
                if (respCli > 0 && respEnd > 0 && respTel > 0) msg += "Alterado com sucesso !!";else msg += "Algo deu errado !!";
                return _context4.abrupt("return", response.send(msg));
              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function alterarCliente(_x7, _x8) {
        return _alterarCliente.apply(this, arguments);
      }
      return alterarCliente;
    }()
  }, {
    key: "deletar",
    value: function () {
      var _deletar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, response) {
        var idCliente, msg, cliente, respCli;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                idCliente = request.params.idCliente;
                msg = "";
                cliente = new Cliente();
                _context5.next = 5;
                return cliente.deletar(bd, idCliente);
              case 5:
                respCli = _context5.sent;
                if (respCli > 0) msg += "Deletado com sucesso !!";else msg += "Algo deu errado !!";
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
    key: "buscarClienteNome",
    value: function () {
      var _buscarClienteNome = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(bd, idCliente) {
        var cliente, resp;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                cliente = new Cliente();
                _context6.next = 3;
                return cliente.buscarClienteNome(bd, idCliente);
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
      function buscarClienteNome(_x11, _x12) {
        return _buscarClienteNome.apply(this, arguments);
      }
      return buscarClienteNome;
    }()
  }, {
    key: "buscarCPF",
    value: function () {
      var _buscarCPF = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(bd, idCliente) {
        var cliente, resp;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                cliente = new Cliente();
                _context7.next = 3;
                return cliente.buscarCPF(bd, idCliente);
              case 3:
                resp = _context7.sent;
                return _context7.abrupt("return", resp);
              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));
      function buscarCPF(_x13, _x14) {
        return _buscarCPF.apply(this, arguments);
      }
      return buscarCPF;
    }()
  }, {
    key: "relTodosClientes",
    value: function () {
      var _relTodosClientes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(request, response) {
        var cliente, resp, lista, x, telefoneClass, telefones, telefone, venda, vendas, qtdeVendas, totalGasto, naoPago, _iterator, _step, _venda, contaReceber, conta, parcelas, _iterator2, _step2, parcela, vetaux;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                cliente = new Cliente();
                _context8.next = 3;
                return cliente.listarTodosClientes(bd);
              case 3:
                resp = _context8.sent;
                lista = [];
                x = 0;
              case 6:
                if (!(x < resp.length)) {
                  _context8.next = 49;
                  break;
                }
                telefoneClass = new Telefone();
                _context8.next = 10;
                return telefoneClass.buscarTelefone(bd, resp[x].id_telefone);
              case 10:
                telefones = _context8.sent;
                telefone = void 0;
                if (telefones[0].telefone1 == undefined) telefone = "";else telefone = telefones[0].telefone1;
                venda = new Venda();
                _context8.next = 16;
                return venda.buscarQtdeVendas(bd, resp[x].id);
              case 16:
                vendas = _context8.sent;
                qtdeVendas = vendas.length;
                totalGasto = 0;
                naoPago = 0;
                _iterator = _createForOfIteratorHelper(vendas);
                _context8.prev = 21;
                _iterator.s();
              case 23:
                if ((_step = _iterator.n()).done) {
                  _context8.next = 36;
                  break;
                }
                _venda = _step.value;
                contaReceber = new ContaReceber();
                _context8.next = 28;
                return contaReceber.buscarConta(bd, _venda.id_contaReceber);
              case 28:
                conta = _context8.sent;
                _context8.next = 31;
                return ParcelaControllerCR.buscarParcelas(bd, conta[0].id);
              case 31:
                parcelas = _context8.sent;
                _iterator2 = _createForOfIteratorHelper(parcelas);
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    parcela = _step2.value;
                    if (parcela.situacao == "Não pago") {
                      naoPago = parseFloat(naoPago) + parseFloat(parcela.valor);
                    } else {
                      totalGasto = parseFloat(totalGasto) + parseFloat(parcela.valorTotal);
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              case 34:
                _context8.next = 23;
                break;
              case 36:
                _context8.next = 41;
                break;
              case 38:
                _context8.prev = 38;
                _context8.t0 = _context8["catch"](21);
                _iterator.e(_context8.t0);
              case 41:
                _context8.prev = 41;
                _iterator.f();
                return _context8.finish(41);
              case 44:
                vetaux = [resp[x].id.toString(), resp[x].nome, resp[x].cpf, telefone.toString(), qtdeVendas.toString(), parseFloat(totalGasto).toFixed(2), parseFloat(naoPago).toFixed(2)];
                lista.push(vetaux);
              case 46:
                x++;
                _context8.next = 6;
                break;
              case 49:
                return _context8.abrupt("return", response.send(lista));
              case 50:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[21, 38, 41, 44]]);
      }));
      function relTodosClientes(_x15, _x16) {
        return _relTodosClientes.apply(this, arguments);
      }
      return relTodosClientes;
    }()
  }]);
  return ClienteController;
}();
module.exports = new ClienteController();