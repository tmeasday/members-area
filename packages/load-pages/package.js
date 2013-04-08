Package.register_extension("md", function(bundle, source_path, serve_path, where) {
  if (where !== 'server') 
    return;
  
  var fs = Npm.require('fs');
  
  // wrap the markdown text in a Meteor.startup block and insert into pages
  // XXX: escape 's at the very least
  var contents = fs.readFileSync(source_path, 'utf8');
  
  // add "\" to the end of every line
  contents = contents.replace(/\n/g, '\\n');
  
  contents = 'Meteor.startup(function() { Pages.insert({text: "' + contents + '"}); });';  
  
  contents = new Buffer(contents);
  bundle.add_resource({
    type: "js",
    path: serve_path + '.js',
    data: contents,
    where: where
  });
});