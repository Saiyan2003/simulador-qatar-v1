import React from 'react';

function CompPartido2E() {
    return (
        <tr style={{ background: "#e6e6e6" }}>
            <td>España</td>
            <td><span class="flag-icon flag-icon-esp"></span></td>
            <td>
                <input className='goals' id='españa1'></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id='costarica1'></input>
            </td>
            <td><span class="flag-icon flag-icon-cri"></span></td>
            <td>Costa Rica</td>
        </tr>
    )
}

export default CompPartido2E;