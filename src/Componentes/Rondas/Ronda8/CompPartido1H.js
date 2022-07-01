import React from 'react';

function CompPartido1H() {
    return (
        <tr style={{ background: "#ededed" }}>
            <td>Uruguay</td>
            <td><span class="flag-icon flag-icon-ury"></span></td>
            <td>
                <input type="text" className='goals' id='uruguay1'></input>
            </td>
            <td>vs</td>
            <td>
                <input type="text" className='goals' id='corea1'></input>
            </td>
            <td><span class="flag-icon flag-icon-kor"></span></td>
            <td>Corea del Sur</td>
        </tr>
    )
}

export default CompPartido1H;