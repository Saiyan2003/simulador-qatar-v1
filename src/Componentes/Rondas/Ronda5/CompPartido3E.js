import React from 'react';

function CompPartido3E() {
    return (
        <tr style={{ background: "#ededed" }}>
            <td>Japon</td>
            <td><span class="flag-icon flag-icon-jpn"></span></td>
            <td>
                <input className='goals' id='japon2'></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id='costarica2'></input>
            </td>
            <td><span class="flag-icon flag-icon-cri"></span></td>
            <td>Costa Rica</td>
        </tr>
    )
}

export default CompPartido3E;