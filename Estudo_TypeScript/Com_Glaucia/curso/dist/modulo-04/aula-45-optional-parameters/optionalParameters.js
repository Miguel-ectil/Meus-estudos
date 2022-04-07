"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function informarDadosPessoa(idPessoa, nome, email) {
    console.log('Id Funcionário...: ', idPessoa, 'Nome...: ', nome);
    if (email != undefined)
        console.log('E-mail...: ', email);
}
informarDadosPessoa(775544, 'Glaucia Lemos');
informarDadosPessoa(994411, 'Jurema Lemos', 'jurema@example.com');
function mensagemLog(mensagem, usuarioId) {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)');
}
mensagemLog('Atualizar Página');
mensagemLog('Usuário(a) logado(a) com sucesso');
let pessoa;
pessoa = {
    idFuncionario: 112233,
    nome: 'Glaucia Lemos',
};
console.log(pessoa);
