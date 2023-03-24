import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    fetch('/api/estampagem')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <h1>
      Miguel Ectil
    </h1>
  )
}
