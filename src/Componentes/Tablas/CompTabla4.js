import React from 'react';
import CompCabeceraT from './CompCabeceraT';
function CompTabla4() {
    return (
        <div class="table-responsive container">
            <table class="table" id='tabla1'>
                <CompCabeceraT/>
                <tbody id='body-table'>
                    <tr id="row-australia" className='A1'>
                        <td>Australia</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-dinamarca" className='A2'>
                        <td>Dinamarca</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-francia" className='A3'>
                        <td>Francia</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-tunez" className='A4'>
                        <td>Tunez</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                </tbody>
            </table>
            <br/>
        </div>
    )
}

export default CompTabla4;