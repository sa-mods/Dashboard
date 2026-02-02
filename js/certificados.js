const certificados = [
  { nome: "Análise de Dados com Python 1⁰ semestre", arquivo: "Análise de Dados com Python 1⁰s.pdf" },
  { nome: "Análise de Dados com Python 2⁰ semestre", arquivo: "Análise de Dados com Python 2⁰s.pdf" },
  { nome: "JavaScript", arquivo: "certificado_js.pdf" },
  { nome: "Java", arquivo: "certificado_java.pdf" },
  { nome: "Python", arquivo: "certificado_python.pdf" },
  // continue até os 22
];

const select = document.getElementById("selectCertificados");

certificados.forEach(cert => {
  const option = document.createElement("option");
  option.value = `docs/${cert.arquivo}`;
  option.textContent = cert.nome;
  select.appendChild(option);
});

function baixarCertificado() {
  const arquivo = select.value;

  if (!arquivo) {
    alert("Selecione um certificado.");
    return;
  }

  const link = document.createElement("a");
  link.href = arquivo;
  link.download = arquivo.split("/").pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}