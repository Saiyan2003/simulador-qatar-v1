import React from 'react';

function CompPartido5H() {
    return (
        <tr style={{ background: "#ededed" }}>
            <td>Corea del Sur</td>
            <td><span class="flag-icon flag-icon-kor"></span></td>
            <td>
                <input type="text" className='goals' id='corea3'></input>
            </td>
            <td>vs</td>
            <td>
                <input type="text" className='goals' id='portugal3'></input>
            </td>
            <td><span class="flag-icon flag-icon-prt"></span></td>
            <td>Portugal</td>
        </tr>
    )
}

export default CompPartido5H;