let div=document.createElement("div");
div.setAttribute("class","main1");



let formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");


let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Covid 19 API");
input.style.width="520px";

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="200px";
button.style.marginTop="20px";
button.addEventListener("click",foo);
//for active cases
let active=document.createElement("div");
active.setAttribute("id","active");
//<div id="active">Total Number Of Active cases:123455</div>
formgroup.append(input,button,active);

//For active cases

//for recovered cases
let recovered=document.createElement("div");
recovered.setAttribute("id","recovered");
//<div id="active">Total Number Of recovered cases:123455</div>
formgroup.append(active,recovered);
//for recovered cases


//for deaths cases
let deaths=document.createElement("div");
deaths.setAttribute("id","deaths");
//<div id="active">Total Number Of deaths cases:123455</div>

//for deaths cases
formgroup.append(input,button,active, recovered, deaths);
div.append(formgroup);
document.body.append(div);


async function foo(){
try {
let countryname=document.getElementById("main").value;
console.log(countryname);
let res=await fetch(`https://api.covid19api.com/dayone/country/${countryname}`);
let res1= await res.json();
console.log(res1);
//998
var index=res1.length-1;
//res1[998].Active
console.log(res1[index].Active);
active.innerHTML=`Total Active cases:${res1[index].Active}`;


console.log(res1[index].Recovered);
recovered.innerHTML=`Total Recovered cases:${res1[index].Recovered}`;



console.log(res1[index].Deaths);
deaths.innerHTML=`Total Deaths cases:${res1[index].Deaths}`;

} catch (error) {
  console.log(error);
}

}