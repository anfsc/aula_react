import React, { createContext, useContext, useState } from 'react'; 

const AlunosContext = createContext();

const AlunosDispatchContext = createContext();

function AlunosProvider({ children }) { 

    const [alunos, setAlunos] = useState([
    
        {name: "Teste", email:"teste2@gmail.com", phone:"93839393939"},
        {name: "Teste", email:"teste2@gmail.com", phone:"93839393939"},
        {name: "Teste", email:"teste2@gmail.com", phone:"93839393939"},
        {name: "Teste", email:"teste2@gmail.com", phone:"93839393939"},
        {name: "Teste", email:"teste2@gmail.com", phone:"93839393939"}
    
    ]);

    return (

        <AlunosContext.Provider value={alunos}>
            <AlunosDispatchContext.Provider value={[setAlunos]}>
                {children}

                </AlunosDispatchContext.Provider>
        </AlunosContext.Provider>
    )

}

export { AlunosProvider, AlunosContext, AlunosDispatchContext }
