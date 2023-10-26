const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

const compilescss = () => {
    return src(['src/assets/css/styles.scss'])
    .pipe(sass
        ({
            includePaths:[
                "./node_modules/@uswds/uswds/packages",
                "./node_modules/@uswds"
            ]
        })
    )
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(dest("src/assets/css"))
}

exports.default = compilescss;