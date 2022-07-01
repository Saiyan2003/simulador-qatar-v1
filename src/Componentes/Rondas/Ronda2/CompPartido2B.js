import React from 'react';

function CompPartido2B() {
    return (
        <tr style={{ background: "#e6e6e6" }}>
            <td>USA</td>
            <td><span class="flag-icon flag-icon-usa"></span></td>
            <td>
                <input className='goals' id='usa1'></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id='gales1'></input>
            </td>
            <td><span class="flag-icon flag-icon-wal"></span></td>
            <td>Gales</td>
        </tr>
    )
}

export default CompPartido2B;