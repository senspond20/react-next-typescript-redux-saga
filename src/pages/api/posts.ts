import { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";
import path from "path";
export default (req : NextApiRequest, res : NextApiResponse) => {
    try{
        const file = path.join(process.cwd(), '/src/repository/posts.json');
        const data = fs.readFileSync(file, 'utf-8');
        res.status(200).json(JSON.parse(data));
    }catch (e) {
        res.status(500).json({code : 500, message : '데이터 조회에 실패했당께', date : new Date()})
    }

    // res.writeHead(200, {'Content-Type': 'application/json; charset=utf8'});
    // res.write(JSON.parse(data));
    // res.end();

   
}