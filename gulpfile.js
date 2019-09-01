const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const panini = require('panini');


function reload(done) {
  browserSync.reload();
  done();
}

function startBrowserSync() {
  browserSync.init({
    server: {
      baseDir: '../app'
    },
  });
}


function runSass() {
  return gulp.src('../app/scss/style.scss')
    .pipe(sass()) // Konvertiere Sass zu CSS mit gulp-sass
    .pipe(gulp.dest('../app/css'))
    .pipe(browserSync.stream());
}


function runWatch() {
  startBrowserSync();
  gulp.watch('./scss/**/*.scss', runSass);
  gulp.watch('./app/**/*.html', reload);
  gulp.watch('./js/**/*.js', reload);
  gulp.watch('./app/assets/icons/**/*svg', reload);
  gulp.watch(['./src/{layouts,partials}/**/*'], gulp.series(panini.refresh), reload);

}




gulp.task('pages', function () {
  gulp.src('src/pages/**/*.html')
    .pipe(panini({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/partials/'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy:images', function () {
  return gulp.src('assets/img/**/*')
    .pipe(gulp.dest('dist/assets/images'));
});






gulp.task('watch', runWatch);
gulp.task('sass', runSass);