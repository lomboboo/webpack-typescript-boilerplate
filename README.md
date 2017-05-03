<a align="center" href="https://webpack.js.org/">
  <img width="440" src="https://cdn-images-1.medium.com/max/1920/1*gdoQ1_5OID90wf1eLTFvWw.png" />
</a>

# Webpack 2 Typescript Starter
Javascript custom starter kit that includes:
> [Webpack 2](https://webpack.js.org/), [TypeScript 2](http://www.typescriptlang.org/), [Istanbul](https://github.com/gotwarlost/istanbul), [Mocha](https://mochajs.org/), [Karma](https://karma-runner.github.io/), [@types](https://www.npmjs.com/~types), [TsLint](http://palantir.github.io/tslint/), [Handlebars](http://handlebarsjs.com/).

# Table of contents:
* [Start](#start)
  * [Get project](#get-project)
  * [Installing](#installing)
  * [Usage](#usage)
* [File structure](#file-structure)
* [Configuration](#configuration)
* [@types and NODE_ENV variables](#extra)

## Start 
To start using this seed to need to clone or download it first.
## Get project
```bash
# clone to your own project directory
git@github.com:lomboboo/webpack2-typescript-seed.git folder-name

# remove .git directory and initialize git on your own
rm -rf ./.git
git init
```
## Installing
```bash
# then inside project directory install dependencies with npm
npm install
```
## Usage
```bash
# to start develop run :
npm start

# to make build from the project run:
npm run build
```

## File structure
Schema of the project file structure:
```
webpack2-typescript-seed/
 ├──config/                        * configuration
 │   ├──karma.conf.js              * karma config for unit tests
 │   ├──webpack.dev.js             * webpack development config
 │   ├──webpack.prod.js            * webpack production config
 │   └──webpack.test.js            * webpack testing config
 │
 ├──src/                           * our source files that will be compiled to javascript
 │   ├──app/                       * application directory
 │   │
 │   ├──partials/                  * partial files: ex., header.hbs, footer.hbs
 │   │
 │   └──public/                    * static assets
 │   │   ├──css/                   * css for 3-rd party libraries: ex., animate.css
 │   │   ├──font/                  * fonts go here
 │   │   ├──img/                   * project static images
 │   │   └──meta/                  * meta data: ex., favicons
 │   │
 │   └──stylesheets/               * less files for styling
 │   
 │
 ├──.editorconfig                  * basic rules for different IDE http://editorconfig.org/
 ├──.gitignore                     * files and directories to be ignored by GIT
 ├──LICENCE                        * Licence information
 ├──mocha.setup.js                 * //TODO
 ├──postcss.config.js              * //TODO: delete
 ├──REAMME.md                      * read to start using repo
 ├──tsconfig.json                  * typescript config used outside webpack
 ├──tslint.json                    * typescript lint config
 └──webpack.common.config.js       * webpack common configuration file, used by different environments

```

