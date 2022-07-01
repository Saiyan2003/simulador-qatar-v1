import React from 'react';
import CompPartido1C from './Rondas/Ronda3/CompPartido1C';
import CompPartido2C from './Rondas/Ronda3/CompPartido2C';
import CompPartido3C from './Rondas/Ronda3/CompPartido3C';
import CompPartido4C from './Rondas/Ronda3/CompPartido4C';
import CompPartido5C from './Rondas/Ronda3/CompPartido5C';
import CompPartido6C from './Rondas/Ronda3/CompPartido6C';

function CompRonda3() {
    return (
        <div className='container'>
            <table className='table table-bordered container table1' border="">
                <CompPartido1C />
                <CompPartido2C />
                <CompPartido3C />
                <CompPartido4C />
                <CompPartido5C />
                <CompPartido6C />
            </table>
            <div className='boton-cal1'>
                <button type="button" class="btn btn-primary" onClick={() => { ronda3() }} >Calcular</button>
            </div>
            <br></br>
        </div>
    )
}


function ronda3() {

    //Partido 1
    var partido_1_L = parseInt(document.getElementById("argentina1").value);
    var partido_1_V = parseInt(document.getElementById("arabia1").value);
    //Partido 2
    var partido_2_L = parseInt(document.getElementById("mexico1").value);
    var partido_2_V = parseInt(document.getElementById("polonia1").value);
    //Partido 3
    var partido_3_L = parseInt(document.getElementById("polonia2").value);
    var partido_3_V = parseInt(document.getElementById("arabia2").value);
    //Partido 4
    var partido_4_L = parseInt(document.getElementById("argentina2").value);
    var partido_4_V = parseInt(document.getElementById("mexico2").value);
    //Partido 5
    var partido_5_L = parseInt(document.getElementById("polonia3").value);
    var partido_5_V = parseInt(document.getElementById("argentina3").value);
    //Partido 6
    var partido_6_L = parseInt(document.getElementById("arabia3").value);
    var partido_6_V = parseInt(document.getElementById("mexico3").value);

    //polonia
    //Obtener valores td de la columa polonia
    let fila_polonia = document.getElementById("row-polonia");
    let puntos_polonia = fila_polonia.getElementsByTagName("td");

    //----------------------------------------------------------

    //argentina
    //Obtener valores td de la columa holanda
    let fila_argentina = document.getElementById("row-argentina");
    let puntos_argentina = fila_argentina.getElementsByTagName("td");

    //----------------------------------------------------------

    //arabia
    //Obtener valores td de la columa arabia
    let fila_arabia = document.getElementById("row-arabia");
    let puntos_arabia = fila_arabia.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //mexico
    //Obtener valores td de la columa mexico
    let fila_mexico = document.getElementById("row-mexico");
    let puntos_mexico = fila_mexico.getElementsByTagName("td");

    //-------------------------------------------------------------------
    //Inicializar variables globales
    var global_polonia = 0
    var global_argentina = 0
    var global_arabia = 0
    var global_mexico = 0
    //Variables PJ
    var global_polonia_pj = 0
    var global_argentina_pj = 0
    var global_arabia_pj = 0
    var global_mexico_pj = 0
    //Variables PG
    var global_polonia_pg = 0
    var global_argentina_pg = 0
    var global_arabia_pg = 0
    var global_mexico_pg = 0
    //Variables PE
    var global_polonia_pe = 0
    var global_argentina_pe = 0
    var global_arabia_pe = 0
    var global_mexico_pe = 0
    //Variables PP
    var global_polonia_pp = 0
    var global_argentina_pp = 0
    var global_arabia_pp = 0
    var global_mexico_pp = 0
    //Variables de goles A FAVOR
    var global_polonia_gf = 0
    var global_argentina_gf = 0
    var global_mexico_gf = 0
    var global_arabia_gf = 0
    //Variables de goles EN CONTRA
    var global_polonia_gc = 0
    var global_argentina_gc = 0
    var global_mexico_gc = 0
    var global_arabia_gc = 0
    //Variables de DF goles
    var global_polonia_dg = 0
    var global_argentina_dg = 0
    var global_mexico_dg = 0
    var global_arabia_dg = 0
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
        var pts_argentina_1 = part1(partido_1_L, partido_1_V) //3
        var pts_arabia_1 = part2(partido_1_V, partido_1_L) //0

        //Sumar a los puntos grupales
        global_argentina = global_argentina + pts_argentina_1
        global_arabia = global_arabia + pts_arabia_1

        var res_local_1 = PG(pts_argentina_1, pts_arabia_1)
        var res_visita_1 = PG(pts_arabia_1, pts_argentina_1)
        var res_empate_1 = PE(pts_argentina_1, pts_arabia_1)

        //Sumar PG
        global_argentina_pg = global_argentina_pg + res_local_1
        global_arabia_pg = global_arabia_pg + res_visita_1
        //Sumar PE
        global_argentina_pe = global_argentina_pe + res_empate_1
        global_arabia_pe = global_arabia_pe + res_empate_1
        //Sumar PP
        global_argentina_pp = global_argentina_pp + res_visita_1
        global_arabia_pp = global_arabia_pp + res_local_1

        //Sumar los goles a favor
        global_argentina_gf = global_argentina_gf + partido_1_L // 6
        global_arabia_gf = global_arabia_gf + partido_1_V // 0
        puntos_argentina[5].innerHTML = global_argentina_gf //6
        puntos_arabia[5].innerHTML = global_arabia_gf //0
        //Goles en contra
        global_argentina_gc = global_argentina_gc + partido_1_V // 0 = 0 + 0
        global_arabia_gc = global_arabia_gc + partido_1_L // 0 = 0 + 3
        puntos_argentina[6].innerHTML = global_argentina_gc // 0
        puntos_arabia[6].innerHTML = global_arabia_gc // 3

        //Puntos obtenidos por 1er partido
        if (partido_1_L > partido_1_V) {
            //document.getElementById("resulto").innerHTML = "argentina gana";
            puntos_argentina[8].innerHTML = global_argentina
            puntos_arabia[8].innerHTML = global_arabia


        }
        if (partido_1_L < partido_1_V) {
            //document.getElementById("resulto").innerHTML = "Holanda gana";
            //Prueba para ver quien gana
            puntos_argentina[8].innerHTML = global_argentina
            puntos_arabia[8].innerHTML = global_arabia
        }

        if (partido_1_L === partido_1_V) {
            //document.getElementById("resulto").innerHTML = "Empate";
            puntos_argentina[8].innerHTML = global_argentina
            puntos_arabia[8].innerHTML = global_arabia
        }

        //Colocar PG
        puntos_argentina[2].innerHTML = global_argentina_pg
        puntos_arabia[2].innerHTML = global_arabia_pg
        //Colocar PE
        puntos_argentina[3].innerHTML = global_argentina_pe
        puntos_arabia[3].innerHTML = global_arabia_pe
        //Colocar PP
        puntos_argentina[4].innerHTML = global_argentina_pp
        puntos_arabia[4].innerHTML = global_arabia_pp

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
        var pts_mexico_1 = part1(partido_2_L, partido_2_V) //3
        var pts_polonia_1 = part2(partido_2_V, partido_2_L) //0

        //Sumar los puntos globales
        global_mexico = global_mexico + pts_mexico_1
        global_polonia = global_polonia + pts_polonia_1

        //Resultados por cada partido
        var res_local_2 = PG(pts_mexico_1, pts_polonia_1)
        var res_visita_2 = PG(pts_polonia_1, pts_mexico_1)
        var res_empate_2 = PE(pts_mexico_1, pts_polonia_1)

        //Sumar PG
        global_mexico_pg = global_mexico_pg + res_local_2
        global_polonia_pg = global_polonia_pg + res_visita_2
        //Sumar PE
        global_mexico_pe = global_mexico_pe + res_empate_2
        global_polonia_pe = global_polonia_pe + res_empate_2
        //Sumar PP
        global_mexico_pp = global_mexico_pp + res_visita_2
        global_polonia_pp = global_polonia_pp + res_local_2

        //Sumar los goles a favor
        global_mexico_gf = global_mexico_gf + partido_2_L
        global_polonia_gf = global_polonia_gf + partido_2_V
        puntos_mexico[5].innerHTML = global_mexico_gf
        puntos_polonia[5].innerHTML = global_polonia_gf
        //Sumar goles en contra
        global_mexico_gc = global_mexico_gc + partido_2_V // 0 = 0 + 0
        global_polonia_gc = global_polonia_gc + partido_2_L // 3 = 3 + 0
        puntos_mexico[6].innerHTML = global_mexico_gc
        puntos_polonia[6].innerHTML = global_polonia_gc
        //Restar diferencia de goles
        //puntos_mexico[7].innerHTML = global_mexico_gf - global_polonia_gc
        //puntos_polonia[7].innerHTML = global_polonia_gf - global_mexico_gc


        //Puntos obtenidos por 1er partido
        if (partido_2_L > partido_2_V) {
            puntos_mexico[8].innerHTML = global_mexico
            puntos_polonia[8].innerHTML = global_polonia
        }
        if (partido_2_L < partido_2_V) {
            puntos_mexico[8].innerHTML = global_mexico
            puntos_polonia[8].innerHTML = global_polonia
        }
        if (partido_2_L === partido_2_V) {
            puntos_mexico[8].innerHTML = global_mexico
            puntos_polonia[8].innerHTML = global_polonia
        }

        //Colocar PG
        puntos_mexico[2].innerHTML = global_mexico_pg
        puntos_polonia[2].innerHTML = global_polonia_pg
        //Colocar PE
        puntos_mexico[3].innerHTML = global_mexico_pe
        puntos_polonia[3].innerHTML = global_polonia_pe
        //Colocar PP
        puntos_mexico[4].innerHTML = global_mexico_pp
        puntos_polonia[4].innerHTML = global_polonia_pp
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
        var pts_polonia_2 = part2(partido_3_L, partido_3_V)
        var pts_arabia_2 = part1(partido_3_V, partido_3_L)

        //Sumar a los puntos grupales
        global_arabia = global_arabia + pts_arabia_2
        global_polonia = global_polonia + pts_polonia_2


        //Resultados por cada partido
        var res_local_3 = PG(pts_polonia_2, pts_arabia_2)
        var res_visita_3 = PG(pts_arabia_2, pts_polonia_2)
        var res_empate_3 = PE(pts_polonia_2, pts_arabia_2)

        //Sumar PG
        global_polonia_pg = global_polonia_pg + res_local_3
        global_arabia_pg = global_arabia_pg + res_visita_3
        //Sumar PE
        global_polonia_pe = global_polonia_pe + res_empate_3
        global_arabia_pe = global_arabia_pe + res_empate_3
        //Sumar PP
        global_polonia_pp = global_polonia_pp + res_visita_3
        global_arabia_pp = global_arabia_pp + res_local_3

        //Sumar los goles a favor
        global_polonia_gf = global_polonia_gf + partido_3_L // 0 = 0 + 0
        global_arabia_gf = global_arabia_gf + partido_3_V // 3 = 3 + 0
        puntos_polonia[5].innerHTML = global_polonia_gf //0
        puntos_arabia[5].innerHTML = global_arabia_gf // 3
        //Goles en contra
        global_polonia_gc = global_polonia_gc + partido_3_V // 0 = 0 + 0
        global_arabia_gc = global_arabia_gc + partido_3_L // 3 = 3 + 0
        puntos_polonia[6].innerHTML = global_polonia_gc // 3
        puntos_arabia[6].innerHTML = global_arabia_gc // 0
        //Restar diferencia de goles
        //puntos_polonia[7].innerHTML = global_polonia_gf - global_arabia_gc
        //puntos_arabia[7].innerHTML = global_arabia_gf - global_polonia_gc

        //Puntos obtenidos por 3er partido
        if (partido_3_L > partido_3_V) {
            puntos_arabia[8].innerHTML = global_arabia
            puntos_polonia[8].innerHTML = global_polonia
        }
        if (partido_3_L < partido_3_V) {
            puntos_arabia[8].innerHTML = global_arabia
            puntos_polonia[8].innerHTML = global_polonia
        }

        if (partido_3_L === partido_3_V) {
            puntos_arabia[8].innerHTML = global_arabia
            puntos_polonia[8].innerHTML = global_polonia
        }

        //Colocar PG
        puntos_arabia[2].innerHTML = global_arabia_pg
        puntos_polonia[2].innerHTML = global_polonia_pg
        //Colocar PE
        puntos_arabia[3].innerHTML = global_arabia_pe
        puntos_polonia[3].innerHTML = global_polonia_pe
        //Colocar PP
        puntos_arabia[4].innerHTML = global_arabia_pp
        puntos_polonia[4].innerHTML = global_polonia_pp

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
        var pts_argentina_2 = part2(partido_4_L, partido_4_V)
        var pts_mexico_2 = part1(partido_4_V, partido_4_L)

        //Sumar los puntos globales
        global_mexico = global_mexico + pts_mexico_2
        global_argentina = global_argentina + pts_argentina_2

        //Resultados por cada partido
        var res_local_4 = PG(pts_argentina_2, pts_mexico_2)
        var res_visita_4 = PG(pts_mexico_2, pts_argentina_2)
        var res_empate_4 = PE(pts_argentina_2, pts_mexico_2)

        //Sumar PG
        global_argentina_pg = global_argentina_pg + res_local_4
        global_mexico_pg = global_mexico_pg + res_visita_4
        //Sumar PE
        global_argentina_pe = global_argentina_pe + res_empate_4
        global_mexico_pe = global_mexico_pe + res_empate_4
        //Sumar PP
        global_argentina_pp = global_argentina_pp + res_visita_4
        global_mexico_pp = global_mexico_pp + res_local_4

        //Sumar los goles a favor
        global_mexico_gf = global_mexico_gf + partido_4_V
        global_argentina_gf = global_argentina_gf + partido_4_L
        puntos_mexico[5].innerHTML = global_mexico_gf
        puntos_argentina[5].innerHTML = global_argentina_gf
        //Goles en contra
        global_argentina_gc = global_argentina_gc + partido_4_V //
        global_mexico_gc = global_mexico_gc + partido_4_L
        puntos_argentina[6].innerHTML = global_argentina_gc //
        puntos_mexico[6].innerHTML = global_mexico_gc // 0
        //Restar diferencia de goles
        //puntos_mexico[7].innerHTML = global_mexico_gf - global_argentina_gc
        //puntos_argentina[7].innerHTML = global_argentina_gf - global_mexico_gc

        //Puntos obtenidos por 4er partido
        if (partido_4_L > partido_4_V) {
            puntos_mexico[8].innerHTML = global_mexico
            puntos_argentina[8].innerHTML = global_argentina
        }
        if (partido_4_L < partido_4_V) {
            puntos_mexico[8].innerHTML = global_mexico
            puntos_argentina[8].innerHTML = global_argentina
        }

        if (partido_4_L === partido_4_V) {
            puntos_mexico[8].innerHTML = global_mexico
            puntos_argentina[8].innerHTML = global_argentina
        }
        //Colocar PG
        puntos_mexico[2].innerHTML = global_mexico_pg
        puntos_argentina[2].innerHTML = global_argentina_pg
        //Colocar PE
        puntos_mexico[3].innerHTML = global_mexico_pe
        puntos_argentina[3].innerHTML = global_argentina_pe
        //Colocar PP
        puntos_mexico[4].innerHTML = global_mexico_pp
        puntos_argentina[4].innerHTML = global_argentina_pp
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
        var pts_polonia_3 = part2(partido_5_L, partido_5_V)
        var pts_argentina_3 = part1(partido_5_V, partido_5_L)

        //Sumar los puntos globales
        global_argentina = global_argentina + pts_argentina_3
        global_polonia = global_polonia + pts_polonia_3

        //Resultados por cada partido
        var res_local_5 = PG(pts_polonia_3, pts_argentina_3)
        var res_visita_5 = PG(pts_argentina_3, pts_polonia_3)
        var res_empate_5 = PE(pts_polonia_3, pts_argentina_3)

        //Sumar PG
        global_polonia_pg = global_polonia_pg + res_local_5
        global_argentina_pg = global_argentina_pg + res_visita_5
        //Sumar PE
        global_polonia_pe = global_polonia_pe + res_empate_5
        global_argentina_pe = global_argentina_pe + res_empate_5
        //Sumar PP
        global_polonia_pp = global_polonia_pp + res_visita_5
        global_argentina_pp = global_argentina_pp + res_local_5

        //Sumar los goles a favor
        global_argentina_gf = global_argentina_gf + partido_5_V
        global_polonia_gf = global_polonia_gf + partido_5_L
        puntos_argentina[5].innerHTML = global_argentina_gf
        puntos_polonia[5].innerHTML = global_polonia_gf
        //Goles en contra
        global_polonia_gc = global_polonia_gc + partido_5_V // 0 = 0 + 0
        global_argentina_gc = global_argentina_gc + partido_5_L // 3 = 3 + 0
        puntos_polonia[6].innerHTML = global_polonia_gc // 3
        puntos_argentina[6].innerHTML = global_argentina_gc // 0
        //Restar diferencia de goles
        //puntos_argentina[7].innerHTML = global_argentina_gf - global_polonia_gc
        //puntos_polonia[7].innerHTML = global_polonia_gf - global_argentina_gc

        //Puntos obtenidos por 5er partido
        if (partido_5_L > partido_5_V) {
            puntos_argentina[8].innerHTML = global_argentina
            puntos_polonia[8].innerHTML = global_polonia
        }
        if (partido_5_L < partido_5_V) {
            puntos_argentina[8].innerHTML = global_argentina
            puntos_polonia[8].innerHTML = global_polonia
        }

        if (partido_5_L === partido_5_V) {
            puntos_argentina[8].innerHTML = global_argentina
            puntos_polonia[8].innerHTML = global_polonia
        }
        //Colocar PG
        puntos_argentina[2].innerHTML = global_argentina_pg
        puntos_polonia[2].innerHTML = global_polonia_pg
        //Colocar PE
        puntos_argentina[3].innerHTML = global_argentina_pe
        puntos_polonia[3].innerHTML = global_polonia_pe
        //Colocar PP
        puntos_argentina[4].innerHTML = global_argentina_pp
        puntos_polonia[4].innerHTML = global_polonia_pp
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
        var pts_arabia_3 = part2(partido_6_L, partido_6_V)
        var pts_mexico_3 = part1(partido_6_V, partido_6_L)

        //Sumar los puntos globales
        global_mexico = global_mexico + pts_mexico_3
        global_arabia = global_arabia + pts_arabia_3

        //Resultados por cada partido
        var res_local_6 = PG(pts_arabia_3, pts_mexico_3)
        var res_visita_6 = PG(pts_mexico_3, pts_arabia_3)
        var res_empate_6 = PE(pts_arabia_3, pts_mexico_3)

        //Sumar PG
        global_arabia_pg = global_arabia_pg + res_local_6
        global_mexico_pg = global_mexico_pg + res_visita_6
        //Sumar PE
        global_arabia_pe = global_arabia_pe + res_empate_6
        global_mexico_pe = global_mexico_pe + res_empate_6
        //Sumar PP
        global_arabia_pp = global_arabia_pp + res_visita_6
        global_mexico_pp = global_mexico_pp + res_local_6

        //Sumar los goles a favor
        global_mexico_gf = global_mexico_gf + partido_6_V
        global_arabia_gf = global_arabia_gf + partido_6_L
        puntos_mexico[5].innerHTML = global_mexico_gf
        puntos_arabia[5].innerHTML = global_arabia_gf
        //Sumar goles en contra
        //Goles en contra
        global_arabia_gc = global_arabia_gc + partido_6_V // 0 = 0 + 0
        global_mexico_gc = global_mexico_gc + partido_6_L // 3 = 3 + 0
        puntos_mexico[6].innerHTML = global_mexico_gc
        puntos_arabia[6].innerHTML = global_arabia_gc
        //Restar diferencia de goles
        //puntos_mexico[7].innerHTML = global_mexico_gf - global_arabia_gc
        //puntos_arabia[7].innerHTML = global_arabia_gf - global_mexico_gc

        //Puntos obtenidos por 6er partido
        if (partido_6_L > partido_6_V) {
            puntos_mexico[8].innerHTML = global_mexico
            puntos_arabia[8].innerHTML = global_arabia
        }
        if (partido_6_L < partido_6_V) {
            puntos_mexico[8].innerHTML = global_mexico
            puntos_arabia[8].innerHTML = global_arabia
        }

        if (partido_6_L === partido_6_V) {
            puntos_mexico[8].innerHTML = global_mexico
            puntos_arabia[8].innerHTML = global_arabia
        }

        //Colocar PG
        puntos_mexico[2].innerHTML = global_mexico_pg
        puntos_arabia[2].innerHTML = global_arabia_pg
        //Colocar PE
        puntos_mexico[3].innerHTML = global_mexico_pe
        puntos_arabia[3].innerHTML = global_arabia_pe
        //Colocar PP
        puntos_mexico[4].innerHTML = global_mexico_pp
        puntos_arabia[4].innerHTML = global_arabia_pp

    }

    //Restar diferencia de goles
    global_polonia_dg = global_polonia_gf - global_polonia_gc
    global_argentina_dg = global_argentina_gf - global_argentina_gc
    global_arabia_dg = global_arabia_gf - global_arabia_gc
    global_mexico_dg = global_mexico_gf - global_mexico_gc
    //Insertarlos en el html
    puntos_polonia[7].innerHTML = global_polonia_dg
    puntos_argentina[7].innerHTML = global_argentina_dg
    puntos_arabia[7].innerHTML = global_arabia_dg
    puntos_mexico[7].innerHTML = global_mexico_dg
    //Partidos Jugados
    global_polonia_pj = 3
    global_argentina_pj = 3
    global_arabia_pj = 3
    global_mexico_pj = 3
    //Colocar PARTIDOS
    puntos_polonia[1].innerHTML = global_polonia_pj
    puntos_argentina[1].innerHTML = global_argentina_pj
    puntos_arabia[1].innerHTML = global_arabia_pj
    puntos_mexico[1].innerHTML = global_mexico_pj

    //console.log("GF ECUADOR : ", global_ecuador_gf , "GF QATAR : " , global_qatar_gf)
    //console.log("GF HOLANDA : ", global_paises_bajos_gf , "GF SENEGAL : " , global_senegal_gf)

    clasi3();
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

function clasi3() {

    //argentina
    //Obtener valores td de la columa argentina
    let fila_argentina = document.getElementById("row-argentina");
    let puntos_argentina = fila_argentina.getElementsByTagName("td");

    //----------------------------------------------------------

    //Arabia
    //Obtener valores td de la columa holanda
    let fila_arabia = document.getElementById("row-arabia");
    let puntos_arabia = fila_arabia.getElementsByTagName("td");

    //----------------------------------------------------------

    //mexico
    //Obtener valores td de la columa mexico
    let fila_mexico = document.getElementById("row-mexico");
    let puntos_mexico = fila_mexico.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //polonia
    //Obtener valores td de la columa polonia
    let fila_polonia = document.getElementById("row-polonia");
    let puntos_polonia = fila_polonia.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Puntos de los equipos
    var points_argentina = parseInt(puntos_argentina[8].innerHTML);
    var points_polonia = parseInt(puntos_polonia[8].innerHTML);
    var points_mexico = parseInt(puntos_mexico[8].innerHTML);
    var points_arabia = parseInt(puntos_arabia[8].innerHTML);
    //Goles a favor
    var gf_argentina = parseInt(puntos_argentina[5].innerHTML);
    var gf_polonia = parseInt(puntos_polonia[5].innerHTML);
    var gf_mexico = parseInt(puntos_mexico[5].innerHTML);
    var gf_arabia = parseInt(puntos_arabia[5].innerHTML);
    //Diferencia de goles
    var df_argentina = parseInt(puntos_argentina[7].innerHTML);
    var df_polonia = parseInt(puntos_polonia[7].innerHTML);
    var df_mexico = parseInt(puntos_mexico[7].innerHTML);
    var df_arabia = parseInt(puntos_arabia[7].innerHTML);

    //Lista con los puntos de los equipos
    let lista_puntos_1 = [points_mexico, points_arabia, points_polonia, points_argentina]
    let lista_df = [df_argentina, df_polonia, df_mexico, df_arabia]
    lista_puntos_1.sort(Comparar)
    lista_df.sort(Comparar)

    //------------CONDICIONES PARA EL 1ER PUESTO-----------------------//

    //Condiciones para 1er puesto polonia y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_polonia) {
        //polonia iguala con Arabia
        if (lista_puntos_1[3] === points_arabia) {
            if (df_polonia > df_arabia) {
                document.getElementById("octavos5").innerText = puntos_polonia[0].innerText;
                document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                console.log("polonia primero  y Arabia Segundo")
            }
            if (df_polonia === df_arabia) {
                if (gf_polonia > gf_arabia) {
                    document.getElementById("octavos5").innerText = puntos_polonia[0].innerText;
                    document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                }

            }
            if (df_polonia < df_arabia) {
                document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
            }
        }
        //polonia iguala con mexico
        if (lista_puntos_1[3] === points_mexico) {
            if (df_polonia > df_mexico) {
                document.getElementById("octavos5").innerText = puntos_polonia[0].innerText;
                document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                console.log("polonia primero y mexico segundo")
            }
            if (df_polonia === df_mexico) {
                if (gf_polonia > gf_mexico) {
                    document.getElementById("octavos5").innerText = puntos_polonia[0].innerText;
                    document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                }
            }
            if (df_polonia < df_mexico) {
                document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
            }
        }

        //polonia iguala con argentina
        if (lista_puntos_1[3] === points_argentina) {
            if (df_polonia > df_argentina) {
                document.getElementById("octavos5").innerText = puntos_polonia[0].innerText;
                document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                console.log("polonia primero  y argentina Segundo")
            }
            if (df_polonia === df_argentina) {
                if (gf_polonia > gf_argentina) {
                    document.getElementById("octavos5").innerText = puntos_polonia[0].innerText;
                    document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                }

            }
            if (df_polonia < df_argentina) {
                document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
            }
        }
        //polonia no iguala con nadie
        if (lista_puntos_1[3] !== points_argentina && lista_puntos_1[3] !== points_mexico &&
            lista_puntos_1[3] !== points_arabia) {
            document.getElementById("octavos5").innerText = puntos_polonia[0].innerText;
        }

    }

    //Condiciones para 1er puesto argentina y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_argentina) {
        //argentina iguala con polonia
        if (lista_puntos_1[3] === points_polonia) {
            if (df_argentina > df_polonia) {
                document.getElementById("octavos5").innerText = puntos_argentina[0].innerText;
                document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                console.log("argentina primero  y polonia Segundo")
            }
            if (df_argentina === df_polonia) {
                if (gf_argentina > gf_polonia) {
                    document.getElementById("octavos5").innerText = puntos_argentina[0].innerText;
                    document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                }

            }
            if (df_argentina < df_polonia) {
                document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
            }
        }
        //argentina iguala con Arabia
        if (lista_puntos_1[3] === points_arabia) {
            if (df_argentina > df_arabia) {
                document.getElementById("octavos5").innerText = puntos_argentina[0].innerText;
                document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                console.log("argentina primero  y Arabia Segundo")
            }
            if (df_argentina === df_arabia) {
                if (gf_argentina > gf_arabia) {
                    document.getElementById("octavos5").innerText = puntos_argentina[0].innerText;
                    document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                }

            }
            if (df_argentina < df_arabia) {
                document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
            }
        }

        //argentina iguala con mexico
        if (lista_puntos_1[3] === points_mexico) {
            if (df_argentina > df_mexico) {
                document.getElementById("octavos5").innerText = puntos_argentina[0].innerText;
                document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                console.log("argentina primero  y mexico Segundo")
            }
            if (df_argentina === df_mexico) {
                if (gf_argentina > gf_mexico) {
                    document.getElementById("octavos5").innerText = puntos_argentina[0].innerText;
                    document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                }

            }
            if (df_argentina < df_mexico) {
                document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
            }
        }
        //argentina no iguala con nadie
        if (lista_puntos_1[3] !== points_mexico && lista_puntos_1[3] !== points_arabia &&
            lista_puntos_1[3] !== points_polonia) {
            document.getElementById("octavos5").innerText = puntos_argentina[0].innerText;
        }

    }

    //Condiciones para 1er puesto mexico y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_mexico) {
        //mexico iguala con polonia
        if (lista_puntos_1[3] === points_polonia) {
            if (df_mexico > df_polonia) {
                document.getElementById("octavos5").innerText = puntos_mexico[0].innerText;
                document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                console.log("mexico primero  y polonia Segundo")
            }
            if (df_mexico === df_polonia) {
                if (gf_mexico > gf_polonia) {
                    document.getElementById("octavos5").innerText = puntos_mexico[0].innerText;
                    document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                }

            }
            if (df_mexico < df_polonia) {
                document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
            }
        }
        //mexico iguala con Arabia
        if (lista_puntos_1[3] === points_arabia) {
            if (df_mexico > df_arabia) {
                document.getElementById("octavos5").innerText = puntos_mexico[0].innerText;
                document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                console.log("mexico primero  y Arabia Segundo")
            }
            if (df_mexico === df_arabia) {
                if (gf_mexico > gf_arabia) {
                    document.getElementById("octavos5").innerText = puntos_mexico[0].innerText;
                    document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                }

            }
            if (df_mexico < df_arabia) {
                document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
            }
        }

        //mexico iguala con argentina
        if (lista_puntos_1[3] === points_argentina) {
            if (df_mexico > df_argentina) {
                document.getElementById("octavos5").innerText = puntos_mexico[0].innerText;
                document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                console.log("mexico primero  y argentina Segundo")
            }
            if (df_mexico === df_argentina) {
                if (gf_mexico > gf_argentina) {
                    document.getElementById("octavos5").innerText = puntos_mexico[0].innerText;
                    document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                }

            }
            if (df_mexico < df_argentina) {
                document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
            }
        }
        //mexico no iguala con nadie
        if (lista_puntos_1[3] !== points_argentina && lista_puntos_1[3] !== points_arabia &&
            lista_puntos_1[3] !== points_polonia) {
            document.getElementById("octavos5").innerText = puntos_mexico[0].innerText;
        }

    }

    //Condiciones para 1er puesto Arabia y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_arabia) {
        //Arabia iguala con polonia
        if (lista_puntos_1[3] === points_polonia) {
            if (df_arabia > df_polonia) {
                document.getElementById("octavos5").innerText = puntos_arabia[0].innerText;
                document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                console.log("Arabia primero  y polonia Segundo")
            }
            if (df_arabia === df_polonia) {
                if (gf_arabia > gf_polonia) {
                    document.getElementById("octavos5").innerText = puntos_arabia[0].innerText;
                    document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                }
            }
            if (df_arabia < df_polonia) {
                document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
            }
        }
        //Arabia iguala con mexico
        if (lista_puntos_1[3] === points_mexico) {
            if (df_arabia > df_mexico) {
                document.getElementById("octavos5").innerText = puntos_arabia[0].innerText;
                document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                console.log("Arabia primero y mexico segundo")
            }
            if (df_arabia === df_mexico) {
                if (gf_arabia > gf_mexico) {
                    document.getElementById("octavos5").innerText = puntos_arabia[0].innerText;
                    document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                }

            }
            if (df_arabia < df_mexico) {
                document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
            }
        }

        //Arabia iguala con argentina
        if (lista_puntos_1[3] === points_argentina) {
            if (df_arabia > df_argentina) {
                document.getElementById("octavos5").innerText = puntos_arabia[0].innerText;
                document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                console.log("Arabia primero y argentina Segundo")
            }
            if (df_arabia === df_argentina) {
                if (gf_arabia > gf_argentina) {
                    document.getElementById("octavos5").innerText = puntos_arabia[0].innerText;
                    document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                }

            }
            if (df_arabia < df_argentina) {
                document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
            }
        }
        //Paises no iguala con nadie
        if (lista_puntos_1[3] !== points_argentina && lista_puntos_1[3] !== points_mexico &&
            lista_puntos_1[3] !== points_polonia) {
            document.getElementById("octavos5").innerText = puntos_arabia[0].innerText;
        }

    }

    //--------------------CONDICIONES PARA EL 2DO PUESTO--------------------------- //

    if (document.getElementById("octavos5").innerText !== puntos_polonia[0].innerText) {
        //Condiciones para 2do puesto polonia
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_polonia) {
            //polonia sin Arabia
            if (document.getElementById("octavos5").innerText === "Arabia") {
                //polonia iguala con mexico
                if (lista_puntos_1[2] === points_mexico) {
                    if (df_polonia > df_mexico) {
                        document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        console.log("polonia segundo y mexico 3ero")
                    }
                    if (df_polonia === df_mexico) {
                        if (gf_polonia > gf_mexico) {
                            document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        }
                    }
                }
                //polonia iguala con argentina
                if (lista_puntos_1[2] === points_argentina) {
                    if (df_polonia > df_argentina) {
                        document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        console.log("polonia segundo y argentina 3ero")
                    }
                    if (df_polonia === df_argentina) {
                        if (gf_polonia > gf_argentina) {
                            document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        }
                    }
                }

            }
            if (document.getElementById("octavos5").innerText === "Argentina") {
                //polonia iguala con Arabia
                if (lista_puntos_1[2] === points_arabia) {
                    if (df_polonia > df_arabia) {
                        document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        console.log("polonia segundo y Arabia 3er")
                    }
                    if (df_polonia === df_arabia) {
                        if (gf_polonia > gf_arabia) {
                            document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        }
                    }
                }
                //polonia iguala con mexico
                if (lista_puntos_1[2] === points_mexico) {
                    if (df_polonia > df_mexico) {
                        document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        console.log("polonia segundo y mexico 3ero")
                    }
                    if (df_polonia === df_mexico) {
                        if (gf_polonia > gf_mexico) {
                            document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        }
                    }
                }

            }

            if (document.getElementById("octavos5").innerText === "Mexico") {
                //polonia iguala con Arabia
                if (lista_puntos_1[2] === points_arabia) {
                    if (df_polonia > df_arabia) {
                        document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        console.log("polonia segundo y Arabia 3er")
                    }
                    if (df_polonia === df_arabia) {
                        if (gf_polonia > gf_arabia) {
                            document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        }
                    }
                }
                //polonia iguala con argentina
                if (lista_puntos_1[2] === points_argentina) {
                    if (df_polonia > df_argentina) {
                        document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        console.log("polonia segundo y argentina 3ero")
                    }
                    if (df_polonia === df_argentina) {
                        if (gf_polonia > gf_argentina) {
                            document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        }
                    }
                }
            }

            //polonia no iguala con nadie
            if (lista_puntos_1[2] !== points_argentina && lista_puntos_1[2] !== points_arabia && lista_puntos_1[2] !== points_mexico) {
                document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
            }

        }
    }


    if (document.getElementById("octavos5").innerText !== puntos_argentina[0].innerText) {
        //Condiciones para 2do puesto argentina
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_argentina) {
            //argentina sin Arabia
            if (document.getElementById("octavos5").innerText === "Arabia") {
                //argentina iguala con polonia
                if (lista_puntos_1[2] === points_polonia) {
                    if (df_argentina > df_polonia) {
                        document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        console.log("argentina segundo y polonia 3ero")
                    }
                    if (df_argentina === df_polonia) {
                        if (gf_argentina > gf_polonia) {
                            document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        }
                    }
                }
                //argentina iguala con mexico
                if (lista_puntos_1[2] === points_mexico) {
                    if (df_argentina > df_mexico) {
                        document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        console.log("argentina segundo y mexico 3ero")
                    }
                    if (df_argentina === df_mexico) {
                        if (gf_argentina > gf_mexico) {
                            document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos5").innerText === "Polonia") {
                //argentina iguala con Arabia
                if (lista_puntos_1[2] === points_arabia) {
                    if (df_argentina > df_arabia) {
                        document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        console.log("argentina segundo y Arabia 3er")
                    }
                    if (df_argentina === df_arabia) {
                        if (gf_argentina > gf_arabia) {
                            document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        }
                    }
                }
                //argentina iguala con mexico
                if (lista_puntos_1[2] === points_mexico) {
                    if (df_argentina > df_mexico) {
                        document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        console.log("argentina segundo y mexico 3ero")
                    }
                    if (df_argentina === df_mexico) {
                        if (gf_argentina > gf_mexico) {
                            document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos5").innerText === "Mexico") {
                //argentina iguala con Arabia
                if (lista_puntos_1[2] === points_arabia) {
                    if (df_argentina > df_arabia) {
                        document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        console.log("argentina segundo y Arabia 3er")
                    }
                    if (df_argentina === df_arabia) {
                        if (gf_argentina > gf_arabia) {
                            document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        }
                    }
                }
                //argentina iguala con polonia
                if (lista_puntos_1[2] === points_polonia) {
                    if (df_argentina > df_polonia) {
                        document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        console.log("argentina segundo y polonia 3ero")
                    }
                    if (df_argentina === df_polonia) {
                        if (gf_argentina > gf_polonia) {
                            document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        }
                    }
                }
            }

            //argentina no iguala con nadie
            if (lista_puntos_1[2] !== points_mexico && lista_puntos_1[2] !== points_arabia &&
                lista_puntos_1[2] !== points_polonia) {
                document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
            }
        }
    }


    if (document.getElementById("octavos5").innerText !== puntos_mexico[0].innerText) {
        //Condiciones para 2do puesto mexico
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_mexico) {
            //mexico sin Arabia
            if (document.getElementById("octavos5").innerText === "Arabia") {
                //mexico iguala con polonia
                if (lista_puntos_1[2] === points_polonia) {
                    if (df_mexico > df_polonia) {
                        document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        console.log("mexico segundo y polonia 3ero")
                    }
                    if (df_mexico === df_polonia) {
                        if (gf_mexico > gf_polonia) {
                            document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        }
                    }
                }
                //mexico iguala con argentina
                if (lista_puntos_1[2] === points_argentina) {
                    if (df_mexico > df_argentina) {
                        document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        console.log("mexico segundo y argentina 3ero")
                    }
                    if (df_mexico === df_argentina) {
                        if (gf_mexico > gf_argentina) {
                            document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos5").innerText === "Polonia") {
                //mexico iguala con Arabia
                if (lista_puntos_1[2] === points_arabia) {
                    if (df_mexico > df_arabia) {
                        document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        console.log("mexico segundo y Arabia 3er")
                    }
                    if (df_mexico === df_arabia) {
                        if (gf_mexico > gf_arabia) {
                            document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        }
                    }
                }
                //mexico iguala con argentina
                if (lista_puntos_1[2] === points_argentina) {
                    if (df_mexico > df_argentina) {
                        document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        console.log("mexico segundo y argentina 3ero")
                    }
                    if (df_mexico === df_argentina) {
                        if (gf_mexico > gf_argentina) {
                            document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos5").innerText === "Argentina") {
                //mexico iguala con Arabia
                if (lista_puntos_1[2] === points_arabia) {
                    if (df_mexico > df_arabia) {
                        document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        console.log("mexico segundo y Arabia 3er")
                    }
                    if (df_mexico === df_arabia) {
                        if (gf_mexico > gf_arabia) {
                            document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        }
                    }
                }
                //mexico iguala con polonia
                if (lista_puntos_1[2] === points_polonia) {
                    if (df_mexico > df_polonia) {
                        document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        console.log("mexico segundo y polonia 3ero")
                    }
                    if (df_mexico === df_polonia) {
                        if (gf_mexico > gf_polonia) {
                            document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        }
                    }
                }
            }
            //mexico no iguala con nadie
            if (lista_puntos_1[2] !== points_argentina && lista_puntos_1[2] !== points_arabia &&
                lista_puntos_1[2] !== points_polonia) {
                document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
            }

        }
    }
    if (document.getElementById("octavos5").innerText !== puntos_arabia[0].innerText) {
        //Condiciones para 2do puesto Arabia
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_arabia) {
            //Arabia sin polonia
            if (document.getElementById("octavos5").innerText === "Polonia") {
                //Arabia iguala con mexico
                if (lista_puntos_1[2] === points_mexico) {
                    if (df_arabia > df_mexico) {
                        document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        console.log("Arabia segundo y mexico Bajos 3er")
                    }
                    if (df_arabia === df_mexico) {
                        if (gf_arabia > gf_mexico) {
                            document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        }
                    }
                }
                //Arabia iguala con argentina
                if (lista_puntos_1[2] === points_argentina) {
                    if (df_arabia > df_argentina) {
                        document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        console.log("Arabia segundo y argentina 3ero")
                    }
                    if (df_arabia === df_argentina) {
                        if (gf_arabia > gf_argentina) {
                            document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_argentina[0].innerText;
                        }
                    }
                }
            }
            //Arabia sin mexico
            if (document.getElementById("octavos5").innerText === "Mexico") {
                //Arabia iguala con argentina
                if (lista_puntos_1[2] === points_argentina) {
                    if (df_arabia > df_argentina) {
                        document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        console.log("Arabia segundo y argentina 3ero")
                    }
                    if (df_arabia === df_mexico) {
                        if (gf_arabia > gf_mexico) {
                            document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        }
                    }
                }
                //Arabia iguala con polonia
                if (lista_puntos_1[2] === points_polonia) {
                    if (df_arabia > df_polonia) {
                        document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        console.log("Arabia segundo y polonia 3ero")
                    }
                    if (df_arabia === df_polonia) {
                        if (gf_arabia > gf_polonia) {
                            document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos5").innerText === "Argentina") {
                //Arabia iguala con mexico
                if (lista_puntos_1[2] === points_mexico) {
                    if (df_arabia > df_mexico) {
                        document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        console.log("Arabia segundo y mexico Bajos 3er")
                    }
                    if (df_arabia === df_mexico) {
                        if (gf_arabia > gf_mexico) {
                            document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_mexico[0].innerText;
                        }
                    }
                }
                //Arabia iguala con polonia
                if (lista_puntos_1[2] === points_polonia) {
                    if (df_arabia > df_polonia) {
                        document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        console.log("Arabia segundo y polonia 3ero")
                    }
                    if (df_arabia === df_polonia) {
                        if (gf_arabia > gf_polonia) {
                            document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos8").innerText = puntos_polonia[0].innerText;
                        }
                    }
                }
            }
            //Arabia no iguala con nadie
            if (lista_puntos_1[2] !== points_argentina && lista_puntos_1[2] !== points_mexico &&
                lista_puntos_1[2] !== points_polonia) {
                document.getElementById("octavos8").innerText = puntos_arabia[0].innerText;
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


export default CompRonda3;
