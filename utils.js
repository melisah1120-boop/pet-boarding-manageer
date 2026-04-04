let nextPetId = 1;

let availableDogRooms = [];
let availableCatRooms = [];

// Fill dog rooms 1 through 30
for (let i = 1; i <= 30; i++) {
  availableDogRooms.push(i);
}

// Fill cat rooms 31 through 42
for (let i = 31; i <= 42; i++) {
  availableCatRooms.push(i);
}

function getNextPetId() {
  return nextPetId++;
}

function getNextRoomNumber(petType) {
  if (petType === 'Dog') {
    if (availableDogRooms.length === 0) {
      return null;
    }
    return availableDogRooms.shift();
  }

  if (petType === 'Cat') {
    if (availableCatRooms.length === 0) {
      return null;
    }
    return availableCatRooms.shift();
  }

  return null;
}

function releaseRoomNumber(petType, roomNumber) {
  if (petType === 'Dog') {
    availableDogRooms.push(roomNumber);
    availableDogRooms.sort((a, b) => a - b);
  }

  if (petType === 'Cat') {
    availableCatRooms.push(roomNumber);
    availableCatRooms.sort((a, b) => a - b);
  }
}