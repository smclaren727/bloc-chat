(function() {
     function LandingCtrl(Room, $uibModal, $scope) {
         this.title="Bloc Chat";
         this.rooms=Room.all;
         this.open=open;
         this.roomName="Select a Room";
         this.messages=[];

         this.setRoom = function (room) {
		//    var roomId=room.$id;
             this.roomName = room.$value;
           this.roomVal=room.$id;
             this.messages=Room.getMessages(this.roomVal);
         };

         this.animationsEnabled = true;

          function open() {
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled,
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
