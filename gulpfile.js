
const gulp = require('gulp'),
      browserSync = require('browser-sync');

gulp.task('serve', () => {
  browserSync.init({
    notify: false,
    port: 8080,
    server: {
      baseDir: ['app'],
      routes: {
        '/bower_components':'bower_components'
      }
    }
  });

  gulp.watch(['app/**/*.*'])
    .on('change', browserSync.reload);
});

gulp.task('test:serve', () => {
  browserSync.init({
    notify: false,
    port: 8081,
    server: {
      baseDir: ['test'],
      routes: {
        '/bower_components':'bower_components',
        '/app':'app'
      }
    }
  });

  gulp.watch(['app/**/*.*', 'test/**/*.*'])
    .on('change', browserSync.reload);
});

