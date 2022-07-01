import React from 'react';
import CompCabeceraT from './CompCabeceraT';
function CompTabla6() {
    return (
        <div class="table-responsive container">
            <table class="table" id='tabla1'>
                <CompCabeceraT />
                <tbody id='body-table'>
                    <tr id="row-belgica" className='A1'>
                        <td>Belgica</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-canada" className='A2'>
                        <td>Canada</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-croacia" className='A3'>
                        <td>Croacia</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-marruecos" className='A4'>
                        <td>Marruecos</td>
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


export default CompTabla6;