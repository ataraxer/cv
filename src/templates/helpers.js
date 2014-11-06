module.exports = function (config) {
  var Handlebars = config.Handlebars;

  return {
    'emphasize-first': function (options) {
      var str = options.fn(this);
      var words = str.split(' ');
      var first = words.shift();
      var result = '<strong>' + first + '</strong> ' + words.join(' ');
      return result;
    },

    'partial': function (name, options) {
      var partial = Handlebars.partials[name];
      if (!partial) return "";
      var compiled = Handlebars.compile(partial)(this);
      return new Handlebars.SafeString(compiled);
    },
  };
};
