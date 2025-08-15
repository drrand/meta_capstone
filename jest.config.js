module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // Mock CSS imports
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",

    // Mock static file imports
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp|mp4|mp3|woff|woff2)$":
      "<rootDir>/__mocks__/fileMock.js"
  }
};
