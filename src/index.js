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
function recenica(e)
{
  var s = "";
  s = e[0].charAt(0).toUpperCase() + e[0].slice(1, e[0].length);
  s += " ";
  for (let i=1;i<e.length;i++)
  {
    s+=e[i];
    if(i===e.length-1)
      s+=".";
    else
      s+=" ";
  }  
  return s;
}
console.log(recenica(e));
//Ovdje sam koristio proceduralnu programsku paradigmu cisto da ne bude uvijek imperativna, iako po meni nepotrebno definirirat funkciju za ovakav "zadacic"

