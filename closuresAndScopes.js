function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    callbacks.push(
      (function (index) {
        return function () {
          return index;
        };
      })(i)
    );
  }

  return callbacks;
}
