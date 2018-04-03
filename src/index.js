import snakeCase from "lodash.snakecase";
import camelCase from "lodash.camelcase";
import kebabCase from "lodash.kebabcase";
import upperFirst from "lodash.upperfirst";
import includes from "lodash.includes";
import flow from "lodash.flow";

/**
 * deeply converts keys of an object from one case to another
 * @param {object} object to convert
 * @param {function} function to convert key.
 * @return converted object
 */
const convertCase = (oldObject, converterFunction, options) => {
  let newObject;

  if (
    !oldObject ||
    typeof oldObject !== "object" ||
    !Object.keys(oldObject).length
  ) {
    return oldObject;
  }

  if (Array.isArray(oldObject)) {
    newObject = oldObject.map(element =>
      convertCase(element, converterFunction, options)
    );
  } else {
    newObject = {};
    Object.keys(oldObject).forEach(oldKey => {
      if (
        options &&
        options.ignoreKeys &&
        includes(options.ignoreKeys, oldKey)
      ) {
        newObject[oldKey] = oldObject[oldKey];
        return;
      }

      const newKey = converterFunction(oldKey);
      newObject[newKey] = convertCase(
        oldObject[oldKey],
        converterFunction,
        options
      );
    });
  }

  return newObject;
};

export const toCamelCase = (obj, opts) => convertCase(obj, camelCase, opts);
export const toSnakeCase = (obj, opts) => convertCase(obj, snakeCase, opts);
export const toKebabCase = (obj, opts) => convertCase(obj, kebabCase, opts);
export const toPascalCase = (obj, opts) =>
  convertCase(obj, flow(camelCase, upperFirst), opts);

export default { toCamelCase, toSnakeCase, toKebabCase, toPascalCase };
