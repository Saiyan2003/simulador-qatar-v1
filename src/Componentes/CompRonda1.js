import React from 'react';

import CompPartido1A from './Rondas/Ronda1/CompPartido1A';
import CompPartido2A from './Rondas/Ronda1/CompPartido2A';
import CompPartido3A from './Rondas/Ronda1/CompPartido3A';
import CompPartido4A from './Rondas/Ronda1/CompPartido4A';
import CompPartido5A from './Rondas/Ronda1/CompPartido5A';
import CompPartido6A from './Rondas/Ronda1/CompPartido6A';

function CompRonda1() {
    return (
        <div className='container'>
            <table className='table table-bordered container table1' border="">
                <CompPartido1A />
                <CompPartido2A />
                <CompPartido3A />
                <CompPartido4A />
                <CompPartido5A />
                <CompPartido6A />
            </table>
            <div className='boton-cal1'>
                <button type="button" class="btn btn-primary" onClick={() => { ronda1() }} >Calcular</button>
            </div>
        </div>



    )
}


function ronda1() {

    //Partido 1
    var partido_1_L = parseInt(document.getElementById("senegal1").value);
    var partido_1_V = parseInt(document.getElementById("holanda1").value);
    //Partido 2
    var partido_2_L = parseInt(document.getElementById("qatar1").value);
    var partido_2_V = parseInt(document.getElementById("ecuador1").value);
    //Partido 3
    var partido_3_L = parseInt(document.getElementById("qatar2").value);
    var partido_3_V = parseInt(document.getElementById("senegal2").value);
    //Partido 4
    var partido_4_L = parseInt(document.getElementById("holanda2").value);
    var partido_4_V = parseInt(document.getElementById("ecuador2").value);
    //Partido 5
    var partido_5_L = parseInt(document.getElementById("holanda3").value);
    var partido_5_V = parseInt(document.getElementById("qatar3").value);
    //Partido 6
    var partido_6_L = parseInt(document.getElementById("ecuador3").value);
    var partido_6_V = parseInt(document.getElementById("senegal3").value);

    //Senegal
    //Obtener valores td de la columa senegal
    let fila_senegal = document.getElementById("row-senegal");
    let puntos_senegal = fila_senegal.getElementsByTagName("td");

    //----------------------------------------------------------

    //Paises bajos
    //Obtener valores td de la columa holanda
    let fila_paises_bajos = document.getElementById("row-paises-bajos");
    let puntos_paises_bajos = fila_paises_bajos.getElementsByTagName("td");

    //----------------------------------------------------------

    //Qatar
    //Obtener valores td de la columa qatar
    let fila_qatar = document.getElementById("row-qatar");
    let puntos_qatar = fila_qatar.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Ecuador
    //Obtener valores td de la columa ecuador
    let fila_ecuador = document.getElementById("row-ecuador");
    let puntos_ecuador = fila_ecuador.getElementsByTagName("td");

    //-------------------------------------------------------------------
    //Inicializar variables globales
    var global_senegal = 0
    var global_paises_bajos = 0
    var global_qatar = 0
    var global_ecuador = 0
    //Variables PJ
    var global_senegal_pj = 0
    var global_paises_bajos_pj = 0
    var global_qatar_pj = 0
    var global_ecuador_pj = 0
    //Variables PG
    var global_senegal_pg = 0
    var global_paises_bajos_pg = 0
    var global_qatar_pg = 0
    var global_ecuador_pg = 0
    //Variables PE
    var global_senegal_pe = 0
    var global_paises_bajos_pe = 0
    var global_qatar_pe = 0
    var global_ecuador_pe = 0
    //Variables PP
    var global_senegal_pp = 0
    var global_paises_bajos_pp = 0
    var global_qatar_pp = 0
    var global_ecuador_pp = 0
    //Variables de goles A FAVOR
    var global_senegal_gf = 0
    var global_paises_bajos_gf = 0
    var global_ecuador_gf = 0
    var global_qatar_gf = 0
    //Variables de goles EN CONTRA
    var global_senegal_gc = 0
    var global_paises_bajos_gc = 0
    var global_ecuador_gc = 0
    var global_qatar_gc = 0
    //Variables de DF goles
    var global_senegal_dg = 0
    var global_paises_bajos_dg = 0
    var global_ecuador_dg = 0
    var global_qatar_dg = 0
    //-------------------------------------------------------------------


    if (partido_1_L != null && partido_1_V != null) {
        //Insertar el valor 0 si los goles son NaN
        if (isNaN(partido_1_L)) {

            partido_1_L = 0
        }
        if (isNaN(partido_1_V)) {
            partido_1_V = 0
        }

        //Valores obtenidos por funcion
        var pts_senegal_1 = part1(partido_1_L, partido_1_V) //3
        var pts_paises_bajos_1 = part2(partido_1_V, partido_1_L) //0
        
        var res_local_1 = PG(pts_senegal_1, pts_paises_bajos_1)
        var res_visita_1 = PG(pts_paises_bajos_1, pts_senegal_1)
        var res_empate = PE(pts_senegal_1, pts_paises_bajos_1)

        //Sumar a los puntos grupales
        global_senegal = global_senegal + pts_senegal_1
        global_paises_bajos = global_paises_bajos + pts_paises_bajos_1
        //Sumar PG
        global_senegal_pg = global_senegal_pg + res_local_1
        global_paises_bajos_pg = global_paises_bajos_pg + res_visita_1
        //Sumar PE
        global_senegal_pe = global_senegal_pe + res_empate
        global_paises_bajos_pe = global_paises_bajos_pe + res_empate
        //Sumar PP
        global_senegal_pp = global_senegal_pp + res_visita_1
        global_paises_bajos_pp = global_paises_bajos_pp + res_local_1

        //Sumar los goles a favor
        global_senegal_gf = global_senegal_gf + partido_1_L // 6
        global_paises_bajos_gf = global_paises_bajos_gf + partido_1_V // 0
        puntos_senegal[5].innerHTML = global_senegal_gf //6
        puntos_paises_bajos[5].innerHTML = global_paises_bajos_gf //0
        //Goles en contra
        global_senegal_gc = global_senegal_gc + partido_1_V // 0 = 0 + 0
        global_paises_bajos_gc = global_paises_bajos_gc + partido_1_L // 0 = 0 + 3
        puntos_senegal[6].innerHTML = global_senegal_gc // 0
        puntos_paises_bajos[6].innerHTML = global_paises_bajos_gc // 3

        //Puntos obtenidos por 1er partido
        if (partido_1_L > partido_1_V) {
            //document.getElementById("resulto").innerHTML = "Senegal gana";
            puntos_senegal[8].innerHTML = global_senegal
            puntos_paises_bajos[8].innerHTML = global_paises_bajos
        }
        if (partido_1_L < partido_1_V) {
            //document.getElementById("resulto").innerHTML = "Holanda gana";
            //Prueba para ver quien gana
            puntos_senegal[8].innerHTML = global_senegal
            puntos_paises_bajos[8].innerHTML = global_paises_bajos
        }

        if (partido_1_L === partido_1_V) {
            //document.getElementById("resulto").innerHTML = "Empate";
            puntos_senegal[8].innerHTML = global_senegal
            puntos_paises_bajos[8].innerHTML = global_paises_bajos
        }
        //Colocar PG
        puntos_senegal[2].innerHTML = global_senegal_pg
        puntos_paises_bajos[2].innerHTML = global_paises_bajos_pg
        //Colocar PE
        puntos_senegal[3].innerHTML = global_senegal_pe
        puntos_paises_bajos[3].innerHTML = global_paises_bajos_pe
        //Colocar PP
        puntos_senegal[4].innerHTML = global_senegal_pp
        puntos_paises_bajos[4].innerHTML = global_paises_bajos_pp

    }

    //Partido 2
    if (partido_2_L != null && partido_2_V != null) {
        //Insertar el valor 0 si los goles son NaN
        if (isNaN(partido_2_L)) {
            partido_2_L = 0
        }
        if (isNaN(partido_2_V)) {
            partido_2_V = 0
        }
        //Valores obtenidos por funcion
        var pts_qatar_1 = part1(partido_2_L, partido_2_V) //3
        var pts_ecuador_1 = part2(partido_2_V, partido_2_L) //0

        var res_local_2 = PG(pts_qatar_1, pts_ecuador_1)
        var res_visita_2 = PG(pts_ecuador_1, pts_qatar_1)
        var res_empate_2 = PE(pts_qatar_1, pts_ecuador_1)

        //Sumar los puntos globales
        global_qatar = global_qatar + pts_qatar_1
        global_ecuador = global_ecuador + pts_ecuador_1

        //Sumar PG
        global_qatar_pg = global_qatar_pg + res_local_2
        global_ecuador_pg = global_ecuador_pg + res_visita_2
        //Sumar PE
        global_qatar_pe = global_qatar_pe + res_empate_2
        global_ecuador_pe = global_ecuador_pe + res_empate_2
        //Sumar PP
        global_qatar_pp = global_qatar_pp + res_visita_2
        global_ecuador_pp = global_ecuador_pp + res_local_2

        //Sumar los goles a favor
        global_qatar_gf = global_qatar_gf + partido_2_L
        global_ecuador_gf = global_ecuador_gf + partido_2_V
        puntos_qatar[5].innerHTML = global_qatar_gf
        puntos_ecuador[5].innerHTML = global_ecuador_gf
        //Sumar goles en contra
        global_qatar_gc = global_qatar_gc + partido_2_V // 0 = 0 + 0
        global_ecuador_gc = global_ecuador_gc + partido_2_L // 3 = 3 + 0
        puntos_qatar[6].innerHTML = global_qatar_gc
        puntos_ecuador[6].innerHTML = global_ecuador_gc


        //Puntos obtenidos por 1er partido
        if (partido_2_L > partido_2_V) {
            puntos_qatar[8].innerHTML = global_qatar
            puntos_ecuador[8].innerHTML = global_ecuador
        }
        if (partido_2_L < partido_2_V) {
            puntos_qatar[8].innerHTML = global_qatar
            puntos_ecuador[8].innerHTML = global_ecuador
        }
        if (partido_2_L === partido_2_V) {
            puntos_qatar[8].innerHTML = global_qatar
            puntos_ecuador[8].innerHTML = global_ecuador
        }
        //Sumar PG
        puntos_qatar[2].innerHTML = global_qatar_pg
        puntos_ecuador[2].innerHTML = global_ecuador_pg
        //Sumar PE
        puntos_qatar[3].innerHTML = global_qatar_pe
        puntos_ecuador[3].innerHTML = global_ecuador_pe
        //Sumar PP
        puntos_qatar[4].innerHTML = global_qatar_pp
        puntos_ecuador[4].innerHTML = global_ecuador_pp
    }

    //Partido 3
    if (partido_3_L != null && partido_3_V != null) {
        //Valores obtenidos por funcion
        if (isNaN(partido_3_L)) {
            partido_3_L = 0
        }
        if (isNaN(partido_3_V)) {
            partido_3_V = 0
        }
        var pts_qatar_2 = part2(partido_3_L, partido_3_V)
        var pts_senegal_2 = part1(partido_3_V, partido_3_L)

        //Sumar a los puntos grupales
        global_senegal = global_senegal + pts_senegal_2
        global_qatar = global_qatar + pts_qatar_2

        var res_local_3 = PG(pts_qatar_2, pts_senegal_2)
        var res_visita_3 = PG(pts_senegal_2, pts_qatar_2)
        var res_empate_3 = PE(pts_qatar_2, pts_senegal_2)
        //Sumar PG
        global_qatar_pg = global_qatar_pg + res_local_3
        global_senegal_pg = global_senegal_pg + res_visita_3
        //Sumar PE
        global_qatar_pe = global_qatar_pe + res_empate_3
        global_senegal_pe = global_senegal_pe + res_empate_3
        //Sumar PP
        global_qatar_pp = global_qatar_pp + res_visita_3
        global_senegal_pp = global_senegal_pp + res_local_3

        //Sumar los goles a favor
        global_qatar_gf = global_qatar_gf + partido_3_L // 0 = 0 + 0
        global_senegal_gf = global_senegal_gf + partido_3_V // 3 = 3 + 0
        puntos_qatar[5].innerHTML = global_qatar_gf //0
        puntos_senegal[5].innerHTML = global_senegal_gf // 3
        //Goles en contra
        global_qatar_gc = global_qatar_gc + partido_3_V // 0 = 0 + 0
        global_senegal_gc = global_senegal_gc + partido_3_L // 3 = 3 + 0
        puntos_qatar[6].innerHTML = global_qatar_gc // 3
        puntos_senegal[6].innerHTML = global_senegal_gc // 0
        //Restar diferencia de goles
        //puntos_qatar[7].innerHTML = global_qatar_gf - global_senegal_gc
        //puntos_senegal[7].innerHTML = global_senegal_gf - global_qatar_gc

        //Puntos obtenidos por 3er partido
        if (partido_3_L > partido_3_V) {
            puntos_senegal[8].innerHTML = global_senegal
            puntos_qatar[8].innerHTML = global_qatar

        }
        if (partido_3_L < partido_3_V) {
            puntos_senegal[8].innerHTML = global_senegal
            puntos_qatar[8].innerHTML = global_qatar
        }

        if (partido_3_L === partido_3_V) {
            puntos_senegal[8].innerHTML = global_senegal
            puntos_qatar[8].innerHTML = global_qatar
        }
        puntos_senegal[2].innerHTML = global_senegal_pg
        puntos_qatar[2].innerHTML = global_qatar_pg
        //Colocar PE
        puntos_senegal[3].innerHTML = global_senegal_pe
        puntos_qatar[3].innerHTML = global_qatar_pe
        //Colocar PP
        puntos_senegal[4].innerHTML = global_senegal_pp
        puntos_qatar[4].innerHTML = global_qatar_pp
    }


    //Partido 4
    if (partido_4_L != null && partido_4_V != null) {
        if (isNaN(partido_4_L)) {
            partido_4_L = 0
        }
        if (isNaN(partido_4_V)) {
            partido_4_V = 0
        }
        //Valores obtenidos por funcion
        var pts_paises_bajos_2 = part2(partido_4_L, partido_4_V)
        var pts_ecuador_2 = part1(partido_4_V, partido_4_L)

        //Sumar los puntos globales
        global_ecuador = global_ecuador + pts_ecuador_2
        global_paises_bajos = global_paises_bajos + pts_paises_bajos_2

        var res_local_4 = PG(pts_paises_bajos_2, pts_ecuador_2)
        var res_visita_4 = PG(pts_ecuador_2, pts_paises_bajos_2)
        var res_empate_4 = PE(pts_paises_bajos_2, pts_ecuador_2)
        //Sumar PG
        global_paises_bajos_pg = global_paises_bajos_pg + res_local_4
        global_ecuador_pg = global_ecuador_pg + res_visita_4
        //Sumar PE
        global_paises_bajos_pe = global_paises_bajos_pe + res_empate_4
        global_ecuador_pe = global_ecuador_pe + res_empate_4
        //Sumar PP
        global_paises_bajos_pp = global_paises_bajos_pp + res_visita_4
        global_ecuador_pp = global_ecuador_pp + res_local_4

        //Sumar los goles a favor
        global_ecuador_gf = global_ecuador_gf + partido_4_V
        global_paises_bajos_gf = global_paises_bajos_gf + partido_4_L
        puntos_ecuador[5].innerHTML = global_ecuador_gf
        puntos_paises_bajos[5].innerHTML = global_paises_bajos_gf
        //Goles en contra
        global_paises_bajos_gc = global_paises_bajos_gc + partido_4_V //
        global_ecuador_gc = global_ecuador_gc + partido_4_L
        puntos_paises_bajos[6].innerHTML = global_paises_bajos_gc //
        puntos_ecuador[6].innerHTML = global_ecuador_gc // 0
        //Restar diferencia de goles
        //puntos_ecuador[7].innerHTML = global_ecuador_gf - global_paises_bajos_gc
        //puntos_paises_bajos[7].innerHTML = global_paises_bajos_gf - global_ecuador_gc

        //Puntos obtenidos por 4er partido
        if (partido_4_L > partido_4_V) {
            puntos_ecuador[8].innerHTML = global_ecuador
            puntos_paises_bajos[8].innerHTML = global_paises_bajos
        }
        if (partido_4_L < partido_4_V) {
            puntos_ecuador[8].innerHTML = global_ecuador
            puntos_paises_bajos[8].innerHTML = global_paises_bajos
        }

        if (partido_4_L === partido_4_V) {
            puntos_ecuador[8].innerHTML = global_ecuador
            puntos_paises_bajos[8].innerHTML = global_paises_bajos
        }
        //Colocar PG
        puntos_paises_bajos[2].innerHTML = global_paises_bajos_pg
        puntos_ecuador[2].innerHTML = global_ecuador_pg
        //Colocar PE
        puntos_paises_bajos[3].innerHTML = global_paises_bajos_pe
        puntos_ecuador[3].innerHTML = global_ecuador_pe
        //Colocar PP
        puntos_paises_bajos[4].innerHTML = global_paises_bajos_pp
        puntos_ecuador[4].innerHTML = global_ecuador_pp
    }

    //Partido 5
    if (partido_5_L != null && partido_5_V != null) {
        if (isNaN(partido_5_L)) {
            partido_5_L = 0
        }
        if (isNaN(partido_5_V)) {
            partido_5_V = 0
        }
        //Valores obtenidos por funcion
        var pts_paises_bajos_3 = part2(partido_5_L, partido_5_V)
        var pts_qatar_3 = part1(partido_5_V, partido_5_L)

        //Sumar los puntos globales
        global_qatar = global_qatar + pts_qatar_3
        global_paises_bajos = global_paises_bajos + pts_paises_bajos_3

        var res_local_5 = PG(pts_paises_bajos_3, pts_qatar_3)
        var res_visita_5 = PG(pts_qatar_3, pts_paises_bajos_3)
        var res_empate_5 = PE(pts_paises_bajos_3, pts_qatar_3)
        //Sumar PG
        global_paises_bajos_pg = global_paises_bajos_pg + res_local_5
        global_qatar_pg = global_qatar_pg + res_visita_5
        //Sumar PE
        global_paises_bajos_pe = global_paises_bajos_pe + res_empate_5
        global_qatar_pe = global_qatar_pe + res_empate_5
        //Sumar PP
        global_paises_bajos_pp = global_paises_bajos_pp + res_visita_5
        global_qatar_pp = global_qatar_pp + res_local_5

        //Sumar los goles a favor
        global_qatar_gf = global_qatar_gf + partido_5_V
        global_paises_bajos_gf = global_paises_bajos_gf + partido_5_L
        puntos_qatar[5].innerHTML = global_qatar_gf
        puntos_paises_bajos[5].innerHTML = global_paises_bajos_gf
        //Goles en contra
        global_paises_bajos_gc = global_paises_bajos_gc + partido_5_V // 0 = 0 + 0
        global_qatar_gc = global_qatar_gc + partido_5_L // 3 = 3 + 0
        puntos_paises_bajos[6].innerHTML = global_paises_bajos_gc // 3
        puntos_qatar[6].innerHTML = global_qatar_gc // 0
        //Restar diferencia de goles
        //puntos_qatar[7].innerHTML = global_qatar_gf - global_paises_bajos_gc
        //puntos_paises_bajos[7].innerHTML = global_paises_bajos_gf - global_qatar_gc

        //Puntos obtenidos por 5er partido
        if (partido_5_L > partido_5_V) {
            puntos_qatar[8].innerHTML = global_qatar
            puntos_paises_bajos[8].innerHTML = global_paises_bajos
        }
        if (partido_5_L < partido_5_V) {
            puntos_qatar[8].innerHTML = global_qatar
            puntos_paises_bajos[8].innerHTML = global_paises_bajos
        }

        if (partido_5_L === partido_5_V) {
            puntos_qatar[8].innerHTML = global_qatar
            puntos_paises_bajos[8].innerHTML = global_paises_bajos
        }
        //Colocar PG
        puntos_paises_bajos[2].innerHTML = global_paises_bajos_pg
        puntos_qatar[2].innerHTML = global_qatar_pg
        //Colocar PE
        puntos_paises_bajos[3].innerHTML = global_paises_bajos_pe
        puntos_qatar[3].innerHTML = global_qatar_pe
        //Colocar PP
        puntos_paises_bajos[4].innerHTML = global_paises_bajos_pp
        puntos_qatar[4].innerHTML = global_qatar_pp
    }

    //Partido 6
    if (partido_6_L != null && partido_6_V != null) {
        if (isNaN(partido_6_L)) {
            partido_6_L = 0
        }
        if (isNaN(partido_6_V)) {
            partido_6_V = 0
        }
        //Valores obtenidos por funcion
        var pts_ecuador_3 = part2(partido_6_L, partido_6_V)
        var pts_senegal_3 = part1(partido_6_V, partido_6_L)

        //Sumar los puntos globales
        global_senegal = global_senegal + pts_senegal_3
        global_ecuador = global_ecuador + pts_ecuador_3

        var res_local_6 = PG(pts_ecuador_3, pts_senegal_3)
        var res_visita_6 = PG(pts_senegal_3, pts_ecuador_3)
        var res_empate_6 = PE(pts_ecuador_3, pts_senegal_3)
        //Sumar PG
        global_senegal_pg = global_senegal_pg + res_local_6
        global_ecuador_pg = global_ecuador_pg + res_visita_6
        //Sumar PE
        global_senegal_pe = global_senegal_pe + res_empate_6
        global_ecuador_pe = global_ecuador_pe + res_empate_6
        //Sumar PP
        global_senegal_pp = global_senegal_pp + res_visita_6
        global_ecuador_pp = global_ecuador_pp + res_local_6

        //Sumar los goles a favor
        global_senegal_gf = global_senegal_gf + partido_6_V
        global_ecuador_gf = global_ecuador_gf + partido_6_L
        puntos_senegal[5].innerHTML = global_senegal_gf
        puntos_ecuador[5].innerHTML = global_ecuador_gf
        //Sumar goles en contra
        //Goles en contra
        global_ecuador_gc = global_ecuador_gc + partido_6_V // 0 = 0 + 0
        global_senegal_gc = global_senegal_gc + partido_6_L // 3 = 3 + 0
        puntos_senegal[6].innerHTML = global_senegal_gc
        puntos_ecuador[6].innerHTML = global_ecuador_gc

        //Puntos obtenidos por 6er partido
        if (partido_6_L > partido_6_V) {
            puntos_senegal[8].innerHTML = global_senegal
            puntos_ecuador[8].innerHTML = global_ecuador
        }
        if (partido_6_L < partido_6_V) {
            puntos_senegal[8].innerHTML = global_senegal
            puntos_ecuador[8].innerHTML = global_ecuador
        }

        if (partido_6_L === partido_6_V) {
            puntos_senegal[8].innerHTML = global_senegal
            puntos_ecuador[8].innerHTML = global_ecuador
        }
        //Colocar PG
        puntos_senegal[2].innerHTML = global_senegal_pg
        puntos_ecuador[2].innerHTML = global_ecuador_pg
        //Colocar PE
        puntos_senegal[3].innerHTML = global_senegal_pe
        puntos_ecuador[3].innerHTML = global_ecuador_pe
        //Colocar PP
        puntos_senegal[4].innerHTML = global_senegal_pp
        puntos_ecuador[4].innerHTML = global_ecuador_pp
    }

    //Restar diferencia de goles
    global_senegal_dg = global_senegal_gf - global_senegal_gc
    global_paises_bajos_dg = global_paises_bajos_gf - global_paises_bajos_gc
    global_ecuador_dg = global_ecuador_gf - global_ecuador_gc
    global_qatar_dg = global_qatar_gf - global_qatar_gc
    //Insertarlos en el html
    puntos_senegal[7].innerHTML = global_senegal_dg
    puntos_paises_bajos[7].innerHTML = global_paises_bajos_dg
    puntos_ecuador[7].innerHTML = global_ecuador_dg
    puntos_qatar[7].innerHTML = global_qatar_dg
    //Partidos Jugados
    global_senegal_pj = 3
    global_ecuador_pj = 3
    global_qatar_pj = 3
    global_paises_bajos_pj = 3
    puntos_senegal[1].innerHTML = global_senegal_pj
    puntos_ecuador[1].innerHTML = global_ecuador_pj
    puntos_qatar[1].innerHTML = global_qatar_pj
    puntos_paises_bajos[1].innerHTML = global_paises_bajos_pj

    clasi1();

}

function PG(a, b) {
    if (a > b) {
        return 1
    }
    if (a === b) {
        return 0
    }
    else {
        return 0
    }
}

function PE(a, b) {
    if (a > b) {
        return 0
    }
    if (a === b) {
        return 1
    }
    else {
        return 0
    }
}

//Funcion para sacar valor a tiempo real para 1er Partido Senegal
function part1(l, v) {

    if (l > v) {
        return 3
    }
    if (l === v) {
        return 1
    }
    else {
        return 0
    }

}
//Funcion para sacar valor a tiempo real para 1er Partido Paises Bajos
function part2(l, v) {

    if (l > v) {
        return 3
    }
    if (l === v) {
        return 1
    }
    else {
        return 0
    }

}


function clasi1() {

    //Senegal
    //Obtener valores td de la columa senegal
    let fila_senegal = document.getElementById("row-senegal");
    let puntos_senegal = fila_senegal.getElementsByTagName("td");

    //----------------------------------------------------------

    //Paises bajos
    //Obtener valores td de la columa holanda
    let fila_paises_bajos = document.getElementById("row-paises-bajos");
    let puntos_paises_bajos = fila_paises_bajos.getElementsByTagName("td");

    //----------------------------------------------------------

    //Qatar
    //Obtener valores td de la columa qatar
    let fila_qatar = document.getElementById("row-qatar");
    let puntos_qatar = fila_qatar.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Ecuador
    //Obtener valores td de la columa ecuador
    let fila_ecuador = document.getElementById("row-ecuador");
    let puntos_ecuador = fila_ecuador.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Puntos de los equipos
    var points_senegal = parseInt(puntos_senegal[8].innerHTML);
    var points_ecuador = parseInt(puntos_ecuador[8].innerHTML);
    var points_qatar = parseInt(puntos_qatar[8].innerHTML);
    var points_paises_bajos = parseInt(puntos_paises_bajos[8].innerHTML);
    //Goles a favor
    var gf_senegal = parseInt(puntos_senegal[5].innerHTML);
    var gf_ecuador = parseInt(puntos_ecuador[5].innerHTML);
    var gf_qatar = parseInt(puntos_qatar[5].innerHTML);
    var gf_paises_bajos = parseInt(puntos_paises_bajos[5].innerHTML);
    //Diferencia de goles
    var df_senegal = parseInt(puntos_senegal[7].innerHTML);
    var df_ecuador = parseInt(puntos_ecuador[7].innerHTML);
    var df_qatar = parseInt(puntos_qatar[7].innerHTML);
    var df_paises_bajos = parseInt(puntos_paises_bajos[7].innerHTML);

    //Lista con los puntos de los equipos
    let lista_puntos_1 = [points_qatar, points_paises_bajos, points_ecuador, points_senegal]
    let lista_df = [df_senegal, df_ecuador, df_qatar, df_paises_bajos]
    lista_puntos_1.sort(Comparar)
    lista_df.sort(Comparar)

    //------------CONDICIONES PARA EL 1ER PUESTO-----------------------//

    //Condiciones para 1er puesto Ecuador y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_ecuador) {
        //Ecuador iguala con Paises Bajos
        if (lista_puntos_1[3] === points_paises_bajos) {
            if (df_ecuador > df_paises_bajos) {
                document.getElementById("octavos1").innerText = puntos_ecuador[0].innerText;
                document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                console.log("Ecuador primero  y Paises Bajos Segundo")
            }
            if (df_ecuador === df_paises_bajos) {
                if (gf_ecuador > gf_paises_bajos) {
                    document.getElementById("octavos1").innerText = puntos_ecuador[0].innerText;
                    document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                }

            }
            if (df_ecuador < df_paises_bajos) {
                document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
            }
        }
        //Ecuador iguala con Qatar
        if (lista_puntos_1[3] === points_qatar) {
            if (df_ecuador > df_qatar) {
                document.getElementById("octavos1").innerText = puntos_ecuador[0].innerText;
                document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                console.log("Ecuador primero y Qatar segundo")
            }
            if (df_ecuador === df_qatar) {
                if (gf_ecuador > gf_qatar) {
                    document.getElementById("octavos1").innerText = puntos_ecuador[0].innerText;
                    document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                }
            }
            if (df_ecuador < df_qatar) {
                document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
            }
        }

        //Ecuador iguala con Senegal
        if (lista_puntos_1[3] === points_senegal) {
            if (df_ecuador > df_senegal) {
                document.getElementById("octavos1").innerText = puntos_ecuador[0].innerText;
                document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                console.log("Ecuador primero  y Senegal Segundo")
            }
            if (df_ecuador === df_senegal) {
                if (gf_ecuador > gf_senegal) {
                    document.getElementById("octavos1").innerText = puntos_ecuador[0].innerText;
                    document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                }

            }
            if (df_ecuador < df_senegal) {
                document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
            }
        }
        //Ecuador no iguala con nadie
        if (lista_puntos_1[3] !== points_senegal && lista_puntos_1[3] !== points_qatar &&
            lista_puntos_1[3] !== points_paises_bajos) {
            document.getElementById("octavos1").innerText = puntos_ecuador[0].innerText;
        }

    }

    //Condiciones para 1er puesto senegal y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_senegal) {
        //Senegal iguala con Ecuador
        if (lista_puntos_1[3] === points_ecuador) {
            if (df_senegal > df_ecuador) {
                document.getElementById("octavos1").innerText = puntos_senegal[0].innerText;
                document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                console.log("Senegal primero  y Ecuador Segundo")
            }
            if (df_senegal === df_ecuador) {
                if (gf_senegal > gf_ecuador) {
                    document.getElementById("octavos1").innerText = puntos_senegal[0].innerText;
                    document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                }

            }
            if (df_senegal < df_ecuador) {
                document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
            }
        }
        //Senegal iguala con Paises Bajos
        if (lista_puntos_1[3] === points_paises_bajos) {
            if (df_senegal > df_paises_bajos) {
                document.getElementById("octavos1").innerText = puntos_senegal[0].innerText;
                document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                console.log("Senegal primero  y Paises bajos Segundo")
            }
            if (df_senegal === df_paises_bajos) {
                if (gf_senegal > gf_paises_bajos) {
                    document.getElementById("octavos1").innerText = puntos_senegal[0].innerText;
                    document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                }

            }
            if (df_senegal < df_paises_bajos) {
                document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
            }
        }

        //Senegal iguala con Qatar
        if (lista_puntos_1[3] === points_qatar) {
            if (df_senegal > df_qatar) {
                document.getElementById("octavos1").innerText = puntos_senegal[0].innerText;
                document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                console.log("Senegal primero  y Qatar Segundo")
            }
            if (df_senegal === df_qatar) {
                if (gf_senegal > gf_qatar) {
                    document.getElementById("octavos1").innerText = puntos_senegal[0].innerText;
                    document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                }

            }
            if (df_senegal < df_qatar) {
                document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
            }
        }
        //Senegal no iguala con nadie
        if (lista_puntos_1[3] !== points_qatar && lista_puntos_1[3] !== points_paises_bajos &&
            lista_puntos_1[3] !== points_ecuador) {
            document.getElementById("octavos1").innerText = puntos_senegal[0].innerText;
        }

    }

    //Condiciones para 1er puesto Qatar y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_qatar) {
        //Qatar iguala con Ecuador
        if (lista_puntos_1[3] === points_ecuador) {
            if (df_qatar > df_ecuador) {
                document.getElementById("octavos1").innerText = puntos_qatar[0].innerText;
                document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                console.log("qatar primero  y Ecuador Segundo")
            }
            if (df_qatar === df_ecuador) {
                if (gf_qatar > gf_ecuador) {
                    document.getElementById("octavos1").innerText = puntos_qatar[0].innerText;
                    document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                }

            }
            if (df_qatar < df_ecuador) {
                document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
            }
        }
        //Qatar iguala con Paises Bajos
        if (lista_puntos_1[3] === points_paises_bajos) {
            if (df_qatar > df_paises_bajos) {
                document.getElementById("octavos1").innerText = puntos_qatar[0].innerText;
                document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                console.log("qatar primero  y Paises bajos Segundo")
            }
            if (df_qatar === df_paises_bajos) {
                if (gf_qatar > gf_paises_bajos) {
                    document.getElementById("octavos1").innerText = puntos_qatar[0].innerText;
                    document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                }

            }
            if (df_qatar < df_paises_bajos) {
                document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
            }
        }

        //Qatar iguala con Senegal
        if (lista_puntos_1[3] === points_senegal) {
            if (df_qatar > df_senegal) {
                document.getElementById("octavos1").innerText = puntos_qatar[0].innerText;
                document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                console.log("Qatar primero  y Senegal Segundo")
            }
            if (df_qatar === df_senegal) {
                if (gf_qatar > gf_senegal) {
                    document.getElementById("octavos1").innerText = puntos_qatar[0].innerText;
                    document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                }

            }
            if (df_qatar < df_senegal) {
                document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
            }
        }
        //Qatar no iguala con nadie
        if (lista_puntos_1[3] !== points_senegal && lista_puntos_1[3] !== points_paises_bajos &&
            lista_puntos_1[3] !== points_ecuador) {
            document.getElementById("octavos1").innerText = puntos_qatar[0].innerText;
        }

    }

    //Condiciones para 1er puesto Paises Bajos y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_paises_bajos) {
        //Paises Bajos iguala con Ecuador
        if (lista_puntos_1[3] === points_ecuador) {
            if (df_paises_bajos > df_ecuador) {
                document.getElementById("octavos1").innerText = puntos_paises_bajos[0].innerText;
                document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                console.log("Paises Bajos primero  y Ecuador Segundo")
            }
            if (df_paises_bajos === df_ecuador) {
                if (gf_paises_bajos > gf_ecuador) {
                    document.getElementById("octavos1").innerText = puntos_paises_bajos[0].innerText;
                    document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                }
            }
            if (df_paises_bajos < df_ecuador) {
                document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
            }
        }
        //Paises Bajos iguala con Qatar
        if (lista_puntos_1[3] === points_qatar) {
            if (df_paises_bajos > df_qatar) {
                document.getElementById("octavos1").innerText = puntos_paises_bajos[0].innerText;
                document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                console.log("Paises Bajos primero y Qatar segundo")
            }
            if (df_paises_bajos === df_qatar) {
                if (gf_paises_bajos > gf_qatar) {
                    document.getElementById("octavos1").innerText = puntos_paises_bajos[0].innerText;
                    document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                }

            }
            if (df_paises_bajos < df_qatar) {
                document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
            }
        }

        //Paises bajos iguala con Senegal
        if (lista_puntos_1[3] === points_senegal) {
            if (df_paises_bajos > df_senegal) {
                document.getElementById("octavos1").innerText = puntos_paises_bajos[0].innerText;
                document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                console.log("Paises Bajos primero y Senegal Segundo")
            }
            if (df_paises_bajos === df_senegal) {
                if (gf_paises_bajos > gf_senegal) {
                    document.getElementById("octavos1").innerText = puntos_paises_bajos[0].innerText;
                    document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                }

            }
            if (df_paises_bajos < df_senegal) {
                document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
            }
        }
        //Paises no iguala con nadie
        if (lista_puntos_1[3] !== points_senegal && lista_puntos_1[3] !== points_qatar &&
            lista_puntos_1[3] !== points_ecuador) {
            document.getElementById("octavos1").innerText = puntos_paises_bajos[0].innerText;
        }

    }

    //--------------------CONDICIONES PARA EL 2DO PUESTO--------------------------- //

    if (document.getElementById("octavos1").innerText !== puntos_ecuador[0].innerText) {
        //Condiciones para 2do puesto Ecuador
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_ecuador) {
            //Ecuador sin Paises Bajos
            if (document.getElementById("octavos1").innerText === "Paises bajos") {
                //Ecuador iguala con Qatar
                if (lista_puntos_1[2] === points_qatar) {
                    if (df_ecuador > df_qatar) {
                        document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        console.log("Ecuador segundo y Qatar 3ero")
                    }
                    if (df_ecuador === df_qatar) {
                        if (gf_ecuador > gf_qatar) {
                            document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        }
                    }
                }
                //Ecuador iguala con Senegal
                if (lista_puntos_1[2] === points_senegal) {
                    if (df_ecuador > df_senegal) {
                        document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        console.log("Ecuador segundo y senegal 3ero")
                    }
                    if (df_ecuador === df_senegal) {
                        if (gf_ecuador > gf_senegal) {
                            document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        }
                    }
                }

            }
            if (document.getElementById("octavos1").innerText === "Senegal") {
                //Ecuador iguala con Paises Bajos
                if (lista_puntos_1[2] === points_paises_bajos) {
                    if (df_ecuador > df_paises_bajos) {
                        document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        console.log("Ecuador segundo y Paises Bajos 3er")
                    }
                    if (df_ecuador === df_paises_bajos) {
                        if (gf_ecuador > gf_paises_bajos) {
                            document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        }
                    }
                }
                //Ecuador iguala con Qatar
                if (lista_puntos_1[2] === points_qatar) {
                    if (df_ecuador > df_qatar) {
                        document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        console.log("Ecuador segundo y Qatar 3ero")
                    }
                    if (df_ecuador === df_qatar) {
                        if (gf_ecuador > gf_qatar) {
                            document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        }
                    }
                }

            }

            if (document.getElementById("octavos1").innerText === "Qatar") {
                //Ecuador iguala con Paises Bajos
                if (lista_puntos_1[2] === points_paises_bajos) {
                    if (df_ecuador > df_paises_bajos) {
                        document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        console.log("Ecuador segundo y Paises Bajos 3er")
                    }
                    if (df_ecuador === df_paises_bajos) {
                        if (gf_ecuador > gf_paises_bajos) {
                            document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        }
                    }
                }
                //Ecuador iguala con Senegal
                if (lista_puntos_1[2] === points_senegal) {
                    if (df_ecuador > df_senegal) {
                        document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        console.log("Ecuador segundo y senegal 3ero")
                    }
                    if (df_ecuador === df_senegal) {
                        if (gf_ecuador > gf_senegal) {
                            document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        }
                    }
                }
            }

            //Ecuador no iguala con nadie
            if (lista_puntos_1[2] !== points_senegal && lista_puntos_1[2] !== points_paises_bajos && lista_puntos_1[2] !== points_qatar) {
                document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
            }

        }
    }


    if (document.getElementById("octavos1").innerText !== puntos_senegal[0].innerText) {
        //Condiciones para 2do puesto senegal
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_senegal) {
            //Senegal sin Paises Bajos
            if (document.getElementById("octavos1").innerText === "Paises bajos") {
                //Senegal iguala con Ecuador
                if (lista_puntos_1[2] === points_ecuador) {
                    if (df_senegal > df_ecuador) {
                        document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        console.log("Senegal segundo y Ecuador 3ero")
                    }
                    if (df_senegal === df_ecuador) {
                        if (gf_senegal > gf_ecuador) {
                            document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        }
                    }
                }
                //Senegal iguala con Qatar
                if (lista_puntos_1[2] === points_qatar) {
                    if (df_senegal > df_qatar) {
                        document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        console.log("Senegal segundo y Qatar 3ero")
                    }
                    if (df_senegal === df_qatar) {
                        if (gf_senegal > gf_qatar) {
                            document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos1").innerText === "Ecuador") {
                //Senegal iguala con Paises Bajos
                if (lista_puntos_1[2] === points_paises_bajos) {
                    if (df_senegal > df_paises_bajos) {
                        document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        console.log("Senegal segundo y Paises Bajos 3er")
                    }
                    if (df_senegal === df_paises_bajos) {
                        if (gf_senegal > gf_paises_bajos) {
                            document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        }
                    }
                }
                //Senegal iguala con Qatar
                if (lista_puntos_1[2] === points_qatar) {
                    if (df_senegal > df_qatar) {
                        document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        console.log("Senegal segundo y Qatar 3ero")
                    }
                    if (df_senegal === df_qatar) {
                        if (gf_senegal > gf_qatar) {
                            document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos1").innerText === "Qatar") {
                //Senegal iguala con Paises Bajos
                if (lista_puntos_1[2] === points_paises_bajos) {
                    if (df_senegal > df_paises_bajos) {
                        document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        console.log("Senegal segundo y Paises Bajos 3er")
                    }
                    if (df_senegal === df_paises_bajos) {
                        if (gf_senegal > gf_paises_bajos) {
                            document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        }
                    }
                }
                //Senegal iguala con Ecuador
                if (lista_puntos_1[2] === points_ecuador) {
                    if (df_senegal > df_ecuador) {
                        document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        console.log("Senegal segundo y Ecuador 3ero")
                    }
                    if (df_senegal === df_ecuador) {
                        if (gf_senegal > gf_ecuador) {
                            document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        }
                    }
                }
            }

            //Senegal no iguala con nadie
            if (lista_puntos_1[2] !== points_qatar && lista_puntos_1[2] !== points_paises_bajos &&
                lista_puntos_1[2] !== points_ecuador) {
                document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
            }
        }
    }


    if (document.getElementById("octavos1").innerText !== puntos_qatar[0].innerText) {
        //Condiciones para 2do puesto Qatar
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_qatar) {
            //Qatar sin Paises Bajos
            if (document.getElementById("octavos1").innerText === "Paises bajos") {
                //Qatar iguala con Ecuador
                if (lista_puntos_1[2] === points_ecuador) {
                    if (df_qatar > df_ecuador) {
                        document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        console.log("Qatar segundo y Ecuador 3ero")
                    }
                    if (df_qatar === df_ecuador) {
                        if (gf_qatar > gf_ecuador) {
                            document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        }
                    }
                }
                //Qatar iguala con Senegal
                if (lista_puntos_1[2] === points_senegal) {
                    if (df_qatar > df_senegal) {
                        document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        console.log("Qatar segundo y senegal 3ero")
                    }
                    if (df_qatar === df_senegal) {
                        if (gf_qatar > gf_senegal) {
                            document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos1").innerText === "Ecuador") {
                //Qatar iguala con Paises Bajos
                if (lista_puntos_1[2] === points_paises_bajos) {
                    if (df_qatar > df_paises_bajos) {
                        document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        console.log("Qatar segundo y Paises Bajos 3er")
                    }
                    if (df_qatar === df_paises_bajos) {
                        if (gf_qatar > gf_paises_bajos) {
                            document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        }
                    }
                }
                //Qatar iguala con Senegal
                if (lista_puntos_1[2] === points_senegal) {
                    if (df_qatar > df_senegal) {
                        document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        console.log("Qatar segundo y senegal 3ero")
                    }
                    if (df_qatar === df_senegal) {
                        if (gf_qatar > gf_senegal) {
                            document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos1").innerText === "Senegal") {
                //Qatar iguala con Paises Bajos
                if (lista_puntos_1[2] === points_paises_bajos) {
                    if (df_qatar > df_paises_bajos) {
                        document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        console.log("Qatar segundo y Paises Bajos 3er")
                    }
                    if (df_qatar === df_paises_bajos) {
                        if (gf_qatar > gf_paises_bajos) {
                            document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        }
                    }
                }
                //Qatar iguala con Ecuador
                if (lista_puntos_1[2] === points_ecuador) {
                    if (df_qatar > df_ecuador) {
                        document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        console.log("Qatar segundo y Ecuador 3ero")
                    }
                    if (df_qatar === df_ecuador) {
                        if (gf_qatar > gf_ecuador) {
                            document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        }
                    }
                }
            }
            //Qatar no iguala con nadie
            if (lista_puntos_1[2] !== points_senegal && lista_puntos_1[2] !== points_paises_bajos &&
                lista_puntos_1[2] !== points_ecuador) {
                document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
            }

        }
    }
    if (document.getElementById("octavos1").innerText !== puntos_paises_bajos[0].innerText) {
        //Condiciones para 2do puesto Paises Bajos
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_paises_bajos) {
            //Paises bajos sin Ecuador
            if (document.getElementById("octavos1").innerText === "Ecuador") {
                //Paises Bajos iguala con Qatar
                if (lista_puntos_1[2] === points_qatar) {
                    if (df_paises_bajos > df_qatar) {
                        document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        console.log("Paises Bajos segundo y Qatar Bajos 3er")
                    }
                    if (df_paises_bajos === df_qatar) {
                        if (gf_paises_bajos > gf_qatar) {
                            document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        }
                    }
                }
                //Paises bajos iguala con Senegal
                if (lista_puntos_1[2] === points_senegal) {
                    if (df_paises_bajos > df_senegal) {
                        document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        console.log("Paises bajos segundo y Senegal 3ero")
                    }
                    if (df_paises_bajos === df_senegal) {
                        if (gf_paises_bajos > gf_senegal) {
                            document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_senegal[0].innerText;
                        }
                    }
                }
            }
            //Paises bajos sin Qatar
            if (document.getElementById("octavos1").innerText === "Qatar") {
                //Paises bajos iguala con Senegal
                if (lista_puntos_1[2] === points_senegal) {
                    if (df_paises_bajos > df_senegal) {
                        document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        console.log("Paises bajos segundo y Senegal 3ero")
                    }
                    if (df_paises_bajos === df_qatar) {
                        if (gf_paises_bajos > gf_qatar) {
                            document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        }
                    }
                }
                //Paises bajos iguala con Ecuador
                if (lista_puntos_1[2] === points_ecuador) {
                    if (df_paises_bajos > df_ecuador) {
                        document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        console.log("Paises bajos segundo y Ecuador 3ero")
                    }
                    if (df_paises_bajos === df_ecuador) {
                        if (gf_paises_bajos > gf_ecuador) {
                            document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos1").innerText === "Senegal") {
                //Paises Bajos iguala con Qatar
                if (lista_puntos_1[2] === points_qatar) {
                    if (df_paises_bajos > df_qatar) {
                        document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        console.log("Paises Bajos segundo y Qatar Bajos 3er")
                    }
                    if (df_paises_bajos === df_qatar) {
                        if (gf_paises_bajos > gf_qatar) {
                            document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_qatar[0].innerText;
                        }
                    }
                }
                //Paises bajos iguala con Ecuador
                if (lista_puntos_1[2] === points_ecuador) {
                    if (df_paises_bajos > df_ecuador) {
                        document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        console.log("Paises bajos segundo y Ecuador 3ero")
                    }
                    if (df_paises_bajos === df_ecuador) {
                        if (gf_paises_bajos > gf_ecuador) {
                            document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
                        }
                        else {
                            document.getElementById("octavos4").innerText = puntos_ecuador[0].innerText;
                        }
                    }
                }
            }
            //Paises Bajos no iguala con nadie
            if (lista_puntos_1[2] !== points_senegal && lista_puntos_1[2] !== points_qatar &&
                lista_puntos_1[2] !== points_ecuador) {
                document.getElementById("octavos4").innerText = puntos_paises_bajos[0].innerText;
            }

        }
    }

    let octavos1 = document.getElementById("octavos1").innerText;
    let octavos2 = document.getElementById("octavos2").innerText;
    let octavos3 = document.getElementById("octavos3").innerText;
    let octavos4 = document.getElementById("octavos4").innerText;
    let octavos5 = document.getElementById("octavos5").innerText;
    let octavos6 = document.getElementById("octavos6").innerText;
    let octavos7 = document.getElementById("octavos7").innerText;
    let octavos8 = document.getElementById("octavos8").innerText;
    let octavos9 = document.getElementById("octavos9").innerText;
    let octavos10 = document.getElementById("octavos10").innerText;
    let octavos11 = document.getElementById("octavos11").innerText;
    let octavos12 = document.getElementById("octavos12").innerText;
    let octavos13 = document.getElementById("octavos13").innerText;
    let octavos14 = document.getElementById("octavos14").innerText;
    let octavos15 = document.getElementById("octavos15").innerText;
    let octavos16 = document.getElementById("octavos16").innerText;

    if (octavos1 !== "1A" && octavos2 !== "2B") {
        document.getElementById("oct1").disabled = false;
        document.getElementById("oct2").disabled = false;
    }

    if (octavos3 !== "1B" && octavos4 !== "2A") {
        document.getElementById("oct3").disabled = false;
        document.getElementById("oct4").disabled = false;
    }
    if (octavos5 !== "1C" && octavos6 !== "2D") {
        document.getElementById("oct5").disabled = false;
        document.getElementById("oct6").disabled = false;
    }

    if (octavos7 !== "1D" && octavos8 !== "2C") {
        document.getElementById("oct7").disabled = false;
        document.getElementById("oct8").disabled = false;
    }
    if (octavos9 !== "1E" && octavos10 !== "2F") {
        document.getElementById("oct9").disabled = false;
        document.getElementById("oct10").disabled = false;
    }

    if (octavos11 !== "1F" && octavos12 !== "2E") {
        document.getElementById("oct11").disabled = false;
        document.getElementById("oct12").disabled = false;
    }
    if (octavos13 !== "1G" && octavos14 !== "2H") {
        document.getElementById("oct13").disabled = false;
        document.getElementById("oct14").disabled = false;
    }

    if (octavos15 !== "1H" && octavos16 !== "2G") {
        document.getElementById("oct15").disabled = false;
        document.getElementById("oct16").disabled = false;
    }


}

function Comparar(a, b) {
    return a - b;
}

export default CompRonda1;
