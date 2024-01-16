const mainimg=document.getElementById('imagemain');



//---------------------------------------------------------------------------------
let count= 0;

//---------------------------------------------------------------------------------

setInterval(function (){
    console.log(count)
    switch (count) {
        case 0:  mainimg.src="assets/image/pic2.gif" ;  count+=1; break;
        case 1:   mainimg.src="assets/image/pic1.gif"  ; count+=1; break;
        case 2:   mainimg.src="assets/image/download.jpg"; count=0; break;
    }

},5200)