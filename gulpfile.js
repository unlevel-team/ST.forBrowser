var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var path = require('path');

var child_exec = require('child_process').exec;


var paths = {
    es6: ['src/**/*.js'],
    es5: 'lib_es5',
    es5_dist: 'lib_es5',
    // Must be absolute or relative to source map
    sourceRoot: path.join(__dirname, 'es6'),
    es5_min: 'lib_es5_min',
};


// Task for doument code
gulp.task('docs', function(done) {
//  child_exec('node ./node_modules/jsdoc/jsdoc.js ./lib -c ./jsdoc.json', undefined, done);
  child_exec('node ./node_modules/jsdoc/jsdoc.js -c ./jsdoc_conf.json', undefined, done);
});



gulp.task('watch', function() {
//    gulp.watch(paths.es6, ['babel']);
});


gulp.task('default', ['watch']);
