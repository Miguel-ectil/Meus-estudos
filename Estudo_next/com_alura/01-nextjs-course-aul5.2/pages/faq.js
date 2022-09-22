// import Head from 'next/head'
// import Link from '../src/components/Link';
import FAQScreen from '../src/screens/FAQScreen';
export default FAQScreen; 

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

// export async function getServerSideProps() {
//     console.log('Em modo DEV, sempre roda! A cada acesso')
//     console.log('Rodando a cada acesso que você recebe')
export async function getStaticProps() {
    console.log('Em modo DEV, sempre roda! A cada acesso')
    console.log('Roda SOMENTE em build time')
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });

    return {
      props: {
          qualquercoisa: 'que eu passar aqui',
          faq,
      },
    };
}  

// export default function FAQPage({ faq }) {
//     console.log('Isso roda no servidor???')
//     return (
//         <div>
//             <Head>
//                 <title>FAQ - Alura Cases Campanha</title>
//             </Head>
//             <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
//             <Link href="/">
//                 Ir para a home
//             </Link>
//             <ul>
//                 {faq.map(({ answer, question }) => (
//                     <li key={question}>
//                         <article>
//                             <h2>{question}</h2>
//                             <p>{answer}</p>
//                         </article>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }