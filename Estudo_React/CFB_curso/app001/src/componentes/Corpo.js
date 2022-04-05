import React from "react";
import Dados from "./Dados";
import { TextField, Button, Checkbox } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


export default function Corpo(){

    const theme = createMuiTheme({
        overrides: {
          // Name of the component ⚛️ / style sheet
          MuiButton: {
            // Name of the rule
            text: {
              // Some CSS
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              borderRadius: 3,
              border: 0,
              color: 'white',
              height: 48,
              padding: '0 30px',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            },
          },
        },
        typography: { useNextVariants: true },
      });    

    const cnl=() => {
        return 'CFB Cursos'
    }
    const yt ='youtube.com/wendyyy'
    const crs='React.js'
    const somar=(v1,v2) => {
        return v1+v2
    }

    const textoDestaque={
        color:'#00f',    /*#00f cor Azul*/
        fontSize:'3em'
    }

    // const theme = createMuiTheme({
    //     palette: {
    //       primary: { main: purple[500] }, // Purple and green play nicely together.
    //       secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    //     },
    //     typography: { useNextVariants: true },
    // });

    return(
        <section className="caixa"> 
            <h2 style={textoDestaque}>Curso  de React</h2>
            <TextField
                id="miguel"
                label="Miguel"
                // variant="filled"
                // fullWidth
                margin="normal"
            />

            <Checkbox defaultChecked color="primary" />
            <Checkbox defaultChecked color="secondary" />

            <p>Dia 15 de março ir até a policia federal</p>
            <p>Para poder renovar o meu rg</p>
            <Dados 
                canal={cnl} 
                youtube={yt} 
                curso={crs}
                somar={somar}
            />
            <Button type="submit" variant="contained" color="primary">
                Miguel
            </Button>
            <MuiThemeProvider theme={theme}>
                <Button>Overrides CSS</Button>
            </MuiThemeProvider>

        </section>
    )
}