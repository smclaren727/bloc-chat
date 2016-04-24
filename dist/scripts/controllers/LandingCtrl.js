(function() {
  function LandingCtrl(Room) {
    this.title="Bloc Chat";
    this.rooms=Room.all;
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Room', LandingCtrl]);
})();
