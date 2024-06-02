const palavras = [
  "Bailarina",
  "Futebol",
  "Estátua",
  "Pintor",
  "Frio",
  "Bebê",
  "Mímico",
  "Escova de dentes",
  "Lápis",
  "Livro",
  "Astronauta",
  "Amor",
  "Ódio",
  "Cego",
  "Cadeira",
  "Sacola",
  "Professor",
  "Médico",
  "Calculadora",
  "Artista",
  "Vitória",
  "Pescador",
  "Internet",
  "Basquete",
  "Semente",
  "Policial",
  "Amargo",
  "Bilhete",
  "Xadrez",
  "Banana",
  "Micróbio",
  "Romance",
  "Carteira",
  "Máquina de lavar",
  "Prancha de surfe",
  "Debate",
  "Lixo",
  "Sombra",
  "Cadeado",
  "Massagem",
  "O Poderoso Chefão",
  "2001: Uma Odisseia no Espaço",
  "Guerra nas Estrelas",
  "Forrest Gump",
  "Laranja Mecânica",
  "O Iluminado",
  "Clube da Luta",
  "Psicose",
  "Jurassic Park",
  "Taxi Driver",
  "Batman – O Cavaleiro das Trevas",
  "Crepúsculo",
  "O Rei Leão",
  "Matrix",
  "A Bela Adormecida",
  "Os Caça-Fantasmas",
  "Dumbo",
  "Rocky",
  "A Dama e o Vagabundo",
  "O Amor É Cego",
  "ET",
  "Borboleta",
  "Cavalo",
  "Cachorro",
  "Caranguejo",
  "Chimpanzé",
  "Coelho",
  "Jacaré",
  "Elefante",
  "Galinha",
  "Girafa",
  "Leão",
  "Gato",
  "Sapo",
  "Veado",
  "Tigre",
  "Grilo",
  "Formiga",
  "Abelha",
  "Hipopótamo",
  "Golfinho",
  "Tigre",
  "Capivara",
  "Esquilo",
  "Porco",
  "Rato",
  "Coruja",
  "Gavião",
  "Juramento",
  "Marcha",
  "Amor",
  "Cordão Umbilical",
  "Aeroporto",
  "Multa de trânsito",
  "Chuveiro elétrico",
  "Trator",
  "Escorpião",
  "Ronco",
  "Burocracia",
  "Jardineiro",
  "Hidrelétrica",
  "Circo",
  "Desenho animado",
  "Geleira",
  "Zoológico",
  "Cicatriz",
  "Cobertor",
  "Helicóptero",
  "Aniversário",
  "Vulcão",
  "Arco-íris",
  "Noiva",
  "Babar",
  "Montanha-russa",
  "Natal",
  "Luz",
  "Sombra",
  "Magia",
  "Maquiadora",
  "Shopping",
  "Berço",
  "Medir",
  "Aranha",
  "Jardim",
  "Trampolim",
  "Cachoeira",
  "Iô-iô",
  "Janela",
  "Girafa",
  "Roncar",
  "Pesadelo",
  "Lanterna",
  "Curiosidade",
  "Convite",
  "Satélite",
  "Jornal",
  "Diamante",
  "Lenha",
  "Sapo",
  "Andador infantil",
  "Ração",
  "Google",
  "Tocha",
  "Acampar",
  "Lago",
  "Emagrecer",
  "Fofoca",
  "Salário",
  "Sorte",
  "Guerra nas Estrelas",
  "Indiana Jones",
  "De Volta para o Futuro",
  "Titanic",
  "De Volta para o Futuro",
  "Forrest Gump",
  "O Rei do Show",
  "Os Vingadores",
  "Harry Potter e a Pedra Filosofal",
  "Um Sonho de Liberdade",
  "Jurassic Park",
  "A Guerra dos Botões",
  "Os Muppets",
  "O Senhor dos Anéis: A Sociedade do Anel",
  "O Incrível Hulk",
  "Indiana Jones e os Caçadores da Arca Perdida",
  "MIB - Homens de Preto",
  "Cinderela Baiana",
  "Mulher Invisível",
  "Guardiões da Galáxia",
  "A Vida Secreta dos Pets",
  "Zootopia",
  "A Princesa e o Sapo",
  "Sharknado",
  "O Poderoso Chefão",
  "O Mágico de Oz",
  "A Culpa é das Estrelas",
  "Minha Mãe é uma Peça",
  "O Amor é Cego",
  "As Branquelas",
  "Cantando na Chuva",
  "Branca de Neve e Os Sete Anões",
  "Duro de Matar",
  "O Sexto Sentido",
  "O Exterminador do Futuro",
  "Homem-Aranha",
  "Náufrago",
  "King Kong",
  "Gladiador"
]

const botaoMaior = document.querySelector('.botao-maior');
const botaoMenor = document.querySelector('.botao-menor');
const palavra = document.querySelector('.palavra');
const audioTempoFinalizado = new Audio('./sons/beep.wav')
const tempoNaTela = document.querySelector('.timer');

let tempoDecorridoEmSegundos = 60;
let intervaloId = null;

botaoMaior.addEventListener('click', escolhePalavra);
botaoMenor.addEventListener('click', iniciarOuPausar);

function escolhePalavra() {
  let posicao = Math.floor(Math.random() * (palavras.length + 1));
  palavra.innerHTML = `${palavras[posicao]}`;
  tempoDecorridoEmSegundos = 60;
  mostrarTempo();
  botaoMenor.classList.remove('escondido');
}

function iniciarOuPausar() {
  if (intervaloId) {
    zerar();
    return;
  }
  intervaloId = setInterval(contagemRegressiva, 1000);
}

function contagemRegressiva() {
  if (tempoDecorridoEmSegundos <= 0) {
    audioTempoFinalizado.play();
    zerar();
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  mostrarTempo();
}

function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleString('pt-Br', { minute: '2-digit', second: '2-digit' })
  tempoNaTela.innerHTML = `${tempoFormatado}`;
}

function zerar() {
  clearInterval(intervaloId);
  intervaloId = null;
}

