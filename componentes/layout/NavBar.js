import React from 'react'
import { useRouter } from "next/router";

function NavBar() {
const router = useRouter();

const handleClick = (url) => {
router.push(url);

};

return (
<div className="layout-navbar">

<p onClick={() => handleClick("/sobreOCurso")}>Sobre o Curso</p>
<p onClick={() => handleClick("/horarios")}>Horários</p>
<p onClick={() => handleClick("/ondeEstamos")}>Onde Estamos</p>

</div>
 );

}

export default NavBar;