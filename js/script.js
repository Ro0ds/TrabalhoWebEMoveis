// Obtém o elemento do rodapé onde o tempo será exibido
var timeDisplay = document.getElementById("footer");

// Função para atualizar o tempo exibido
function refreshTime() {
  // Obtém a hora atual como uma string
  var dateString = new Date().toLocaleTimeString();
  // Obtém a data atual como uma string
  var year = new Date().toLocaleDateString();
  // Atualiza o conteúdo do rodapé com a hora e data
  timeDisplay.innerHTML = dateString + " - " + year;
}

// Chama a função refreshTime a cada segundo (1000 milissegundos)
setInterval(refreshTime, 1000);

// Objeto para armazenar dados do formulário
let userMsg = {
  nome: '',
  email: '',
  mensagem: ''
}

// Função para mostrar o conteúdo do formulário
function mostrarConteudo() {
  // Obtém o valor do campo "nome" do formulário
  userMsg.nome = document.getElementById("nome").value;
  // Obtém o valor do campo "email" do formulário
  userMsg.email = document.getElementById("email").value;
  // Obtém o valor do campo "mensagem" do formulário
  userMsg.mensagem = document.getElementById("mensagem").value;

  // Obtém o elemento do parágrafo onde a mensagem será exibida
  var paragrafo = document.getElementById("resultado");
  // Converte o objeto userMsg para uma string JSON
  var msgBody = JSON.stringify(userMsg);
  // Atualiza o conteúdo do parágrafo com uma mensagem de sucesso e os dados do formulário
  paragrafo.innerText = 'Formulário enviado com sucesso!\n\nConteúdo: ' + msgBody;
}