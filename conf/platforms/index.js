'use strict';

module.exports = (options) => {
  const newOptions =
    require('lodash')
      .merge({
        default: 'development',
        targets: require('path').join(__dirname, 'targets'),
        transformResult: (config, platformTarget) =>
          () => {
            const args = Array.prototype.splice.call(arguments, 0);
            return require('lodash').merge({}, config.apply(null, args), {
              name: platformTarget
            });
          }
      }, options);

  return require('platform-config')(newOptions);
};
