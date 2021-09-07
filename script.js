let Si=document.getElementById('Si');
Si.addEventListener("click",function(e){
  alert("Gracias sabia que aceptarias"); 
} );

let No=document.getElementById('No');
No.addEventListener("mousemove",function(e){
  let x = Math.round( Math.random() *93 );
  let y = Math.round( Math.random() *93 );
  No.style.left = x+"%";
  No.style.top = y+"%";
} );