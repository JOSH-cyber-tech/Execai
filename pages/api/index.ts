import { NextApiRequest, NextApiResponse } from 'next';
import app from '../../server/src/index';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Pass the Next.js API request/response directly to Express
  return app(req, res);
}

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
