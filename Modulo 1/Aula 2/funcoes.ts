type StatusUsuario =
    | "Ativo"
    | "Inativo"
    | "Suspenso";

type Dados = {
    username: string;
    email: string;
    age: number;
    status: StatusUsuario;
};

// Verifica se o nome possui pelo menos 2 caracteres (desconsiderando espaços)
function verificarNome(usuario: Dados): boolean {
    return usuario.username.trim().length >= 2;
}

// Garante que a idade esteja dentro do intervalo permitido
function verificarIdade(usuario: Dados): boolean {
    return usuario.age >= 18 && usuario.age <= 120;
}

// Validação simples de e-mail
// Em projetos reais, normalmente utiliza-se Regex ou bibliotecas específicas.
function verificarEmail(usuario: Dados): boolean {
    return usuario.email.includes("@") && usuario.email.includes(".");
}

// Responsável por validar os dados e exibir as informações do usuário
function formatarUsuario(usuario: Dados): void {

    // Interrompe a execução caso o nome seja inválido
    if (!verificarNome(usuario)) {
        console.log("Nome inválido. Mínimo de 2 caracteres.");
        return;
    }

    // Verifica se a idade está dentro do intervalo permitido
    if (!verificarIdade(usuario)) {
        console.log("Idade inválida. Deve estar entre 18 e 120 anos.");
        return;
    }

    // Confirma se o e-mail possui um formato básico válido
    if (!verificarEmail(usuario)) {
        console.log("E-mail inválido.");
        return;
    }

    // Todas as validações passaram, então os dados podem ser exibidos
    console.log("=== Usuário ===");
    console.log(`Nome: ${usuario.username}`);
    console.log(`Idade: ${usuario.age}`);
    console.log(`Email: ${usuario.email}`);
    console.log(`Status: ${usuario.status}`);
}

// Objeto representando um usuário
const usuario: Dados = {
    username: "Carlos",
    email: "carlos@example.com",
    age: 30,
    status: "Ativo"
};

// Inicia o processo de validação e exibição
formatarUsuario(usuario);

/////////////////////////////////////