"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Produto = require("../models/Produto");
module.exports = /*#__PURE__*/function () {
  function ProdutoDAO() {
    _classCallCheck(this, ProdutoDAO);
  }
  _createClass(ProdutoDAO, [{
    key: "gravar",
    value: function () {
      var _gravar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(bd, produto) {
        var client, sql, values, res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return bd.conectar();
              case 2:
                client = _context.sent;
                sql = "INSERT INTO produto VALUES (default, $1, $2, $3, $4, $5 ,$6, $7, $8, $9, $10, $11, $12) RETURNING *";
                values = Object.values(produto).slice(1); //retira o id
                _context.prev = 5;
                _context.next = 8;
                return client.query(sql, values);
              case 8:
                res = _context.sent;
                return _context.abrupt("return", res.rows);
              case 10:
                _context.prev = 10;
                client.release();
                return _context.finish(10);
              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5,, 10, 13]]);
      }));
      function gravar(_x, _x2) {
        return _gravar.apply(this, arguments);
      }
      return gravar;
    }()
  }, {
    key: "buscarTodos",
    value: function () {
      var _buscarTodos = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(bd) {
        var client, res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return bd.pool.connect();
              case 2:
                client = _context2.sent;
                _context2.prev = 3;
                _context2.next = 6;
                return client.query('SELECT * from produto');
              case 6:
                res = _context2.sent;
                return _context2.abrupt("return", res.rows);
              case 8:
                _context2.prev = 8;
                client.release();
                return _context2.finish(8);
              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3,, 8, 11]]);
      }));
      function buscarTodos(_x3) {
        return _buscarTodos.apply(this, arguments);
      }
      return buscarTodos;
    }()
  }, {
    key: "buscarProduto",
    value: function () {
      var _buscarProduto = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(bd, idProduto) {
        var client, res;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return bd.pool.connect();
              case 2:
                client = _context3.sent;
                _context3.prev = 3;
                _context3.next = 6;
                return client.query('SELECT * from produto where id=' + idProduto);
              case 6:
                res = _context3.sent;
                return _context3.abrupt("return", res.rows[0]);
              case 8:
                _context3.prev = 8;
                client.release();
                return _context3.finish(8);
              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3,, 8, 11]]);
      }));
      function buscarProduto(_x4, _x5) {
        return _buscarProduto.apply(this, arguments);
      }
      return buscarProduto;
    }()
  }, {
    key: "alterar",
    value: function () {
      var _alterar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(bd, produto) {
        var client, sql, values, res;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return bd.conectar();
              case 2:
                client = _context4.sent;
                sql = "UPDATE produto SET id=$1, \"codigoReferencia\"=$2, \"qtdeEstoque\"=$3, titulo=$4, descricao=$5, \"valorUnitario\"=$6, \"valorDeCompra\"=$7, \"id_categoria\"=$8, \"id_fornecedor\"=$9, img1=$10, img2=$11, img3=$12, \"qtdeVendido\"=$13 WHERE id = $1";
                values = Object.values(produto);
                _context4.prev = 5;
                _context4.next = 8;
                return client.query(sql, values);
              case 8:
                res = _context4.sent;
                return _context4.abrupt("return", res.rowCount);
              case 10:
                _context4.prev = 10;
                client.release();
                return _context4.finish(10);
              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[5,, 10, 13]]);
      }));
      function alterar(_x6, _x7) {
        return _alterar.apply(this, arguments);
      }
      return alterar;
    }()
  }, {
    key: "controleEstoque",
    value: function () {
      var _controleEstoque = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(bd, idProduto, qtdeEstoque) {
        var client, sql, res;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return bd.conectar();
              case 2:
                client = _context5.sent;
                sql = "UPDATE produto SET \"qtdeEstoque\"=".concat(qtdeEstoque, " WHERE id = ").concat(idProduto);
                _context5.prev = 4;
                _context5.next = 7;
                return client.query(sql);
              case 7:
                res = _context5.sent;
                return _context5.abrupt("return", res.rowCount);
              case 9:
                _context5.prev = 9;
                client.release();
                return _context5.finish(9);
              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4,, 9, 12]]);
      }));
      function controleEstoque(_x8, _x9, _x10) {
        return _controleEstoque.apply(this, arguments);
      }
      return controleEstoque;
    }()
  }, {
    key: "controleEstoque2",
    value: function () {
      var _controleEstoque2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(bd, idProduto, quantidadeSelecionado) {
        var client, sql, res;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return bd.conectar();
              case 2:
                client = _context6.sent;
                sql = "UPDATE produto SET \"qtdeEstoque\"= \"qtdeEstoque\"-".concat(quantidadeSelecionado, " WHERE id = ").concat(idProduto);
                _context6.prev = 4;
                _context6.next = 7;
                return client.query(sql);
              case 7:
                res = _context6.sent;
                return _context6.abrupt("return", res.rowCount);
              case 9:
                _context6.prev = 9;
                client.release();
                return _context6.finish(9);
              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[4,, 9, 12]]);
      }));
      function controleEstoque2(_x11, _x12, _x13) {
        return _controleEstoque2.apply(this, arguments);
      }
      return controleEstoque2;
    }()
  }, {
    key: "devolver",
    value: function () {
      var _devolver = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(bd, idProduto, quantidade) {
        var client, sql, res;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return bd.conectar();
              case 2:
                client = _context7.sent;
                sql = "UPDATE produto SET \"qtdeEstoque\" = \"qtdeEstoque\" + ".concat(quantidade, " WHERE id = ").concat(idProduto);
                _context7.prev = 4;
                _context7.next = 7;
                return client.query(sql);
              case 7:
                res = _context7.sent;
                return _context7.abrupt("return", res.rowCount);
              case 9:
                _context7.prev = 9;
                client.release();
                return _context7.finish(9);
              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[4,, 9, 12]]);
      }));
      function devolver(_x14, _x15, _x16) {
        return _devolver.apply(this, arguments);
      }
      return devolver;
    }()
  }, {
    key: "atualizarQtdeVendido",
    value: function () {
      var _atualizarQtdeVendido = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(bd, idProduto, quantidade) {
        var client, sql, res;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return bd.conectar();
              case 2:
                client = _context8.sent;
                sql = "UPDATE produto SET \"qtdeVendido\" = \"qtdeVendido\" + ".concat(quantidade, " WHERE id = ").concat(idProduto);
                _context8.prev = 4;
                _context8.next = 7;
                return client.query(sql);
              case 7:
                res = _context8.sent;
                return _context8.abrupt("return", res.rowCount);
              case 9:
                _context8.prev = 9;
                client.release();
                return _context8.finish(9);
              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[4,, 9, 12]]);
      }));
      function atualizarQtdeVendido(_x17, _x18, _x19) {
        return _atualizarQtdeVendido.apply(this, arguments);
      }
      return atualizarQtdeVendido;
    }()
  }, {
    key: "filtrarProdutos",
    value: function () {
      var _filtrarProdutos = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(bd, filtro) {
        var client, res;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return bd.conectar();
              case 2:
                client = _context9.sent;
                _context9.prev = 3;
                _context9.next = 6;
                return client.query("SELECT * from produto where titulo iLIKE '%".concat(filtro, "%'"));
              case 6:
                res = _context9.sent;
                return _context9.abrupt("return", res.rows);
              case 10:
                _context9.prev = 10;
                _context9.t0 = _context9["catch"](3);
                console.log(_context9.t0);
              case 13:
                _context9.prev = 13;
                client.release();
                return _context9.finish(13);
              case 16:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[3, 10, 13, 16]]);
      }));
      function filtrarProdutos(_x20, _x21) {
        return _filtrarProdutos.apply(this, arguments);
      }
      return filtrarProdutos;
    }()
  }, {
    key: "deletar",
    value: function () {
      var _deletar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(bd, idProduto) {
        var client, sql;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return bd.conectar();
              case 2:
                client = _context10.sent;
                sql = "DELETE FROM produto WHERE id = " + idProduto;
                _context10.prev = 4;
                _context10.next = 7;
                return client.query(sql);
              case 7:
                return _context10.abrupt("return", _context10.sent.rowCount);
              case 8:
                _context10.prev = 8;
                client.release();
                return _context10.finish(8);
              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[4,, 8, 11]]);
      }));
      function deletar(_x22, _x23) {
        return _deletar.apply(this, arguments);
      }
      return deletar;
    }()
  }, {
    key: "buscarFornecedor",
    value: function () {
      var _buscarFornecedor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(bd, idFornecedor) {
        var client, res;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return bd.conectar();
              case 2:
                client = _context11.sent;
                _context11.prev = 3;
                _context11.next = 6;
                return client.query("SELECT * from produto where id_fornecedor='".concat(idFornecedor, "'"));
              case 6:
                res = _context11.sent;
                return _context11.abrupt("return", res.rows);
              case 8:
                _context11.prev = 8;
                client.release();
                return _context11.finish(8);
              case 11:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[3,, 8, 11]]);
      }));
      function buscarFornecedor(_x24, _x25) {
        return _buscarFornecedor.apply(this, arguments);
      }
      return buscarFornecedor;
    }()
  }, {
    key: "buscarCategoria",
    value: function () {
      var _buscarCategoria = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(bd, idCategoria) {
        var client, res;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return bd.conectar();
              case 2:
                client = _context12.sent;
                _context12.prev = 3;
                _context12.next = 6;
                return client.query("SELECT * from produto where id_categoria='".concat(idCategoria, "'"));
              case 6:
                res = _context12.sent;
                return _context12.abrupt("return", res.rows);
              case 8:
                _context12.prev = 8;
                client.release();
                return _context12.finish(8);
              case 11:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[3,, 8, 11]]);
      }));
      function buscarCategoria(_x26, _x27) {
        return _buscarCategoria.apply(this, arguments);
      }
      return buscarCategoria;
    }()
  }]);
  return ProdutoDAO;
}();