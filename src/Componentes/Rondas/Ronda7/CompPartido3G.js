import React from 'react';

function CompPartido3G() {
    return (
        <tr style={{ background: "#ededed" }}>
            <td>Camerun</td>
            <td><span class="flag-icon flag-icon-cmr"></span></td>
            <td>
                <input type="text" className='goals' id="camerun2"></input>
            </td>
            <td>vs</td>
            <td>
                <input type="text" className='goals' id="serbia2"></input>
            </td>
            <td><span class="flag-icon flag-icon-srb"></span></td>
            <td>Serbia</td>
        </tr>
    )
}

export default CompPartido3G;