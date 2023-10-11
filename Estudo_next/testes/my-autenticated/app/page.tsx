import Image from 'next/image'
import ConsultaSerial from './cadastro/page'

export default function Home() {
  return (
    <div className=""> {/*flex min-h-screen flex-col items-center justify-between p-24*/}
      <ConsultaSerial />
    </div>
  )
}
