const name = "My Name is SpaceX Tesla Mask";
console.log(name.slice(1, 3));

const namearr = name.split(" ");
console.log(namearr);

namearr.splice(2, 2, "Tesla")
console.log(namearr);

console.log(namearr.splice(2, 2, "Tesla"));
