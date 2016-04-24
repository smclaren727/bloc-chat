(function() {
  function LandingCtrl(Room, $uibModal) {
    var lc = this;
    lc.title = "Bloc Chat";
    lc.rooms = Room.all;
    lc.open = open;
    lc.animationsEnabled = true;

    function open() {
      var modalInstance = $uibModal.open({
        animation: lc.animationsEnabled,
        templateUrl: '/templates/newroom.html',
        size: "sm",
        controller: "NewRoomCtrl",
        controllerAs: "newroom",
      });
    }
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Room','$uibModal', LandingCtrl]);
})();
