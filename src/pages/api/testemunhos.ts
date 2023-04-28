
import { NextApiRequest, NextApiResponse } from "next"; 
import testemunhos from "../../data/testemunhos" 


export default 
function handler(req: NextApiRequest, res: NextApiResponse) { 
    
    if (req.method === "GET") { return res .status(200) .json(testemunhos); } 


    if (req.method === "POST") { 
        const { nome, about, description } = req.body; 
        const newTestemunho = {id: testemunhos.length + 1, nome, about, description};
        testemunhos.push(newTestemunho);
        console.log(testemunhos); // 

        

        return res.status(201).json({message:"Testemunho adicionado com sucesso!"});
    }
}