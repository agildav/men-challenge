export const filterParams = (source = {}, allowedParameters = []) => {
  const filteredParameters = {};

  allowedParameters.forEach((param) => {
    if (Object.prototype.hasOwnProperty.call(source, param)) {
      // permit falsy values
      if (source[param] !== undefined && source[param] !== null) {
        filteredParameters[param] = source[param];
      }
    }
  });

  return filteredParameters;
};

const paramsUtil = {
  filterParams,
};

export default paramsUtil;
