import React from 'react';

function CompPartido3H() {
    return (
        <tr style={{ background: "#ededed" }}>
            <td>Corea del Sur</td>
            <td><span class="flag-icon flag-icon-kor"></span></td>
            <td>
                <input type="text" className='goals' id='corea2'></input>
            </td>
            <td>vs</td>
            <td>
                <input type="text" className='goals' id='ghana2'></input>
            </td>
            <td><span class="flag-icon flag-icon-gha"></span></td>
            <td>Ghana</td>
        </tr>
    )
}

export default CompPartido3H;