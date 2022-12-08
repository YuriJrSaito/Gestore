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
var ListaCond = require('../models/ListaCondicional');
var ProdutoController = require('./ProdutoController');
var _require = require('express'),
  request = _require.request,
  response = _require.response;
var ListaCondController = /*#__PURE__*/function () {
  function ListaCondController() {
    _classCallCheck(this, ListaCondController);
  }
  _createClass(ListaCondController, [{
    key: "gravar",
    value: function () {
      var _gravar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, response) {
        var _request$body, produtos, idVenda, resp, msg, x, valor, qtde, listaCond;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _request$body = request.body, produtos = _request$body.produtos, idVenda = _request$body.idVenda;
                msg = "";
                x = 0;
              case 3:
                if (!(x < produtos.length)) {
                  _context.next = 16;
                  break;
                }
                if (!(parseInt(produtos[x].qtdeSelecionado) > 0)) {
                  _context.next = 13;
                  break;
                }
                valor = parseInt(produtos[x].qtdeSelecionado) * parseFloat(produtos[x].valorUnitario);
                valor = parseFloat(valor.toFixed(2));
                qtde = parseInt(produtos[x].qtdeEstoque) - parseInt(produtos[x].qtdeSelecionado);
                listaCond = new ListaCond(0, idVenda, produtos[x].id, produtos[x].qtdeSelecionado, valor);
                _context.next = 11;
                return listaCond.gravar(bd);
              case 11:
                _context.next = 13;
                return ProdutoController.controleEstoque(bd, produtos[x].id, qtde);
              case 13:
                x++;
                _context.next = 3;
                break;
              case 16:
                if (resp != false) msg += "Venda Condicional cadastrada com sucesso";else msg += "Algo deu errado";
                return _context.abrupt("return", response.send(msg));
              case 18:
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
    key: "excluir",
    value: function () {
      var _excluir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, response) {
        var msg, idVenda, listaCond, produtos, resp;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                idVenda = request.params.idVenda;
                listaCond = new ListaCond();
                _context2.next = 4;
                return listaCond.listarTudo(bd, idVenda);
              case 4:
                produtos = _context2.sent;
                _context2.next = 7;
                return ProdutoController.devolverTodosProdutos(bd, produtos);
              case 7:
                _context2.next = 9;
                return listaCond.deletar(bd, idVenda);
              case 9:
                resp = _context2.sent;
                if (resp > 0) resp = true;else resp = false;
                return _context2.abrupt("return", response.send(resp));
              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function excluir(_x3, _x4) {
        return _excluir.apply(this, arguments);
      }
      return excluir;
    }()
  }, {
    key: "excluirSemEstoque",
    value: function () {
      var _excluirSemEstoque = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request, response) {
        var msg, idVenda, listaCond, resp;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                idVenda = request.params.idVenda;
                listaCond = new ListaCond();
                _context3.next = 4;
                return listaCond.deletar(bd, idVenda);
              case 4:
                resp = _context3.sent;
                if (resp > 0) resp = true;else resp = false;
                return _context3.abrupt("return", response.send(resp));
              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function excluirSemEstoque(_x5, _x6) {
        return _excluirSemEstoque.apply(this, arguments);
      }
      return excluirSemEstoque;
    }()
  }, {
    key: "buscarProdutos",
    value: function () {
      var _buscarProdutos = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request, response) {
        var idVenda, listaCond, produtos, x, prod;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                idVenda = request.params.idVenda;
                listaCond = new ListaCond();
                _context4.next = 4;
                return listaCond.listarTudo(bd, idVenda);
              case 4:
                produtos = _context4.sent;
                for (x = 0; x < produtos.length; x++) {
                  prod = {
                    idLista: produtos[x].id,
                    quantidade: produtos[x].quantidade,
                    idProduto: produtos[x].id_produto,
                    valor: produtos[x].valor
                  };
                  produtos[x] = prod;
                }
                return _context4.abrupt("return", response.send(produtos));
              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function buscarProdutos(_x7, _x8) {
        return _buscarProdutos.apply(this, arguments);
      }
      return buscarProdutos;
    }()
  }, {
    key: "alterar",
    value: function () {
      var _alterar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, response) {
        var _request$body2, produtos, idVenda, produtosEx, msg, x, valor, qtde, listaCond, _listaCond, _x11, _listaCond2;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _request$body2 = request.body, produtos = _request$body2.produtos, idVenda = _request$body2.idVenda, produtosEx = _request$body2.produtosEx;
                msg = "";
                x = 0;
              case 3:
                if (!(x < produtos.length)) {
                  _context5.next = 24;
                  break;
                }
                valor = parseFloat(produtos[x].valorUnitario) * parseInt(produtos[x].qtdeSelecionado);
                valor = parseFloat(valor.toFixed(2));
                if (!(produtos[x].novoItem === false)) {
                  _context5.next = 15;
                  break;
                }
                qtde = parseInt(produtos[x].qtdeEstoque) - parseInt(produtos[x].qtdeSelecionado);
                _context5.next = 10;
                return ProdutoController.controleEstoque(bd, produtos[x].id, qtde);
              case 10:
                listaCond = new ListaCond(produtos[x].idLista, idVenda, produtos[x].id, produtos[x].qtdeSelecionado, valor);
                _context5.next = 13;
                return listaCond.alterar(bd);
              case 13:
                _context5.next = 21;
                break;
              case 15:
                if (!(produtos[x].novoItem === true)) {
                  _context5.next = 21;
                  break;
                }
                _context5.next = 18;
                return ProdutoController.controleEstoque2(bd, produtos[x].id, produtos[x].qtdeSelecionado);
              case 18:
                _listaCond = new ListaCond(0, idVenda, produtos[x].id, produtos[x].qtdeSelecionado, valor);
                _context5.next = 21;
                return _listaCond.gravar(bd);
              case 21:
                x++;
                _context5.next = 3;
                break;
              case 24:
                _x11 = 0;
              case 25:
                if (!(_x11 < produtosEx.length)) {
                  _context5.next = 34;
                  break;
                }
                _context5.next = 28;
                return ProdutoController.controleEstoque(bd, produtosEx[_x11].idProduto, produtosEx[_x11].quantidade);
              case 28:
                _listaCond2 = new ListaCond();
                _context5.next = 31;
                return _listaCond2.deletarAlterar(bd, produtosEx[_x11].idProduto, idVenda);
              case 31:
                _x11++;
                _context5.next = 25;
                break;
              case 34:
                return _context5.abrupt("return", response.send("Excluido"));
              case 35:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));
      function alterar(_x9, _x10) {
        return _alterar.apply(this, arguments);
      }
      return alterar;
    }()
  }, {
    key: "devolver",
    value: function () {
      var _devolver = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(request, response) {
        var items, _iterator, _step, item;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                items = request.body.items;
                _iterator = _createForOfIteratorHelper(items);
                _context6.prev = 2;
                _iterator.s();
              case 4:
                if ((_step = _iterator.n()).done) {
                  _context6.next = 10;
                  break;
                }
                item = _step.value;
                _context6.next = 8;
                return ProdutoController.controleEstoque(bd, item.id, item.qtdeEstoque);
              case 8:
                _context6.next = 4;
                break;
              case 10:
                _context6.next = 15;
                break;
              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6["catch"](2);
                _iterator.e(_context6.t0);
              case 15:
                _context6.prev = 15;
                _iterator.f();
                return _context6.finish(15);
              case 18:
                return _context6.abrupt("return", response.send("Venda atualizada !!"));
              case 19:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[2, 12, 15, 18]]);
      }));
      function devolver(_x12, _x13) {
        return _devolver.apply(this, arguments);
      }
      return devolver;
    }()
  }]);
  return ListaCondController;
}();
module.exports = new ListaCondController();