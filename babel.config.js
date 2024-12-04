module.exports = {
  presets: [
    "@babel/preset-env", // Support for the latest JavaScript features
    "@babel/preset-react", // Support for React JSX syntax
  ],
  plugins: ["@babel/plugin-proposal-optional-chaining"], // Support for optional chaining and nullish coalescing
};
