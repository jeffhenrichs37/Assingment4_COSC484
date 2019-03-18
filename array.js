var w = ["Ravens", "stadium", "is", "Orioles", "stadium"];
var x = ["Baltimore", "Downtown", "located", "near"];
var y = ["located", "Downtown", "near", "Fells Point", "Fed Hill", "Canton"];
var z = ["Towson", "Stevenson", "UMBC", "University", "Loyola", "University", "Morgan State", "Frostburg"];

var arr =[];

// Start implementation below:
w.pop();
w.pop();
//console.log(w);

y.pop();
y.pop();
y.pop();
//console.log(y);

x.pop();
x.pop();
x.pop();
//console.log(x);

z.pop()
arr = z.pop();
//console.log(arr);

x = x.concat(w);
//console.log(x);

x = x.concat(y);
//console.log(x);

x.push(arr);
//console.log(x);

arr = x;
console.log(arr);