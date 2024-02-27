$(document).ready(function () {  
$('#boton').toolbar({content: '#tolbar',
position: 'bottom', //top, left, rigth, bottom
style: 'primary', // ' ', primary, danger, warning, info, success, info-o, dark, ligth
//animation: standard,flip, grow, flyin, bounce
event: 'click', //hover
//hideOnClick:true,
//adjustment:35
hideOnClick: true});

$('#boton2').toolbar({content: '#tolbar2',
position: 'left',
style: 'danger',
event: 'hover',
animation: 'bounce',
adjustment:60});

//eventos
$('#boton2').on('toolbarShown',mostar); 
$('#boton2').on('toolbarHidden',ocultar); 
$('#boton2').on('toolbarItemClick',clicar); 


$('#img-toolbar').toolbar({content: '#tolbar3',
position: 'bottom',
style: 'info-o',
event: 'hover',
animation: 'grow',
adjustment:60})
})
function mostar(e) {
    console.log(e.target);
    console.log ('se ha mostrado');
}
function ocultar(){
    console.log ('ocultado');
};
function clicar() {
    console.log ('se ha hecho click');
}
