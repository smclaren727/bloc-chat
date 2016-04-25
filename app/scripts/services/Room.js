(function() {
  function Room($firebaseArray) {
    var firebaseRef = new Firebase("https://popping-heat-4199.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms,
      getMessages: function(roomId) {
        var msgRef = firebaseRef.child('messages').orderByChild('roomId').equalTo(Number(roomId));
          return $firebaseArray(msgRef);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
