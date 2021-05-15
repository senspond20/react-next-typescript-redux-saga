// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import * as Path from "path";
import * as fs from "fs";
export default (req : NextApiRequest, res : NextApiResponse) => {
    // const { email } = req.query as { email: string }; get

    const path = Path.join('D:\\2. WorkSpace\\React\\react-next-typescript-redux-saga', 'test')
    const read = String(fs.readFileSync(path + '\\test.json','utf-8'))
    console.log(path)
    console.log(read)
    // const json = JSON.parse(read);
    // res.send(read);
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf8'});
    res.write(read);
    res.end();

    // res.status(200).json({ md : read})
}
