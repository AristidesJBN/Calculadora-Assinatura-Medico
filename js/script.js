function processarImagem() {
    var arquivo = document.getElementById("inputFile").files[0];
    var leitor = new FileReader();

    leitor.onload = function(event) {
      var imagemOriginal = new Image();
      imagemOriginal.src = event.target.result;

      var canvas = document.createElement("canvas");
      canvas.width = 192;
      canvas.height = 125;

      var contexto = canvas.getContext("2d");

      contexto.fillStyle = "white";
      contexto.fillRect(0, 0, canvas.width, canvas.height);

      var proporcao = Math.min(canvas.width / imagemOriginal.width, canvas.height / imagemOriginal.height);
      var larguraFinal = imagemOriginal.width * proporcao;
      var alturaFinal = imagemOriginal.height * proporcao;
      var xOffset = (canvas.width - larguraFinal) / 2;
      var yOffset = (canvas.height - alturaFinal) / 2;

      contexto.drawImage(imagemOriginal, xOffset, yOffset, larguraFinal, alturaFinal);

      var novaImagem = new Image();
      novaImagem.src = canvas.toDataURL();

      // Crie um link de download para a imagem
      var downloadLink = document.createElement("a");
      downloadLink.href = novaImagem.src;
      downloadLink.download = "imagem.png";
      downloadLink.textContent = "Baixar Imagem";

      document.getElementById("resultado2").innerHTML = '';
      document.getElementById("resultado2").appendChild(novaImagem);
      document.getElementById("resultado2").appendChild(downloadLink);
    }

    leitor.readAsDataURL(arquivo);
  }

  function compara() {
    var alt = parseFloat(document.getElementById("alt").value);
    var larg = parseFloat(document.getElementById("larg").value);

    if (alt/125 > larg/192){
      var X = alt*(192/125)
      var Y = alt
      document.getElementById("resultado").innerHTML = "A altura segue:" + Y;
      document.getElementById("resultado1").innerHTML = "Use a largura: " + X;
    }else{
      var Y = larg*(125/192)
      var X = larg
      document.getElementById("resultado").innerHTML = "Use a altura: " + Y;
      document.getElementById("resultado1").innerHTML = "A largura segue:" + X;
    }
  }

  //ativação/desativação da div

  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("idbutton");
    var containercompara = document.getElementById("idcontainercompara");
  
    button.addEventListener("click", function botao() {
      if (containercompara.style.display === "block") {
        containercompara.style.display = "none";
      } else {
        containercompara.style.display = "block";
      }
    });
  });