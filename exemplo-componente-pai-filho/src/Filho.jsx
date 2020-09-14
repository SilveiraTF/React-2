//importação da biblioteca do react
import React from 'react'

// componente do tipo função que pode ser usado em outro arquivo
//props = propriedades dos componentes
// usando o conceito de arrow function
// Função retornando HTML é preciso ter o componente React da linha 2
//para fazer o transpile JSX-> JS
export default props => <li>{props.nome} {props.sobrenome}</li>

