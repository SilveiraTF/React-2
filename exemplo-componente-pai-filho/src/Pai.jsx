import React from 'react'
import Filho from './Filho'
//componente orientado a função
export default props =>
<div>
    <h1> {props.nome} {props.sobrenome} </h1>
    <h2> Filhos</h2>
    <ul>
        {/* Filho tem o mesmo sobrenome do pai*/ }
        <Filho nome="Pedro" sobrenome={props.sobrenome}/>

        {/* Os ... é propagação */}
        {/*as propriedades do pai são propagadas para o filho*/}
        <Filho {...props} nome="Paulo"/>
    </ul>
</div>