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
          test: /\.js$/,
          enforce: "post",
          exclude: /(node_modules)/,
          loader: 'istanbul-instrumenter-loader'
        },
        {
          test: /\.ts$/,
          loaders: [ 'awesome-typescript-loader' ],
          include: path.resolve( __dirname, "src/app" )
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
