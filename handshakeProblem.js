function getParticipants(handshakes) {
  let people = 1; // start with 1 person
  let shakes = 0; // count number of handshakes
  while (shakes < handshakes) {
    shakes += people - 1; // each new person shakes hands with all previous people
    people++; // add a new person
  }
  return people - 1; // return the number of people, minus the last person added
}
