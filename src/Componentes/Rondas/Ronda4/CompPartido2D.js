import React from 'react';

function CompPartido2D() {
    return (
        <tr style={{ background: "#e6e6e6" }}>
            <td>Francia</td>
            <td><span class="flag-icon flag-icon-fra"></span></td>
            <td>
                <input className='goals' id='francia1'></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id='australia1'></input>
            </td>
            <td><span class="flag-icon flag-icon-aus"></span></td>
            <td>Australia</td>
        </tr>
    )
}

export default CompPartido2D;