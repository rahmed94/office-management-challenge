class Office {
  
  constructor() {
    this.rooms = [];
  };
  createMeetingRoom(room) {
    this.rooms.push(room);
  };

  viewAllRooms() {
    return this.rooms;
  };

  availableRooms() {
    return this.rooms.filter(room => room.isAvailable() === true);
  };
}