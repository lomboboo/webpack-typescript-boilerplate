const path = require( "path" );

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
            path.resolve( __dirname, "node_modules" )
          ],
          loader: 'istanbul-instrumenter-loader'
        },
        {
          test: /\.ts$/,
          loaders: [ 'awesome-typescript-loader' ],
          exclude: path.resolve( __dirname, "node_modules" ),
        },
        {
          test: /\.ts$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: {
            configFile: 'tslint.json',
            tsConfigFile: 'tsconfig.json'
          }
        }
      ]
    }
  };

};
