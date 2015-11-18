/**
 * Required
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    typescriptAngular = require('gulp-typescript-angular'),
    typescript = require('gulp-typescript'),
    rename = require('gulp-rename'),
    proxyMiddleware = require('http-proxy-middleware');

/**
 * Scripts task
 */
gulp.task('scripts', function () {
    // Source js
    gulp.src(['app/scripts/**/*.js', '!app/scripts/**/*.min.js'])
        .pipe(plumber())
        // rename all file to .min
        .pipe(rename({suffix: '.min'}))
        // combile all file
        .pipe(uglify())
        .pipe(gulp.dest('app/scripts'))
        .pipe(reload({stream: true}));
});

/**
 * Convert typescript to angular
 */
gulp.task('build', function () {
    return gulp.src('app/scripts/**/*.ts')
        .pipe(typescript())
        .pipe(typescriptAngular({
            decoratorModuleName: 'web'
        }))
        .pipe(gulp.dest('app/scripts'));
});

/**
 * HTML task
 */
gulp.task('html', function () {
    gulp.src('app/**/*.html')
        .pipe(reload({stream: true}));
});

/**
 * Browser-sync Tasks
 */
gulp.task('browser-sync', function () {
    // Connect to Proxy server
    var context = ['/api'];
    var options = {
        target: 'http://localhost:9000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api' : '/'
        }
    };
    var proxy = proxyMiddleware(context, options);

    browserSync({
        server: {
            baseDir: "./app/",
            middleware: [proxy]
        }
    });
});

/**
 * Watch task
 */
gulp.task('watch', function () {
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/scripts/**/*.ts', ['build']);
    gulp.watch('app/**/*.html', ['html']);
});

/**
 * Default task
 */
gulp.task('default', ['scripts', 'html', 'browser-sync', 'build', 'watch']);
