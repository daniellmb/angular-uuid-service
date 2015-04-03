/**
 * @file
 *
 * ### Responsibilities
 * - automate common tasks using gulp
 *
 * @author Daniel Lamb <dlamb.open.source@gmail.com>
 */
'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    complexity = require('gulp-complexity'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    karma = require('gulp-karma'),
    ng = [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js'
    ],
    source = 'angular-uuid-service.js',
    sourceMin = 'angular-uuid-service.min.js',
    specs = 'test/spec/*.spec.js',
    karmaConf = 'test/karma.conf';

gulp.task('lint', function () {
  return gulp.src([source, specs])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('gpa', function () {
  return gulp.src([source, specs])
    .pipe(complexity({
      cyclomatic: [8],
      halstead: [12],
      maintainability: [100]
    }));
});

gulp.task('test', function () {
  return gulp.src(ng.concat([source, specs]))
    .pipe(karma({
      configFile: karmaConf + '.js'
    }));
});

gulp.task('min', function () {
  return gulp.src(source)
    .pipe(rename(sourceMin))
    .pipe(uglify({
      outSourceMap: true
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('test-min', ['min'], function () {
  return gulp.src(ng.concat([sourceMin, specs]))
    .pipe(karma({
      configFile: karmaConf + '.js',
      reporters: ['dots']
    }));
});

gulp.task('default', ['lint', 'gpa', 'test', 'test-min']);
