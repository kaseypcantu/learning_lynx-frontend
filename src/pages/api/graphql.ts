import { NextApiRequest, NextApiResponse } from 'next';

export default async function graphql(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {

  const headers = new Headers();

  headers.append('Content-Type', 'application/json');

  try {
    const response = await fetch('http://localhost:1993/graphql', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(req.body),
    });

    const responseJSON = await response.json();
    console.log(res.status(response.status).json(responseJSON));
    res.status(response.status).json(responseJSON);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
