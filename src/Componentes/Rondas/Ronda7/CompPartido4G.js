import React from 'react';

function CompPartido4G() {
    return (
        <tr style={{ background: "#e6e6e6" }}>
            <td>Brasil</td>
            <td><span class="flag-icon flag-icon-bra"></span></td>
            <td>
                <input type="text" className='goals' id="brasil2"></input>
            </td>
            <td>vs</td>
            <td>
                <input type="text" className='goals' id="suiza2"></input>
            </td>
            <td><span class="flag-icon flag-icon-che"></span></td>
            <td>Suiza</td>
        </tr>
    )
}

export default CompPartido4G;