import React from 'react';

function CompPartido4H() {
    return (
        <tr style={{ background: "#e6e6e6" }}>
            <td>Portugal</td>
            <td><span class="flag-icon flag-icon-prt"></span></td>
            <td>
                <input type="text" className='goals' id='portugal2'></input>
            </td>
            <td>vs</td>
            <td>
                <input type="text" className='goals' id='uruguay2'></input>
            </td>
            <td><span class="flag-icon flag-icon-ury"></span></td>
            <td>Uruguay</td>
        </tr>
    )
}

export default CompPartido4H;