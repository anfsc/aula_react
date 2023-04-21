import React, { useEffect, useState } from "react"; 


function testemunhos() {

    const [data, setData] = useState([]);// dados dos testemunhos

    useEffect(() => { 
        function  fetchTestemunho(){
            fetch("/api/testemunhos")
    .then(response => response.json())
    .then(json => setData(json))
        }

        fetchTestemunho();

    }, [])


    return(
        data.map((testemunhos, index)=> {
            return(
                <>
                <p style={{color:"black"}}>Aluno:{testemunhos.aluno}</p> <br />
                <p style={{color:"black"}}> Title:{testemunhos.title}</p> <br />
                <p style={{color:"black"}}>Body:{testemunhos.description}</p> <br />                
                </>
            )
        })
    )

}


export default testemunhos;