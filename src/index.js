import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var e = ["ovo", "je", "jedna", "jednostavna", "recenica"];
var s = "";
s = e[0].charAt(0).toUpperCase() + e[0].slice(1, e[0].length);
s += " ";
for (var i = 1; i < e.length; i++) {
  s += e[i];
  if (i === e.length - 1) s += ".";
  else s += " ";
}
console.log(s);
