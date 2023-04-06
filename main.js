let a=document.getElementById("something");
let element= ""
for(i=1;i<=5;i++){
    element+=`<p>beginning of the page ${i} </p>`
}
a.innerHTML= element
document.getElementById("something").style.color = "red";
document.getElementById("something").style.fontSize = "40px"
