const path = require( "path" );

const help = require("./helper");
const ENV = process.env.NODE_ENV;
const ENV_msg = ENV === 'prod' ? 'PRODUCTION' : ( ENV === 'dev' ? 'DEVELOPMENT' : 'TEST');
console.log( `--------------------------------------------------------------------------------------------------------------------` );
console.log( `----------------------------------------------------- ${ENV_msg} ---------------------------------------------------` );
console.log( `--------------------------------------------------------------------------------------------------------------------` );

module.exports = function () {
  return {

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
