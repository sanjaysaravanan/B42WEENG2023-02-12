const games = ['Foot', 'Volley', 'Basket'];

// Football
// Volleyball
// Basketball

// function printGame(game) {
//   console.log(`${game}ball`);
// }

function displayInfoUser({ name, age, score }) {
  console.log('Name', name);
  console.log('Age', age);
  console.log('Score', score);
}

const printGame = (game) => {
  console.log(`${game}ball`);
}

games.forEach(printGame);


function finihGame(currentDetails, userDetails) {
  displayInfoUser(userDetails);
  displayInfoScore(currentDetails);
}

function funcThree(funcFour) {

}

function funcFour() {

}

function funcTwo(a, funcThree) {
  var b = a;
  funcThree(b, funcFour);
}

function funcOne(funcTwo) {
  var a = 1;
  funcTwo(a);
}