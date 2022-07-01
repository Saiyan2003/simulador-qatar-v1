import React from 'react';

function CompPartido1A() {
    return (
        <tr style={{background : "#ededed"}}>
            <td>Senegal</td>
            <td><span class="flag-icon flag-icon-sen"></span></td>
            <td>
                <input type="text" className='goals' id='senegal1' ></input>
            </td>
            <td>vs</td>
            <td>
                <input type="text" className='goals' id='holanda1' ></input>
            </td>
            <td><span class="flag-icon flag-icon-bes"></span></td>
            <td>Paises Bajos</td>
        </tr>
    )
}

export default CompPartido1A;
