import React from 'react';

function CompPartido3F() {
    return (
        <tr style={{ background: "#ededed" }}>
            <td>Belgica</td>
            <td><span class="flag-icon flag-icon-bel"></span></td>
            <td>
                <input className='goals' id="belgica2" ></input>
            </td>
            <td>vs</td>
            <td>
                <input className='goals' id="marruecos2" ></input>
            </td>
            <td><span class="flag-icon flag-icon-mar"></span></td>
            <td>Marruecos</td>
        </tr>
    )
}

export default CompPartido3F;