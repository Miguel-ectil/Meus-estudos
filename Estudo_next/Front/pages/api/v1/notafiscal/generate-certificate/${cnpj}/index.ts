import type { NextApiRequest, NextApiResponse } from 'next'

type Data = [{
	lote: string,
	tipoplaca: string,
	dataenvio: number,
	id: number,
}]

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json([{ 
		lotes: 20221418520,
		tipoplaca: 'carro',
		dataenvio: '2022-11-22',
		
	},
])
  }
  