import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

import { useCadastroservices } from '../src/services/cadastro'


export default function Login() {
  const service = useCadastroservices();

  const [cadastro, setCadastro] = useState<any[]>([]);

  useEffect(() => {
    service.getCadastro()
    .then((response) => {
      setCadastro(response)

    }).catch((err) => {
      console.log('erro pangare')
    })
  }, [])

  return (
    <h1>Miguel</h1> 
  )
}