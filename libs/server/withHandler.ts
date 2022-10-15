import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const withHandler = (
  method: "GET" | "POST",
  handler: NextApiHandler
): NextApiHandler => {
  return async (req, res) => {
    if (req.method !== method) {
      res.status(405).end();
    }

    try {
      await handler(req, res);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  };
};
