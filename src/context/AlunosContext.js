import React, { createContext, useEffect, useState } from 'react'; 


const AlunosContext = createContext();

const AlunosDispatchContext = createContext();

function AlunosProvider({ children }) { 

    const [alunos, setAlunos] = useState();

        useEffect(() => { 
            function  fetchTestemunho(){
                fetch("/api/testemunhos")
        .then(response => response.json())
        .then(json => setAlunos(json))
            }
    
            fetchTestemunho();
    
        }, [])

const dispatch = (newTestemunho) => {
    setAlunos((prevTestemunhos) => [...prevTestemunhos, newTestemunho])
}


    return (

        <AlunosContext.Provider value={alunos}>
            <AlunosDispatchContext.Provider value={dispatch}>
                {children}

                </AlunosDispatchContext.Provider>
        </AlunosContext.Provider>
    )

}

export { AlunosProvider, AlunosContext, AlunosDispatchContext }
