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
var e = ["ovo", "je", "jedna", "jednostavna", "recenica"];
let f=e.join(" ").concat(".");
//Ovdje koristim dvije ugradene funkcije join i concat,join za dobiti string od danih rijeci, a concat za dodati tocku na kraju
console.log(f.replace(f.charAt(0),f.charAt(0).toUpperCase()));
//U ispisu koristim replace, za zamijeniti prvo slovo recenice, sa velikim slovom
//Sve ovo je funkcionalna paradigma, opet koristena radi "ljepote"
