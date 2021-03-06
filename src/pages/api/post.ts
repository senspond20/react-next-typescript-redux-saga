import { NextApiRequest, NextApiResponse } from "next";
import * as Path from "path";
import * as fs from "fs";
export default (req : NextApiRequest, res : NextApiResponse) => {
    const data =[
        {
            id :1,
            writer : '아이린',
            title : '안녕하세요',
            content : '내용입니다'
        },
        {
            id :2,
            writer : '아이투',
            title : '안녕하세요',
            content : 'NextJs 따라할가요? export default (req : NextApiRequest, res : NextApiResponse) => {'
        },
        {
            id :3,
            writer : '아이삼',
            title  : '안녕하십니깡? 새우깡?',
            content : '영구 읍다~~~~~~'
        },
        {
            id :4,
            writer : '아이포',
            title:  '자바랑 자바스크립트',
            content : '자바와 자바스크립트의 차이는? '
        }
    ]

    res.writeHead(200, {'Content-Type': 'application/json; charset=utf8'});
    res.write(JSON.stringify(data));
    res.end();
}