
const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      KarmaServer = require('karma').Server;

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

gulp.task('test:browser', () => {
  const karmaConfig = {
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    reporters: ['mocha']
  };

  // karma.start(karmaConfig);
  const karmaServer = new KarmaServer(karmaConfig);
  karmaServer.start();
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

