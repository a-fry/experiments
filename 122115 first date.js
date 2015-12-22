
var test1 = prompt("Dogs or Cats?");
var test2 = prompt("Stones or Beatles?");
var test3 = prompt("2Pac or Biggie?");

var dateNumber = 1;

if (test1 == "Dogs"){
        console.log("He loves dogs. Case closed.");
        dateNumber += 1;
    } else if (test1 == "Cats"){
        if (test2 == "Beatles" && test3 == "Biggie"){
            console.log("This guy is a nut. Run away!");
        } else if (test2 == "Stones" || test3 == "2Pac") {
            console.log("Be skeptical. Be very, very skeptical."); 
            var chitecture = prompt("Do you like Victorian houses?");
            if (chitecture != "yes"){
            dateNumber += 1;
        }
    }
}