import React from 'react';

function CompPartido1C() {
    return (
        <tr style={{ background: "#ededed" }}>
            <td>Argentina</td>
            <td><span class="flag-icon flag-icon-arg"></span></td>
            <td>
                <input className='goals' id='argentina1' ></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id='arabia1'></input>
            </td>
            <td><span class="flag-icon flag-icon-sau"></span></td>
            <td>Arabia Saudi</td>
        </tr>
    )
}

export default CompPartido1C;