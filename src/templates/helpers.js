module.exports.emphasizeFirst = function (options) {
  var str = options.fn(this);
  var words = str.split(' ');
  var first = words.shift();
  var result = '<strong>' + first + '</strong> ' + words.join(' ');
  return result;
};
