Use the following gulp plugins:

gulp-load-plugins
gulp-plumber
gulp-sourcemaps
gulp-sass
gulp-shorthand
autoprefixer
gulp-cssmin
gulp-inject
browser-sync (css inject, avoid page reload)


Requirements:
- Use sass (scss)
- Create the following gulp tasks:
    - "injectAppFiles" --> uses --> gulp-inject
    - "styles" --> uses: gulp-load-plugins, gulp-plumber, gulp-sourcemaps, gulp-sass, gulp-shorthand, autoprefixer, gulp-cssmin, browser-sync.
    - "serve" --> dependencies: ["styles"] uses: browser-sync and also uses gulp.watch to inject css (using browser sync) based on .scss changes.
- After setting up all the basic workflow tools, implement the designs attached in this practice (notice the radial background and all the little details such as gradients, shadows, borders, etc. The design must look very similar to the images)

NOTE: Make sure it works in Chrome, firefox and Safari (just for this practice). Please don't use flexbox in this practice.
