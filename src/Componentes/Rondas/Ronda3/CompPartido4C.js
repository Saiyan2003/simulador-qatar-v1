import React from 'react';

function CompPartido4C() {
    return (
        <tr style={{ background: "#e6e6e6" }}>
            <td>Argentina</td>
            <td><span class="flag-icon flag-icon-arg"></span></td>
            <td>
                <input className='goals' id='argentina2'></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id='mexico2'></input>
            </td>
            <td><span class="flag-icon flag-icon-mex"></span></td>
            <td>Mexico</td>
        </tr>
    )
}

export default CompPartido4C;