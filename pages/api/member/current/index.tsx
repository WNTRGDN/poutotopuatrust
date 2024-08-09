import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import FormData from 'form-data'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: process.env.API_HOST + 'api/members/current',
        headers: { 
            'ApiKey': process.env.API_KEY
        }
    }

    axios.request(config).then((response) => {
        res.status(200).json(response.data)
    }).catch((error) => {
        res.status(200).json(error)
    })

}

export default handler