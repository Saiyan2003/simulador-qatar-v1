import React from 'react';
import CompCabeceraT from './CompCabeceraT';

function CompTabla3() {
    return (
        <div class="table-responsive container ">
            <table class="table" id='tabla1'>
                <CompCabeceraT />
                <tbody id='body-table'>
                    <tr id="row-argentina" className='A1'>
                        <td>Argentina</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-arabia" className='A2'>
                        <td>Arabia</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-mexico" className='A3'>
                        <td>Mexico</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-polonia" className='A4'>
                        <td>Polonia</td>
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

export default CompTabla3;