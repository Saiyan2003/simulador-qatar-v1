import React from 'react';

function CompPartido1B() {
    return (
        <tr style={{ background: "#ededed" }}>
            <td>Inglaterra</td>
            <td><span class="flag-icon flag-icon-eng"></span></td>
            <td>
                <input className='goals' id='inglaterra1'></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id='iran1'></input>
            </td>
            <td><span class="flag-icon flag-icon-irn"></span></td>
            <td>Iran</td>
        </tr>
    )
}

export default CompPartido1B;