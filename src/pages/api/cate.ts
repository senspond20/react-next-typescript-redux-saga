
import { NextApiRequest, NextApiResponse } from "next";
import connection from "@repository/dbCon";

export default (req : NextApiRequest, res : NextApiResponse) => {


    connection.connect();
    connection.query('SELECT * from category', (error: any, rows: any, fields: any) => {
        if (error)
            res.status(500).json({message : error})
        else{
            console.log(rows);
            res.status(200).json(rows)
        }
    });
    connection.end();
}
