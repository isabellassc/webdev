function Enviar() {
 
    var name = document.getElementById("nameid");
 
    if (name.value != "") {
        alert('Obrigado sr(a) ' + name.value + '. Seus dados foram enviados com sucesso!');
    }
 
}