var autoprefixer = require('autoprefixer'),
    babel = require('gulp-babel'),
    browserify = require('browserify'),
    cssimport = require('postcss-import'),
    cssnano = require('cssnano'),
    cssnext = require('cssnext'),
    gulp = require('gulp'),
    inject = require('gulp-inject'),
    nested = require('postcss-nested'),
    postcss = require('gulp-postcss'),
    react = require('gulp-react'),
    source = require('vinyl-source-stream'),
    svgstore = require('gulp-svgstore'),
    watch = require('gulp-watch');


gulp.task('build-js', function(){
    return gulp.src('src/**/*.js*')
        .pipe(react())
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});


gulp.task('copy-css', function(){
    var processors = [
        cssimport,
        nested,
        cssnext,
        autoprefixer({browsers: ['last 2 versions']}),
        cssnano
    ];
    return gulp.src('src/public/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/public/css'));
});


gulp.task('copy-images', function(){
    return gulp.src('src/public/img/**/*')
        .pipe(gulp.dest('dist/public/img'));
});


gulp.task('copy-scripts', ['build-js'], function(){
    return browserify('dist/public/js/client-side.js').bundle()
        .pipe(source('client-side.js'))
        .pipe(gulp.dest('dist/public/js'));
});


gulp.task('copy-svg', function(){
    var svgs = gulp.src('src/public/svg/*')
        .pipe(svgstore({ inlineSvg: true }));

    function fileContents(filePath, file){
        return file.contents.toString();
    };

    return gulp
        .src('src/views/partials/templates/inline_svg.handlebars')
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest('dist/views/partials'));
});


gulp.task('copy-views', function(){
    return gulp.src('src/views/**/*', { base: 'src' })
        .pipe(gulp.dest('dist'));
});


gulp.task('watch-files', function(){
    watch('src/**/*', function(){
        gulp.start('copy-css');
        gulp.start('copy-images');
        gulp.start('copy-scripts');
        gulp.start('copy-svg');
        gulp.start('copy-views');
    });
});


gulp.task('default', function(){
    gulp.start('copy-css');
    gulp.start('copy-images');
    gulp.start('copy-scripts');
    gulp.start('copy-svg');
    gulp.start('copy-views');

    gulp.start('watch-files');
});