function Enviar() {
 
    var name = document.getElementById("nameid");
 
    if (name.value != "") {
        alert('Obrigada, ' + name.value + '. Sua mensagem foi enviada com sucesso!');
    }
 
}