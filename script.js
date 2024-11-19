let requestURL = "https://raw.githubusercontent.com/miqueiassousa/json/refs/heads/main/tecnologias.json"
const corpo= document.querySelector("Body")
const tec = corpo.querySelector(".tec")


const tecnologia = new XMLHttpRequest ();
tecnologia.open("GET" , requestURL);
tecnologia.responseType="json";
tecnologia.send();

let quant = 4;

tecnologia.onload= function(){
    var competencias = tecnologia.response;
    for(i =0; i < quant; i++){
        tec.innerHTML += `<p> ${competencias.tecnologias[i].nome}</p>`+
        `<p> ${competencias.tecnologias[i].tipo}</p>`+
        `<p> ${competencias.tecnologias[i].categoria}</p>`+
        `<p> ${competencias.tecnologias[i].criador}</p>`
        for( j =0; j <2; j++){
        tec.innerHTML += `<ul> ${competencias.tecnologias[i].bibliotecas_populares[j].nome}</ul>`+
        `<ul> ${competencias.tecnologias[i].bibliotecas_populares[j].descricao}</ul>`+
        `<ul> ${competencias.tecnologias[i].bibliotecas_populares[j].ano_lancamento}</ul>`+
        `<ul> ${competencias.tecnologias[i].bibliotecas_populares[j].desenvolvedor}</ul>`
        }

        tec.innerHTML += "<hr>"

    }
}


