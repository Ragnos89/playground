const colors = ['white','blue','orange'];
let color1;
let color2;
let color3;
let color4;
[color1,color2] = colors;
[color3,,color4] = colors;
console.log(color1,color2);
console.log(color3,color4);