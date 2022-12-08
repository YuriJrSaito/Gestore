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
var Venda = require('../models/VendaCondicional');
var UsuarioController = require('./UsuarioController');
var ClienteController = require("./ClienteController");
var VendaCondicional = require('../models/VendaCondicional');
var ListaCond = require('../models/ListaCondicional');
var Produto = require('../models/Produto');
var Categoria = require('../models/Categoria');
var Cliente = require('../models/Cliente');
var moment = require('moment');
var VendaCondController = /*#__PURE__*/function () {
  function VendaCondController() {
    _classCallCheck(this, VendaCondController);
  }
  _createClass(VendaCondController, [{
    key: "gravar",
    value: function () {
      var _gravar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, response) {
        var _request$body, dataCriacao, dataLimite, observacao, valorTotal, idAcesso, idCliente, msg, idUsuario, venda, resp;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _request$body = request.body, dataCriacao = _request$body.dataCriacao, dataLimite = _request$body.dataLimite, observacao = _request$body.observacao, valorTotal = _request$body.valorTotal, idAcesso = _request$body.idAcesso, idCliente = _request$body.idCliente;
                msg = "";
                _context.next = 4;
                return UsuarioController.procurarUsuarioAcesso(bd, idAcesso);
              case 4:
                idUsuario = _context.sent;
                venda = new Venda(0, dataCriacao, dataLimite, observacao, valorTotal, idUsuario, idCliente);
                _context.next = 8;
                return venda.gravar(bd);
              case 8:
                resp = _context.sent;
                if (resp > 0) msg += "Venda Condicional cadastrada com sucesso";else msg += "Algo deu errado";
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
        var venda, resp, x, nomeCliente, cpfCliente, nomeUsuario, v;
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
                  _context2.next = 20;
                  break;
                }
                _context2.next = 8;
                return ClienteController.buscarClienteNome(bd, resp[x].id_cliente);
              case 8:
                nomeCliente = _context2.sent;
                _context2.next = 11;
                return ClienteController.buscarCPF(bd, resp[x].id_cliente);
              case 11:
                cpfCliente = _context2.sent;
                _context2.next = 14;
                return UsuarioController.buscarUsuarioNome(bd, resp[x].id_usuario);
              case 14:
                nomeUsuario = _context2.sent;
                v = {
                  id: resp[x].id,
                  dataCriacao: moment.utc(resp[x].dataCriacao).format('YYYY-MM-DD'),
                  dataLimite: moment.utc(resp[x].dataLimite).format('YYYY-MM-DD'),
                  observacao: resp[x].observacao,
                  valorTotal: resp[x].valorTotal,
                  nomeUsuario: nomeUsuario,
                  idUsuario: resp[x].id_usuario,
                  nomeCliente: nomeCliente,
                  idCliente: resp[x].id_cliente,
                  cpfCliente: cpfCliente
                };
                resp[x] = v;
              case 17:
                x++;
                _context2.next = 5;
                break;
              case 20:
                return _context2.abrupt("return", response.send(resp));
              case 21:
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
    key: "alterar",
    value: function () {
      var _alterar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request, response) {
        var msg, _request$body2, idVenda, dataCriacao, dataLimite, observacao, valorTotal, venda, resp;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                msg = "";
                _request$body2 = request.body, idVenda = _request$body2.idVenda, dataCriacao = _request$body2.dataCriacao, dataLimite = _request$body2.dataLimite, observacao = _request$body2.observacao, valorTotal = _request$body2.valorTotal;
                venda = new Venda(idVenda, dataCriacao, dataLimite, observacao, valorTotal, 0, 0);
                _context3.next = 5;
                return venda.alterar(bd);
              case 5:
                resp = _context3.sent;
                if (resp > 0) msg += "Alterado com sucesso !!";else msg += "Algo deu errado !!";
                return _context3.abrupt("return", response.send(msg));
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function alterar(_x5, _x6) {
        return _alterar.apply(this, arguments);
      }
      return alterar;
    }()
  }, {
    key: "deletar",
    value: function () {
      var _deletar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request, response) {
        var idVenda, venda;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                idVenda = request.params.idVenda;
                venda = new Venda();
                _context4.next = 4;
                return venda.deletar(bd, idVenda);
              case 4:
                return _context4.abrupt("return", response.send());
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function deletar(_x7, _x8) {
        return _deletar.apply(this, arguments);
      }
      return deletar;
    }()
  }, {
    key: "buscarUsuario",
    value: function () {
      var _buscarUsuario = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, response) {
        var idUsuario, venda, resp;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                idUsuario = request.params.idUsuario;
                venda = new Venda();
                _context5.next = 4;
                return venda.buscarUsuario(bd, idUsuario);
              case 4:
                resp = _context5.sent;
                return _context5.abrupt("return", response.send(resp));
              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
      function buscarUsuario(_x9, _x10) {
        return _buscarUsuario.apply(this, arguments);
      }
      return buscarUsuario;
    }() //cadatrar vendas cond e testar o relatorio
  }, {
    key: "relProdutosCondicional",
    value: function () {
      var _relProdutosCondicional = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(request, response) {
        var vendaCond, vendas, lista, _iterator, _step, v, item, items, _iterator2, _step2, i, produtoClass, produto, categoriaClass, categoria, clienteClass, cliente, vetaux;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                vendaCond = new VendaCondicional();
                _context6.next = 3;
                return vendaCond.listarTodasVendas(bd);
              case 3:
                vendas = _context6.sent;
                lista = [];
                _iterator = _createForOfIteratorHelper(vendas);
                _context6.prev = 6;
                _iterator.s();
              case 8:
                if ((_step = _iterator.n()).done) {
                  _context6.next = 45;
                  break;
                }
                v = _step.value;
                item = new ListaCond();
                _context6.next = 13;
                return item.listarTudo(bd, v.id);
              case 13:
                items = _context6.sent;
                _iterator2 = _createForOfIteratorHelper(items);
                _context6.prev = 15;
                _iterator2.s();
              case 17:
                if ((_step2 = _iterator2.n()).done) {
                  _context6.next = 35;
                  break;
                }
                i = _step2.value;
                produtoClass = new Produto();
                _context6.next = 22;
                return produtoClass.buscarProduto(bd, i.id_produto);
              case 22:
                produto = _context6.sent;
                categoriaClass = new Categoria();
                _context6.next = 26;
                return categoriaClass.buscarPorID(bd, produto.id_categoria);
              case 26:
                categoria = _context6.sent;
                clienteClass = new Cliente();
                _context6.next = 30;
                return clienteClass.buscarCliente(bd, v.id_cliente);
              case 30:
                cliente = _context6.sent;
                vetaux = [produto.id, cliente[0].nome, produto.titulo, categoria[0].descricao, i.quantidade, moment.utc(v.dataLimite).format('DD-MM-YYYY')];
                lista.push(vetaux);
              case 33:
                _context6.next = 17;
                break;
              case 35:
                _context6.next = 40;
                break;
              case 37:
                _context6.prev = 37;
                _context6.t0 = _context6["catch"](15);
                _iterator2.e(_context6.t0);
              case 40:
                _context6.prev = 40;
                _iterator2.f();
                return _context6.finish(40);
              case 43:
                _context6.next = 8;
                break;
              case 45:
                _context6.next = 50;
                break;
              case 47:
                _context6.prev = 47;
                _context6.t1 = _context6["catch"](6);
                _iterator.e(_context6.t1);
              case 50:
                _context6.prev = 50;
                _iterator.f();
                return _context6.finish(50);
              case 53:
                return _context6.abrupt("return", response.send(lista));
              case 54:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[6, 47, 50, 53], [15, 37, 40, 43]]);
      }));
      function relProdutosCondicional(_x11, _x12) {
        return _relProdutosCondicional.apply(this, arguments);
      }
      return relProdutosCondicional;
    }()
  }]);
  return VendaCondController;
}();
module.exports = new VendaCondController();