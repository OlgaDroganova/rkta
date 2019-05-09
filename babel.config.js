module.exports = {
  babelrcRoots: [".", "./packages/*"],
  only: ["**/*.ts", "**/*.tsx"],
  presets: [
    "@babel/env",
    "@babel/react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from"
  ]
}
