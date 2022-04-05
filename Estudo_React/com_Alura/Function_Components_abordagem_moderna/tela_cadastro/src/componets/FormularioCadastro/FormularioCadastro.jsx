import React, {useState} from 'react';
import { TextField, Button, Switch, FormControlLabel} from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF}) {
    const [nome,setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({cpf:{valido:true,texto:""}})

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
          /* console.log(nome, sobrenome, cpf, promocoes, novidades); */
        }}
      >
        <TextField
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
          id="nome"
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          value={sobrenome}
          onChange={(event) => {
            setSobrenome(event.target.value);
          }}
          id="sobrenome"
          label="Sobrenome"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          value={cpf}
          onChange={(event) => {
            setCpf(event.target.value);
          }}
          onBlur={(event) => {
            const ehValido = validarCPF(cpf);
            setErros({cpf:ehValido})
          }}
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
          id="cpf"
          label="CPF"
          // variant="outlined"
          margin="normal"
          fullWidth
        />
        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              checked={promocoes}
              onChange={(event) => {
                setPromocoes(event.target.checked);
              }}
              name="promocoes"
              color="primary"
            />
          }
        />

        <FormControlLabel
          label="Novidades"
          control={
            <Switch
              checked={novidades}
              onChange={(event) => {
                setNovidades(event.target.checked);
              }}
              name="Novidades"
              color="primary"
            />
          }
        />

        {/* <label>Novidades</label>
        <input type="checkbox"/> */}

        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    );
}

// function Teste(){
//   useState("")
//   return(<p>assda</p>)
// }

export default FormularioCadastro;