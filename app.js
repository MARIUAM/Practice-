//lowercase 
var personName = "maryam";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("tittlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
