
var test1 = prompt("Dogs or Cats?");
var dateNumber = 1;
var escape = "This guy is a nut. Run away!";

if (test1 == "Dogs"){
        console.log("He loves dogs. Case closed.");
        dateNumber += 1;
    } else if (test1 != "Dogs"){
        var test2 = prompt("Stones or Beatles?");
        var test3 = prompt("2Pac or Biggie?");
        if (test2 == "Beatles" && test3 == "Biggie"){
            console.log(escape);
        } else if (test2 == "Stones" || test3 == "2Pac") {
            console.log("Be skeptical. Be very, very skeptical."); 
            var chitecture = prompt("Do you like Victorian houses?");
            if (chitecture != "yes"){
                dateNumber += 1;
            } else {
                console.log(escape);
                }
            }
    }