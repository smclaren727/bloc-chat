(function() {
  function NewRoomCtrl($firebaseArray, $uibModalInstance) {
    var nr = this;
    nr.title = "Create A Room";
    nr.roomName = "";

    var firebaseRef = new Firebase("https://popping-heat-4199.firebaseio.com/");
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    nr.addRoom = function() {
      rooms.$add({ $value: nr.roomName });
      $uibModalInstance.close(this);
    };

    nr.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChat')
    .controller('NewRoomCtrl', ['$firebaseArray','$uibModalInstance', NewRoomCtrl]);
})();
