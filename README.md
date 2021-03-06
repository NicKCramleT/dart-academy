# dart-academy.cl

Website for the academy of dance, recreation and general arts "D'Art Academy"

[![GitHub issues](https://img.shields.io/github/issues/NicKCramleT/dart-academy.svg)](https://github.com/NicKCramleT/dart-academy/issues)
[![GitHub forks](https://img.shields.io/github/forks/NicKCramleT/dart-academy.svg)](https://github.com/NicKCramleT/dart-academy/network)
[![GitHub stars](https://img.shields.io/github/stars/NicKCramleT/dart-academy.svg)](https://github.com/NicKCramleT/dart-academy/stargazers)
[![GitHub license](https://img.shields.io/github/license/NicKCramleT/dart-academy.svg)](https://github.com/NicKCramleT/dart-academy/blob/master/LICENSE)

## Technologies

The site is under development with the next libraries:

* [Bootstrap](http://getbootstrap.com/)
* [Font Awesome](http://fontawesome.io/)
* [Material Design Iconic Font](http://zavoloklom.github.io/material-design-iconic-font/)
* [MixitUp](https://www.kunkalabs.com/mixitup/)
* [ChartJS](http://www.chartjs.org/)
* [Circles.js](https://github.com/lugolabs/circles)
* [Prism](http://prismjs.com/)
* [Animate.css](https://daneden.github.io/animate.css/)
* [WOW.js](http://mynameismatthieu.com/WOW/)
* [Slidebars](https://www.adchsm.com/slidebars/)
* [Masonry](http://masonry.desandro.com/)
* [Plyr](https://plyr.io/)
* [Countdown](http://hilios.github.io/jQuery.countdown/)
* [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/)
* [Slider Revolution](https://revolution.themepunch.com/)
* [Lightbox 2](http://lokeshdhakar.com/projects/lightbox2/)
* [Gulp v4](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [Node.js](https://nodejs.org/es/download/)

## Installation and Usage
You need to install node.js, and all the dependencies before start using the application, for example:

 ```
 $ npm install or yarn
 $ npm run start or yarn start
 ```

###### Gulp Tasks

| Task Name                     | Description
| ----------------------------- | --------------------------------------------------------------------- |
| `npm run start or yarn start` | Starts a development environment which watches for any project changes. |
| `npm run build or yarn build` | Compile all files ready for production. Javascript and CSS are bundled and minified. Images and svg files are minified. |


## File Structure
The working directory for development is `src/`.
Everything inside `dev/` folder is for development purposes only. You should not change anything in `dev/` folder.

```
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── dev
├── build
├── config
│   ├── server-config.js
│   ├── gulp-config.js
│   ├── node-env.js
│   └── webpack.config.js
└── src
    ├── images
    ├── js
    ├── sass
    ├── *.html
    └── index.html
```

### Images
All images should be placed inside the `src/images/` folder. After `npm run build or yarn start` only those images which are located in `src/images/` will be minified.

### JS
All the scripts should be placed inside the `src/js/` folder. Currently `src/js/main.js` is the main javascript file which handles all other modules if there is any. You can split your javascript code in to seperate files. And use ES6 `import and export` features to use them where you need to.

For example:

```
├── src
    └── js
        ├── main.js
        └── ui
            └── module.js
```

### SCSS (SASS)
All `scss` files should be placed in the `src/sass/` folder. Currently `sass/main.scss` is the main `scss` file where all other `scss` files should be be imported.
