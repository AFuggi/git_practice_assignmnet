let string = "jackson";
let new_str = "";
for (let i = string.length - 1; i >= 0; i--) {
  new_str += string[i];
}
if (new_str == string) {
  console.log("Yes");
} else {
  console.log("No");
}
