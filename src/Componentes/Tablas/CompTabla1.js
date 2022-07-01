import React from 'react';
import CompCabeceraT from './CompCabeceraT';

function CompTabla1() {
    return (
        
        <div class="table-responsive container ">
            <br></br>
            <table class="table" id='tabla1'>
                <CompCabeceraT />
                <tbody id='body-table'>
                    <tr id="row-ecuador" className='A1'>
                        <td>Ecuador</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-senegal" className='A2'>

                        <td>Senegal</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-qatar" className='A3'>
                        <td>Qatar</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-paises-bajos" className='A4'>

                        <td>Paises bajos</td>
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

export default CompTabla1;