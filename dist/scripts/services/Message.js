(function() {
  function Message(Room,$firebaseArray, $cookies) {
    var firebaseRef = new Firebase("https://popping-heat-4199.firebaseio.com/");
    var messages = $firebaseArray(firebaseRef.child('messages'));
    var messageDate = new Date();

    return {
      send: function(newMessage, currentRoomId) {
        messages.$add({ content: newMessage,
                        roomId: Number(currentRoomId),
                        sentAt: messageDate.toUTCString(),
                        username: $cookies.get("blocChatCurrentUser")
                      });
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['Room','$firebaseArray','$cookies', Message]);
})();
