(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://popping-heat-4199.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));
    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
