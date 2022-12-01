import * as React from "react";
import {
  Box,
  Card,
  TextField,
  Typography,
  Container,
  Button,
  InputAdornment,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/router'
import Alert from '@mui/material/Alert';

import styles from '../styles/login.module.css';
import { login } from '../pages/api/login'

interface LoginState {
  password: string;
  username: string;
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
}

type LoginAction =
  | { type: "login" | "success" | "error" | "logout" }
  | { type: "field"; fieldName: string; payload: string };

const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    }
    case "login": {
      return {
        ...state,
        error: "",
        isLoading: true
      };
    }
    case "success": {
      return { ...state, error: "", isLoading: false, isLoggedIn: true };
    }
    case "error": {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
        error: "Usuario ou Senha incorreta!"
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false
      };
    }
    default:
      return state;
  }
};

const initialState: LoginState = {
  password: "",
  username: "",
  isLoading: false,
  error: "",
  isLoggedIn: false
};
export default function LoginPage() {
  const router = useRouter()
  const [state, dispatch] = React.useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "login" });

    try {
      await login({ username, password });
      dispatch({ type: "success" });
      router.push('./dashboard')
    } catch (error) {
      dispatch({ type: "error" });
    }
  };
  return (
    <>
     <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }} //background: "#92140c"
      maxWidth="lg"
      >
      <Card
        sx={{
          p: 6,
          my: 12
        }}
        className={styles.card}
      >
        <Box textAlign="center">
          <Typography my={3}>
            <img src="logo.png" alt="Logo Dvr" width={120} height={110} />
          </Typography>
        </Box>
        <form className="form" onSubmit={onSubmit}>
        {error && <Alert  className="error" severity="error">{error}</Alert>}
          <TextField
            fullWidth
            type='text'
            value={username}
            margin="normal"
            autoFocus
            label='Usúario'
            name="usuario"
            id='usuario'
            variant="standard"
            autoComplete="usuario"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "username",
                payload: e.currentTarget.value
              })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            type="password"
            margin="normal"
            value={password}
            variant="standard"
            autoComplete="new-password"
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "password",
                payload: e.currentTarget.value
              })
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          /> 
          <Button
            sx={{
              mt: 2
            }}
            color="primary"
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            disabled={isLoading}
          >
            {isLoading ? "Loggin in....." : "Entar"}
          </Button>
        </form>
      </Card>
    </Container>
    </>
  )
}
