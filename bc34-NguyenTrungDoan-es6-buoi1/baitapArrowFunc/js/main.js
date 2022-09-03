document.addEventListener("contextmenu",function(index){
    index.preventDefault()
},!1),document.onkeydown=function(index){
        return 123!=(index=index||window.event).keyCode&&(!index.ctrlKey||!index.shiftKey||73!=index.keyCode)&&void 0
    };

const colorList=["pallet","viridian","pewter","cerulean","vermillion","lavender","celadon","saffron","fuschia","cinnabar"];

let container=document.getElementById("colorContainer");

loadColorPick=(()=>{for(let index=0;index<colorList.length;index++)container.innerHTML+=0==index?"<button class='color-button "+colorList[index]+" active'></button>":"<button class='color-button "+colorList[index]+"'></button>"})
loadColorPick()
let colorPicker=document.getElementsByClassName("color-button"),house=document.getElementById("house");

for(let index=0;index<colorPicker.length;index++)colorPicker[index].addEventListener("click",function(){
    changeColor(colorList[index],index)
});
changeColor=((index,e)=>{for(let index=0;index<colorPicker.length;index++)colorPicker[index].classList.remove("active");colorPicker[e].classList.add("active"),house.className="house "+index});