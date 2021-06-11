import React from 'react';


function ChartRowUsers(props){
    return (
                <tr>
                    <td>{props.DNI}</td>
                    <td>{props.name}</td>
                    <td>{props.surname}</td>
                    <td>{props.email}</td>
                    <td>{props.adress}</td>
                    <td>{props.dateOfBirth}</td>
                    <td>{props.phoneNumber}</td>
                </tr>
            )
    }
    
        

export default ChartRowUsers;