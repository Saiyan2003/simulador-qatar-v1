import React from 'react';

function CompPartido3D() {
    return (
        <tr style={{ background: "#ededed" }}>
            <td>Tunez</td>
            <td><span class="flag-icon flag-icon-tun"></span></td>
            <td>
                <input className='goals' id='tunez2'></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id='australia2'></input>
            </td>
            <td><span class="flag-icon flag-icon-aus"></span></td>
            <td>Australia</td>
        </tr>
    )
}

export default CompPartido3D;