import React from 'react';

function CompPartido1G() {
    return (
        <tr style={{ background: "#ededed" }}>
            <td>Suiza</td>
            <td><span class="flag-icon flag-icon-che"></span></td>
            <td>
                <input type="text" className='goals' id="suiza1" ></input>
            </td>
            <td>vs</td>
            <td>
                <input type="text" className='goals' id="camerun1" ></input>
            </td>
            <td><span class="flag-icon flag-icon-cmr"></span></td>
            <td>Camerun</td>
        </tr>
    )
}

export default CompPartido1G;