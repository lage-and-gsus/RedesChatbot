$(function () {


    var message = $('#chat-message');
    var pregunta = true;
    var li_ini = "<li class=\"right clearfix\">";
    var span_ini = "<span class=\"chat-img pull-right\">";
    var img = "<img src=\"http://placehold.it/50/FA6F57/fff&text=V\" alt=\"User Avatar\" class=\"img-circle\" />";
    //Cierra span
    var div1 = "<div class=\"chat-body clearfix\">";
    var div2 = "<div class=\"header\">";
    var strong = "<strong class=\"pull-right primary-font\">Visitante</strong>";
    //cierra div


    $('#message-box').submit(function (e) {
        e.preventDefault();
        if(!message.val() == ""){
           
            var enviar = li_ini + span_ini + img + "</span>" + div1 +div2 +
            strong + "</div>" +"<p>" + message.val() +"</p>" + "<br> </div> </li>"

            $("#chat").append(enviar);
            message.val('');
            pregunta = true;
        }
    });



});