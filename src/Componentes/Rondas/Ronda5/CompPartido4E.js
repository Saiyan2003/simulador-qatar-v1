import React from 'react';

function CompPartido4E() {
    return (
        <tr style={{ background: "#e6e6e6" }}>
            <td>España</td>
            <td><span class="flag-icon flag-icon-esp"></span></td>
            <td>
                <input className='goals' id='españa2'></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id='alemania2'></input>
            </td>
            <td><span class="flag-icon flag-icon-deu"></span></td>
            <td>Alemania</td>
        </tr>
    )
}

export default CompPartido4E;