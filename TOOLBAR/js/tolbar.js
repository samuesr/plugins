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

$('#boton2').on('toolbarShown',mostar);

})
function mostar(e) {
    console.log(e.target);
}
