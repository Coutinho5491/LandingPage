// Função para cadastrar usuário

function adicionarNome() {
  event.preventDefault(); // evita recarregar a página

  const nome = document.querySelector('input[name="nome"]').value;
  const email = document.querySelector('.register-section input[name="email"]').value;
  const senha = document.querySelector('.register-section input[name="senha"]').value;

  if (nome && email && senha) {
    // salva no LocalStorage
    localStorage.setItem("usuarioEmail", email);
    localStorage.setItem("usuarioSenha", senha);
    localStorage.setItem("usuarioNome", nome);

    alert("Cadastro realizado com sucesso!");
  } else {
    alert("Preencha todos os campos!");
  }
}

// Função para validar login

function validarLogin() {
  event.preventDefault();

  const emailLogin = document.querySelector('.login-section input[name="email"]').value;
  const senhaLogin = document.querySelector('.login-section input[name="senha"]').value;

  const emailSalvo = localStorage.getItem("usuarioEmail");
  const senhaSalva = localStorage.getItem("usuarioSenha");

  if (emailLogin === emailSalvo && senhaLogin === senhaSalva) {
    alert("Login realizado com sucesso!");
    window.location.href = "index.html"; // redireciona para sua página de portfólio
  } else {
    alert("Email ou senha inválidos!");
  }
}

// Recupera o nome salvo no LocalStorage
  const nomeUsuario = localStorage.getItem("usuarioNome");

  // Se existir um nome cadastrado, atualiza a saudação
  const saudacao = document.getElementById("nomeVisitante");

if (nomeUsuario && saudacao) {
  saudacao.innerHTML = `Olá,<br>Seja Bem Vindo(a) ${nomeUsuario}`;
}
