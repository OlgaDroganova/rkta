module.exports = {
  babelrcRoots: [".", "./packages/*"],
  presets: ["@babel/env", "@babel/react"],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from"
  ]
}
