
var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    nodemon = require('gulp-nodemon');

gulp.task('browserify', scripts)
    .task('serve', serve);

function scripts() {
    var bundler = browserify({
        entries: ['./client/main.js'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }),
    watcher = watchify(bundler);

    return watcher
        .on('update', function () {
            var updateStart = Date.now();
            console.log('Updating!');
            watcher.bundle()
            .on('error', function (err) {
                console.log('Error with compiling components', err.message);
            })
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./build/'));
            console.log('Updated!', (Date.now() - updateStart) + 'ms');
        })
        // Create the initial bundle when starting the task
        .bundle()
        .on('error', function (err) {
            console.log('Error with compiling components', err.message);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'));
}

function serve() {
    nodemon({
        script: 'server/server.js'
    });
}

gulp.task('default', ['browserify', 'serve']);


// var gulp =  require('gulp'),
//     source = require('vinyl-source-stream'),
//     browserify = require('browserify'),
//     nodemon = require('gulp-nodemon');
//
//
// gulp.task('browserify', function () {
//     return browserify('./client/main')
//         .bundle()
//         .on('error', function (err) {
//             console.log('Error with compiling components', err.message);
//         })
//         .pipe(source('bundle.js'))
//         .pipe(gulp.dest('./build/'));
// });
//
// // gulp.task('serve', serve);
//
// gulp.task('default', ['browserify']);
