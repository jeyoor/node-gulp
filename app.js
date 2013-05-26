var forever = require('forever-monitor')

var child = new (forever.Monitor)('gulp.js', {
  silent: false,
  options: []
});

child.on('exit', function () {
  console.log('gulp has exited!');
});

child.start();
