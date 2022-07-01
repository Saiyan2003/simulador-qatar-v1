import React from 'react';
import CompCabeceraT from './CompCabeceraT';
//onClick={() => { clasi1() }} // EVENTO ONCLICK PARA EL BOTON

//ECUADOR
//SENEGAL
//QATAR
//PAISES-BAJOS

function CompTabla8() {
    return (
        <div class="table-responsive container">
            <table class="table" id='tabla1'>
                <CompCabeceraT />
                <tbody id='body-table'>
                    <tr id="row-corea" className='A1'>
                        <td>Corea del Sur</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-ghana" className='A2'>
                        <td>Ghana</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-portugal" className='A3'>
                        <td>Portugal</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td id='pts'>0</td>
                    </tr>
                    <tr id="row-uruguay" className='A4'>
                        <td>Uruguay</td>
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

export default CompTabla8;