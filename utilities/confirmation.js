// Check if empty
function empty(data) {
  return data === undefined || data === null;
}

// Check if exists
function exists(data) {
  return data !== undefined && data !== null;
}

// Check if null
function isNull(a) {
  return a === null;
}

// Check if undefined
function isUndefined(a) {
  return typeof a === "undefined";
}

// Check if boolean
function isBoolean(a) {
  return typeof a === "boolean";
}

// Check if number
function isNumber(a) {
  return typeof a === "number";
}

// Check if string
function isString(a) {
  return typeof a === "string";
}

// Check if bigint
function isBigint(a) {
  return typeof a === "bigint";
}

// Check if symbol
function isSymbol(a) {
  return typeof a === "symbol";
}

// Check if function
function isFunction(a) {
  return typeof a === "function";
}

// Check if array
function isArray(a) {
  return Array.isArray(a);
}

// Check if object, excludes: Array, Date, Null, Set, String, Undefined
function isObject(a) {
  return Object.prototype.toString.call(a) === "[object Object]";
}

// Check if empty string
function emptyString(a) {
  return a === "";
}

// Check if empty array
function emptyArray(a) {
  return isArray(a) && a.length === 0;
}

// Check if empty object
function emptyObject(a) {
  return isObject(a) && Object.keys(a).length === 0;
}

// Check if data types are equal
function deepEquals(a, b) {
  if (a === b) return true;

  if (isFunction(a) && isFunction(b)) {
    if (a.toString() === b.toString()) return true;
    return false;
  }

  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) return false;

    for (const k in a) {
      if (!deepEquals(a[k], b[k])) {
        return false;
      }
    }

    return true;
  }

  if (isObject(a) && isObject(b)) {
    const x = Object.keys(a);
    const y = Object.keys(b);

    if (x.length !== y.length) return false;

    if (JSON.stringify(x) !== JSON.stringify(y)) return false;

    for (const k of x) {
      if (!deepEquals(a[k], b[k])) {
        return false;
      }
    }

    return true;
  }

  return false;
}

export {
  empty,
  exists,
  isNull,
  isUndefined,
  isBoolean,
  isNumber,
  isString,
  isBigint,
  isSymbol,
  isFunction,
  isArray,
  isObject,
  emptyString,
  emptyArray,
  emptyObject,
  deepEquals,
};
