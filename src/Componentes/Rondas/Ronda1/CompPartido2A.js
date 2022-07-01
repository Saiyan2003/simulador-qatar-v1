import React from 'react';

function CompPartido2A() {
    return (
        <tr style={{background: "#e6e6e6"}}>
            <td>Qatar</td>
            <td><span class="flag-icon flag-icon-qat"></span></td>
            <td>
                <input type="text" className='goals' id='qatar1'></input>
            </td>
            <td>vs</td>
            <td>
                <input type="text" className='goals' id='ecuador1'></input>
            </td>
            <td><span class="flag-icon flag-icon-ecu"></span></td>
            <td>Ecuador</td>
        </tr>
    )
}

export default CompPartido2A;
