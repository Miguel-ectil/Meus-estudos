import { AxiosResponse } from "axios";
import { httpClientDJango } from "../config/axios";
import {Grid, Button, Typography, Toolbar, Box, IconButton, AppBar} from '@mui/material';

const resourceUrl = '';

export const  useCadastroservices = () => {

  const getCadastro = async(data: any): Promise<any> => {
    const url: string = `${resourceUrl}`;
    const response: AxiosResponse<any> = await httpClientDJango.post(url, data);
    return response.data;
  }

  return {
    getCadastro
  }
}