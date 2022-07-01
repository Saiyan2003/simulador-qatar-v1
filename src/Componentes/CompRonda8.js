import React from 'react';
import CompPartido1H from './Rondas/Ronda8/CompPartido1H';
import CompPartido2H from './Rondas/Ronda8/CompPartido2H';
import CompPartido3H from './Rondas/Ronda8/CompPartido3H';
import CompPartido4H from './Rondas/Ronda8/CompPartido4H';
import CompPartido5H from './Rondas/Ronda8/CompPartido5H';
import CompPartido6H from './Rondas/Ronda8/CompPartido6H';

function CompRonda8() {
    return (
        <div className='container'>
            <table className='table table-bordered container table1' border="">
                <CompPartido1H />
                <CompPartido2H />
                <CompPartido3H />
                <CompPartido4H />
                <CompPartido5H />
                <CompPartido6H />
            </table>
            <div className='boton-cal1'>
                <button type="button" class="btn btn-primary" onClick={() => { ronda8() }} >Calcular</button>
            </div>
            <br></br>
        </div>

    )
}

function ronda8() {

    //Partido 1
    var partido_1_L = parseInt(document.getElementById("uruguay1").value);
    var partido_1_V = parseInt(document.getElementById("corea1").value);
    //Partido 2
    var partido_2_L = parseInt(document.getElementById("portugal1").value);
    var partido_2_V = parseInt(document.getElementById("ghana1").value);
    //Partido 3
    var partido_3_L = parseInt(document.getElementById("corea2").value);
    var partido_3_V = parseInt(document.getElementById("ghana2").value);
    //Partido 4
    var partido_4_L = parseInt(document.getElementById("portugal2").value);
    var partido_4_V = parseInt(document.getElementById("uruguay2").value);
    //Partido 5
    var partido_5_L = parseInt(document.getElementById("corea3").value);
    var partido_5_V = parseInt(document.getElementById("portugal3").value);
    //Partido 6
    var partido_6_L = parseInt(document.getElementById("ghana3").value);
    var partido_6_V = parseInt(document.getElementById("uruguay3").value);

    //Corea
    //Obtener valores td de la columa Corea
    let fila_corea = document.getElementById("row-corea");
    let puntos_corea = fila_corea.getElementsByTagName("td");

    //----------------------------------------------------------

    //Ghana
    //Obtener valores td de la columa ghana
    let fila_ghana = document.getElementById("row-ghana");
    let puntos_ghana = fila_ghana.getElementsByTagName("td");

    //----------------------------------------------------------

    //Portugal
    //Obtener valores td de la columa portugal
    let fila_portugal = document.getElementById("row-portugal");
    let puntos_portugal = fila_portugal.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //uruguay
    //Obtener valores td de la columa uruguay
    let fila_uruguay = document.getElementById("row-uruguay");
    let puntos_uruguay = fila_uruguay.getElementsByTagName("td");

    //-------------------------------------------------------------------
    //Inicializar variables globales
    var global_corea = 0
    var global_ghana = 0
    var global_portugal = 0
    var global_uruguay = 0
    //Variables PJ
    var global_corea_pj = 0
    var global_ghana_pj = 0
    var global_portugal_pj = 0
    var global_uruguay_pj = 0
    //Variables PG
    var global_corea_pg = 0
    var global_ghana_pg = 0
    var global_portugal_pg = 0
    var global_uruguay_pg = 0
    //Variables PE
    var global_corea_pe = 0
    var global_ghana_pe = 0
    var global_portugal_pe = 0
    var global_uruguay_pe = 0
    //Variables PP
    var global_corea_pp = 0
    var global_ghana_pp = 0
    var global_portugal_pp = 0
    var global_uruguay_pp = 0
    //Variables de goles A FAVOR
    var global_corea_gf = 0
    var global_ghana_gf = 0
    var global_uruguay_gf = 0
    var global_portugal_gf = 0
    //Variables de goles EN CONTRA
    var global_corea_gc = 0
    var global_ghana_gc = 0
    var global_uruguay_gc = 0
    var global_portugal_gc = 0
    //Variables de DF goles
    var global_corea_dg = 0
    var global_ghana_dg = 0
    var global_uruguay_dg = 0
    var global_portugal_dg = 0
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
        var pts_uruguay_1 = part1(partido_1_L, partido_1_V) //3
        var pts_corea_1 = part2(partido_1_V, partido_1_L) //0

        //Sumar a los puntos grupales
        global_uruguay = global_uruguay + pts_uruguay_1
        global_corea = global_corea + pts_corea_1

        //Partidos
        var res_local_1 = PG(pts_uruguay_1, pts_corea_1)
        var res_visita_1 = PG(pts_corea_1, pts_uruguay_1)
        var res_empate_1 = PE(pts_uruguay_1, pts_corea_1)

        //Sumar PG
        global_uruguay_pg = global_uruguay_pg + res_local_1
        global_corea_pg = global_corea_pg + res_visita_1
        //Sumar PE
        global_uruguay_pe = global_uruguay_pe + res_empate_1
        global_corea_pe = global_corea_pe + res_empate_1
        //Sumar PP
        global_uruguay_pp = global_uruguay_pp + res_visita_1
        global_corea_pp = global_corea_pp + res_local_1

        //Sumar los goles a favor
        global_uruguay_gf = global_uruguay_gf + partido_1_L // 6
        global_corea_gf = global_corea_gf + partido_1_V // 0
        puntos_uruguay[5].innerHTML = global_uruguay_gf //6
        puntos_corea[5].innerHTML = global_corea_gf //0
        //Goles en contra
        global_uruguay_gc = global_uruguay_gc + partido_1_V // 0 = 0 + 0
        global_corea_gc = global_corea_gc + partido_1_L // 0 = 0 + 3
        puntos_uruguay[6].innerHTML = global_uruguay_gc // 0
        puntos_corea[6].innerHTML = global_corea_gc // 3
        //Restar diferencia de goles
        //global_uruguay_dg = global_uruguay_gf - global_uruguay_gc
        //global_corea_dg = global_corea_dg - global_corea_gc
        //puntos_uruguay[7].innerHTML =  global_uruguay_dg
        //puntos_corea[7].innerHTML = global_corea_dg

        //Puntos obtenidos por 1er partido
        if (partido_1_L > partido_1_V) {
            //document.getElementById("resulto").innerHTML = "uruguay gana";
            puntos_uruguay[8].innerHTML = global_uruguay
            puntos_corea[8].innerHTML = global_corea


        }
        if (partido_1_L < partido_1_V) {
            //document.getElementById("resulto").innerHTML = "Holanda gana";
            //Prueba para ver quien gana
            puntos_uruguay[8].innerHTML = global_uruguay
            puntos_corea[8].innerHTML = global_corea
        }

        if (partido_1_L === partido_1_V) {
            //document.getElementById("resulto").innerHTML = "Empate";
            puntos_uruguay[8].innerHTML = global_uruguay
            puntos_corea[8].innerHTML = global_corea
        }

        //Colocar PG
        puntos_uruguay[2].innerHTML = global_uruguay_pg
        puntos_corea[2].innerHTML = global_corea_pg
        //Colocar PE
        puntos_uruguay[3].innerHTML = global_uruguay_pe
        puntos_corea[3].innerHTML = global_corea_pe
        //Colocar PP
        puntos_uruguay[4].innerHTML = global_uruguay_pp
        puntos_corea[4].innerHTML = global_corea_pp

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
        var pts_portugal_1 = part1(partido_2_L, partido_2_V) //3
        var pts_ghana_1 = part2(partido_2_V, partido_2_L) //0

        //Sumar los puntos globales
        global_portugal = global_portugal + pts_portugal_1
        global_ghana = global_ghana + pts_ghana_1


        //Partidos
        var res_local_2 = PG(pts_portugal_1, pts_ghana_1)
        var res_visita_2 = PG(pts_ghana_1, pts_portugal_1)
        var res_empate_2 = PE(pts_portugal_1, pts_ghana_1)

        //Sumar PG
        global_portugal_pg = global_portugal_pg + res_local_2
        global_ghana_pg = global_ghana_pg + res_visita_2
        //Sumar PE
        global_portugal_pe = global_portugal_pe + res_empate_2
        global_ghana_pe = global_ghana_pe + res_empate_2
        //Sumar PP
        global_portugal_pp = global_portugal_pp + res_visita_2
        global_ghana_pp = global_ghana_pp + res_local_2

        //Sumar los goles a favor
        global_portugal_gf = global_portugal_gf + partido_2_L
        global_ghana_gf = global_ghana_gf + partido_2_V
        puntos_portugal[5].innerHTML = global_portugal_gf
        puntos_ghana[5].innerHTML = global_ghana_gf
        //Sumar goles en contra
        global_portugal_gc = global_portugal_gc + partido_2_V // 0 = 0 + 0
        global_ghana_gc = global_ghana_gc + partido_2_L // 3 = 3 + 0
        puntos_portugal[6].innerHTML = global_portugal_gc
        puntos_ghana[6].innerHTML = global_ghana_gc
        //Restar diferencia de goles
        //puntos_portugal[7].innerHTML = global_portugal_gf - global_ghana_gc
        //puntos_ghana[7].innerHTML = global_ghana_gf - global_portugal_gc


        //Puntos obtenidos por 1er partido
        if (partido_2_L > partido_2_V) {
            puntos_portugal[8].innerHTML = global_portugal
            puntos_ghana[8].innerHTML = global_ghana
        }
        if (partido_2_L < partido_2_V) {
            puntos_portugal[8].innerHTML = global_portugal
            puntos_ghana[8].innerHTML = global_ghana
        }
        if (partido_2_L === partido_2_V) {
            puntos_portugal[8].innerHTML = global_portugal
            puntos_ghana[8].innerHTML = global_ghana
        }

        //Colocar PG
        puntos_portugal[2].innerHTML = global_portugal_pg
        puntos_ghana[2].innerHTML = global_ghana_pg
        //Colocar PE
        puntos_portugal[3].innerHTML = global_portugal_pe
        puntos_ghana[3].innerHTML = global_ghana_pe
        //Colocar PP
        puntos_portugal[4].innerHTML = global_portugal_pp
        puntos_ghana[4].innerHTML = global_ghana_pp

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
        var pts_corea_2 = part2(partido_3_L, partido_3_V)
        var pts_ghana_2 = part1(partido_3_V, partido_3_L)

        //Sumar a los puntos grupales
        global_ghana = global_ghana + pts_ghana_2
        global_corea = global_corea + pts_corea_2

        //Partidos
        var res_local_3 = PG(pts_corea_2, pts_ghana_2)
        var res_visita_3 = PG(pts_ghana_2, pts_corea_2)
        var res_empate_3 = PE(pts_corea_2, pts_ghana_2)

        //Sumar PG
        global_corea_pg = global_corea_pg + res_local_3
        global_ghana_pg = global_ghana_pg + res_visita_3
        //Sumar PE
        global_corea_pe = global_corea_pe + res_empate_3
        global_ghana_pe = global_ghana_pe + res_empate_3
        //Sumar PP
        global_corea_pp = global_corea_pp + res_visita_3
        global_ghana_pp = global_ghana_pp + res_local_3

        //Sumar los goles a favor
        global_corea_gf = global_corea_gf + partido_3_L // 0 = 0 + 0
        global_ghana_gf = global_ghana_gf + partido_3_V // 3 = 3 + 0
        puntos_corea[5].innerHTML = global_corea_gf //0
        puntos_ghana[5].innerHTML = global_ghana_gf // 3
        //Goles en contra
        global_corea_gc = global_corea_gc + partido_3_V // 0 = 0 + 0
        global_ghana_gc = global_ghana_gc + partido_3_L // 3 = 3 + 0
        puntos_corea[6].innerHTML = global_corea_gc // 3
        puntos_ghana[6].innerHTML = global_ghana_gc // 0
        //Restar diferencia de goles
        //puntos_corea[7].innerHTML = global_corea_gf - global_ghana_gc
        //puntos_ghana[7].innerHTML = global_ghana_gf - global_corea_gc

        //Puntos obtenidos por 3er partido
        if (partido_3_L > partido_3_V) {
            puntos_ghana[8].innerHTML = global_ghana
            puntos_corea[8].innerHTML = global_corea
        }
        if (partido_3_L < partido_3_V) {
            puntos_ghana[8].innerHTML = global_ghana
            puntos_corea[8].innerHTML = global_corea
        }

        if (partido_3_L === partido_3_V) {
            puntos_ghana[8].innerHTML = global_ghana
            puntos_corea[8].innerHTML = global_corea
        }

        //Colocar PG
        puntos_corea[2].innerHTML = global_corea_pg
        puntos_ghana[2].innerHTML = global_ghana_pg
        //Colocar PE
        puntos_corea[3].innerHTML = global_corea_pe
        puntos_ghana[3].innerHTML = global_ghana_pe
        //Colocar PP
        puntos_corea[4].innerHTML = global_corea_pp
        puntos_ghana[4].innerHTML = global_ghana_pp

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
        var pts_portugal_2 = part2(partido_4_L, partido_4_V)
        var pts_uruguay_2 = part1(partido_4_V, partido_4_L)

        //Sumar los puntos globales
        global_uruguay = global_uruguay + pts_uruguay_2
        global_portugal = global_portugal + pts_portugal_2

        //Partidos
        var res_local_4 = PG(pts_portugal_2, pts_uruguay_2)
        var res_visita_4 = PG(pts_uruguay_2, pts_portugal_2)
        var res_empate_4 = PE(pts_portugal_2, pts_uruguay_2)

        //Sumar PG
        global_portugal_pg = global_portugal_pg + res_local_4
        global_uruguay_pg = global_uruguay_pg + res_visita_4
        //Sumar PE
        global_portugal_pe = global_portugal_pe + res_empate_4
        global_uruguay_pe = global_uruguay_pe + res_empate_4
        //Sumar PP
        global_portugal_pp = global_portugal_pp + res_visita_4
        global_uruguay_pp = global_uruguay_pp + res_local_4

        //Sumar los goles a favor
        global_uruguay_gf = global_uruguay_gf + partido_4_V
        global_portugal_gf = global_portugal_gf + partido_4_L
        puntos_uruguay[5].innerHTML = global_uruguay_gf
        puntos_portugal[5].innerHTML = global_portugal_gf
        //Goles en contra
        global_portugal_gc = global_portugal_gc + partido_4_V //
        global_uruguay_gc = global_uruguay_gc + partido_4_L
        puntos_portugal[6].innerHTML = global_portugal_gc //
        puntos_uruguay[6].innerHTML = global_uruguay_gc // 0
        //Restar diferencia de goles
        //puntos_uruguay[7].innerHTML = global_uruguay_gf - global_portugal_gc
        //puntos_portugal[7].innerHTML = global_portugal_gf - global_uruguay_gc

        //Puntos obtenidos por 4er partido
        if (partido_4_L > partido_4_V) {
            puntos_uruguay[8].innerHTML = global_uruguay
            puntos_portugal[8].innerHTML = global_portugal
        }
        if (partido_4_L < partido_4_V) {
            puntos_uruguay[8].innerHTML = global_uruguay
            puntos_portugal[8].innerHTML = global_portugal
        }

        if (partido_4_L === partido_4_V) {
            puntos_uruguay[8].innerHTML = global_uruguay
            puntos_portugal[8].innerHTML = global_portugal
        }

        //Colocar PG
        puntos_uruguay[2].innerHTML = global_uruguay_pg
        puntos_portugal[2].innerHTML = global_portugal_pg
        //Colocar PE
        puntos_uruguay[3].innerHTML = global_uruguay_pe
        puntos_portugal[3].innerHTML = global_portugal_pe
        //Colocar PP
        puntos_uruguay[4].innerHTML = global_uruguay_pp
        puntos_portugal[4].innerHTML = global_portugal_pp

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
        var pts_corea_3 = part2(partido_5_L, partido_5_V)
        var pts_portugal_3 = part1(partido_5_V, partido_5_L)

        //Sumar los puntos globales
        global_portugal = global_portugal + pts_portugal_3
        global_corea = global_corea + pts_corea_3

        //Partidos
        var res_local_5 = PG(pts_corea_3, pts_portugal_3)
        var res_visita_5 = PG(pts_portugal_3, pts_corea_3)
        var res_empate_5 = PE(pts_corea_3, pts_portugal_3)

        //Sumar PG
        global_corea_pg = global_corea_pg + res_local_5
        global_portugal_pg = global_portugal_pg + res_visita_5
        //Sumar PE
        global_corea_pe = global_corea_pe + res_empate_5
        global_portugal_pe = global_portugal_pe + res_empate_5
        //Sumar PP
        global_corea_pp = global_corea_pp + res_visita_5
        global_portugal_pp = global_portugal_pp + res_local_5

        //Sumar los goles a favor
        global_portugal_gf = global_portugal_gf + partido_5_V
        global_corea_gf = global_corea_gf + partido_5_L
        puntos_portugal[5].innerHTML = global_portugal_gf
        puntos_corea[5].innerHTML = global_corea_gf
        //Goles en contra
        global_corea_gc = global_corea_gc + partido_5_V // 0 = 0 + 0
        global_portugal_gc = global_portugal_gc + partido_5_L // 3 = 3 + 0
        puntos_corea[6].innerHTML = global_corea_gc // 3
        puntos_portugal[6].innerHTML = global_portugal_gc // 0
        //Restar diferencia de goles
        //puntos_portugal[7].innerHTML = global_portugal_gf - global_corea_gc
        //puntos_corea[7].innerHTML = global_corea_gf - global_portugal_gc

        //Puntos obtenidos por 5er partido
        if (partido_5_L > partido_5_V) {
            puntos_portugal[8].innerHTML = global_portugal
            puntos_corea[8].innerHTML = global_corea
        }
        if (partido_5_L < partido_5_V) {
            puntos_portugal[8].innerHTML = global_portugal
            puntos_corea[8].innerHTML = global_corea
        }

        if (partido_5_L === partido_5_V) {
            puntos_portugal[8].innerHTML = global_portugal
            puntos_corea[8].innerHTML = global_corea
        }

        //Colocar PG
        puntos_portugal[2].innerHTML = global_portugal_pg
        puntos_ghana[2].innerHTML = global_ghana_pg
        //Colocar PE
        puntos_portugal[3].innerHTML = global_portugal_pe
        puntos_ghana[3].innerHTML = global_ghana_pe
        //Colocar PP
        puntos_portugal[4].innerHTML = global_portugal_pp
        puntos_ghana[4].innerHTML = global_ghana_pp

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
        var pts_ghana_3 = part2(partido_6_L, partido_6_V)
        var pts_uruguay_3 = part1(partido_6_V, partido_6_L)

        //Sumar los puntos globales
        global_uruguay = global_uruguay + pts_uruguay_3
        global_ghana = global_ghana + pts_ghana_3

        //Partidos
        var res_local_6 = PG(pts_ghana_3, pts_uruguay_3)
        var res_visita_6 = PG(pts_uruguay_3, pts_ghana_3)
        var res_empate_6 = PE(pts_ghana_3, pts_uruguay_3)

        //Sumar PG
        global_ghana_pg = global_ghana_pg + res_local_6
        global_uruguay_pg = global_uruguay_pg + res_visita_6
        //Sumar PE
        global_ghana_pe = global_ghana_pe + res_empate_6
        global_uruguay_pe = global_uruguay_pe + res_empate_6
        //Sumar PP
        global_ghana_pp = global_ghana_pp + res_visita_6
        global_uruguay_pp = global_uruguay_pp + res_local_6

        //Sumar los goles a favor
        global_uruguay_gf = global_uruguay_gf + partido_6_V
        global_ghana_gf = global_ghana_gf + partido_6_L
        puntos_uruguay[5].innerHTML = global_uruguay_gf
        puntos_ghana[5].innerHTML = global_ghana_gf
        //Sumar goles en contra
        //Goles en contra
        global_ghana_gc = global_ghana_gc + partido_6_V // 0 = 0 + 0
        global_uruguay_gc = global_uruguay_gc + partido_6_L // 3 = 3 + 0
        puntos_uruguay[6].innerHTML = global_uruguay_gc
        puntos_ghana[6].innerHTML = global_ghana_gc
        //Restar diferencia de goles
        //puntos_uruguay[7].innerHTML = global_uruguay_gf - global_ghana_gc
        //puntos_ghana[7].innerHTML = global_ghana_gf - global_uruguay_gc

        //Puntos obtenidos por 6er partido
        if (partido_6_L > partido_6_V) {
            puntos_uruguay[8].innerHTML = global_uruguay
            puntos_ghana[8].innerHTML = global_ghana
        }
        if (partido_6_L < partido_6_V) {
            puntos_uruguay[8].innerHTML = global_uruguay
            puntos_ghana[8].innerHTML = global_ghana
        }

        if (partido_6_L === partido_6_V) {
            puntos_uruguay[8].innerHTML = global_uruguay
            puntos_ghana[8].innerHTML = global_ghana
        }
        //Colocar PG
        puntos_uruguay[2].innerHTML = global_uruguay_pg
        puntos_ghana[2].innerHTML = global_ghana_pg
        //Colocar PE
        puntos_uruguay[3].innerHTML = global_uruguay_pe
        puntos_ghana[3].innerHTML = global_ghana_pe
        //Colocar PP
        puntos_uruguay[4].innerHTML = global_uruguay_pp
        puntos_ghana[4].innerHTML = global_ghana_pp
    }

    //Restar diferencia de goles
    global_corea_dg = global_corea_gf - global_corea_gc
    global_ghana_dg = global_ghana_gf - global_ghana_gc
    global_portugal_dg = global_portugal_gf - global_portugal_gc
    global_uruguay_dg = global_uruguay_gf - global_uruguay_gc
    //Insertarlos en el html
    puntos_corea[7].innerHTML = global_corea_dg
    puntos_ghana[7].innerHTML = global_ghana_dg
    puntos_portugal[7].innerHTML = global_portugal_dg
    puntos_uruguay[7].innerHTML = global_uruguay_dg
    //Partidos Jugados
    global_portugal_pj = 3
    global_uruguay_pj = 3
    global_ghana_pj = 3
    global_corea_pj = 3
    //Colocar PARTIDOS
    puntos_portugal[1].innerHTML = global_portugal_pj
    puntos_uruguay[1].innerHTML = global_uruguay_pj
    puntos_ghana[1].innerHTML = global_ghana_pj
    puntos_corea[1].innerHTML = global_corea_pj

    //console.log("GF ECUADOR : ", global_ecuador_gf , "GF QATAR : " , global_qatar_gf)
    //console.log("GF HOLANDA : ", global_paises_bajos_gf , "GF SENEGAL : " , global_senegal_gf)

    clasi8();
}


function clasi8() {

    //corea
    //Obtener valores td de la columa corea
    let fila_corea = document.getElementById("row-corea");
    let puntos_corea = fila_corea.getElementsByTagName("td");

    //----------------------------------------------------------

    //Ghana
    //Obtener valores td de la columa ghana
    let fila_ghana = document.getElementById("row-ghana");
    let puntos_ghana = fila_ghana.getElementsByTagName("td");

    //----------------------------------------------------------

    //portugal
    //Obtener valores td de la columa portugal
    let fila_portugal = document.getElementById("row-portugal");
    let puntos_portugal = fila_portugal.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //uruguay
    //Obtener valores td de la columa uruguay
    let fila_uruguay = document.getElementById("row-uruguay");
    let puntos_uruguay = fila_uruguay.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Puntos de los equipos
    var points_corea = parseInt(puntos_corea[8].innerHTML);
    var points_ghana = parseInt(puntos_ghana[8].innerHTML);
    var points_portugal = parseInt(puntos_portugal[8].innerHTML);
    var points_uruguay = parseInt(puntos_uruguay[8].innerHTML);
    //Goles a favor
    var gf_corea = parseInt(puntos_corea[5].innerHTML);
    var gf_ghana = parseInt(puntos_ghana[5].innerHTML);
    var gf_portugal = parseInt(puntos_portugal[5].innerHTML);
    var gf_uruguay = parseInt(puntos_uruguay[5].innerHTML);
    //Diferencia de goles
    var df_corea = parseInt(puntos_corea[7].innerHTML);
    var df_ghana = parseInt(puntos_ghana[7].innerHTML);
    var df_portugal = parseInt(puntos_portugal[7].innerHTML);
    var df_uruguay = parseInt(puntos_uruguay[7].innerHTML);

    //Lista con los puntos de los equipos
    let lista_puntos_1 = [points_portugal, points_uruguay, points_ghana, points_corea]
    let lista_df = [df_corea, df_ghana, df_portugal, df_uruguay]
    lista_puntos_1.sort(Comparar)
    lista_df.sort(Comparar)

    //------------CONDICIONES PARA EL 1ER PUESTO-----------------------//

    //Condiciones para 1er puesto ghana y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_ghana) {
        //ghana iguala con Paises Bajos
        if (lista_puntos_1[3] === points_uruguay) {
            if (df_ghana > df_uruguay) {
                document.getElementById("octavos15").innerText = puntos_ghana[0].innerText;
                document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                console.log("ghana primero  y Paises Bajos Segundo")
            }
            if (df_ghana === df_uruguay) {
                if (gf_ghana > gf_uruguay) {
                    document.getElementById("octavos15").innerText = puntos_ghana[0].innerText;
                    document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                }
            }
            if (df_ghana < df_uruguay) {
                document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
            }
        }
        //ghana iguala con portugal
        if (lista_puntos_1[3] === points_portugal) {
            if (df_ghana > df_portugal) {
                document.getElementById("octavos15").innerText = puntos_ghana[0].innerText;
                document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                console.log("ghana primero y portugal segundo")
            }
            if (df_ghana === df_portugal) {
                if (gf_ghana > gf_portugal) {
                    document.getElementById("octavos15").innerText = puntos_ghana[0].innerText;
                    document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                }

            }
            if (df_ghana < df_portugal) {
                document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
            }
        }

        //ghana iguala con corea
        if (lista_puntos_1[3] === points_corea) {
            if (df_ghana > df_corea) {
                document.getElementById("octavos15").innerText = puntos_ghana[0].innerText;
                document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                console.log("ghana primero  y corea Segundo")
            }
            if (df_ghana === df_corea) {
                if (gf_ghana > gf_corea) {
                    document.getElementById("octavos15").innerText = puntos_ghana[0].innerText;
                    document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                }
            }
            if (df_ghana < df_corea) {
                document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
            }
        }
        //ghana no iguala con nadie
        if (lista_puntos_1[3] !== points_corea && lista_puntos_1[3] !== points_portugal &&
            lista_puntos_1[3] !== points_uruguay) {
            document.getElementById("octavos15").innerText = puntos_ghana[0].innerText;
        }

    }

    //Condiciones para 1er puesto corea y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_corea) {
        //corea iguala con ghana
        if (lista_puntos_1[3] === points_ghana) {
            if (df_corea > df_ghana) {
                document.getElementById("octavos15").innerText = puntos_corea[0].innerText;
                document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                console.log("corea primero  y ghana Segundo")
            }
            if (df_corea === df_ghana) {
                if (gf_corea > gf_ghana) {
                    document.getElementById("octavos15").innerText = puntos_corea[0].innerText;
                    document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                }

            }
            if (df_corea < df_ghana) {
                document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
            }
        }
        //corea iguala con Uruguay
        if (lista_puntos_1[3] === points_uruguay) {
            if (df_corea > df_uruguay) {
                document.getElementById("octavos15").innerText = puntos_corea[0].innerText;
                document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                console.log("corea primero  y Paises bajos Segundo")
            }
            if (df_corea === df_uruguay) {
                if (gf_corea > gf_uruguay) {
                    document.getElementById("octavos15").innerText = puntos_corea[0].innerText;
                    document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                }
            }
            if (df_corea < df_uruguay) {
                document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
            }
        }

        //corea iguala con portugal
        if (lista_puntos_1[3] === points_portugal) {
            if (df_corea > df_portugal) {
                document.getElementById("octavos15").innerText = puntos_corea[0].innerText;
                document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                console.log("corea primero  y portugal Segundo")
            }
            if (df_corea === df_portugal) {
                if (gf_corea > gf_portugal) {
                    document.getElementById("octavos15").innerText = puntos_corea[0].innerText;
                    document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                }

            }
            if (df_corea < df_portugal) {
                document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
            }
        }
        //corea no iguala con nadie
        if (lista_puntos_1[3] !== points_portugal && lista_puntos_1[3] !== points_uruguay &&
            lista_puntos_1[3] !== points_ghana) {
            document.getElementById("octavos15").innerText = puntos_corea[0].innerText;
        }

    }

    //Condiciones para 1er puesto portugal y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_portugal) {
        //portugal iguala con ghana
        if (lista_puntos_1[3] === points_ghana) {
            if (df_portugal > df_ghana) {
                document.getElementById("octavos15").innerText = puntos_portugal[0].innerText;
                document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                console.log("portugal primero  y ghana Segundo")
            }
            if (df_portugal === df_ghana) {
                if (gf_portugal > gf_ghana) {
                    document.getElementById("octavos15").innerText = puntos_portugal[0].innerText;
                    document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                }
            }
            if (df_portugal < df_ghana) {
                document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
            }
        }
        //portugal iguala con uruguay
        if (lista_puntos_1[3] === points_uruguay) {
            if (df_portugal > df_uruguay) {
                document.getElementById("octavos15").innerText = puntos_portugal[0].innerText;
                document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                console.log("portugal primero  y Paises bajos Segundo")
            }
            if (df_portugal === df_uruguay) {
                if (gf_portugal > gf_uruguay) {
                    document.getElementById("octavos15").innerText = puntos_portugal[0].innerText;
                    document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                }

            }
            if (df_portugal < df_uruguay) {
                document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
            }
        }

        //portugal iguala con corea
        if (lista_puntos_1[3] === points_corea) {
            if (df_portugal > df_corea) {
                document.getElementById("octavos15").innerText = puntos_portugal[0].innerText;
                document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                console.log("portugal primero  y corea Segundo")
            }
            if (df_portugal === df_corea) {
                if (gf_portugal > gf_corea) {
                    document.getElementById("octavos15").innerText = puntos_portugal[0].innerText;
                    document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                }

            }
            if (df_portugal < df_corea) {
                document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
            }
        }
        //portugal no iguala con nadie
        if (lista_puntos_1[3] !== points_corea && lista_puntos_1[3] !== points_uruguay &&
            lista_puntos_1[3] !== points_ghana) {
            document.getElementById("octavos15").innerText = puntos_portugal[0].innerText;
        }

    }

    //Condiciones para 1er puesto uruguay y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_uruguay) {
        //Uruguay iguala con ghana
        if (lista_puntos_1[3] === points_ghana) {
            if (df_uruguay > df_ghana) {
                document.getElementById("octavos15").innerText = puntos_uruguay[0].innerText;
                document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                console.log("Uruguay primero  y ghana Segundo")
            }
            if (df_uruguay === df_ghana) {
                if (gf_uruguay > gf_ghana) {
                    document.getElementById("octavos15").innerText = puntos_uruguay[0].innerText;
                    document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                }
            }
            if (df_uruguay < df_ghana) {
                document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
            }
        }
        //Uruguay iguala con portugal
        if (lista_puntos_1[3] === points_portugal) {
            if (df_uruguay > df_portugal) {
                document.getElementById("octavos15").innerText = puntos_uruguay[0].innerText;
                document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                console.log("Uruguay primero y portugal segundo")
            }
            if (df_uruguay === df_portugal) {
                if (gf_uruguay > gf_portugal) {
                    document.getElementById("octavos15").innerText = puntos_uruguay[0].innerText;
                    document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                }
            }
            if (df_uruguay < df_portugal) {
                document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
            }
        }

        //Uruguay iguala con corea
        if (lista_puntos_1[3] === points_corea) {
            if (df_uruguay > df_corea) {
                document.getElementById("octavos15").innerText = puntos_uruguay[0].innerText;
                document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                console.log("Uruguay primero y corea Segundo")
            }
            if (df_uruguay === df_corea) {
                if (gf_uruguay > gf_corea) {
                    document.getElementById("octavos15").innerText = puntos_uruguay[0].innerText;
                    document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                }
            }
            if (df_uruguay < df_corea) {
                document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
            }
        }
        //Paises no iguala con nadie
        if (lista_puntos_1[3] !== points_corea && lista_puntos_1[3] !== points_portugal &&
            lista_puntos_1[3] !== points_ghana) {
            document.getElementById("octavos15").innerText = puntos_uruguay[0].innerText;
        }

    }

    //--------------------CONDICIONES PARA EL 2DO PUESTO--------------------------- //

    if (document.getElementById("octavos15").innerText !== puntos_ghana[0].innerText) {
        //Condiciones para 2do puesto ghana
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_ghana) {
            //Ghana sin Portugal
            if (document.getElementById("octavos15").innerText !== "Portugal") {
                //ghana iguala con Uruguay
                if (lista_puntos_1[2] === points_uruguay) {
                    if (df_ghana > df_uruguay) {
                        document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        console.log("ghana segundo y Uruguay 3er")
                    }
                    if (df_ghana === df_uruguay) {
                        if (gf_ghana > gf_uruguay) {
                            document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        }
                    }
                }
                //ghana iguala con corea
                if (lista_puntos_1[2] === points_corea) {
                    if (df_ghana > df_corea) {
                        document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        console.log("ghana segundo y corea 3ero")
                    }
                    if (df_ghana === df_corea) {
                        if (gf_ghana > gf_corea) {
                            document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        }
                    }
                }
            }
            //Ghana sin Uruguay
            if (document.getElementById("octavos15").innerText !== "Uruguay") {
                //ghana iguala con portugal
                if (lista_puntos_1[2] === points_portugal) {
                    if (df_ghana > df_portugal) {
                        document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        console.log("ghana segundo y portugal 3ero")
                    }
                    if (df_ghana === df_portugal) {
                        if (gf_ghana > gf_portugal) {
                            document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        }
                    }
                }
                //ghana iguala con corea
                if (lista_puntos_1[2] === points_corea) {
                    if (df_ghana > df_corea) {
                        document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        console.log("ghana segundo y corea 3ero")
                    }
                    if (df_ghana === df_corea) {
                        if (gf_ghana > gf_corea) {
                            document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        }
                    }
                }
            }
            //Ghana sin Corea del Sur
            if (document.getElementById("octavos15").innerText !== "Corea del Sur") {
                //ghana iguala con portugal
                if (lista_puntos_1[2] === points_portugal) {
                    if (df_ghana > df_portugal) {
                        document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        console.log("ghana segundo y portugal 3ero")
                    }
                    if (df_ghana === df_portugal) {
                        if (gf_ghana > gf_portugal) {
                            document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        }
                    }
                }
                //ghana iguala con Uruguay
                if (lista_puntos_1[2] === points_uruguay) {
                    if (df_ghana > df_uruguay) {
                        document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        console.log("ghana segundo y Uruguay 3er")
                    }
                    if (df_ghana === df_uruguay) {
                        if (gf_ghana > gf_uruguay) {
                            document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        }
                    }
                }
            }
            //ghana no iguala con nadie
            if (lista_puntos_1[2] !== points_corea && lista_puntos_1[2] !== points_uruguay && lista_puntos_1[2] !== points_portugal) {
                document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
            }

        }
    }


    if (document.getElementById("octavos15").innerText !== puntos_corea[0].innerText) {
        //Condiciones para 2do puesto corea
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_corea) {
            //Corea sin Corea del Sur
            if (document.getElementById("octavos15").innerText !== "Ghana") {
                //corea iguala con Uruguay
                if (lista_puntos_1[2] === points_uruguay) {
                    if (df_corea > df_uruguay) {
                        document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        console.log("corea segundo y Uruguay 3er")
                    }
                    if (df_corea === df_uruguay) {
                        if (gf_corea > gf_uruguay) {
                            document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        }
                    }
                }
                //corea iguala con portugal
                if (lista_puntos_1[2] === points_portugal) {
                    if (df_corea > df_portugal) {
                        document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        console.log("corea segundo y portugal 3ero")
                    }
                    if (df_corea === df_portugal) {
                        if (gf_corea > gf_portugal) {
                            document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        }
                    }

                }
            }
            if (document.getElementById("octavos15").innerText !== "Portugal") {
                //corea iguala con ghana
                if (lista_puntos_1[2] === points_ghana) {
                    if (df_corea > df_ghana) {
                        document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        console.log("corea segundo y ghana 3ero")
                    }
                    if (df_corea === df_ghana) {
                        if (gf_corea > gf_ghana) {
                            document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        }
                    }
                }
                //corea iguala con Uruguay
                if (lista_puntos_1[2] === points_uruguay) {
                    if (df_corea > df_uruguay) {
                        document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        console.log("corea segundo y Uruguay 3er")
                    }
                    if (df_corea === df_uruguay) {
                        if (gf_corea > gf_uruguay) {
                            document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos15").innerText !== "Uruguay") {
                //corea iguala con ghana
                if (lista_puntos_1[2] === points_ghana) {
                    if (df_corea > df_ghana) {
                        document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        console.log("corea segundo y ghana 3ero")
                    }
                    if (df_corea === df_ghana) {
                        if (gf_corea > gf_ghana) {
                            document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        }
                    }
                }
                //corea iguala con portugal
                if (lista_puntos_1[2] === points_portugal) {
                    if (df_corea > df_portugal) {
                        document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        console.log("corea segundo y portugal 3ero")
                    }
                    if (df_corea === df_portugal) {
                        if (gf_corea > gf_portugal) {
                            document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        }
                    }

                }
            }

            //corea no iguala con nadie
            if (lista_puntos_1[2] !== points_portugal && lista_puntos_1[2] !== points_uruguay &&
                lista_puntos_1[2] !== points_ghana) {
                document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
            }
        }
    }


    if (document.getElementById("octavos15").innerText !== puntos_portugal[0].innerText) {
        //Condiciones para 2do puesto portugal
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_portugal) {
            //PORTUGAL SIN URUGUAY
            if (document.getElementById("octavos15").innerText === "Uruguay") {
                //portugal iguala con ghana
                if (lista_puntos_1[2] === points_ghana) {
                    if (df_portugal > df_ghana) {
                        document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        console.log("portugal segundo y ghana 3ero")
                    }
                    if (df_portugal === df_ghana) {
                        if (gf_portugal > gf_ghana) {
                            document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        }
                    }

                }
                //portugal iguala con corea
                if (lista_puntos_1[2] === points_corea) {
                    if (df_portugal > df_corea) {
                        document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        console.log("portugal segundo y corea 3ero")
                    }
                    if (df_portugal === df_corea) {
                        if (gf_portugal > gf_corea) {
                            document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        }
                    }

                }
            }
            //PORTUGAL SIN GHANA
            if (document.getElementById("octavos15").innerText === "Ghana") {
                //portugal iguala con Uruguay
                if (lista_puntos_1[2] === points_uruguay) {
                    if (df_portugal > df_uruguay) {
                        document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        console.log("portugal segundo y Uruguay 3er")
                    }
                    if (df_portugal === df_uruguay) {
                        if (gf_portugal > gf_uruguay) {
                            document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        }
                    }

                }
                //portugal iguala con corea
                if (lista_puntos_1[2] === points_corea) {
                    if (df_portugal > df_corea) {
                        document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        console.log("portugal segundo y corea 3ero")
                    }
                    if (df_portugal === df_corea) {
                        if (gf_portugal > gf_corea) {
                            document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        }
                    }

                }
            }
            //PORTUGAL SIN COREA DEL SUR
            if (document.getElementById("octavos15").innerText === "Corea del Sur") {
                //portugal iguala con Uruguay
                if (lista_puntos_1[2] === points_uruguay) {
                    if (df_portugal > df_uruguay) {
                        document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        console.log("portugal segundo y Uruguay 3er")
                    }
                    if (df_portugal === df_uruguay) {
                        if (gf_portugal > gf_uruguay) {
                            document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        }
                    }

                }
                //portugal iguala con ghana
                if (lista_puntos_1[2] === points_ghana) {
                    if (df_portugal > df_ghana) {
                        document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        console.log("portugal segundo y ghana 3ero")
                    }
                    if (df_portugal === df_ghana) {
                        if (gf_portugal > gf_ghana) {
                            document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        }
                    }

                }
            }
            //portugal no iguala con nadie
            if (lista_puntos_1[2] !== points_corea && lista_puntos_1[2] !== points_uruguay &&
                lista_puntos_1[2] !== points_ghana) {
                document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
            }

        }
    }

    if (document.getElementById("octavos15").innerText !== puntos_uruguay[0].innerText) {
        //Condiciones para 2do puesto Uruguay
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_uruguay) {
            //URUGUAY SIN COREA DEL SUR
            if (document.getElementById("octavos15").innerText === "Corea del Sur") {
                //Uruguay iguala con ghana
                if (lista_puntos_1[2] === points_ghana) {
                    if (df_uruguay > df_ghana) {
                        document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        console.log("Uruguay segundo y ghana 3ero")
                    }
                    if (df_uruguay === df_ghana) {
                        if (gf_uruguay > gf_ghana) {
                            document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        }
                    }
                }
                //Uruguay iguala con portugal
                if (lista_puntos_1[2] === points_portugal) {
                    if (df_uruguay > df_portugal) {
                        document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        console.log("Uruguay segundo y portugal Bajos 3er")
                    }
                    if (df_uruguay === df_portugal) {
                        if (gf_uruguay > gf_portugal) {
                            document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        }
                    }

                }
            }
            //URUGUAY SIN GHANA
            if (document.getElementById("octavos15").innerText === "Ghana") {
                //Uruguay iguala con corea
                if (lista_puntos_1[2] === points_corea) {
                    if (df_uruguay > df_corea) {
                        document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        console.log("Uruguay segundo y corea 3ero")
                    }
                    if (df_uruguay === df_corea) {
                        if (gf_uruguay > gf_corea) {
                            document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        }
                    }
                }
                //Uruguay iguala con portugal
                if (lista_puntos_1[2] === points_portugal) {
                    if (df_uruguay > df_portugal) {
                        document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        console.log("Uruguay segundo y portugal Bajos 3er")
                    }
                    if (df_uruguay === df_portugal) {
                        if (gf_uruguay > gf_portugal) {
                            document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_portugal[0].innerText;
                        }
                    }

                }
            }
            //URUGUAY SIN PORTUGAL
            if (document.getElementById("octavos15").innerText === "Portugal") {
                //Uruguay iguala con corea
                if (lista_puntos_1[2] === points_corea) {
                    if (df_uruguay > df_corea) {
                        document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        console.log("Uruguay segundo y corea 3ero")
                    }
                    if (df_uruguay === df_corea) {
                        if (gf_uruguay > gf_corea) {
                            document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_corea[0].innerText;
                        }
                    }
                }
                //Uruguay iguala con ghana
                if (lista_puntos_1[2] === points_ghana) {
                    if (df_uruguay > df_ghana) {
                        document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        console.log("Uruguay segundo y ghana 3ero")
                    }
                    if (df_uruguay === df_ghana) {
                        if (gf_uruguay > gf_ghana) {
                            document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
                        }
                        else {
                            document.getElementById("octavos14").innerText = puntos_ghana[0].innerText;
                        }
                    }
                }
            }
            //Uruguay no iguala con nadie
            if (lista_puntos_1[2] !== points_corea && lista_puntos_1[2] !== points_portugal &&
                lista_puntos_1[2] !== points_ghana) {
                document.getElementById("octavos14").innerText = puntos_uruguay[0].innerText;
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

function Comparar(a, b) {
    return a - b;
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


export default CompRonda8;