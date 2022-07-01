import React from 'react';

function CompPartido2G() {
    return (
        <tr style={{ background: "#e6e6e6" }}>
            <td>Brasil</td>
            <td><span class="flag-icon flag-icon-bra"></span></td>
            <td>
                <input type="text" className='goals' id="brasil1" ></input>
            </td>
            <td>vs</td>
            <td>
                <input type="text" className='goals' id="serbia1" ></input>
            </td>
            <td><span class="flag-icon flag-icon-srb"></span></td>
            <td>Serbia</td>
        </tr>
    )
}

export default CompPartido2G;