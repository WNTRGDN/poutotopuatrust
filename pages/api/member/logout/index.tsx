import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        parseSetCookie: true,
        url: process.env.API_HOST + 'api/members/logout',
        headers: { 
            'ApiKey': process.env.API_KEY
        },
        withCredentials: true
    }

    axios.request(config)
    .then((response) => {
        res.status(200).json(response.data)
    })
    .catch((error) => {
        res.status(200).json(error)
    })

}

export default handler