import React from 'react';

function CompPartido2F() {
    return (
        <tr style={{ background: "#e6e6e6" }}>
            <td>Belgica</td>
            <td><span class="flag-icon flag-icon-bel"></span></td>
            <td>
                <input className='goals' id="belgica1" ></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id="canada1" ></input>
            </td>
            <td><span class="flag-icon flag-icon-can"></span></td>
            <td>Canada</td>
        </tr>
    )
}

export default CompPartido2F;