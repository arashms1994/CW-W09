let outerDiv=document.getElementById("outerDiv");
outerDiv.addEventListener("click",()=>{alert('Bubbling outerDiv ')});
let middleDiv=document.getElementById("middleDiv");
middleDiv.addEventListener("click",()=>{alert('Bubbling middleDiv ')});
let innerdiv=document.getElementById("innerdiv");
innerdiv.addEventListener("click",()=>{alert('Bubbling innerDiv')});


// let outerDiv=document.getElementById("outerDiv");
// outerDiv.addEventListener("click",()=>{alert('capturing outerDiv ')},true);

// let middleDiv=document.getElementById("middleDiv");
// middleDiv.addEventListener("click",()=>{alert('capturing middleDiv ')},true);
