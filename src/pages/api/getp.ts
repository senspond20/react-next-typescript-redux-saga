// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

export default (req : NextApiRequest, res : NextApiResponse) => {
    // const { email } = req.query as { email: string }; get
    // const {email, password} = req;
    console.log(req)
    res.status(200).json({ ''})
}
