import React from 'react'

export default props =>

<div>
    <h1> Dono {props.dono}</h1>
    <h2> Aquisições no ano {props.ano} da marca {props.marca}</h2>
    <ul>
    {
        // para cada filho de owner
        React.Children.map(props.children, child => {
            return React.cloneElement(child,{
                ...props, ...child.props
            })
        })
    }
    </ul>
</div>