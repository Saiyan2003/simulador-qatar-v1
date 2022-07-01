import React from 'react';

function CompPartido1E() {
    return (
        <tr style={{ background: "#ededed" }}>
            <td>Alemania</td>
            <td><span class="flag-icon flag-icon-deu"></span></td>
            <td>
                <input className='goals' id='alemania1' ></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id='japon1'></input>
            </td>
            <td><span class="flag-icon flag-icon-jpn"></span></td>
            <td>Japon</td>
        </tr>
    )
}

export default CompPartido1E;