import { NextApiRequest, NextApiResponse } from 'next';


export default function handler (req: NextApiRequest, res: NextApiResponse){

    if (req.method =="GET"){

        return res
        .status(200)
        .json ([{aluno:"João", title:"CursoABC", description:"this is a test"},
        { aluno:"João", title:"CursoBGT", description:"this is a test"},
        { aluno:"João", title:"Cursoiuj", description:"this is a test"}


    ]);

    }

    }



