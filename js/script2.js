function show(event, id){
    console.log(event);
    console.log(id)
    if(document.getElementById(id).style.height == '92px' | document.getElementById(id).style.height == '')
    {
        console.log("Agrandado.")
        document.getElementById(id).style.display="block";
        document.getElementById(id).style.height='fit-content';
        event.target.src='./imagenes/menos.png';
    }else{
        console.log("Achicado.")
        document.getElementById(id).style.height ='92px';
        event.target.src='./imagenes/mas.png';
        document.getElementById(id).style.display="-webkit-box";
    }
}