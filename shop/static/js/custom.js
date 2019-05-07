function press(){
  var message = $('#chat-message');
  var li_ini = "<li class=\"left clearfix\">";
  var span_ini = "<span class=\"chat-img pull-left\">";
  var img = "<img src=\"http://placehold.it/50/FA6F57/fff&text=V\" alt=\"User Avatar\" class=\"img-circle\" />";
  //Cierra span
  var div1 = "<div class=\"chat-body clearfix\">";
  var div2 = "<div class=\"header\">";
  var strong = "<strong class=\"primary-font\">Visitante</strong>";
  //cierra div

  $('#message-box').submit(function (e) {
      e.preventDefault();
      if(!message.val() == ""){
         
          var mensaje = li_ini + span_ini + img + "</span>" + div1 +div2 +
          strong + "</div>" +"<p>" + message.val() +"</p>" + "</div> </li> <br>"

          $("#chat").append(mensaje);
          consumo(message.val());
          message.val('');
      }
  });
}


function consumo(texto){
  var request = new XMLHttpRequest();
      
  request.open('GET', 'http://127.0.0.1:3333/bot/'+texto, true);
  request.setRequestHeader("Content-Type", "application/json");

  request.onreadystatechange = function() {
   
    if (this.readyState == 4 && this.status == 200) {
      var objetoResponse = JSON.parse(this.responseText); 
      //console.log(objetoResponse.answer_text); 
      respuestaBot(objetoResponse.answer_text);       
    }
};
  
  request.send(); 
}


function respuestaBot(msg){

  var li_ini = "<li class=\"left clearfix\">";
  var span_ini = "<span class=\"chat-img pull-left\">";
  var img = "<img src=\"http://placehold.it/50/55C1E7/fff&text=BB\" alt=\"User Avatar\" class=\"img-circle\" />";
  //Cierra span
  var div1 = "<div class=\"chat-body clearfix\">";
  var div2 = "<div class=\"header\">";
  var strong = "<strong class=\"primary-font\">Bot Bender</strong>";
  //cierra div
       
  var bot_respuesta = li_ini + span_ini + img + "</span>" + div1 +div2 +
  strong + "</div>" +"<p>" + msg +"</p>" + "</div> </li>  <br>"

  $("#chat").append(bot_respuesta);


};
