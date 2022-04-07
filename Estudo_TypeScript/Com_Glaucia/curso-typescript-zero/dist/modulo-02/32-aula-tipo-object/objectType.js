"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    idade: 35,
    funcao: 'Cloud Advocate'
};
console.log(pessoa);
function onboarding01(funcionario) {
    return 'Seja bem-vinda ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Glaucia Lemos' }));
function onboarding02(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.');
}
console.log(onboarding02({ nome: 'Glaucia Lemos', funcao: 'Cloud Advocate' }));
function onboarding03(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding03({ nome: 'Glaucia Lemos', funcao: 'Cloud Advocate', linguagem: 'JavaScript/Typescript' }));
function onboarding04(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding04({ nome: 'Glaucia Lemos', funcao: 'Cloud Advocate', linguagem: 'JavaScript/Typescript' }));
function onboarding05(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.' +
        ' Seu e-mail será ' +
        pessoa.email);
}
console.log(onboarding05({
    nome: 'Glaucia Lemos',
    funcao: 'Cloud Advocate',
    linguagem: 'JavaScript/Typescript',
    email: 'gllemos@microsoft.com'
}));
const filha = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    idade: 35
};
console.log(filha);
const usuario = {
    nome: 'Glaucia Lemos',
    email: 'algumacoisa@gmail.com'
};
const admin = {
    nome: 'Glaucia Lemos',
    email: 'algumacoisa@gmail.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
