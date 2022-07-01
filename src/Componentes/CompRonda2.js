import React from 'react';
import CompPartido1B from './Rondas/Ronda2/CompPartido1B';
import CompPartido2B from './Rondas/Ronda2/CompPartido2B';
import CompPartido3B from './Rondas/Ronda2/CompPartido3B';
import CompPartido4B from './Rondas/Ronda2/CompPartido4B';
import CompPartido5B from './Rondas/Ronda2/CompPartido5B';
import CompPartido6B from './Rondas/Ronda2/CompPartido6B';

function CompRonda2() {
    return (
        <div className='container'>
            <table className='table table-bordered container table1' border="">
                <CompPartido1B />
                <CompPartido2B />
                <CompPartido3B />
                <CompPartido4B />
                <CompPartido5B />
                <CompPartido6B />
            </table>
            <div className='boton-cal1'>
                <button type="button" class="btn btn-primary" onClick={() => { ronda2() }} >Calcular</button>
            </div>
            <br />
        </div>
    )
}


function ronda2() {

    //Partido 1
    var partido_1_L = parseInt(document.getElementById("inglaterra1").value);
    var partido_1_V = parseInt(document.getElementById("iran1").value);
    //Partido 2
    var partido_2_L = parseInt(document.getElementById("usa1").value);
    var partido_2_V = parseInt(document.getElementById("gales1").value);
    //Partido 3
    var partido_3_L = parseInt(document.getElementById("gales2").value);
    var partido_3_V = parseInt(document.getElementById("iran2").value);
    //Partido 4
    var partido_4_L = parseInt(document.getElementById("inglaterra2").value);
    var partido_4_V = parseInt(document.getElementById("usa2").value);
    //Partido 5
    var partido_5_L = parseInt(document.getElementById("gales3").value);
    var partido_5_V = parseInt(document.getElementById("inglaterra3").value);
    //Partido 6
    var partido_6_L = parseInt(document.getElementById("iran3").value);
    var partido_6_V = parseInt(document.getElementById("usa3").value);

    //gales
    //Obtener valores td de la columa gales
    let fila_gales = document.getElementById("row-gales");
    let puntos_gales = fila_gales.getElementsByTagName("td");

    //----------------------------------------------------------

    //Inglaterra
    //Obtener valores td de la columa holanda
    let fila_inglaterra = document.getElementById("row-inglaterra");
    let puntos_inglaterra = fila_inglaterra.getElementsByTagName("td");

    //----------------------------------------------------------

    //iran
    //Obtener valores td de la columa iran
    let fila_iran = document.getElementById("row-iran");
    let puntos_iran = fila_iran.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //usa
    //Obtener valores td de la columa usa
    let fila_usa = document.getElementById("row-usa");
    let puntos_usa = fila_usa.getElementsByTagName("td");

    //-------------------------------------------------------------------
    //Inicializar variables globales
    var global_gales = 0
    var global_inglaterra = 0
    var global_iran = 0
    var global_usa = 0
    //Variables PJ
    var global_gales_pj = 0
    var global_inglaterra_pj = 0
    var global_iran_pj = 0
    var global_usa_pj = 0
    //Variables PG
    var global_gales_pg = 0
    var global_inglaterra_pg = 0
    var global_iran_pg = 0
    var global_usa_pg = 0
    //Variables PE
    var global_gales_pe = 0
    var global_inglaterra_pe = 0
    var global_iran_pe = 0
    var global_usa_pe = 0
    //Variables PP
    var global_gales_pp = 0
    var global_inglaterra_pp = 0
    var global_iran_pp = 0
    var global_usa_pp = 0
    //Variables de goles A FAVOR
    var global_gales_gf = 0
    var global_inglaterra_gf = 0
    var global_usa_gf = 0
    var global_iran_gf = 0
    //Variables de goles EN CONTRA
    var global_gales_gc = 0
    var global_inglaterra_gc = 0
    var global_usa_gc = 0
    var global_iran_gc = 0
    //Variables de DF goles
    var global_gales_dg = 0
    var global_inglaterra_dg = 0
    var global_usa_dg = 0
    var global_iran_dg = 0
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
        var pts_inglaterra_1 = part1(partido_1_L, partido_1_V) //3
        var pts_iran_1 = part2(partido_1_V, partido_1_L) //0

        //Sumar a los puntos grupales
        global_inglaterra = global_inglaterra + pts_inglaterra_1
        global_iran = global_iran + pts_iran_1

        var res_local_1 = PG(pts_inglaterra_1, pts_iran_1)
        var res_visita_1 = PG(pts_iran_1, pts_inglaterra_1)
        var res_empate_1 = PE(pts_inglaterra_1, pts_iran_1)
        //Sumar PG
        global_inglaterra_pg = global_inglaterra_pg + res_local_1
        global_iran_pg = global_iran_pg + res_visita_1
        //Sumar PE
        global_inglaterra_pe = global_inglaterra_pe + res_empate_1
        global_iran_pe = global_iran_pe + res_empate_1
        //Sumar PP
        global_inglaterra_pp = global_inglaterra_pp + res_visita_1
        global_iran_pp = global_iran_pp + res_local_1

        //Sumar los goles a favor
        global_inglaterra_gf = global_inglaterra_gf + partido_1_L // 6
        global_iran_gf = global_iran_gf + partido_1_V // 0
        puntos_inglaterra[5].innerHTML = global_inglaterra_gf //6
        puntos_iran[5].innerHTML = global_iran_gf //0
        //Goles en contra
        global_inglaterra_gc = global_inglaterra_gc + partido_1_V // 0 = 0 + 0
        global_iran_gc = global_iran_gc + partido_1_L // 0 = 0 + 3
        puntos_inglaterra[6].innerHTML = global_inglaterra_gc // 0
        puntos_iran[6].innerHTML = global_iran_gc // 3

        //Puntos obtenidos por 1er partido
        if (partido_1_L > partido_1_V) {
            //document.getElementById("resulto").innerHTML = "inglaterra gana";
            puntos_inglaterra[8].innerHTML = global_inglaterra
            puntos_iran[8].innerHTML = global_iran


        }
        if (partido_1_L < partido_1_V) {
            //document.getElementById("resulto").innerHTML = "Holanda gana";
            //Prueba para ver quien gana
            puntos_inglaterra[8].innerHTML = global_inglaterra
            puntos_iran[8].innerHTML = global_iran
        }

        if (partido_1_L === partido_1_V) {
            //document.getElementById("resulto").innerHTML = "Empate";
            puntos_inglaterra[8].innerHTML = global_inglaterra
            puntos_iran[8].innerHTML = global_iran
        }

        //Colocar PG
        puntos_iran[2].innerHTML = global_iran_pg
        puntos_inglaterra[2].innerHTML = global_inglaterra_pg
        //Colocar PE
        puntos_iran[3].innerHTML = global_iran_pe
        puntos_inglaterra[3].innerHTML = global_inglaterra_pe
        //Colocar PP
        puntos_iran[4].innerHTML = global_iran_pp
        puntos_inglaterra[4].innerHTML = global_inglaterra_pp

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
        var pts_usa_1 = part1(partido_2_L, partido_2_V) //3
        var pts_gales_1 = part2(partido_2_V, partido_2_L) //0


        //Sumar los puntos globales
        global_usa = global_usa + pts_usa_1
        global_gales = global_gales + pts_gales_1

        var res_local_2 = PG(pts_usa_1, pts_gales_1)
        var res_visita_2 = PG(pts_gales_1, pts_usa_1)
        var res_empate_2 = PE(pts_usa_1, pts_gales_1)

        //Sumar PG
        global_usa_pg = global_usa_pg + res_local_2
        global_gales_pg = global_gales_pg + res_visita_2
        //Sumar PE
        global_usa_pe = global_usa_pe + res_empate_2
        global_gales_pe = global_gales_pe + res_empate_2
        //Sumar PP
        global_usa_pp = global_usa_pp + res_visita_2
        global_gales_pp = global_gales_pp + res_local_2

        //Sumar los goles a favor
        global_usa_gf = global_usa_gf + partido_2_L
        global_gales_gf = global_gales_gf + partido_2_V
        puntos_usa[5].innerHTML = global_usa_gf
        puntos_gales[5].innerHTML = global_gales_gf
        //Sumar goles en contra
        global_usa_gc = global_usa_gc + partido_2_V // 0 = 0 + 0
        global_gales_gc = global_gales_gc + partido_2_L // 3 = 3 + 0
        puntos_usa[6].innerHTML = global_usa_gc
        puntos_gales[6].innerHTML = global_gales_gc
        //Restar diferencia de goles
        //puntos_usa[7].innerHTML = global_usa_gf - global_gales_gc
        //puntos_gales[7].innerHTML = global_gales_gf - global_usa_gc


        //Puntos obtenidos por 1er partido
        if (partido_2_L > partido_2_V) {
            puntos_usa[8].innerHTML = global_usa
            puntos_gales[8].innerHTML = global_gales
        }
        if (partido_2_L < partido_2_V) {
            puntos_usa[8].innerHTML = global_usa
            puntos_gales[8].innerHTML = global_gales
        }
        if (partido_2_L === partido_2_V) {
            puntos_usa[8].innerHTML = global_usa
            puntos_gales[8].innerHTML = global_gales
        }
        //Colocar PG
        puntos_gales[2].innerHTML = global_gales_pg
        puntos_gales[2].innerHTML = global_gales_pg
        //Colocar PE
        puntos_gales[3].innerHTML = global_gales_pe
        puntos_gales[3].innerHTML = global_gales_pe
        //Colocar PP
        puntos_gales[4].innerHTML = global_gales_pp
        puntos_gales[4].innerHTML = global_gales_pp
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
        var pts_gales_2 = part2(partido_3_L, partido_3_V)
        var pts_iran_2 = part1(partido_3_V, partido_3_L)

        //Sumar a los puntos grupales
        global_iran = global_iran + pts_iran_2
        global_gales = global_gales + pts_gales_2

        var res_local_3 = PG(pts_gales_2, pts_iran_2)
        var res_visita_3 = PG(pts_iran_2, pts_gales_2)
        var res_empate_3 = PE(pts_gales_2, pts_iran_2)

        //Sumar PG
        global_gales_pg = global_gales_pg + res_local_3
        global_iran_pg = global_iran_pg + res_visita_3
        //Sumar PE
        global_gales_pe = global_gales_pe + res_empate_3
        global_iran_pe = global_iran_pe + res_empate_3
        //Sumar PP
        global_gales_pp = global_gales_pp + res_visita_3
        global_iran_pp = global_iran_pp + res_local_3

        //Sumar los goles a favor
        global_gales_gf = global_gales_gf + partido_3_L // 0 = 0 + 0
        global_iran_gf = global_iran_gf + partido_3_V // 3 = 3 + 0
        puntos_gales[5].innerHTML = global_gales_gf //0
        puntos_iran[5].innerHTML = global_iran_gf // 3
        //Goles en contra
        global_gales_gc = global_gales_gc + partido_3_V // 0 = 0 + 0
        global_iran_gc = global_iran_gc + partido_3_L // 3 = 3 + 0
        puntos_gales[6].innerHTML = global_gales_gc // 3
        puntos_iran[6].innerHTML = global_iran_gc // 0
        //Restar diferencia de goles
        //puntos_gales[7].innerHTML = global_gales_gf - global_iran_gc
        //puntos_iran[7].innerHTML = global_iran_gf - global_gales_gc

        //Puntos obtenidos por 3er partido
        if (partido_3_L > partido_3_V) {
            puntos_iran[8].innerHTML = global_iran
            puntos_gales[8].innerHTML = global_gales
        }
        if (partido_3_L < partido_3_V) {
            puntos_iran[8].innerHTML = global_iran
            puntos_gales[8].innerHTML = global_gales
        }

        if (partido_3_L === partido_3_V) {
            puntos_iran[8].innerHTML = global_iran
            puntos_gales[8].innerHTML = global_gales
        }
        //Colocar PG
        puntos_iran[2].innerHTML = global_iran_pg
        puntos_gales[2].innerHTML = global_gales_pg
        //Colocar PE
        puntos_iran[3].innerHTML = global_iran_pe
        puntos_gales[3].innerHTML = global_gales_pe
        //Colocar PP
        puntos_iran[4].innerHTML = global_iran_pp
        puntos_gales[4].innerHTML = global_gales_pp
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
        var pts_inglaterra_2 = part2(partido_4_L, partido_4_V)
        var pts_usa_2 = part1(partido_4_V, partido_4_L)

        //Sumar los puntos globales
        global_usa = global_usa + pts_usa_2
        global_inglaterra = global_inglaterra + pts_inglaterra_2

        var res_local_4 = PG(pts_inglaterra_2, pts_usa_2)
        var res_visita_4 = PG(pts_usa_2, pts_inglaterra_2)
        var res_empate_4 = PE(pts_inglaterra_2, pts_usa_2)

        //Sumar PG
        global_inglaterra_pg = global_inglaterra_pg + res_local_4
        global_usa_pg = global_usa_pg + res_visita_4
        //Sumar PE
        global_inglaterra_pe = global_inglaterra_pe + res_empate_4
        global_usa_pe = global_usa_pe + res_empate_4
        //Sumar PP
        global_inglaterra_pp = global_inglaterra_pp + res_visita_4
        global_usa_pp = global_usa_pp + res_local_4

        //Sumar los goles a favor
        global_usa_gf = global_usa_gf + partido_4_V
        global_inglaterra_gf = global_inglaterra_gf + partido_4_L
        puntos_usa[5].innerHTML = global_usa_gf
        puntos_inglaterra[5].innerHTML = global_inglaterra_gf
        //Goles en contra
        global_inglaterra_gc = global_inglaterra_gc + partido_4_V //
        global_usa_gc = global_usa_gc + partido_4_L
        puntos_inglaterra[6].innerHTML = global_inglaterra_gc //
        puntos_usa[6].innerHTML = global_usa_gc // 0
        //Restar diferencia de goles
        //puntos_usa[7].innerHTML = global_usa_gf - global_inglaterra_gc
        //puntos_inglaterra[7].innerHTML = global_inglaterra_gf - global_usa_gc

        //Puntos obtenidos por 4er partido
        if (partido_4_L > partido_4_V) {
            puntos_usa[8].innerHTML = global_usa
            puntos_inglaterra[8].innerHTML = global_inglaterra
        }
        if (partido_4_L < partido_4_V) {
            puntos_usa[8].innerHTML = global_usa
            puntos_inglaterra[8].innerHTML = global_inglaterra
        }

        if (partido_4_L === partido_4_V) {
            puntos_usa[8].innerHTML = global_usa
            puntos_inglaterra[8].innerHTML = global_inglaterra
        }
        //Colocar PG
        puntos_usa[2].innerHTML = global_usa_pg
        puntos_inglaterra[2].innerHTML = global_inglaterra_pg
        //Colocar PE
        puntos_usa[3].innerHTML = global_usa_pe
        puntos_inglaterra[3].innerHTML = global_inglaterra_pe
        //Colocar PP
        puntos_usa[4].innerHTML = global_usa_pp
        puntos_inglaterra[4].innerHTML = global_inglaterra_pp
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
        var pts_gales_3 = part2(partido_5_L, partido_5_V)
        var pts_inglaterra_3 = part1(partido_5_V, partido_5_L)

        //Sumar los puntos globales
        global_inglaterra = global_inglaterra + pts_inglaterra_3
        global_gales = global_gales + pts_gales_3

        var res_local_5 = PG(pts_gales_3, pts_inglaterra_3)
        var res_visita_5 = PG(pts_inglaterra_3, pts_gales_3)
        var res_empate_5 = PE(pts_gales_3, pts_inglaterra_3)

        //Sumar PG
        global_gales_pg = global_gales_pg + res_local_5
        global_inglaterra_pg = global_inglaterra_pg + res_visita_5
        //Sumar PE
        global_gales_pe = global_gales_pe + res_empate_5
        global_inglaterra_pe = global_inglaterra_pe + res_empate_5
        //Sumar PP
        global_gales_pp = global_gales_pp + res_visita_5
        global_inglaterra_pp = global_inglaterra_pp + res_local_5

        //Sumar los goles a favor
        global_inglaterra_gf = global_inglaterra_gf + partido_5_V
        global_gales_gf = global_gales_gf + partido_5_L
        puntos_inglaterra[5].innerHTML = global_inglaterra_gf
        puntos_gales[5].innerHTML = global_gales_gf
        //Goles en contra
        global_gales_gc = global_gales_gc + partido_5_V // 0 = 0 + 0
        global_inglaterra_gc = global_inglaterra_gc + partido_5_L // 3 = 3 + 0
        puntos_gales[6].innerHTML = global_gales_gc // 3
        puntos_inglaterra[6].innerHTML = global_inglaterra_gc // 0
        //Restar diferencia de goles
        //puntos_inglaterra[7].innerHTML = global_inglaterra_gf - global_gales_gc
        //puntos_gales[7].innerHTML = global_gales_gf - global_inglaterra_gc

        //Puntos obtenidos por 5er partido
        if (partido_5_L > partido_5_V) {
            puntos_inglaterra[8].innerHTML = global_inglaterra
            puntos_gales[8].innerHTML = global_gales
        }
        if (partido_5_L < partido_5_V) {
            puntos_inglaterra[8].innerHTML = global_inglaterra
            puntos_gales[8].innerHTML = global_gales
        }

        if (partido_5_L === partido_5_V) {
            puntos_inglaterra[8].innerHTML = global_inglaterra
            puntos_gales[8].innerHTML = global_gales
        }
        //Colocar PG
        puntos_inglaterra[2].innerHTML = global_inglaterra_pg
        puntos_gales[2].innerHTML = global_gales_pg
        //Colocar PE
        puntos_inglaterra[3].innerHTML = global_inglaterra_pe
        puntos_gales[3].innerHTML = global_gales_pe
        //Colocar PP
        puntos_inglaterra[4].innerHTML = global_inglaterra_pp
        puntos_gales[4].innerHTML = global_gales_pp
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
        var pts_iran_3 = part2(partido_6_L, partido_6_V)
        var pts_usa_3 = part1(partido_6_V, partido_6_L)

        //Sumar los puntos globales
        global_usa = global_usa + pts_usa_3
        global_iran = global_iran + pts_iran_3

        var res_local_6 = PG(pts_iran_3, pts_usa_3)
        var res_visita_6 = PG(pts_usa_3, pts_iran_3)
        var res_empate_6 = PE(pts_iran_3, pts_usa_3)

        //Sumar PG
        global_iran_pg = global_iran_pg + res_local_6
        global_usa_pg = global_usa_pg + res_visita_6
        //Sumar PE
        global_iran_pe = global_iran_pe + res_empate_6
        global_usa_pe = global_usa_pe + res_empate_6
        //Sumar PP
        global_iran_pp = global_iran_pp + res_visita_6
        global_usa_pp = global_usa_pp + res_local_6

        //Sumar los goles a favor
        global_usa_gf = global_usa_gf + partido_6_V
        global_iran_gf = global_iran_gf + partido_6_L
        puntos_usa[5].innerHTML = global_usa_gf
        puntos_iran[5].innerHTML = global_iran_gf
        //Sumar goles en contra
        //Goles en contra
        global_iran_gc = global_iran_gc + partido_6_V // 0 = 0 + 0
        global_usa_gc = global_usa_gc + partido_6_L // 3 = 3 + 0
        puntos_usa[6].innerHTML = global_usa_gc
        puntos_iran[6].innerHTML = global_iran_gc
        //Restar diferencia de goles
        //puntos_usa[7].innerHTML = global_usa_gf - global_iran_gc
        //puntos_iran[7].innerHTML = global_iran_gf - global_usa_gc

        //Puntos obtenidos por 6er partido
        if (partido_6_L > partido_6_V) {
            puntos_usa[8].innerHTML = global_usa
            puntos_iran[8].innerHTML = global_iran
        }
        if (partido_6_L < partido_6_V) {
            puntos_usa[8].innerHTML = global_usa
            puntos_iran[8].innerHTML = global_iran
        }

        if (partido_6_L === partido_6_V) {
            puntos_usa[8].innerHTML = global_usa
            puntos_iran[8].innerHTML = global_iran
        }
        //Colocar PG
        puntos_usa[2].innerHTML = global_usa_pg
        puntos_iran[2].innerHTML = global_iran_pg
        //Colocar PE
        puntos_usa[3].innerHTML = global_usa_pe
        puntos_iran[3].innerHTML = global_iran_pe
        //Colocar PP
        puntos_usa[4].innerHTML = global_usa_pp
        puntos_iran[4].innerHTML = global_iran_pp
    }

    //Restar diferencia de goles
    global_gales_dg = global_gales_gf - global_gales_gc
    global_inglaterra_dg = global_inglaterra_gf - global_inglaterra_gc
    global_iran_dg = global_iran_gf - global_iran_gc
    global_usa_dg = global_usa_gf - global_usa_gc
    //Insertarlos en el html
    puntos_gales[7].innerHTML = global_gales_dg
    puntos_inglaterra[7].innerHTML = global_inglaterra_dg
    puntos_iran[7].innerHTML = global_iran_dg
    puntos_usa[7].innerHTML = global_usa_dg
    //Partidos Jugados
    global_gales_pj = 3
    global_inglaterra_pj = 3
    global_iran_pj = 3
    global_usa_pj = 3
    //Colocar PARTIDOS
    puntos_gales[1].innerHTML = global_gales_pj
    puntos_inglaterra[1].innerHTML = global_inglaterra_pj
    puntos_iran[1].innerHTML = global_iran_pj
    puntos_usa[1].innerHTML = global_usa_pj
    //--------------------------------------------------------------------

    //console.log("GF ECUADOR : ", global_ecuador_gf , "GF QATAR : " , global_qatar_gf)
    //console.log("GF HOLANDA : ", global_paises_bajos_gf , "GF SENEGAL : " , global_senegal_gf)

    clasi2()

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


function clasi2() {

    //gales
    //Obtener valores td de la columa gales
    let fila_gales = document.getElementById("row-gales");
    let puntos_gales = fila_gales.getElementsByTagName("td");

    //----------------------------------------------------------

    //inglaterra
    //Obtener valores td de la columa inglaterra
    let fila_inglaterra = document.getElementById("row-inglaterra");
    let puntos_inglaterra = fila_inglaterra.getElementsByTagName("td");

    //----------------------------------------------------------

    //iran
    //Obtener valores td de la columa iran
    let fila_iran = document.getElementById("row-iran");
    let puntos_iran = fila_iran.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //usa
    //Obtener valores td de la columa usa
    let fila_usa = document.getElementById("row-usa");
    let puntos_usa = fila_usa.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Puntos de los equipos
    var points_gales = parseInt(puntos_gales[8].innerHTML);
    var points_inglaterra = parseInt(puntos_inglaterra[8].innerHTML);
    var points_iran = parseInt(puntos_iran[8].innerHTML);
    var points_usa = parseInt(puntos_usa[8].innerHTML);
    //Goles a favor
    var gf_gales = parseInt(puntos_gales[5].innerHTML);
    var gf_inglaterra = parseInt(puntos_inglaterra[5].innerHTML);
    var gf_iran = parseInt(puntos_iran[5].innerHTML);
    var gf_usa = parseInt(puntos_usa[5].innerHTML);
    //Diferencia de goles
    var df_gales = parseInt(puntos_gales[7].innerHTML);
    var df_inglaterra = parseInt(puntos_inglaterra[7].innerHTML);
    var df_iran = parseInt(puntos_iran[7].innerHTML);
    var df_usa = parseInt(puntos_usa[7].innerHTML);

    //Lista con los puntos de los equipos
    let lista_puntos_1 = [points_iran, points_usa, points_inglaterra, points_gales]
    let lista_df = [df_gales, df_inglaterra, df_iran, df_usa]
    lista_puntos_1.sort(Comparar)
    lista_df.sort(Comparar)

    //------------CONDICIONES PARA EL 1ER PUESTO-----------------------//

    //Condiciones para 1er puesto inglaterra y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_inglaterra) {
        //inglaterra iguala con usa
        if (lista_puntos_1[3] === points_usa) {
            if (df_inglaterra > df_usa) {
                document.getElementById("octavos3").innerText = puntos_inglaterra[0].innerText;
                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                console.log("inglaterra primero  y usa Segundo")
            }
            if (df_inglaterra === df_usa) {
                if (gf_inglaterra > gf_usa) {
                    document.getElementById("octavos3").innerText = puntos_inglaterra[0].innerText;
                    document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                }
            }
            if (df_inglaterra < df_usa) {
                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
            }
        }
        //inglaterra iguala con iran
        if (lista_puntos_1[3] === points_iran) {
            if (df_inglaterra > df_iran) {
                document.getElementById("octavos3").innerText = puntos_inglaterra[0].innerText;
                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                console.log("inglaterra primero y iran segundo")
            }
            if (df_inglaterra === df_iran) {
                if (gf_inglaterra > gf_iran) {
                    document.getElementById("octavos3").innerText = puntos_inglaterra[0].innerText;
                    document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                }

            }
            if (df_inglaterra < df_iran) {
                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
            }
        }

        //inglaterra iguala con gales
        if (lista_puntos_1[3] === points_gales) {
            if (df_inglaterra > df_gales) {
                document.getElementById("octavos3").innerText = puntos_inglaterra[0].innerText;
                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                console.log("inglaterra primero  y gales Segundo")
            }
            if (df_inglaterra === df_gales) {
                if (gf_inglaterra > gf_gales) {
                    document.getElementById("octavos3").innerText = puntos_inglaterra[0].innerText;
                    document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                }
            }
            if (df_inglaterra < df_gales) {
                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
            }
        }
        //inglaterra no iguala con nadie
        if (lista_puntos_1[3] !== points_gales && lista_puntos_1[3] !== points_iran &&
            lista_puntos_1[3] !== points_usa) {
            document.getElementById("octavos3").innerText = puntos_inglaterra[0].innerText;
        }

    }

    //Condiciones para 1er puesto gales y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_gales) {
        //gales iguala con inglaterra
        if (lista_puntos_1[3] === points_inglaterra) {
            if (df_gales > df_inglaterra) {
                document.getElementById("octavos3").innerText = puntos_gales[0].innerText;
                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                console.log("gales primero  y inglaterra Segundo")
            }
            if (df_gales === df_inglaterra) {
                if (gf_gales > gf_inglaterra) {
                    document.getElementById("octavos3").innerText = puntos_gales[0].innerText;
                    document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                }

            }
            if (df_gales < df_inglaterra) {
                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
            }
        }
        //gales iguala con usa
        if (lista_puntos_1[3] === points_usa) {
            if (df_gales > df_usa) {
                document.getElementById("octavos3").innerText = puntos_gales[0].innerText;
                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                console.log("gales primero  y usa Segundo")
            }
            if (df_gales === df_usa) {
                if (gf_gales > gf_usa) {
                    document.getElementById("octavos3").innerText = puntos_gales[0].innerText;
                    document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                }
            }
            if (df_gales < df_usa) {
                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
            }
        }

        //gales iguala con iran
        if (lista_puntos_1[3] === points_iran) {
            if (df_gales > df_iran) {
                document.getElementById("octavos3").innerText = puntos_gales[0].innerText;
                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                console.log("gales primero  y iran Segundo")
            }
            if (df_gales === df_iran) {
                if (gf_gales > gf_iran) {
                    document.getElementById("octavos3").innerText = puntos_gales[0].innerText;
                    document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                }

            }
            if (df_gales < df_iran) {
                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
            }
        }
        //gales no iguala con nadie
        if (lista_puntos_1[3] !== points_iran && lista_puntos_1[3] !== points_usa &&
            lista_puntos_1[3] !== points_inglaterra) {
            document.getElementById("octavos3").innerText = puntos_gales[0].innerText;
        }

    }

    //Condiciones para 1er puesto iran y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_iran) {
        //iran iguala con inglaterra
        if (lista_puntos_1[3] === points_inglaterra) {
            if (df_iran > df_inglaterra) {
                document.getElementById("octavos3").innerText = puntos_iran[0].innerText;
                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                console.log("iran primero  y inglaterra Segundo")
            }
            if (df_iran === df_inglaterra) {
                if (gf_iran > gf_inglaterra) {
                    document.getElementById("octavos3").innerText = puntos_iran[0].innerText;
                    document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                }
            }
            if (df_iran < df_inglaterra) {
                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
            }
        }
        //iran iguala con usa
        if (lista_puntos_1[3] === points_usa) {
            if (df_iran > df_usa) {
                document.getElementById("octavos3").innerText = puntos_iran[0].innerText;
                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                console.log("iran primero  y usa Segundo")
            }
            if (df_iran === df_usa) {
                if (gf_iran > gf_usa) {
                    document.getElementById("octavos3").innerText = puntos_iran[0].innerText;
                    document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                }

            }
            if (df_iran < df_usa) {
                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
            }
        }

        //iran iguala con gales
        if (lista_puntos_1[3] === points_gales) {
            if (df_iran > df_gales) {
                document.getElementById("octavos3").innerText = puntos_iran[0].innerText;
                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                console.log("iran primero  y gales Segundo")
            }
            if (df_iran === df_gales) {
                if (gf_iran > gf_gales) {
                    document.getElementById("octavos3").innerText = puntos_iran[0].innerText;
                    document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                }

            }
            if (df_iran < df_gales) {
                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
            }
        }
        //iran no iguala con nadie
        if (lista_puntos_1[3] !== points_gales && lista_puntos_1[3] !== points_usa &&
            lista_puntos_1[3] !== points_inglaterra) {
            document.getElementById("octavos3").innerText = puntos_iran[0].innerText;
        }

    }

    //Condiciones para 1er puesto usa y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_usa) {
        //usa iguala con inglaterra
        if (lista_puntos_1[3] === points_inglaterra) {
            if (df_usa > df_inglaterra) {
                document.getElementById("octavos3").innerText = puntos_usa[0].innerText;
                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                console.log("usa primero  y inglaterra Segundo")
            }
            if (df_usa === df_inglaterra) {
                if (gf_usa > gf_inglaterra) {
                    document.getElementById("octavos3").innerText = puntos_usa[0].innerText;
                    document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                }
            }
            if (df_usa < df_inglaterra) {
                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
            }
        }
        //usa iguala con iran
        if (lista_puntos_1[3] === points_iran) {
            if (df_usa > df_iran) {
                document.getElementById("octavos3").innerText = puntos_usa[0].innerText;
                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                console.log("usa primero y iran segundo")
            }
            if (df_usa === df_iran) {
                if (gf_usa > gf_iran) {
                    document.getElementById("octavos3").innerText = puntos_usa[0].innerText;
                    document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                }
            }
            if (df_usa < df_iran) {
                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
            }
        }

        //usa iguala con gales
        if (lista_puntos_1[3] === points_gales) {
            if (df_usa > df_gales) {
                document.getElementById("octavos3").innerText = puntos_usa[0].innerText;
                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                console.log("usa primero y gales Segundo")
            }
            if (df_usa === df_gales) {
                if (gf_usa > gf_gales) {
                    document.getElementById("octavos3").innerText = puntos_usa[0].innerText;
                    document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                }
            }
            if (df_usa < df_gales) {
                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
            }
        }
        //Paises no iguala con nadie
        if (lista_puntos_1[3] !== points_gales && lista_puntos_1[3] !== points_iran &&
            lista_puntos_1[3] !== points_inglaterra) {
            document.getElementById("octavos3").innerText = puntos_usa[0].innerText;
        }

    }

    //--------------------CONDICIONES PARA EL 2DO PUESTO--------------------------- //

    if (document.getElementById("octavos3").innerText !== puntos_inglaterra[0].innerText) {
        //Condiciones para 2do puesto inglaterra
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_inglaterra) {
            //inglaterra sin iran
            if (document.getElementById("octavos3").innerText !== "Iran") {
                //Inglaterra iguala con gales y USA
                if (lista_puntos_1[2] === points_usa && lista_puntos_1[2] === points_iran) {
                    if (df_inglaterra > df_usa && df_inglaterra > df_gales) {
                        document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                        console.log("inglaterra segundo definitivo")
                    }
                }
                else {
                    //inglaterra iguala con usa
                    if (lista_puntos_1[2] === points_usa) {
                        if (df_inglaterra > df_usa) {
                            document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            console.log("inglaterra segundo y usa 3er")
                        }
                        if (df_inglaterra === df_usa) {
                            if (gf_inglaterra > gf_usa) {
                                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            }
                        }
                    }
                    //inglaterra iguala con gales
                    if (lista_puntos_1[2] === points_gales) {
                        if (df_inglaterra > df_gales) {
                            document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            console.log("inglaterra segundo y gales 3ero")
                        }
                        if (df_inglaterra === df_gales) {
                            if (gf_inglaterra > gf_gales) {
                                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            }
                        }
                    }
                }
            }
            //inglaterra sin usa
            if (document.getElementById("octavos3").innerText !== "USA") {
                //Inglaterra iguala con gales e iran
                if (lista_puntos_1[2] === points_gales && lista_puntos_1[2] === points_iran) {
                    if (df_inglaterra > df_iran && df_inglaterra > df_gales) {
                        document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                        console.log("inglaterra segundo definitivo")
                    }
                }
                else {
                    //inglaterra iguala con iran
                    if (lista_puntos_1[2] === points_iran) {
                        if (df_inglaterra > df_iran) {
                            document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            console.log("inglaterra segundo y iran 3ero")
                        }
                        if (df_inglaterra === df_iran) {
                            if (gf_inglaterra > gf_iran) {
                                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            }
                        }
                    }
                    //inglaterra iguala con gales
                    if (lista_puntos_1[2] === points_gales) {
                        if (df_inglaterra > df_gales) {
                            document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            console.log("inglaterra segundo y gales 3ero")
                        }
                        if (df_inglaterra === df_gales) {
                            if (gf_inglaterra > gf_gales) {
                                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            }
                        }
                    }
                }
            }
            //inglaterra sin gales
            if (document.getElementById("octavos3").innerText !== "Gales") {
                //Inglaterra iguala con Iran y USA
                if (lista_puntos_1[2] === points_iran && lista_puntos_1[2] === points_usa) {
                    if (df_inglaterra > df_iran && df_inglaterra > df_usa) {
                        document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                        console.log("inglaterra segundo definitivo")
                    }
                }
                else {
                    //inglaterra iguala con iran
                    if (lista_puntos_1[2] === points_iran) {
                        if (df_inglaterra > df_iran) {
                            document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            console.log("inglaterra segundo y iran 3ero")
                        }
                        if (df_inglaterra === df_iran) {
                            if (gf_inglaterra > gf_iran) {
                                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            }
                        }
                    }
                    //inglaterra iguala con usa
                    if (lista_puntos_1[2] === points_usa) {
                        if (df_inglaterra > df_usa) {
                            document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            console.log("inglaterra segundo y usa 3er")
                        }
                        if (df_inglaterra === df_usa) {
                            if (gf_inglaterra > gf_usa) {
                                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            }
                        }
                    }
                }
            }
            //inglaterra no iguala con nadie
            if (lista_puntos_1[2] !== points_gales && lista_puntos_1[2] !== points_usa && lista_puntos_1[2] !== points_iran) {
                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
            }

        }
    }


    if (document.getElementById("octavos3").innerText !== puntos_gales[0].innerText) {
        //Condiciones para 2do puesto gales
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_gales) {
            //gales sin inglaterra
            if (document.getElementById("octavos3").innerText !== "Inglaterra") {

                //Gales iguala con USA y Iran
                if (lista_puntos_1[2] === points_usa && lista_puntos_1[2] === points_iran) {
                    if (df_gales > df_usa && df_gales > df_iran) {
                        document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                        console.log("gales segundo definitivo")
                    }
                }
                else {
                    //gales iguala con usa
                    if (lista_puntos_1[2] === points_usa) {
                        if (df_gales > df_usa) {
                            document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            console.log("gales segundo y usa 3er")
                        }
                        if (df_gales === df_usa) {
                            if (gf_gales > gf_usa) {
                                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            }
                        }
                    }
                    //gales iguala con iran
                    if (lista_puntos_1[2] === points_iran) {
                        if (df_gales > df_iran) {
                            document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            console.log("gales segundo y iran 3ero")
                        }
                        if (df_gales === df_iran) {
                            if (gf_gales > gf_iran) {
                                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            }
                        }

                    }
                }
            }

            if (document.getElementById("octavos3").innerText !== "Iran") {
                //Gales iguala con Inglaterra y USA
                if (lista_puntos_1[2] === points_usa && lista_puntos_1[2] === points_inglaterra) {
                    if (df_gales > df_usa && df_gales > df_inglaterra) {
                        document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                        console.log("gales segundo definitivo")
                    }
                }
                else {
                    //gales iguala con inglaterra
                    if (lista_puntos_1[2] === points_inglaterra) {
                        if (df_gales > df_inglaterra) {
                            document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            console.log("gales segundo y inglaterra 3ero")
                        }
                        if (df_gales === df_inglaterra) {
                            if (gf_gales > gf_inglaterra) {
                                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            }
                        }
                    }
                    //gales iguala con usa
                    if (lista_puntos_1[2] === points_usa) {
                        if (df_gales > df_usa) {
                            document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            console.log("gales segundo y usa 3er")
                        }
                        if (df_gales === df_usa) {
                            if (gf_gales > gf_usa) {
                                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            }
                        }
                    }
                }
            }
            if (document.getElementById("octavos3").innerText !== "USA") {
                //Gales iguala con inglaterra e iran
                if (lista_puntos_1[2] === points_iran && lista_puntos_1[2] === points_inglaterra) {
                    if (df_gales > df_iran && df_gales > df_inglaterra) {
                        document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                        console.log("gales segundo definitivo")
                    }
                }
                //gales iguala con inglaterra
                else {
                    if (lista_puntos_1[2] === points_inglaterra) {
                        if (df_gales > df_inglaterra) {
                            document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            console.log("gales segundo y inglaterra 3ero")
                        }
                        if (df_gales === df_inglaterra) {
                            if (gf_gales > gf_inglaterra) {
                                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            }
                        }
                    }
                    //gales iguala con iran
                    if (lista_puntos_1[2] === points_iran) {
                        if (df_gales > df_iran) {
                            document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            console.log("gales segundo y iran 3ero")
                        }
                        if (df_gales === df_iran) {
                            if (gf_gales > gf_iran) {
                                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            }
                        }

                    }
                }
            }

            //gales no iguala con nadie
            if (lista_puntos_1[2] !== points_iran && lista_puntos_1[2] !== points_usa &&
                lista_puntos_1[2] !== points_inglaterra) {
                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
            }
        }
    }


    if (document.getElementById("octavos3").innerText !== puntos_iran[0].innerText) {
        //Condiciones para 2do puesto iran
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_iran) {
            //iran SIN usa
            if (document.getElementById("octavos3").innerText === "USA") {
                //Iran iguala con inglaterra y gales
                if (lista_puntos_1[2] === points_inglaterra && lista_puntos_1[2] === points_gales) {
                    if (df_iran > df_inglaterra && df_iran > df_gales) {
                        document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                        console.log("iran segundo definitivo")
                    }
                }
                else {
                    //iran iguala con inglaterra
                    if (lista_puntos_1[2] === points_inglaterra) {
                        if (df_iran > df_inglaterra) {
                            document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            console.log("iran segundo y inglaterra 3ero")
                        }
                        if (df_iran === df_inglaterra) {
                            if (gf_iran > gf_inglaterra) {
                                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            }
                        }

                    }
                    //iran iguala con gales
                    if (lista_puntos_1[2] === points_gales) {
                        if (df_iran > df_gales) {
                            document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            console.log("iran segundo y gales 3ero")
                        }
                        if (df_iran === df_gales) {
                            if (gf_iran > gf_gales) {
                                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            }
                        }

                    }
                }
            }
            //iran SIN inglaterra
            if (document.getElementById("octavos3").innerText === "Inglaterra") {
                //Iran iguala con usa y gales
                if (lista_puntos_1[2] === points_usa && lista_puntos_1[2] === points_gales) {
                    if (df_iran > df_usa && df_iran > df_gales) {
                        document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                        console.log("iran segundo definitivo")
                    }
                }
                else {
                    //iran iguala con usa
                    if (lista_puntos_1[2] === points_usa) {
                        if (df_iran > df_usa) {
                            document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            console.log("iran segundo y usa 3er")
                        }
                        if (df_iran === df_usa) {
                            if (gf_iran > gf_usa) {
                                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            }
                        }

                    }
                    //iran iguala con gales
                    if (lista_puntos_1[2] === points_gales) {
                        if (df_iran > df_gales) {
                            document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            console.log("iran segundo y gales 3ero")
                        }
                        if (df_iran === df_gales) {
                            if (gf_iran > gf_gales) {
                                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            }
                        }

                    }
                }
            }
            //iran SIN gales
            if (document.getElementById("octavos3").innerText === "Gales") {
                //Iran iguala con usa y inglaterra
                if (lista_puntos_1[2] === points_usa && lista_puntos_1[2] === points_inglaterra) {
                    if (df_iran > df_usa && df_iran > df_inglaterra) {
                        document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                        console.log("iran segundo definitivo")
                    }
                }
                else {
                    //iran iguala con usa
                    if (lista_puntos_1[2] === points_usa) {
                        if (df_iran > df_usa) {
                            document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            console.log("iran segundo y usa 3er")
                        }
                        if (df_iran === df_usa) {
                            if (gf_iran > gf_usa) {
                                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            }
                        }

                    }
                    //iran iguala con inglaterra
                    if (lista_puntos_1[2] === points_inglaterra) {
                        if (df_iran > df_inglaterra) {
                            document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            console.log("iran segundo y inglaterra 3ero")
                        }
                        if (df_iran === df_inglaterra) {
                            if (gf_iran > gf_inglaterra) {
                                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            }
                        }

                    }
                }
            }
            //iran no iguala con nadie
            if (lista_puntos_1[2] !== points_gales && lista_puntos_1[2] !== points_usa &&
                lista_puntos_1[2] !== points_inglaterra) {
                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
            }

        }
    }



    //________________________adasd

    if (document.getElementById("octavos3").innerText !== puntos_usa[0].innerText) {
        //Condiciones para 2do puesto usa
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_usa) {
            //usa SIN gales
            if (document.getElementById("octavos3").innerText === "Gales") {
                //usa iguala con inglaterra e iran
                if (lista_puntos_1[2] === points_iran && lista_puntos_1[2] === points_inglaterra) {
                    if (df_usa > df_inglaterra && df_usa > df_iran) {
                        document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                        console.log("usa segundo definitivo")
                    }
                }
                else {
                    //usa iguala con inglaterra
                    if (lista_puntos_1[2] === points_inglaterra) {
                        if (df_usa > df_inglaterra) {
                            document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            console.log("usa segundo y inglaterra 3ero")
                        }
                        if (df_usa === df_inglaterra) {
                            if (gf_usa > gf_inglaterra) {
                                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            }
                        }
                    }
                    //usa iguala con iran
                    if (lista_puntos_1[2] === points_iran) {
                        if (df_usa > df_iran) {
                            document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            console.log("usa segundo y iran Bajos 3er")
                        }
                        if (df_usa === df_iran) {
                            if (gf_usa > gf_iran) {
                                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            }
                        }

                    }
                }
            }
            //usa SIN inglaterra
            if (document.getElementById("octavos3").innerText === "Inglaterra") {
                //USA iguala con gales e iran
                if (lista_puntos_1[2] === points_iran && lista_puntos_1[2] === points_gales) {
                    if (df_usa > df_iran && df_usa > df_gales) {
                        document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                        console.log("usa segundo definitivo")
                    }
                }
                else {
                    //usa iguala con gales
                    if (lista_puntos_1[2] === points_gales) {
                        if (df_usa > df_gales) {
                            document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            console.log("usa segundo y gales 3ero")
                        }
                        if (df_usa === df_gales) {
                            if (gf_usa > gf_gales) {
                                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            }
                        }
                    }
                    //usa iguala con iran
                    if (lista_puntos_1[2] === points_iran) {
                        if (df_usa > df_iran) {
                            document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            console.log("usa segundo y iran Bajos 3er")
                        }
                        if (df_usa === df_iran) {
                            if (gf_usa > gf_iran) {
                                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_iran[0].innerText;
                            }
                        }

                    }
                }
            }
            //usa SIN iran
            if (document.getElementById("octavos3").innerText === "Iran") {
                //USA iguala con gales e inglaterra
                if (lista_puntos_1[2] === points_inglaterra && lista_puntos_1[2] === points_gales) {
                    if (df_usa > df_inglaterra && df_usa > df_gales) {
                        document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                        console.log("usa segundo definitivo")
                    }
                }
                else {
                    //usa iguala con gales
                    if (lista_puntos_1[2] === points_gales) {
                        if (df_usa > df_gales) {
                            document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            console.log("usa segundo y gales 3ero")
                        }
                        if (df_usa === df_gales) {
                            if (gf_usa > gf_gales) {
                                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_gales[0].innerText;
                            }
                        }
                    }
                    //usa iguala con inglaterra
                    if (lista_puntos_1[2] === points_inglaterra) {
                        if (df_usa > df_inglaterra) {
                            document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            console.log("usa segundo y inglaterra 3ero")
                        }
                        if (df_usa === df_inglaterra) {
                            if (gf_usa > gf_inglaterra) {
                                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
                            }
                            else {
                                document.getElementById("octavos2").innerText = puntos_inglaterra[0].innerText;
                            }
                        }
                    }
                }
            }
            //usa no iguala con nadie
            if (lista_puntos_1[2] !== points_gales && lista_puntos_1[2] !== points_iran &&
                lista_puntos_1[2] !== points_inglaterra) {
                document.getElementById("octavos2").innerText = puntos_usa[0].innerText;
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


export default CompRonda2;
