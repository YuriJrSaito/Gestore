"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var Categoria = require('../models/Categoria');
var Fornecedor = require('../models/Fornecedor');
var Produto = require('../models/Produto');
var ProdutoController = /*#__PURE__*/function () {
  function ProdutoController() {
    _classCallCheck(this, ProdutoController);
  }
  _createClass(ProdutoController, [{
    key: "gravar",
    value: function () {
      var _gravar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, response) {
        var _request$body, titulo, codigoRef, qtdeEstoque, descricao, valorUnitario, valorCompra, idFornecedor, idCategoria, img1, img2, img3, produto, msg, resp;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _request$body = request.body, titulo = _request$body.titulo, codigoRef = _request$body.codigoRef, qtdeEstoque = _request$body.qtdeEstoque, descricao = _request$body.descricao, valorUnitario = _request$body.valorUnitario, valorCompra = _request$body.valorCompra, idFornecedor = _request$body.idFornecedor, idCategoria = _request$body.idCategoria, img1 = _request$body.img1, img2 = _request$body.img2, img3 = _request$body.img3;
                produto = new Produto(0, codigoRef, qtdeEstoque, titulo, descricao, valorUnitario, valorCompra, idCategoria, idFornecedor, img1, img2, img3, 0);
                msg = "";
                _context.next = 5;
                return produto.gravar(bd);
              case 5:
                resp = _context.sent;
                if (resp.length > 0) msg = "Produto cadastrado com sucesso!!";
                return _context.abrupt("return", response.send(msg));
              case 8:
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
    key: "alterar",
    value: function () {
      var _alterar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(request, response) {
        var _request$body2, idProduto, titulo, codigoRef, qtdeEstoque, descricao, valorUnitario, valorCompra, idFornecedor, idCategoria, img1, img2, img3, msg, produto, resp;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _request$body2 = request.body, idProduto = _request$body2.idProduto, titulo = _request$body2.titulo, codigoRef = _request$body2.codigoRef, qtdeEstoque = _request$body2.qtdeEstoque, descricao = _request$body2.descricao, valorUnitario = _request$body2.valorUnitario, valorCompra = _request$body2.valorCompra, idFornecedor = _request$body2.idFornecedor, idCategoria = _request$body2.idCategoria, img1 = _request$body2.img1, img2 = _request$body2.img2, img3 = _request$body2.img3;
                msg = "";
                produto = new Produto(idProduto, codigoRef, qtdeEstoque, titulo, descricao, valorUnitario, valorCompra, idCategoria, idFornecedor, img1, img2, img3);
                _context2.next = 5;
                return produto.alterar(bd);
              case 5:
                resp = _context2.sent;
                if (resp > 0) msg += "Alterado com sucesso !!";else msg += "Algo deu errado !!";
                return _context2.abrupt("return", response.send(msg));
              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function alterar(_x3, _x4) {
        return _alterar.apply(this, arguments);
      }
      return alterar;
    }()
  }, {
    key: "listarTodosProdutos",
    value: function () {
      var _listarTodosProdutos = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(request, response) {
        var produto, resp;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                produto = new Produto();
                _context3.next = 3;
                return produto.listarTodosProdutos(bd);
              case 3:
                resp = _context3.sent;
                if (!(resp != undefined)) {
                  _context3.next = 8;
                  break;
                }
                return _context3.abrupt("return", response.send(resp));
              case 8:
                return _context3.abrupt("return", response.send("Não há produtos cadastrados"));
              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      function listarTodosProdutos(_x5, _x6) {
        return _listarTodosProdutos.apply(this, arguments);
      }
      return listarTodosProdutos;
    }()
  }, {
    key: "filtrarProdutos",
    value: function () {
      var _filtrarProdutos = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(request, response) {
        var filtro, produto, resp;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                filtro = request.params.filtro;
                produto = new Produto();
                _context4.next = 4;
                return produto.filtrarProdutos(bd, filtro);
              case 4:
                resp = _context4.sent;
                if (!(resp != undefined)) {
                  _context4.next = 9;
                  break;
                }
                return _context4.abrupt("return", response.send(resp));
              case 9:
                return _context4.abrupt("return", response.send("Não há produtos cadastrados"));
              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      function filtrarProdutos(_x7, _x8) {
        return _filtrarProdutos.apply(this, arguments);
      }
      return filtrarProdutos;
    }()
  }, {
    key: "deletar",
    value: function () {
      var _deletar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, response) {
        var idProduto, msg, produto, resp;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                idProduto = request.params.idProduto;
                msg = "";
                produto = new Produto();
                _context5.next = 5;
                return produto.deletar(bd, idProduto);
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
    key: "buscarFornecedor",
    value: function () {
      var _buscarFornecedor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(request, response) {
        var idFornecedor, produto, resp;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                idFornecedor = request.params.idFornecedor;
                produto = new Produto();
                _context6.next = 4;
                return produto.buscarFornecedor(bd, idFornecedor);
              case 4:
                resp = _context6.sent;
                return _context6.abrupt("return", response.send(resp));
              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));
      function buscarFornecedor(_x11, _x12) {
        return _buscarFornecedor.apply(this, arguments);
      }
      return buscarFornecedor;
    }()
  }, {
    key: "buscarCategoria",
    value: function () {
      var _buscarCategoria = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(request, response) {
        var idCategoria, produto, resp;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                idCategoria = request.params.idCategoria;
                produto = new Produto();
                _context7.next = 4;
                return produto.buscarCategoria(bd, idCategoria);
              case 4:
                resp = _context7.sent;
                return _context7.abrupt("return", response.send(resp));
              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));
      function buscarCategoria(_x13, _x14) {
        return _buscarCategoria.apply(this, arguments);
      }
      return buscarCategoria;
    }()
  }, {
    key: "controleEstoque",
    value: function () {
      var _controleEstoque = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(bd, idProduto, qtdeEstoque) {
        var resp, produto;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                produto = new Produto();
                _context8.next = 3;
                return produto.controleEstoque(bd, idProduto, qtdeEstoque);
              case 3:
                resp = _context8.sent;
                return _context8.abrupt("return", resp);
              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));
      function controleEstoque(_x15, _x16, _x17) {
        return _controleEstoque.apply(this, arguments);
      }
      return controleEstoque;
    }()
  }, {
    key: "devolverTodosProdutos",
    value: function () {
      var _devolverTodosProdutos = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(bd, produtos) {
        var x, produto;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                x = 0;
              case 1:
                if (!(x < produtos.length)) {
                  _context9.next = 8;
                  break;
                }
                produto = new Produto();
                _context9.next = 5;
                return produto.devolver(bd, produtos[x].id_produto, produtos[x].quantidade);
              case 5:
                x++;
                _context9.next = 1;
                break;
              case 8:
                return _context9.abrupt("return", true);
              case 9:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));
      function devolverTodosProdutos(_x18, _x19) {
        return _devolverTodosProdutos.apply(this, arguments);
      }
      return devolverTodosProdutos;
    }()
  }, {
    key: "controleEstoque2",
    value: function () {
      var _controleEstoque2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(bd, idProduto, quantidadeSelecionado) {
        var produto;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                produto = new Produto();
                _context10.next = 3;
                return produto.controleEstoque2(bd, idProduto, quantidadeSelecionado);
              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));
      function controleEstoque2(_x20, _x21, _x22) {
        return _controleEstoque2.apply(this, arguments);
      }
      return controleEstoque2;
    }()
  }, {
    key: "buscarProdutosInfo",
    value: function () {
      var _buscarProdutosInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(request, response) {
        var items, produtos, _iterator, _step, prod, produtoObjeto, produto, newProd;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                items = request.body.items;
                produtos = [];
                _iterator = _createForOfIteratorHelper(items);
                _context11.prev = 3;
                _iterator.s();
              case 5:
                if ((_step = _iterator.n()).done) {
                  _context11.next = 15;
                  break;
                }
                prod = _step.value;
                produtoObjeto = new Produto();
                _context11.next = 10;
                return produtoObjeto.buscarProduto(bd, prod.idProduto);
              case 10:
                produto = _context11.sent;
                newProd = {
                  id: produto.id,
                  titulo: produto.titulo,
                  valorUnitario: produto.valorUnitario,
                  qtdeEstoque: produto.qtdeEstoque,
                  img1: produto.img1,
                  codigo: produto.codigoReferencia,
                  qtdeNoItem: prod.quantidade,
                  qtdeSelecionado: prod.quantidade,
                  valor: prod.valor,
                  itemId: prod.idLista
                };
                produtos = [].concat(_toConsumableArray(produtos), [newProd]);
              case 13:
                _context11.next = 5;
                break;
              case 15:
                _context11.next = 20;
                break;
              case 17:
                _context11.prev = 17;
                _context11.t0 = _context11["catch"](3);
                _iterator.e(_context11.t0);
              case 20:
                _context11.prev = 20;
                _iterator.f();
                return _context11.finish(20);
              case 23:
                return _context11.abrupt("return", response.send(produtos));
              case 24:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[3, 17, 20, 23]]);
      }));
      function buscarProdutosInfo(_x23, _x24) {
        return _buscarProdutosInfo.apply(this, arguments);
      }
      return buscarProdutosInfo;
    }()
  }, {
    key: "devolver",
    value: function () {
      var _devolver = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(bd, idProduto, quantidade) {
        var produto, resp;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                produto = new Produto();
                _context12.next = 3;
                return produto.devolver(bd, idProduto, quantidade);
              case 3:
                resp = _context12.sent;
                return _context12.abrupt("return", resp);
              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));
      function devolver(_x25, _x26, _x27) {
        return _devolver.apply(this, arguments);
      }
      return devolver;
    }()
  }, {
    key: "atualizarQtdeVendido",
    value: function () {
      var _atualizarQtdeVendido = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(bd, idProduto, quantidade) {
        var produto, resp;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                produto = new Produto();
                _context13.next = 3;
                return produto.atualizarQtdeVendido(bd, idProduto, quantidade);
              case 3:
                resp = _context13.sent;
                return _context13.abrupt("return", resp);
              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));
      function atualizarQtdeVendido(_x28, _x29, _x30) {
        return _atualizarQtdeVendido.apply(this, arguments);
      }
      return atualizarQtdeVendido;
    }()
  }, {
    key: "relEstoque",
    value: function () {
      var _relEstoque = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(request, response) {
        var produto, resp, lista, x, fornecedorClass, fornecedor, categoriaClass, categoria, vetaux;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                produto = new Produto();
                _context14.next = 3;
                return produto.listarTodosProdutos(bd);
              case 3:
                resp = _context14.sent;
                lista = [];
                x = 0;
              case 6:
                if (!(x < resp.length)) {
                  _context14.next = 20;
                  break;
                }
                fornecedorClass = new Fornecedor();
                _context14.next = 10;
                return fornecedorClass.buscarFornecedor(bd, resp[x].id_fornecedor);
              case 10:
                fornecedor = _context14.sent;
                categoriaClass = new Categoria();
                _context14.next = 14;
                return categoriaClass.buscarPorID(bd, resp[x].id_categoria);
              case 14:
                categoria = _context14.sent;
                vetaux = [resp[x].id, resp[x].codigoReferencia, resp[x].titulo, resp[x].qtdeEstoque, resp[x].valorUnitario, resp[x].valorDeCompra, categoria[0].descricao, fornecedor[0].nome];
                lista.push(vetaux);
              case 17:
                x++;
                _context14.next = 6;
                break;
              case 20:
                return _context14.abrupt("return", response.send(lista));
              case 21:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));
      function relEstoque(_x31, _x32) {
        return _relEstoque.apply(this, arguments);
      }
      return relEstoque;
    }()
  }]);
  return ProdutoController;
}();
module.exports = new ProdutoController();