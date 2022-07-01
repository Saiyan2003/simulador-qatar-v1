import React from 'react';
import CompCabeceraT from './CompCabeceraT';
function CompTabla5() {
    return (
        <div class="table-responsive container">
            <table class="table" id='tabla1'>
                <CompCabeceraT/>
                <tbody id='body-table'>
                    <tr id="row-alemania" className='A1'>
                        <td>Alemania</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-costarica" className='A2'>
                        <td>Costa Rica</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-españa" className='A3'>
                        <td>España</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-japon" className='A4'>
                        <td>Japon</td>
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
            <br></br>
        </div>
    )
}

export default CompTabla5;