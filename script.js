console.log("Script started");

function changeColor() {
    console.log("click");

    let color= prompt("Enter a new color for your poem!");
    let poem= document.getElementById("poem");
    
    poem.style.color = color;
}

function changeFontSize() {
    console.log("click");

    let fontSize= prompt("Enter a font size of your choosing!");
    let poem= document.getElementById("poem");

    poem.style.fontSize = fontSize +"px";
}