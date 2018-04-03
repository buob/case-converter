module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId])
      /******/ return installedModules[moduleId].exports; // Create a new module (and put it into the cache)
    /******/
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ exports: {},
      /******/ id: moduleId,
      /******/ loaded: false
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.loaded = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__(0);
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.toPascalCase = exports.toKebabCase = exports.toSnakeCase = exports.toCamelCase = undefined;

      var _typeof =
        typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
          ? function(obj) {
              return typeof obj;
            }
          : function(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };

      var _lodash = __webpack_require__(1);

      var _lodash2 = _interopRequireDefault(_lodash);

      var _lodash3 = __webpack_require__(2);

      var _lodash4 = _interopRequireDefault(_lodash3);

      var _lodash5 = __webpack_require__(3);

      var _lodash6 = _interopRequireDefault(_lodash5);

      var _lodash7 = __webpack_require__(4);

      var _lodash8 = _interopRequireDefault(_lodash7);

      var _lodash9 = __webpack_require__(5);

      var _lodash10 = _interopRequireDefault(_lodash9);

      var _lodash11 = __webpack_require__(6);

      var _lodash12 = _interopRequireDefault(_lodash11);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
	 * deeply converts keys of an object from one case to another
	 * @param {object} object to convert
	 * @param {function} function to convert key.
	 * @return converted object
	 */
      var convertCase = function convertCase(
        oldObject,
        converterFunction,
        options
      ) {
        var newObject = void 0;

        if (
          !oldObject ||
          (typeof oldObject === "undefined"
            ? "undefined"
            : _typeof(oldObject)) !== "object" ||
          !Object.keys(oldObject).length
        ) {
          return oldObject;
        }

        if (Array.isArray(oldObject)) {
          newObject = oldObject.map(function(element) {
            return convertCase(element, converterFunction, options);
          });
        } else {
          newObject = {};
          Object.keys(oldObject).forEach(function(oldKey) {
            if (
              options &&
              options.ignoreKeys &&
              (0, _lodash10.default)(options.ignoreKeys, oldKey)
            ) {
              newObject[oldKey] = oldObject[oldKey];
              return;
            }

            var newKey = converterFunction(oldKey);
            newObject[newKey] = convertCase(
              oldObject[oldKey],
              converterFunction,
              options
            );
          });
        }

        return newObject;
      };

      var toCamelCase = (exports.toCamelCase = function toCamelCase(obj, opts) {
        return convertCase(obj, _lodash4.default, opts);
      });
      var toSnakeCase = (exports.toSnakeCase = function toSnakeCase(obj, opts) {
        return convertCase(obj, _lodash2.default, opts);
      });
      var toKebabCase = (exports.toKebabCase = function toKebabCase(obj, opts) {
        return convertCase(obj, _lodash6.default, opts);
      });
      var toPascalCase = (exports.toPascalCase = function toPascalCase(
        obj,
        opts
      ) {
        return convertCase(
          obj,
          (0, _lodash12.default)(_lodash4.default, _lodash8.default),
          opts
        );
      });

      exports.default = {
        toCamelCase: toCamelCase,
        toSnakeCase: toSnakeCase,
        toKebabCase: toKebabCase,
        toPascalCase: toPascalCase
      };

      /***/
    },
    /* 1 */
    /***/ function(module, exports) {
      /* WEBPACK VAR INJECTION */ (function(global) {
        /**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

        /** Used as references for various `Number` constants. */
        var INFINITY = 1 / 0;

        /** `Object#toString` result references. */
        var symbolTag = "[object Symbol]";

        /** Used to match words composed of alphanumeric characters. */
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

        /** Used to match Latin Unicode letters (excluding mathematical operators). */
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

        /** Used to compose unicode character classes. */
        var rsAstralRange = "\\ud800-\\udfff",
          rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23",
          rsComboSymbolsRange = "\\u20d0-\\u20f0",
          rsDingbatRange = "\\u2700-\\u27bf",
          rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff",
          rsMathOpRange = "\\xac\\xb1\\xd7\\xf7",
          rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
          rsPunctuationRange = "\\u2000-\\u206f",
          rsSpaceRange =
            " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde",
          rsVarRange = "\\ufe0e\\ufe0f",
          rsBreakRange =
            rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

        /** Used to compose unicode capture groups. */
        var rsApos = "['\u2019]",
          rsBreak = "[" + rsBreakRange + "]",
          rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]",
          rsDigits = "\\d+",
          rsDingbat = "[" + rsDingbatRange + "]",
          rsLower = "[" + rsLowerRange + "]",
          rsMisc =
            "[^" +
            rsAstralRange +
            rsBreakRange +
            rsDigits +
            rsDingbatRange +
            rsLowerRange +
            rsUpperRange +
            "]",
          rsFitz = "\\ud83c[\\udffb-\\udfff]",
          rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")",
          rsNonAstral = "[^" + rsAstralRange + "]",
          rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          rsUpper = "[" + rsUpperRange + "]",
          rsZWJ = "\\u200d";

        /** Used to compose unicode regexes. */
        var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")",
          rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")",
          rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?",
          rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?",
          reOptMod = rsModifier + "?",
          rsOptVar = "[" + rsVarRange + "]?",
          rsOptJoin =
            "(?:" +
            rsZWJ +
            "(?:" +
            [rsNonAstral, rsRegional, rsSurrPair].join("|") +
            ")" +
            rsOptVar +
            reOptMod +
            ")*",
          rsSeq = rsOptVar + reOptMod + rsOptJoin,
          rsEmoji =
            "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;

        /** Used to match apostrophes. */
        var reApos = RegExp(rsApos, "g");

        /**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
        var reComboMark = RegExp(rsCombo, "g");

        /** Used to match complex or compound words. */
        var reUnicodeWord = RegExp(
          [
            rsUpper +
              "?" +
              rsLower +
              "+" +
              rsOptLowerContr +
              "(?=" +
              [rsBreak, rsUpper, "$"].join("|") +
              ")",
            rsUpperMisc +
              "+" +
              rsOptUpperContr +
              "(?=" +
              [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") +
              ")",
            rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
            rsUpper + "+" + rsOptUpperContr,
            rsDigits,
            rsEmoji
          ].join("|"),
          "g"
        );

        /** Used to detect strings that need a more robust regexp to match words. */
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

        /** Used to map Latin Unicode letters to basic Latin letters. */
        var deburredLetters = {
          // Latin-1 Supplement block.
          À: "A",
          Á: "A",
          Â: "A",
          Ã: "A",
          Ä: "A",
          Å: "A",
          à: "a",
          á: "a",
          â: "a",
          ã: "a",
          ä: "a",
          å: "a",
          Ç: "C",
          ç: "c",
          Ð: "D",
          ð: "d",
          È: "E",
          É: "E",
          Ê: "E",
          Ë: "E",
          è: "e",
          é: "e",
          ê: "e",
          ë: "e",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ï: "I",
          ì: "i",
          í: "i",
          î: "i",
          ï: "i",
          Ñ: "N",
          ñ: "n",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Õ: "O",
          Ö: "O",
          Ø: "O",
          ò: "o",
          ó: "o",
          ô: "o",
          õ: "o",
          ö: "o",
          ø: "o",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ü: "U",
          ù: "u",
          ú: "u",
          û: "u",
          ü: "u",
          Ý: "Y",
          ý: "y",
          ÿ: "y",
          Æ: "Ae",
          æ: "ae",
          Þ: "Th",
          þ: "th",
          ß: "ss",
          // Latin Extended-A block.
          Ā: "A",
          Ă: "A",
          Ą: "A",
          ā: "a",
          ă: "a",
          ą: "a",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          Ď: "D",
          Đ: "D",
          ď: "d",
          đ: "d",
          Ē: "E",
          Ĕ: "E",
          Ė: "E",
          Ę: "E",
          Ě: "E",
          ē: "e",
          ĕ: "e",
          ė: "e",
          ę: "e",
          ě: "e",
          Ĝ: "G",
          Ğ: "G",
          Ġ: "G",
          Ģ: "G",
          ĝ: "g",
          ğ: "g",
          ġ: "g",
          ģ: "g",
          Ĥ: "H",
          Ħ: "H",
          ĥ: "h",
          ħ: "h",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          Į: "I",
          İ: "I",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          į: "i",
          ı: "i",
          Ĵ: "J",
          ĵ: "j",
          Ķ: "K",
          ķ: "k",
          ĸ: "k",
          Ĺ: "L",
          Ļ: "L",
          Ľ: "L",
          Ŀ: "L",
          Ł: "L",
          ĺ: "l",
          ļ: "l",
          ľ: "l",
          ŀ: "l",
          ł: "l",
          Ń: "N",
          Ņ: "N",
          Ň: "N",
          Ŋ: "N",
          ń: "n",
          ņ: "n",
          ň: "n",
          ŋ: "n",
          Ō: "O",
          Ŏ: "O",
          Ő: "O",
          ō: "o",
          ŏ: "o",
          ő: "o",
          Ŕ: "R",
          Ŗ: "R",
          Ř: "R",
          ŕ: "r",
          ŗ: "r",
          ř: "r",
          Ś: "S",
          Ŝ: "S",
          Ş: "S",
          Š: "S",
          ś: "s",
          ŝ: "s",
          ş: "s",
          š: "s",
          Ţ: "T",
          Ť: "T",
          Ŧ: "T",
          ţ: "t",
          ť: "t",
          ŧ: "t",
          Ũ: "U",
          Ū: "U",
          Ŭ: "U",
          Ů: "U",
          Ű: "U",
          Ų: "U",
          ũ: "u",
          ū: "u",
          ŭ: "u",
          ů: "u",
          ű: "u",
          ų: "u",
          Ŵ: "W",
          ŵ: "w",
          Ŷ: "Y",
          ŷ: "y",
          Ÿ: "Y",
          Ź: "Z",
          Ż: "Z",
          Ž: "Z",
          ź: "z",
          ż: "z",
          ž: "z",
          Ĳ: "IJ",
          ĳ: "ij",
          Œ: "Oe",
          œ: "oe",
          ŉ: "'n",
          ſ: "ss"
        };

        /** Detect free variable `global` from Node.js. */
        var freeGlobal =
          typeof global == "object" &&
          global &&
          global.Object === Object &&
          global;

        /** Detect free variable `self`. */
        var freeSelf =
          typeof self == "object" && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root = freeGlobal || freeSelf || Function("return this")();

        /**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1,
            length = array ? array.length : 0;

          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }

        /**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
        function asciiWords(string) {
          return string.match(reAsciiWord) || [];
        }

        /**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
        function basePropertyOf(object) {
          return function(key) {
            return object == null ? undefined : object[key];
          };
        }

        /**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
        var deburrLetter = basePropertyOf(deburredLetters);

        /**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
        function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string);
        }

        /**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
        function unicodeWords(string) {
          return string.match(reUnicodeWord) || [];
        }

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
        var objectToString = objectProto.toString;

        /** Built-in value references. */
        var Symbol = root.Symbol;

        /** Used to convert symbols to primitives and strings. */
        var symbolProto = Symbol ? Symbol.prototype : undefined,
          symbolToString = symbolProto ? symbolProto.toString : undefined;

        /**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
        function baseToString(value) {
          // Exit early for strings to avoid a performance hit in some environments.
          if (typeof value == "string") {
            return value;
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result = value + "";
          return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }

        /**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(
              words(deburr(string).replace(reApos, "")),
              callback,
              ""
            );
          };
        }

        /**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
        function isObjectLike(value) {
          return !!value && typeof value == "object";
        }

        /**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
        function isSymbol(value) {
          return (
            typeof value == "symbol" ||
            (isObjectLike(value) && objectToString.call(value) == symbolTag)
          );
        }

        /**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }

        /**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
        function deburr(string) {
          string = toString(string);
          return (
            string &&
            string.replace(reLatin, deburrLetter).replace(reComboMark, "")
          );
        }

        /**
	 * Converts `string` to
	 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the snake cased string.
	 * @example
	 *
	 * _.snakeCase('Foo Bar');
	 * // => 'foo_bar'
	 *
	 * _.snakeCase('fooBar');
	 * // => 'foo_bar'
	 *
	 * _.snakeCase('--FOO-BAR--');
	 * // => 'foo_bar'
	 */
        var snakeCase = createCompounder(function(result, word, index) {
          return result + (index ? "_" : "") + word.toLowerCase();
        });

        /**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined : pattern;

          if (pattern === undefined) {
            return hasUnicodeWord(string)
              ? unicodeWords(string)
              : asciiWords(string);
          }
          return string.match(pattern) || [];
        }

        module.exports = snakeCase;

        /* WEBPACK VAR INJECTION */
      }.call(
        exports,
        (function() {
          return this;
        })()
      ));

      /***/
    },
    /* 2 */
    /***/ function(module, exports) {
      /* WEBPACK VAR INJECTION */ (function(global) {
        /**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

        /** Used as references for various `Number` constants. */
        var INFINITY = 1 / 0;

        /** `Object#toString` result references. */
        var symbolTag = "[object Symbol]";

        /** Used to match words composed of alphanumeric characters. */
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

        /** Used to match Latin Unicode letters (excluding mathematical operators). */
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

        /** Used to compose unicode character classes. */
        var rsAstralRange = "\\ud800-\\udfff",
          rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23",
          rsComboSymbolsRange = "\\u20d0-\\u20f0",
          rsDingbatRange = "\\u2700-\\u27bf",
          rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff",
          rsMathOpRange = "\\xac\\xb1\\xd7\\xf7",
          rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
          rsPunctuationRange = "\\u2000-\\u206f",
          rsSpaceRange =
            " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde",
          rsVarRange = "\\ufe0e\\ufe0f",
          rsBreakRange =
            rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

        /** Used to compose unicode capture groups. */
        var rsApos = "['\u2019]",
          rsAstral = "[" + rsAstralRange + "]",
          rsBreak = "[" + rsBreakRange + "]",
          rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]",
          rsDigits = "\\d+",
          rsDingbat = "[" + rsDingbatRange + "]",
          rsLower = "[" + rsLowerRange + "]",
          rsMisc =
            "[^" +
            rsAstralRange +
            rsBreakRange +
            rsDigits +
            rsDingbatRange +
            rsLowerRange +
            rsUpperRange +
            "]",
          rsFitz = "\\ud83c[\\udffb-\\udfff]",
          rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")",
          rsNonAstral = "[^" + rsAstralRange + "]",
          rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          rsUpper = "[" + rsUpperRange + "]",
          rsZWJ = "\\u200d";

        /** Used to compose unicode regexes. */
        var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")",
          rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")",
          rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?",
          rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?",
          reOptMod = rsModifier + "?",
          rsOptVar = "[" + rsVarRange + "]?",
          rsOptJoin =
            "(?:" +
            rsZWJ +
            "(?:" +
            [rsNonAstral, rsRegional, rsSurrPair].join("|") +
            ")" +
            rsOptVar +
            reOptMod +
            ")*",
          rsSeq = rsOptVar + reOptMod + rsOptJoin,
          rsEmoji =
            "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq,
          rsSymbol =
            "(?:" +
            [
              rsNonAstral + rsCombo + "?",
              rsCombo,
              rsRegional,
              rsSurrPair,
              rsAstral
            ].join("|") +
            ")";

        /** Used to match apostrophes. */
        var reApos = RegExp(rsApos, "g");

        /**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
        var reComboMark = RegExp(rsCombo, "g");

        /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
        var reUnicode = RegExp(
          rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq,
          "g"
        );

        /** Used to match complex or compound words. */
        var reUnicodeWord = RegExp(
          [
            rsUpper +
              "?" +
              rsLower +
              "+" +
              rsOptLowerContr +
              "(?=" +
              [rsBreak, rsUpper, "$"].join("|") +
              ")",
            rsUpperMisc +
              "+" +
              rsOptUpperContr +
              "(?=" +
              [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") +
              ")",
            rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
            rsUpper + "+" + rsOptUpperContr,
            rsDigits,
            rsEmoji
          ].join("|"),
          "g"
        );

        /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
        var reHasUnicode = RegExp(
          "[" +
            rsZWJ +
            rsAstralRange +
            rsComboMarksRange +
            rsComboSymbolsRange +
            rsVarRange +
            "]"
        );

        /** Used to detect strings that need a more robust regexp to match words. */
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

        /** Used to map Latin Unicode letters to basic Latin letters. */
        var deburredLetters = {
          // Latin-1 Supplement block.
          À: "A",
          Á: "A",
          Â: "A",
          Ã: "A",
          Ä: "A",
          Å: "A",
          à: "a",
          á: "a",
          â: "a",
          ã: "a",
          ä: "a",
          å: "a",
          Ç: "C",
          ç: "c",
          Ð: "D",
          ð: "d",
          È: "E",
          É: "E",
          Ê: "E",
          Ë: "E",
          è: "e",
          é: "e",
          ê: "e",
          ë: "e",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ï: "I",
          ì: "i",
          í: "i",
          î: "i",
          ï: "i",
          Ñ: "N",
          ñ: "n",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Õ: "O",
          Ö: "O",
          Ø: "O",
          ò: "o",
          ó: "o",
          ô: "o",
          õ: "o",
          ö: "o",
          ø: "o",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ü: "U",
          ù: "u",
          ú: "u",
          û: "u",
          ü: "u",
          Ý: "Y",
          ý: "y",
          ÿ: "y",
          Æ: "Ae",
          æ: "ae",
          Þ: "Th",
          þ: "th",
          ß: "ss",
          // Latin Extended-A block.
          Ā: "A",
          Ă: "A",
          Ą: "A",
          ā: "a",
          ă: "a",
          ą: "a",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          Ď: "D",
          Đ: "D",
          ď: "d",
          đ: "d",
          Ē: "E",
          Ĕ: "E",
          Ė: "E",
          Ę: "E",
          Ě: "E",
          ē: "e",
          ĕ: "e",
          ė: "e",
          ę: "e",
          ě: "e",
          Ĝ: "G",
          Ğ: "G",
          Ġ: "G",
          Ģ: "G",
          ĝ: "g",
          ğ: "g",
          ġ: "g",
          ģ: "g",
          Ĥ: "H",
          Ħ: "H",
          ĥ: "h",
          ħ: "h",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          Į: "I",
          İ: "I",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          į: "i",
          ı: "i",
          Ĵ: "J",
          ĵ: "j",
          Ķ: "K",
          ķ: "k",
          ĸ: "k",
          Ĺ: "L",
          Ļ: "L",
          Ľ: "L",
          Ŀ: "L",
          Ł: "L",
          ĺ: "l",
          ļ: "l",
          ľ: "l",
          ŀ: "l",
          ł: "l",
          Ń: "N",
          Ņ: "N",
          Ň: "N",
          Ŋ: "N",
          ń: "n",
          ņ: "n",
          ň: "n",
          ŋ: "n",
          Ō: "O",
          Ŏ: "O",
          Ő: "O",
          ō: "o",
          ŏ: "o",
          ő: "o",
          Ŕ: "R",
          Ŗ: "R",
          Ř: "R",
          ŕ: "r",
          ŗ: "r",
          ř: "r",
          Ś: "S",
          Ŝ: "S",
          Ş: "S",
          Š: "S",
          ś: "s",
          ŝ: "s",
          ş: "s",
          š: "s",
          Ţ: "T",
          Ť: "T",
          Ŧ: "T",
          ţ: "t",
          ť: "t",
          ŧ: "t",
          Ũ: "U",
          Ū: "U",
          Ŭ: "U",
          Ů: "U",
          Ű: "U",
          Ų: "U",
          ũ: "u",
          ū: "u",
          ŭ: "u",
          ů: "u",
          ű: "u",
          ų: "u",
          Ŵ: "W",
          ŵ: "w",
          Ŷ: "Y",
          ŷ: "y",
          Ÿ: "Y",
          Ź: "Z",
          Ż: "Z",
          Ž: "Z",
          ź: "z",
          ż: "z",
          ž: "z",
          Ĳ: "IJ",
          ĳ: "ij",
          Œ: "Oe",
          œ: "oe",
          ŉ: "'n",
          ſ: "ss"
        };

        /** Detect free variable `global` from Node.js. */
        var freeGlobal =
          typeof global == "object" &&
          global &&
          global.Object === Object &&
          global;

        /** Detect free variable `self`. */
        var freeSelf =
          typeof self == "object" && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root = freeGlobal || freeSelf || Function("return this")();

        /**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1,
            length = array ? array.length : 0;

          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }

        /**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
        function asciiToArray(string) {
          return string.split("");
        }

        /**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
        function asciiWords(string) {
          return string.match(reAsciiWord) || [];
        }

        /**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
        function basePropertyOf(object) {
          return function(key) {
            return object == null ? undefined : object[key];
          };
        }

        /**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
        var deburrLetter = basePropertyOf(deburredLetters);

        /**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }

        /**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
        function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string);
        }

        /**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
        function stringToArray(string) {
          return hasUnicode(string)
            ? unicodeToArray(string)
            : asciiToArray(string);
        }

        /**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
        function unicodeToArray(string) {
          return string.match(reUnicode) || [];
        }

        /**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
        function unicodeWords(string) {
          return string.match(reUnicodeWord) || [];
        }

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
        var objectToString = objectProto.toString;

        /** Built-in value references. */
        var Symbol = root.Symbol;

        /** Used to convert symbols to primitives and strings. */
        var symbolProto = Symbol ? Symbol.prototype : undefined,
          symbolToString = symbolProto ? symbolProto.toString : undefined;

        /**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
        function baseSlice(array, start, end) {
          var index = -1,
            length = array.length;

          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : (end - start) >>> 0;
          start >>>= 0;

          var result = Array(length);
          while (++index < length) {
            result[index] = array[index + start];
          }
          return result;
        }

        /**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
        function baseToString(value) {
          // Exit early for strings to avoid a performance hit in some environments.
          if (typeof value == "string") {
            return value;
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result = value + "";
          return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }

        /**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }

        /**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);

            var strSymbols = hasUnicode(string)
              ? stringToArray(string)
              : undefined;

            var chr = strSymbols ? strSymbols[0] : string.charAt(0);

            var trailing = strSymbols
              ? castSlice(strSymbols, 1).join("")
              : string.slice(1);

            return chr[methodName]() + trailing;
          };
        }

        /**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(
              words(deburr(string).replace(reApos, "")),
              callback,
              ""
            );
          };
        }

        /**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
        function isObjectLike(value) {
          return !!value && typeof value == "object";
        }

        /**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
        function isSymbol(value) {
          return (
            typeof value == "symbol" ||
            (isObjectLike(value) && objectToString.call(value) == symbolTag)
          );
        }

        /**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }

        /**
	 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the camel cased string.
	 * @example
	 *
	 * _.camelCase('Foo Bar');
	 * // => 'fooBar'
	 *
	 * _.camelCase('--foo-bar--');
	 * // => 'fooBar'
	 *
	 * _.camelCase('__FOO_BAR__');
	 * // => 'fooBar'
	 */
        var camelCase = createCompounder(function(result, word, index) {
          word = word.toLowerCase();
          return result + (index ? capitalize(word) : word);
        });

        /**
	 * Converts the first character of `string` to upper case and the remaining
	 * to lower case.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to capitalize.
	 * @returns {string} Returns the capitalized string.
	 * @example
	 *
	 * _.capitalize('FRED');
	 * // => 'Fred'
	 */
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }

        /**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
        function deburr(string) {
          string = toString(string);
          return (
            string &&
            string.replace(reLatin, deburrLetter).replace(reComboMark, "")
          );
        }

        /**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
        var upperFirst = createCaseFirst("toUpperCase");

        /**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined : pattern;

          if (pattern === undefined) {
            return hasUnicodeWord(string)
              ? unicodeWords(string)
              : asciiWords(string);
          }
          return string.match(pattern) || [];
        }

        module.exports = camelCase;

        /* WEBPACK VAR INJECTION */
      }.call(
        exports,
        (function() {
          return this;
        })()
      ));

      /***/
    },
    /* 3 */
    /***/ function(module, exports) {
      /* WEBPACK VAR INJECTION */ (function(global) {
        /**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

        /** Used as references for various `Number` constants. */
        var INFINITY = 1 / 0;

        /** `Object#toString` result references. */
        var symbolTag = "[object Symbol]";

        /** Used to match words composed of alphanumeric characters. */
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

        /** Used to match Latin Unicode letters (excluding mathematical operators). */
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

        /** Used to compose unicode character classes. */
        var rsAstralRange = "\\ud800-\\udfff",
          rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23",
          rsComboSymbolsRange = "\\u20d0-\\u20f0",
          rsDingbatRange = "\\u2700-\\u27bf",
          rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff",
          rsMathOpRange = "\\xac\\xb1\\xd7\\xf7",
          rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
          rsPunctuationRange = "\\u2000-\\u206f",
          rsSpaceRange =
            " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
          rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde",
          rsVarRange = "\\ufe0e\\ufe0f",
          rsBreakRange =
            rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

        /** Used to compose unicode capture groups. */
        var rsApos = "['\u2019]",
          rsBreak = "[" + rsBreakRange + "]",
          rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]",
          rsDigits = "\\d+",
          rsDingbat = "[" + rsDingbatRange + "]",
          rsLower = "[" + rsLowerRange + "]",
          rsMisc =
            "[^" +
            rsAstralRange +
            rsBreakRange +
            rsDigits +
            rsDingbatRange +
            rsLowerRange +
            rsUpperRange +
            "]",
          rsFitz = "\\ud83c[\\udffb-\\udfff]",
          rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")",
          rsNonAstral = "[^" + rsAstralRange + "]",
          rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          rsUpper = "[" + rsUpperRange + "]",
          rsZWJ = "\\u200d";

        /** Used to compose unicode regexes. */
        var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")",
          rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")",
          rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?",
          rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?",
          reOptMod = rsModifier + "?",
          rsOptVar = "[" + rsVarRange + "]?",
          rsOptJoin =
            "(?:" +
            rsZWJ +
            "(?:" +
            [rsNonAstral, rsRegional, rsSurrPair].join("|") +
            ")" +
            rsOptVar +
            reOptMod +
            ")*",
          rsSeq = rsOptVar + reOptMod + rsOptJoin,
          rsEmoji =
            "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;

        /** Used to match apostrophes. */
        var reApos = RegExp(rsApos, "g");

        /**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
        var reComboMark = RegExp(rsCombo, "g");

        /** Used to match complex or compound words. */
        var reUnicodeWord = RegExp(
          [
            rsUpper +
              "?" +
              rsLower +
              "+" +
              rsOptLowerContr +
              "(?=" +
              [rsBreak, rsUpper, "$"].join("|") +
              ")",
            rsUpperMisc +
              "+" +
              rsOptUpperContr +
              "(?=" +
              [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") +
              ")",
            rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
            rsUpper + "+" + rsOptUpperContr,
            rsDigits,
            rsEmoji
          ].join("|"),
          "g"
        );

        /** Used to detect strings that need a more robust regexp to match words. */
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

        /** Used to map Latin Unicode letters to basic Latin letters. */
        var deburredLetters = {
          // Latin-1 Supplement block.
          À: "A",
          Á: "A",
          Â: "A",
          Ã: "A",
          Ä: "A",
          Å: "A",
          à: "a",
          á: "a",
          â: "a",
          ã: "a",
          ä: "a",
          å: "a",
          Ç: "C",
          ç: "c",
          Ð: "D",
          ð: "d",
          È: "E",
          É: "E",
          Ê: "E",
          Ë: "E",
          è: "e",
          é: "e",
          ê: "e",
          ë: "e",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ï: "I",
          ì: "i",
          í: "i",
          î: "i",
          ï: "i",
          Ñ: "N",
          ñ: "n",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Õ: "O",
          Ö: "O",
          Ø: "O",
          ò: "o",
          ó: "o",
          ô: "o",
          õ: "o",
          ö: "o",
          ø: "o",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ü: "U",
          ù: "u",
          ú: "u",
          û: "u",
          ü: "u",
          Ý: "Y",
          ý: "y",
          ÿ: "y",
          Æ: "Ae",
          æ: "ae",
          Þ: "Th",
          þ: "th",
          ß: "ss",
          // Latin Extended-A block.
          Ā: "A",
          Ă: "A",
          Ą: "A",
          ā: "a",
          ă: "a",
          ą: "a",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          Ď: "D",
          Đ: "D",
          ď: "d",
          đ: "d",
          Ē: "E",
          Ĕ: "E",
          Ė: "E",
          Ę: "E",
          Ě: "E",
          ē: "e",
          ĕ: "e",
          ė: "e",
          ę: "e",
          ě: "e",
          Ĝ: "G",
          Ğ: "G",
          Ġ: "G",
          Ģ: "G",
          ĝ: "g",
          ğ: "g",
          ġ: "g",
          ģ: "g",
          Ĥ: "H",
          Ħ: "H",
          ĥ: "h",
          ħ: "h",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          Į: "I",
          İ: "I",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          į: "i",
          ı: "i",
          Ĵ: "J",
          ĵ: "j",
          Ķ: "K",
          ķ: "k",
          ĸ: "k",
          Ĺ: "L",
          Ļ: "L",
          Ľ: "L",
          Ŀ: "L",
          Ł: "L",
          ĺ: "l",
          ļ: "l",
          ľ: "l",
          ŀ: "l",
          ł: "l",
          Ń: "N",
          Ņ: "N",
          Ň: "N",
          Ŋ: "N",
          ń: "n",
          ņ: "n",
          ň: "n",
          ŋ: "n",
          Ō: "O",
          Ŏ: "O",
          Ő: "O",
          ō: "o",
          ŏ: "o",
          ő: "o",
          Ŕ: "R",
          Ŗ: "R",
          Ř: "R",
          ŕ: "r",
          ŗ: "r",
          ř: "r",
          Ś: "S",
          Ŝ: "S",
          Ş: "S",
          Š: "S",
          ś: "s",
          ŝ: "s",
          ş: "s",
          š: "s",
          Ţ: "T",
          Ť: "T",
          Ŧ: "T",
          ţ: "t",
          ť: "t",
          ŧ: "t",
          Ũ: "U",
          Ū: "U",
          Ŭ: "U",
          Ů: "U",
          Ű: "U",
          Ų: "U",
          ũ: "u",
          ū: "u",
          ŭ: "u",
          ů: "u",
          ű: "u",
          ų: "u",
          Ŵ: "W",
          ŵ: "w",
          Ŷ: "Y",
          ŷ: "y",
          Ÿ: "Y",
          Ź: "Z",
          Ż: "Z",
          Ž: "Z",
          ź: "z",
          ż: "z",
          ž: "z",
          Ĳ: "IJ",
          ĳ: "ij",
          Œ: "Oe",
          œ: "oe",
          ŉ: "'n",
          ſ: "ss"
        };

        /** Detect free variable `global` from Node.js. */
        var freeGlobal =
          typeof global == "object" &&
          global &&
          global.Object === Object &&
          global;

        /** Detect free variable `self`. */
        var freeSelf =
          typeof self == "object" && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root = freeGlobal || freeSelf || Function("return this")();

        /**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1,
            length = array ? array.length : 0;

          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }

        /**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
        function asciiWords(string) {
          return string.match(reAsciiWord) || [];
        }

        /**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
        function basePropertyOf(object) {
          return function(key) {
            return object == null ? undefined : object[key];
          };
        }

        /**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
        var deburrLetter = basePropertyOf(deburredLetters);

        /**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
        function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string);
        }

        /**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
        function unicodeWords(string) {
          return string.match(reUnicodeWord) || [];
        }

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
        var objectToString = objectProto.toString;

        /** Built-in value references. */
        var Symbol = root.Symbol;

        /** Used to convert symbols to primitives and strings. */
        var symbolProto = Symbol ? Symbol.prototype : undefined,
          symbolToString = symbolProto ? symbolProto.toString : undefined;

        /**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
        function baseToString(value) {
          // Exit early for strings to avoid a performance hit in some environments.
          if (typeof value == "string") {
            return value;
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result = value + "";
          return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }

        /**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(
              words(deburr(string).replace(reApos, "")),
              callback,
              ""
            );
          };
        }

        /**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
        function isObjectLike(value) {
          return !!value && typeof value == "object";
        }

        /**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
        function isSymbol(value) {
          return (
            typeof value == "symbol" ||
            (isObjectLike(value) && objectToString.call(value) == symbolTag)
          );
        }

        /**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }

        /**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
        function deburr(string) {
          string = toString(string);
          return (
            string &&
            string.replace(reLatin, deburrLetter).replace(reComboMark, "")
          );
        }

        /**
	 * Converts `string` to
	 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the kebab cased string.
	 * @example
	 *
	 * _.kebabCase('Foo Bar');
	 * // => 'foo-bar'
	 *
	 * _.kebabCase('fooBar');
	 * // => 'foo-bar'
	 *
	 * _.kebabCase('__FOO_BAR__');
	 * // => 'foo-bar'
	 */
        var kebabCase = createCompounder(function(result, word, index) {
          return result + (index ? "-" : "") + word.toLowerCase();
        });

        /**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined : pattern;

          if (pattern === undefined) {
            return hasUnicodeWord(string)
              ? unicodeWords(string)
              : asciiWords(string);
          }
          return string.match(pattern) || [];
        }

        module.exports = kebabCase;

        /* WEBPACK VAR INJECTION */
      }.call(
        exports,
        (function() {
          return this;
        })()
      ));

      /***/
    },
    /* 4 */
    /***/ function(module, exports) {
      /* WEBPACK VAR INJECTION */ (function(global) {
        /**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

        /** Used as references for various `Number` constants. */
        var INFINITY = 1 / 0;

        /** `Object#toString` result references. */
        var symbolTag = "[object Symbol]";

        /** Used to compose unicode character classes. */
        var rsAstralRange = "\\ud800-\\udfff",
          rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23",
          rsComboSymbolsRange = "\\u20d0-\\u20f0",
          rsVarRange = "\\ufe0e\\ufe0f";

        /** Used to compose unicode capture groups. */
        var rsAstral = "[" + rsAstralRange + "]",
          rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]",
          rsFitz = "\\ud83c[\\udffb-\\udfff]",
          rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")",
          rsNonAstral = "[^" + rsAstralRange + "]",
          rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          rsZWJ = "\\u200d";

        /** Used to compose unicode regexes. */
        var reOptMod = rsModifier + "?",
          rsOptVar = "[" + rsVarRange + "]?",
          rsOptJoin =
            "(?:" +
            rsZWJ +
            "(?:" +
            [rsNonAstral, rsRegional, rsSurrPair].join("|") +
            ")" +
            rsOptVar +
            reOptMod +
            ")*",
          rsSeq = rsOptVar + reOptMod + rsOptJoin,
          rsSymbol =
            "(?:" +
            [
              rsNonAstral + rsCombo + "?",
              rsCombo,
              rsRegional,
              rsSurrPair,
              rsAstral
            ].join("|") +
            ")";

        /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
        var reUnicode = RegExp(
          rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq,
          "g"
        );

        /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
        var reHasUnicode = RegExp(
          "[" +
            rsZWJ +
            rsAstralRange +
            rsComboMarksRange +
            rsComboSymbolsRange +
            rsVarRange +
            "]"
        );

        /** Detect free variable `global` from Node.js. */
        var freeGlobal =
          typeof global == "object" &&
          global &&
          global.Object === Object &&
          global;

        /** Detect free variable `self`. */
        var freeSelf =
          typeof self == "object" && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root = freeGlobal || freeSelf || Function("return this")();

        /**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
        function asciiToArray(string) {
          return string.split("");
        }

        /**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }

        /**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
        function stringToArray(string) {
          return hasUnicode(string)
            ? unicodeToArray(string)
            : asciiToArray(string);
        }

        /**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
        function unicodeToArray(string) {
          return string.match(reUnicode) || [];
        }

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
        var objectToString = objectProto.toString;

        /** Built-in value references. */
        var Symbol = root.Symbol;

        /** Used to convert symbols to primitives and strings. */
        var symbolProto = Symbol ? Symbol.prototype : undefined,
          symbolToString = symbolProto ? symbolProto.toString : undefined;

        /**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
        function baseSlice(array, start, end) {
          var index = -1,
            length = array.length;

          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : (end - start) >>> 0;
          start >>>= 0;

          var result = Array(length);
          while (++index < length) {
            result[index] = array[index + start];
          }
          return result;
        }

        /**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
        function baseToString(value) {
          // Exit early for strings to avoid a performance hit in some environments.
          if (typeof value == "string") {
            return value;
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result = value + "";
          return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }

        /**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }

        /**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);

            var strSymbols = hasUnicode(string)
              ? stringToArray(string)
              : undefined;

            var chr = strSymbols ? strSymbols[0] : string.charAt(0);

            var trailing = strSymbols
              ? castSlice(strSymbols, 1).join("")
              : string.slice(1);

            return chr[methodName]() + trailing;
          };
        }

        /**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
        function isObjectLike(value) {
          return !!value && typeof value == "object";
        }

        /**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
        function isSymbol(value) {
          return (
            typeof value == "symbol" ||
            (isObjectLike(value) && objectToString.call(value) == symbolTag)
          );
        }

        /**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }

        /**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
        var upperFirst = createCaseFirst("toUpperCase");

        module.exports = upperFirst;

        /* WEBPACK VAR INJECTION */
      }.call(
        exports,
        (function() {
          return this;
        })()
      ));

      /***/
    },
    /* 5 */
    /***/ function(module, exports) {
      /**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

      /** Used as references for various `Number` constants. */
      var INFINITY = 1 / 0,
        MAX_SAFE_INTEGER = 9007199254740991,
        MAX_INTEGER = 1.7976931348623157e308,
        NAN = 0 / 0;

      /** `Object#toString` result references. */
      var argsTag = "[object Arguments]",
        funcTag = "[object Function]",
        genTag = "[object GeneratorFunction]",
        stringTag = "[object String]",
        symbolTag = "[object Symbol]";

      /** Used to match leading and trailing whitespace. */
      var reTrim = /^\s+|\s+$/g;

      /** Used to detect bad signed hexadecimal string values. */
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

      /** Used to detect binary string values. */
      var reIsBinary = /^0b[01]+$/i;

      /** Used to detect octal string values. */
      var reIsOctal = /^0o[0-7]+$/i;

      /** Used to detect unsigned integer values. */
      var reIsUint = /^(?:0|[1-9]\d*)$/;

      /** Built-in method references without a dependency on `root`. */
      var freeParseInt = parseInt;

      /**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
      function arrayMap(array, iteratee) {
        var index = -1,
          length = array ? array.length : 0,
          result = Array(length);

        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }

      /**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length,
          index = fromIndex + (fromRight ? 1 : -1);

        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }

      /**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
      function baseIndexOf(array, value, fromIndex) {
        if (value !== value) {
          return baseFindIndex(array, baseIsNaN, fromIndex);
        }
        var index = fromIndex - 1,
          length = array.length;

        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }

      /**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
      function baseIsNaN(value) {
        return value !== value;
      }

      /**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
      function baseTimes(n, iteratee) {
        var index = -1,
          result = Array(n);

        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }

      /**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }

      /**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }

      /** Used for built-in method references. */
      var objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      var hasOwnProperty = objectProto.hasOwnProperty;

      /**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
      var objectToString = objectProto.toString;

      /** Built-in value references. */
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;

      /* Built-in method references for those with the same name as other `lodash` methods. */
      var nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max;

      /**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
      function arrayLikeKeys(value, inherited) {
        // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
        // Safari 9 makes `arguments.length` enumerable in strict mode.
        var result =
          isArray(value) || isArguments(value)
            ? baseTimes(value.length, String)
            : [];

        var length = result.length,
          skipIndexes = !!length;

        for (var key in value) {
          if (
            (inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (key == "length" || isIndex(key, length)))
          ) {
            result.push(key);
          }
        }
        return result;
      }

      /**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }

      /**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
      function isIndex(value, length) {
        length = length == null ? MAX_SAFE_INTEGER : length;
        return (
          !!length &&
          (typeof value == "number" || reIsUint.test(value)) &&
          (value > -1 && value % 1 == 0 && value < length)
        );
      }

      /**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
      function isPrototype(value) {
        var Ctor = value && value.constructor,
          proto = (typeof Ctor == "function" && Ctor.prototype) || objectProto;

        return value === proto;
      }

      /**
	 * Checks if `value` is in `collection`. If `collection` is a string, it's
	 * checked for a substring of `value`, otherwise
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * is used for equality comparisons. If `fromIndex` is negative, it's used as
	 * the offset from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {boolean} Returns `true` if `value` is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'a': 1, 'b': 2 }, 1);
	 * // => true
	 *
	 * _.includes('abcd', 'bc');
	 * // => true
	 */
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;

        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString(collection)
          ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1
          : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }

      /**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
      function isArguments(value) {
        // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
        return (
          isArrayLikeObject(value) &&
          hasOwnProperty.call(value, "callee") &&
          (!propertyIsEnumerable.call(value, "callee") ||
            objectToString.call(value) == argsTag)
        );
      }

      /**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
      var isArray = Array.isArray;

      /**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }

      /**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }

      /**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
      function isFunction(value) {
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 8-9 which returns 'object' for typed array and other constructors.
        var tag = isObject(value) ? objectToString.call(value) : "";
        return tag == funcTag || tag == genTag;
      }

      /**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
      function isLength(value) {
        return (
          typeof value == "number" &&
          value > -1 &&
          value % 1 == 0 &&
          value <= MAX_SAFE_INTEGER
        );
      }

      /**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }

      /**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }

      /**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
      function isString(value) {
        return (
          typeof value == "string" ||
          (!isArray(value) &&
            isObjectLike(value) &&
            objectToString.call(value) == stringTag)
        );
      }

      /**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
      function isSymbol(value) {
        return (
          typeof value == "symbol" ||
          (isObjectLike(value) && objectToString.call(value) == symbolTag)
        );
      }

      /**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }

      /**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
      function toInteger(value) {
        var result = toFinite(value),
          remainder = result % 1;

        return result === result
          ? remainder ? result - remainder : result
          : 0;
      }

      /**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other =
            typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value)
          ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
          : reIsBadHex.test(value) ? NAN : +value;
      }

      /**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }

      /**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
      function values(object) {
        return object ? baseValues(object, keys(object)) : [];
      }

      module.exports = includes;

      /***/
    },
    /* 6 */
    /***/ function(module, exports) {
      /* WEBPACK VAR INJECTION */ (function(global) {
        /**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

        /** Used as the `TypeError` message for "Functions" methods. */
        var FUNC_ERROR_TEXT = "Expected a function";

        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;

        /** `Object#toString` result references. */
        var argsTag = "[object Arguments]",
          funcTag = "[object Function]",
          genTag = "[object GeneratorFunction]";

        /** Detect free variable `global` from Node.js. */
        var freeGlobal =
          typeof global == "object" &&
          global &&
          global.Object === Object &&
          global;

        /** Detect free variable `self`. */
        var freeSelf =
          typeof self == "object" && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root = freeGlobal || freeSelf || Function("return this")();

        /**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }

        /**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
        function arrayPush(array, values) {
          var index = -1,
            length = values.length,
            offset = array.length;

          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
        var objectToString = objectProto.toString;

        /** Built-in value references. */
        var Symbol = root.Symbol,
          propertyIsEnumerable = objectProto.propertyIsEnumerable,
          spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeMax = Math.max;

        /**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
        function baseFlatten(array, depth, predicate, isStrict, result) {
          var index = -1,
            length = array.length;

          predicate || (predicate = isFlattenable);
          result || (result = []);

          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                // Recursively flatten arrays (susceptible to call stack limits).
                baseFlatten(value, depth - 1, predicate, isStrict, result);
              } else {
                arrayPush(result, value);
              }
            } else if (!isStrict) {
              result[result.length] = value;
            }
          }
          return result;
        }

        /**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
        function baseRest(func, start) {
          start = nativeMax(start === undefined ? func.length - 1 : start, 0);
          return function() {
            var args = arguments,
              index = -1,
              length = nativeMax(args.length - start, 0),
              array = Array(length);

            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = array;
            return apply(func, this, otherArgs);
          };
        }

        /**
	 * Creates a `_.flow` or `_.flowRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new flow function.
	 */
        function createFlow(fromRight) {
          return baseRest(function(funcs) {
            funcs = baseFlatten(funcs, 1);

            var length = funcs.length,
              index = length;

            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              if (typeof funcs[index] != "function") {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
            }
            return function() {
              var index = 0,
                result = length
                  ? funcs[index].apply(this, arguments)
                  : arguments[0];

              while (++index < length) {
                result = funcs[index].call(this, result);
              }
              return result;
            };
          });
        }

        /**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
        function isFlattenable(value) {
          return (
            isArray(value) ||
            isArguments(value) ||
            !!(spreadableSymbol && value && value[spreadableSymbol])
          );
        }

        /**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
        function isArguments(value) {
          // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
          return (
            isArrayLikeObject(value) &&
            hasOwnProperty.call(value, "callee") &&
            (!propertyIsEnumerable.call(value, "callee") ||
              objectToString.call(value) == argsTag)
          );
        }

        /**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
        var isArray = Array.isArray;

        /**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }

        /**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }

        /**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
        function isFunction(value) {
          // The use of `Object#toString` avoids issues with the `typeof` operator
          // in Safari 8-9 which returns 'object' for typed array and other constructors.
          var tag = isObject(value) ? objectToString.call(value) : "";
          return tag == funcTag || tag == genTag;
        }

        /**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
        function isLength(value) {
          return (
            typeof value == "number" &&
            value > -1 &&
            value % 1 == 0 &&
            value <= MAX_SAFE_INTEGER
          );
        }

        /**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
        function isObject(value) {
          var type = typeof value;
          return !!value && (type == "object" || type == "function");
        }

        /**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
        function isObjectLike(value) {
          return !!value && typeof value == "object";
        }

        /**
	 * Creates a function that returns the result of invoking the given functions
	 * with the `this` binding of the created function, where each successive
	 * invocation is supplied the return value of the previous.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Util
	 * @param {...(Function|Function[])} [funcs] The functions to invoke.
	 * @returns {Function} Returns the new composite function.
	 * @see _.flowRight
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var addSquare = _.flow([_.add, square]);
	 * addSquare(1, 2);
	 * // => 9
	 */
        var flow = createFlow();

        module.exports = flow;

        /* WEBPACK VAR INJECTION */
      }.call(
        exports,
        (function() {
          return this;
        })()
      ));

      /***/
    }
    /******/
  ]
);
//# sourceMappingURL=index.js.map
