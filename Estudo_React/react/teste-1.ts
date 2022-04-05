// Incluir na mensagem de boas-vindas, a cidade e UF do usuário

type User = {
    name: string;
    address: {
        city: string;
        uf: string;
    }
}

function showwelcomemessage(User) {
    return `Welcome ${User.name} (${User.address.city} - ${User.address.uf})`;
}

showwelcomemessage({
    name: 'Diego',
    address: {
        city: 'Rio do Sul',
        uf: 'SC'
    }
})