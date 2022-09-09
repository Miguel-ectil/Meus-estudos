
export const authService = {
    async login({ username, password }) {
      return fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
        }) 
      })
      .then(async (respostaDoServidor) => {
        if(!respostaDoServidor.ok) throw new Error('Usúario ou senha invalido!')
        const body = await respostaDoServidor.json();
        console.log(body);
      })

    }
}