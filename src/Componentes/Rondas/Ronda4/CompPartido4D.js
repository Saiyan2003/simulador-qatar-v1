import React from 'react';

function CompPartido4D() {
    return (
        <tr style={{ background: "#e6e6e6" }}>
            <td>Francia</td>
            <td><span class="flag-icon flag-icon-fra"></span></td>
            <td>
                <input className='goals' id='francia2'></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id='dinamarca2'></input>
            </td>
            <td><span class="flag-icon flag-icon-dnk"></span></td>
            <td>Dinamarca</td>
        </tr>
    )
}

export default CompPartido4D;