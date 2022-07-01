import React from 'react';
import CompCabeceraT from './CompCabeceraT';
function CompTabla7() {
    return (
        <div class="table-responsive container">
            <table class="table" id='tabla1'>
                <CompCabeceraT/>
                <tbody id='body-table'>
                    <tr id="row-brasil" className='A1'>
                        <td>Brasil</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-camerun" className='A2'>
                        <td>Camerun</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-serbia" className='A3'>
                        <td>Serbia</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-suiza" className='A4'>
                        <td>Suiza</td>
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

export default CompTabla7;