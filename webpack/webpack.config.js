const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

/* merges common webpack configuration with prod or dev based on env variable*/
module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
