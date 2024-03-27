import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  success: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const f = async () => {
    const backendResponse = await fetch('https://httpbin.org/status/200', {
      method: 'POST',
      body: JSON.stringify(req.body),
    });
    res.status(200).json({ success: backendResponse.ok });
  };

  f();
}
