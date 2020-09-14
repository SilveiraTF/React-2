import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './Pai'

import Pai2 from './Pai2'

import Filho from './Filho'

import Bike from './Bike'

import Car from './Car'

import Owner from './Owner'
//Renderiza o conteúdo React como JS porque o navegador não entende react
ReactDOM.render(
    <div>
        <Pai nome="Sebastião" sobrenome="Silva"/>
        <Pai nome="Joaquim" sobrenome="Pereira"/>   

        <Pai2 nome="Anastácio" sobrenome="Pereira">
            <Filho nome="Daniel"/>
        </Pai2>
        <Pai2 nome="Dionísio" sobrenome="Costa">
            <Filho nome="Filho1"/>
            <Filho nome="Filho2"/>
        </Pai2>       
        <Pai2 nome="Roberto" sobrenome="Fornel">
            <Filho nome="Filho1"/>
            <Filho nome="Filho2"/>
            <Filho nome="Filho3"/>
        </Pai2>   
        <Owner dono="Carlos" ano="2019" marca="Honda">
            <Car motor="1.8" bateria="Moura"/>
            <Bike aro="29" quadro="29"/>
        </Owner>
    </div>,
    document.getElementById("root")
)