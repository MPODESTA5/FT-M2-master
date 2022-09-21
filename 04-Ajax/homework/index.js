$('#boton').click(function(){
    $('#lista').empty();
    $.get('http://localhost:5000/amigos',function(data){
        data.forEach(e => $(`<li id=${e.id}>${e.name} X </li>`).appendTo('ul'))
    });
    })

$('#search').click(function(){
    let input = $('#input');
    let valor = input[0].value;
    let span = document.getElementById('amigo');
    span.innerHTML = document.getElementById(valor).innerHTML
    input[0].value = '';
    })

$('#delete').click(function(){
    let output = $('#inputDelete');
    let valor2 = output[0].value;
    let borrar = document.getElementById(valor2);
    let span2 = document.getElementById('success');
    borrar.remove();
    span2.innerHTML = 'Tu amigo fue borrado con exito';
   output[0].value = '';    
})


    

