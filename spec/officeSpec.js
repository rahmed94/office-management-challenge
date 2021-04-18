'use strict';

describe('Office', () => {
  let office;
  let room1;
  let room2;

  beforeEach( () => {
    office = new Office();
    room1 = new MeetingRoom('Ramadan');
    room2 = new MeetingRoom('Rajab')
  });
  it('can add rooms', () => {
    office.createMeetingRoom(room1);
    expect(office.rooms).toEqual([room1])
  });

  it('can view all rooms', () => {
    office.createMeetingRoom(room1);
    office.createMeetingRoom(room2);
    expect(office.viewAllRooms()).toEqual([room1, room2])
  });

  it('can view all the available rooms', () => {
    office.createMeetingRoom(room1);
    office.createMeetingRoom(room2);
    room1.enter();
    expect(office.availableRooms()).toEqual([room2]);
  });
});