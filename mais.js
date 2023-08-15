const form = document.querySelector("form");
const resp = document.querySelector("pre");
const check = document.querySelector("p");

let alunos = [];
let maiorNota;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inNome.value;
  const nota = Number(form.inNota.value);

  alunos.push({ nome, nota });

  check.innerText = `Aluno e Nota Cadastrado!!`;

  const exibirMensagem = setTimeout(() => {
    check.innerText = "";
  }, 1500);

  form.reset();
  form.inNome.focus();
});

form.btnMaior.addEventListener("click", () => {
  if (alunos.length == 0) {
    alert("Error!! Precisa cadastrar Aluno para verificar Maior Nota.");
    form.inNome.focus();
    return;
  } else {
    const maiorNota = alunos.reduce(
      (acc, aluno) => Math.max(acc, aluno.nota),
      ""
    );
    resp.innerText = `Maior Nota: ${maiorNota}\n`;
    console.log(`maior nota: ${maiorNota}`);
  }
});

form.btnDestaques.addEventListener("click", () => {
  if (alunos.length == 0) {
    alert("Error!! Precisa cadastrar Aluno para verificar Destaques.");
    form.inNome.focus();
    return;
  }
  const destaques = alunos.filter((aluno) => aluno.nota >= 8, "");
  resp.innerText = "Aluno(s) com Nota(s) igual ou superior a 8:\n\n";
  if (destaques) {
    for (const destaque of destaques) {
      resp.innerText += `* ${destaque.nome}\n`;
    }
  }
});

form.btnLimpar.addEventListener("click", () => {
  alunos = [];
  resp.innerText = "";
  form.inNome.focus();
});
