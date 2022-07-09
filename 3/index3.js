$(document).ready(function(){
    $('#submit').click(function(){
        event.preventDefault()
        let name = $('#firstName').val();
        let family = $('#lastName').val();
        $('p').text(`${name} ${family}`);
    })
})