requirejs.config({
  baseUrl: "/",
  paths: {
    jquery: '/js/lib/jquery'
  }
  // waitSeconds: 15
});

require(["/js/index.js"]);
