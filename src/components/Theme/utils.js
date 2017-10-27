
import DefaultTheme from './theme';
import _ from 'lodash';

exports.makeTheme = function(options) {
  var finalTheme = _.merge({}, DefaultTheme, options);
  return finalTheme;
}
