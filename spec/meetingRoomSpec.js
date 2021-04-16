'use strict';

describe('Meeting room', () => {
  let meetingRoom;

  beforeEach( () => {
    meetingRoom = new MeetingRoom();
  });

  it('checks if the room is available', () => {
    expect(meetingRoom.isAvailable()).toEqual(true);
  });

  
});