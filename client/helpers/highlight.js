Handlebars.registerHelper('highlightWithMarkdown', function(text) {
  var text = text.replace(/```(.*)\n([\s\S]*)```/gm, '<code><pre>$2</pre></code>');
  
  var converter = new Showdown.converter();
  text = converter.makeHtml(text);
  
  return new Handlebars.SafeString(text);
});