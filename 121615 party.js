var RSVPd = ["Ryan","Jon","Evan","Jane","Jules","Quinten"];
// console.log(RSVPd.length);
// console.log(RSVPd[6]);

// console.log(RSVPd.indexOf("Jane"));
// console.log(RSVPd.concat("Annie"));

// var lateRSVP = ["Annie","Puddles"];
// console.log(RSVPd.concat(lateRSVP));

//RSVPd = RSVPd.concat(["Annie","Puddles"]);
//console.log(RSVPd);


// RSVPd.push("Claire");
// console.log(RSVPd);

// var dessert = "cookie";
// console.log(dessert.toUpperCase());

var caps = [];
for (var i = 0; i < RSVPd.length; i++) {
    var name = RSVPd[i];
    name = name.toUpperCase();
    caps.push(name);
}
console.log(caps);

function myUpperCase(s){
    return s.toUpperCase() + "!";
}
RSVPd = RSVPd.slice(0,3);
console.log(RSVPd.map(myUpperCase));

var mw = {
    bike: "thing that makes me sad to think about",
    sleep: "zzz",
    "mega city": "HONG KONG",
    snoring: "zzz"
};

console.log(mw.bike);

mw["bike"] = "vehicle";

console.log(mw.bike);

console.log(mw);
