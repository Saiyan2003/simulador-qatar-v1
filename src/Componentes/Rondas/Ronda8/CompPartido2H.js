import React from 'react';

function CompPartido2H() {
    return (
        <tr style={{ background: "#e6e6e6" }}>
            <td>Portugal</td>
            <td><span class="flag-icon flag-icon-prt"></span></td>
            <td>
                <input type="text" className='goals' id='portugal1'></input>
            </td>
            <td>vs</td>
            <td>
                <input type="text" className='goals' id='ghana1'></input>
            </td>
            <td><span class="flag-icon flag-icon-gha"></span></td>
            <td>Ghana</td>
        </tr>
    )
}

export default CompPartido2H;