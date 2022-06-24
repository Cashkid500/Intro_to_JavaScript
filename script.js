const myScreenOutput = document.getElementById("aboutMe");

const firstName = "Balogun";
const lastName = "Murtadho";
const country = "Nigeria";
let height = "6ft";

myScreenOutput.innerHTML = `<h2> My name is ${firstName} ${lastName}  with a height of ${height} from ${country} </h2>`;

let myDetails = `My name is ${firstName} ${lastName} with a height of ${height} from ${country}`;

console.log(myDetails);