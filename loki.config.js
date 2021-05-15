module.exports = {
  configurations: {
    "chrome.laptop": {
      target: "chrome.docker",
      width: 1366,
      height: 768,
      deviceScaleFactor: 1,
      mobile: false,
    },
    "chrome.iphone7": {
      target: "chrome.docker",
      preset: "iPhone 7",
    },
  },
  chromeDockerUseCopy: !!process.env.CI,
  fileNameFormatter: ({ configurationName, kind, story }) =>
    `${kind} > ${story} on ${configurationName.split(".")[1]}`.toLowerCase(),
};
