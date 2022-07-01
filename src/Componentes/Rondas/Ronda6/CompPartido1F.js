import React from 'react';

function CompPartido1F() {
    return (
        <tr style={{ background: "#ededed" }}>
            <td>Marruecos</td>
            <td><span class="flag-icon flag-icon-mar"></span></td>
            <td>
                <input className='goals' id="marruecos1"></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id="croacia1"></input>
            </td>
            <td><span class="flag-icon flag-icon-hrv"></span></td>
            <td>Croacia</td>
        </tr>
    )
}

export default CompPartido1F;