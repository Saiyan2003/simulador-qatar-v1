import React from 'react';

function CompPartido1D() {
    return (
        <tr style={{ background: "#ededed" }}>
            <td>Dinamarca</td>
            <td><span class="flag-icon flag-icon-dnk"></span></td>
            <td>
                <input className='goals' id='dinamarca1'></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id='tunez1'></input>
            </td>
            <td><span class="flag-icon flag-icon-tun"></span></td>
            <td>Tunez</td>
        </tr>
    )
}

export default CompPartido1D;