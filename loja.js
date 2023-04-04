let racao = '';
let petisco = '';
let brinquedo = '';
let alimentacao = '';
let acessorio = '';
let caminha = '';
let valorRacao = '';
let valorPetisco = '';
let valorBrinquedo = '';
let valorAlimentacao = '';
let valorAcessorio = '';
let valorCaminha = '';
let valorTotal = '';

function escolherRacao1()
{
  document.getElementById('racao1').style.borderColor ="#beac05"
  document.getElementById('racao2').style.borderColor ="white"
  document.getElementById('racao3').style.borderColor ="white"
  document.getElementById('racao4').style.borderColor ="white"
  document.getElementById('racao5').style.borderColor ="white"
  document.getElementById('racao6').style.borderColor ="white"

  racao = 'Ração Premier (Pet, Cães e Filhotes) Sabor: Frango e Salmão - 10kg'
  valorRacao = document.getElementById("valorracao1").innerHTML;
  
}

function escolherRacao2()
{
  document.getElementById('racao1').style.borderColor ="white"
  document.getElementById('racao2').style.borderColor ="#beac05"
  document.getElementById('racao3').style.borderColor ="white"
  document.getElementById('racao4').style.borderColor ="white"
  document.getElementById('racao5').style.borderColor ="white"
  document.getElementById('racao6').style.borderColor ="white"

  racao = 'Ração Úmida Pet Delícia Natural (Cachorros) Sabor: Picadinho de Carne - 320g'
  valorRacao = document.getElementById("valorracao2").innerHTML;

}

function escolherRacao3()
{
  document.getElementById('racao1').style.borderColor ="white"
  document.getElementById('racao2').style.borderColor ="white"
  document.getElementById('racao3').style.borderColor ="#beac05"
  document.getElementById('racao4').style.borderColor ="white"
  document.getElementById('racao5').style.borderColor ="white"
  document.getElementById('racao6').style.borderColor ="white"

  racao = 'Ração Úmida Pedigree Sachê (Cães Adultos de Raças Pequenas) Sabor: Frango ao Molho - 100g'
  valorRacao = document.getElementById("valorracao3").innerHTML;
}

function escolherRacao4()
{
  document.getElementById('racao1').style.borderColor ="white"
  document.getElementById('racao2').style.borderColor ="white"
  document.getElementById('racao3').style.borderColor ="white"
  document.getElementById('racao4').style.borderColor ="#beac05"
  document.getElementById('racao5').style.borderColor ="white"
  document.getElementById('racao6').style.borderColor ="white"

  racao = 'Ração Special Cat Premium (Gatos Adultos) Sabor: Peixe - 20Kg'
  valorRacao = document.getElementById("valorracao4").innerHTML;
}

function escolherRacao5()
{
  document.getElementById('racao1').style.borderColor ="white"
  document.getElementById('racao2').style.borderColor ="white"
  document.getElementById('racao3').style.borderColor ="white"
  document.getElementById('racao4').style.borderColor ="white"
  document.getElementById('racao5').style.borderColor ="#beac05"
  document.getElementById('racao6').style.borderColor ="white"

  racao = 'Ração Úmida Pet Delícia Natural (Gatos) Sabor: Picadinho de Carne - 320g'
  valorRacao = document.getElementById("valorracao5").innerHTML;
}

function escolherRacao6()
{
  document.getElementById('racao1').style.borderColor ="white"
  document.getElementById('racao2').style.borderColor ="white"
  document.getElementById('racao3').style.borderColor ="white"
  document.getElementById('racao4').style.borderColor ="white"
  document.getElementById('racao5').style.borderColor ="white"
  document.getElementById('racao6').style.borderColor ="#beac05"

  racao = 'Ração Úmida Whiskas Sachê (Gatos Adultos) Sabor: Cordeiro ao Molho - 85g'
  valorRacao = document.getElementById("valorracao6").innerHTML;
}

function escolherPetisco1()
{
  document.getElementById('petisco1').style.borderColor ="#beac05"
  document.getElementById('petisco2').style.borderColor = "white"
  document.getElementById('petisco3').style.borderColor = "white"
  document.getElementById('petisco4').style.borderColor = "white"
  document.getElementById('petisco5').style.borderColor = "white"

  petisco = 'Bifinho Kelco Keldog Criadores (Sabor: Carne e Cereais) / Raças Pequenas - 500g'
  valorPetisco = document.getElementById("valorpetisco1").innerHTML;

}

function escolherPetisco2()
{
  document.getElementById('petisco1').style.borderColor = "white"
  document.getElementById('petisco2').style.borderColor = "#beac05"
  document.getElementById('petisco3').style.borderColor = "white"
  document.getElementById('petisco4').style.borderColor = "white"
  document.getElementById('petisco5').style.borderColor = "white"

  petisco = 'Osso Deliciosso Baby Palito Fino (Sabor: Leite) / Cães Filhotes - 100g'
  valorPetisco = document.getElementById("valorpetisco2").innerHTML;
}

function escolherPetisco3()
{
  document.getElementById('petisco1').style.borderColor = "white"
  document.getElementById('petisco2').style.borderColor = "white"
  document.getElementById('petisco3').style.borderColor = "#beac05"
  document.getElementById('petisco4').style.borderColor = "white"
  document.getElementById('petisco5').style.borderColor = "white"

  petisco = 'Osso Kelco Keldog Dental Francês - 40g'
  valorPetisco = document.getElementById("valorpetisco3").innerHTML;

}

function escolherPetisco4()
{
  document.getElementById('petisco1').style.borderColor = "white"
  document.getElementById('petisco2').style.borderColor = "white"
  document.getElementById('petisco3').style.borderColor = "white"
  document.getElementById('petisco4').style.borderColor = "#beac05"
  document.getElementById('petisco5').style.borderColor = "white"

  petisco = 'Petisco Whiskas Temptations (Gatos Adultos) Sabor: Salmão - 40g'
  valorPetisco = document.getElementById("valorpetisco4").innerHTML;

}

function escolherPetisco5()
{
  document.getElementById('petisco1').style.borderColor = "white"
  document.getElementById('petisco2').style.borderColor = "white"
  document.getElementById('petisco3').style.borderColor = "white"
  document.getElementById('petisco4').style.borderColor = "white"
  document.getElementById('petisco5').style.borderColor = "#beac05"

  petisco = 'Petisco WOW Pet Food Gourmet (Gatos) Sabor: Lombinho com Cúrcuma'
  valorPetisco = document.getElementById("valorpetisco5").innerHTML;

}

function escolherBrinquedo1()
{
  document.getElementById('brinquedo1').style.borderColor = "#beac05"
  document.getElementById('brinquedo2').style.borderColor = "white"
  document.getElementById('brinquedo3').style.borderColor = "white"
  document.getElementById('brinquedo4').style.borderColor = "white"

  brinquedo = 'Brinquedo Jambo Bola Diamond (Cor: Rosa)'
  valorBrinquedo= document.getElementById("valorbrinquedo1").innerHTML;

}

function escolherBrinquedo2()
{
  document.getElementById('brinquedo1').style.borderColor = "white"
  document.getElementById('brinquedo2').style.borderColor = "#beac05"
  document.getElementById('brinquedo3').style.borderColor = "white"
  document.getElementById('brinquedo4').style.borderColor = "white"

  brinquedo = 'Brinquedo KONG Wild Knots Bear (Cor: Bege) / Para Cães'
  valorBrinquedo= document.getElementById("valorbrinquedo2").innerHTML;

}

function escolherBrinquedo3()
{
  document.getElementById('brinquedo1').style.borderColor = "white"
  document.getElementById('brinquedo2').style.borderColor = "white"
  document.getElementById('brinquedo3').style.borderColor = "#beac05"
  document.getElementById('brinquedo4').style.borderColor = "white"

  brinquedo = 'Brinquedo Jambo Ratinho e Bola Pack (Cor: Marrom)'
  valorBrinquedo= document.getElementById("valorbrinquedo3").innerHTML;

}

function escolherBrinquedo4()
{
  document.getElementById('brinquedo1').style.borderColor = "white"
  document.getElementById('brinquedo2').style.borderColor  = "white"
  document.getElementById('brinquedo3').style.borderColor  = "white"
  document.getElementById('brinquedo4').style.borderColor  = "#beac05"

  brinquedo = 'Brinquedo Varinha Dental (Cor: Rosa)'
  valorBrinquedo= document.getElementById("valorbrinquedo4").innerHTML;

}

function escolherAlimentacao1()
{
  document.getElementById('alimentacao1').style.borderColor = "#beac05"
  document.getElementById('alimentacao2').style.borderColor = "white"
  document.getElementById('alimentacao3').style.borderColor = "white"

  alimentacao = 'Comedouro Me.Au Pet Inox - 210mL'
  valorAlimentacao= document.getElementById("valoralimentacao1").innerHTML;
    
}

function escolherAlimentacao2()
{
  document.getElementById('alimentacao1').style.borderColor = "white"
  document.getElementById('alimentacao2').style.borderColor = "#beac05"
  document.getElementById('alimentacao3').style.borderColor = "white"

  alimentacao = 'Fonte Bebedouro Amicus Aqua (Cor: Vermelho)'
  valorAlimentacao= document.getElementById("valoralimentacao2").innerHTML;

}


function escolherAcessorio1()
{
  document.getElementById('acessorio1').style.borderColor = "#beac05"
  document.getElementById('acessorio2').style.borderColor = "white"

  acessorio = 'Conjunto Peitoral Style Mesh e Guia (Cor: Rainbow)'
  valorAcessorio = document.getElementById("valoracessorio1").innerHTML;

}

function escolherAcessorio2()
{
  document.getElementById('acessorio1').style.borderColor = "white"
  document.getElementById('acessorio2').style.borderColor = "#beac05"

  acessorio = 'Peitoral e Guia Toh Outdoor Eclipse - Tam. M'
  valorAcessorio = document.getElementById("valoracessorio2").innerHTML;

}

function escolherCaminha1()
{
  document.getElementById('caminha1').style.borderColor   = "#beac05"
  document.getElementById('caminha2').style.borderColor   = "white"
  document.getElementById('arranhador').style.borderColor = "white"

  caminha = 'Cama Europa Paris Fábrica Pet - Tam. G'
  valorCaminha= document.getElementById("valorcaminha1").innerHTML;

}

function escolherCaminha2()
{
  document.getElementById('caminha1').style.borderColor   = "white"
  document.getElementById('caminha2').style.borderColor   = "#beac05"
  document.getElementById('arranhador').style.borderColor = "white"

  caminha = 'Cama Luppet Iglu Super Luxo (Cor: Azul) - Tam. M'
  valorCaminha= document.getElementById("valorcaminha2").innerHTML;

}

function escolherArranhador()
{
  document.getElementById('caminha1').style.borderColor   = "white"
  document.getElementById('caminha2').style.borderColor   = "white"
  document.getElementById('arranhador').style.borderColor = "#beac05"


  caminha = 'Brinquedo Arranhador Chalesco Kitty - Tam. Único'
  valorCaminha = document.getElementById("valorarranhador").innerHTML;

}

let mensagem;
let infoContato;

function finalizarPedido()
{

  let nome       = document.getElementById("nome").value;
  let telefone   = document.getElementById("telefone").value;
  let endereco   = document.getElementById("endereco").value;
  let bairro     = document.getElementById("bairro").value;
  let referencia = document.getElementById("referencia").value;
  let entrega    = document.getElementById("entrega").value;
  let pagamento  = document.getElementById("pagamento").value;
  let observacao = document.getElementById("observacao").value;
  
  
  var mensagem = ' ******* PEDIDO *******\n' + ' Ração: ' + racao + '\n' +' Valor: '+valorRacao+'\n'+ ' Ossinhos e Petiscos: ' + petisco + '\n' +' Valor: '+valorPetisco+'\n'+ ' Brinquedos: ' + brinquedo + '\n' + ' Valor: '+valorBrinquedo+'\n'+' Acessórios para alimentação: ' + alimentacao + '\n' + ' Valor: '+valorAlimentacao+'\n'+' Acessórios: ' + acessorio + '\n'+ ' Valor: '+valorAcessorio+'\n'+' Caminhas e Arranhadores: ' + caminha + '\n'+' Valor: '+valorCaminha+'\n';

  var infoContato = ' ***** INFORMAÇÕES PARA CONTATO******\n ' +' Nome Completo: ' + nome + '\n' + ' Telefone: ' + telefone + '\n' + ' Endereço: ' + endereco + '\n' + ' Bairro: ' + bairro + '\n'  + ' Ponto de Referência: ' + referencia + '\n' + ' Tipo de Entrega: ' + entrega + '\n' + ' Forma de Pagamento: ' + pagamento + '\n' + ' Observações: ' + observacao + '\n';

  alert(mensagem + infoContato)

  window.open('https://wa.me/+5581996443889?text='+ mensagem + infoContato)

}
