const path = require( "path" );
const chalk = require( "chalk" );

const help = require("./helper");
const ENV = process.env.NODE_ENV;
const ENV_msg = ENV === 'prod' ? 'PRODUCTION' : ( ENV === 'dev' ? 'DEVELOPMENT' : 'TEST');
console.log( `${chalk.underline('Running in Environment:')} ${chalk.bold.green(ENV_msg)}` );

module.exports = function () {
  return {

    stats: "none",

    resolve: {
      extensions: [ '.ts', '.js' ]
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          enforce: "post",
          exclude: [
            help.root( "node_modules" )
          ],
          loader: 'istanbul-instrumenter-loader'
        },
        {
          test: /\.ts$/,
          loaders: [ 'awesome-typescript-loader' ],
          exclude: help.root( "node_modules" ),
        },
        {
          test: /\.ts$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: {
            configFile: help.root('tslint.json'),
            tsConfigFile: help.root('tsconfig.json')
          }
        }
      ]
    }
  };

};
