import React from 'react';

function CompPartido2C() {
    return (
        <tr style={{ background: "#e6e6e6" }}>
            <td>Mexico</td>
            <td><span class="flag-icon flag-icon-mex"></span></td>
            <td>
                <input className='goals' id='mexico1'></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id='polonia1'></input>
            </td>
            <td><span class="flag-icon flag-icon-pol"></span></td>
            <td>Polonia</td>
        </tr>
    )
}

export default CompPartido2C;