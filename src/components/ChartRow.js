import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                    <td>{props.franquicia_producto.franchise_name}</td>
                    <td>{props.productoTag.tag_name}</td>
                    <td>{props.androide_del_mes}</td>
                    <td>{props.heroinas}</td>
                </tr>
            )
    }
    
        

export default ChartRow;