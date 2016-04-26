(function() {
     function LandingCtrl(Room,Message,$uibModal) {
         this.title = "Bloc Chat";
         this.rooms = Room.all;
         this.newRoom = newRoom;
         this.roomName = "Select a Room";
         this.newMessage = "";

         this.setRoom = function (room) {
           this.roomName = room.$value;
           this.roomVal=room.$id;
           this.messages=Room.getMessages(this.roomVal);
         };

         this.sendMessage=function() {
           Message.send(this.newMessage, this.roomVal);
         };

         this.setRoom = function (room) {
           this.roomName = room.$value;
           this.roomVal=room.$id;
           this.messages=Room.getMessages(this.roomVal);
         };

         this.animationsEnabled = true;

          function newRoom() {
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
         .controller('LandingCtrl', ['Room','Message','$uibModal', LandingCtrl]);
 })();
