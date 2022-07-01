import React from 'react';
import CompPartido1E from './Rondas/Ronda5/CompPartido1E';
import CompPartido2E from './Rondas/Ronda5/CompPartido2E';
import CompPartido3E from './Rondas/Ronda5/CompPartido3E';
import CompPartido4E from './Rondas/Ronda5/CompPartido4E';
import CompPartido5E from './Rondas/Ronda5/CompPartido5E';
import CompPartido6E from './Rondas/Ronda5/CompPartido6E';

function CompRonda5() {
    return (
        <div className='container'>
            <table className='table table-bordered container table1' border="">
                <CompPartido1E />
                <CompPartido2E />
                <CompPartido3E />
                <CompPartido4E />
                <CompPartido5E />
                <CompPartido6E />
            </table>
            <div className='boton-cal1'>
                <button type="button" class="btn btn-primary" onClick={() => { ronda5() }} >Calcular</button>
            </div>
            <br></br>
        </div>
    )
}


function ronda5() {

    //Partido 1
    var partido_1_L = parseInt(document.getElementById("alemania1").value);
    var partido_1_V = parseInt(document.getElementById("japon1").value);
    //Partido 2
    var partido_2_L = parseInt(document.getElementById("españa1").value);
    var partido_2_V = parseInt(document.getElementById("costarica1").value);
    //Partido 3
    var partido_3_L = parseInt(document.getElementById("japon2").value);
    var partido_3_V = parseInt(document.getElementById("costarica2").value);
    //Partido 4
    var partido_4_L = parseInt(document.getElementById("españa2").value);
    var partido_4_V = parseInt(document.getElementById("alemania2").value);
    //Partido 5
    var partido_5_L = parseInt(document.getElementById("japon3").value);
    var partido_5_V = parseInt(document.getElementById("españa3").value);
    //Partido 6
    var partido_6_L = parseInt(document.getElementById("costarica3").value);
    var partido_6_V = parseInt(document.getElementById("alemania3").value);

    //Senegal
    //Obtener valores td de la columa senegal
    let fila_españa = document.getElementById("row-españa");
    let puntos_españa = fila_españa.getElementsByTagName("td");

    //----------------------------------------------------------

    //Paises bajos
    //Obtener valores td de la columa holanda
    let fila_japon = document.getElementById("row-japon");
    let puntos_japon = fila_japon.getElementsByTagName("td");

    //----------------------------------------------------------

    //Qatar
    //Obtener valores td de la columa qatar
    let fila_costarica = document.getElementById("row-costarica");
    let puntos_costarica = fila_costarica.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Ecuador
    //Obtener valores td de la columa ecuador
    let fila_alemania = document.getElementById("row-alemania");
    let puntos_alemania = fila_alemania.getElementsByTagName("td");

    //-------------------------------------------------------------------
    //Inicializar variables globales
    var global_españa = 0
    var global_japon = 0
    var global_costarica = 0
    var global_alemania = 0
    //Variables PJ
    var global_españa_pj = 0
    var global_japon_pj = 0
    var global_costarica_pj = 0
    var global_alemania_pj = 0
    //Variables PG
    var global_españa_pg = 0
    var global_japon_pg = 0
    var global_costarica_pg = 0
    var global_alemania_pg = 0
    //Variables PE
    var global_españa_pe = 0
    var global_japon_pe = 0
    var global_costarica_pe = 0
    var global_alemania_pe = 0
    //Variables PP
    var global_españa_pp = 0
    var global_japon_pp = 0
    var global_costarica_pp = 0
    var global_alemania_pp = 0
    //Variables de goles A FAVOR
    var global_españa_gf = 0
    var global_japon_gf = 0
    var global_alemania_gf = 0
    var global_costarica_gf = 0
    //Variables de goles EN CONTRA
    var global_españa_gc = 0
    var global_japon_gc = 0
    var global_alemania_gc = 0
    var global_costarica_gc = 0
    //Variables de DF goles
    var global_españa_dg = 0
    var global_japon_dg = 0
    var global_alemania_dg = 0
    var global_costarica_dg = 0
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
        var pts_alemania_1 = part1(partido_1_L, partido_1_V) //3
        var pts_japon_1 = part2(partido_1_V, partido_1_L) //0

        //Sumar a los puntos grupales
        global_alemania = global_alemania + pts_alemania_1
        global_japon = global_japon + pts_japon_1

        //Partidos
        var res_local_1 = PG(pts_alemania_1, pts_japon_1)
        var res_visita_1 = PG(pts_japon_1, pts_alemania_1)
        var res_empate_1 = PE(pts_alemania_1, pts_japon_1)

        //Sumar PG
        global_alemania_pg = global_alemania_pg + res_local_1
        global_japon_pg = global_japon_pg + res_visita_1
        //Sumar PE
        global_alemania_pe = global_alemania_pe + res_empate_1
        global_japon_pe = global_japon_pe + res_empate_1
        //Sumar PP
        global_alemania_pp = global_alemania_pp + res_visita_1
        global_japon_pp = global_japon_pp + res_local_1

        //Sumar los goles a favor
        global_alemania_gf = global_alemania_gf + partido_1_L // 6
        global_japon_gf = global_japon_gf + partido_1_V // 0
        puntos_alemania[5].innerHTML = global_alemania_gf //6
        puntos_japon[5].innerHTML = global_japon_gf //0
        //Goles en contra
        global_alemania_gc = global_alemania_gc + partido_1_V // 0 = 0 + 0
        global_japon_gc = global_japon_gc + partido_1_L // 0 = 0 + 3
        puntos_alemania[6].innerHTML = global_alemania_gc // 0
        puntos_japon[6].innerHTML = global_japon_gc // 3

        //Puntos obtenidos por 1er partido

        if (partido_1_L > partido_1_V) {
            puntos_alemania[8].innerHTML = global_alemania
            puntos_japon[8].innerHTML = global_japon
        }
        if (partido_1_L < partido_1_V) {
            //Prueba para ver quien gana
            puntos_alemania[8].innerHTML = global_alemania
            puntos_japon[8].innerHTML = global_japon
        }

        if (partido_1_L === partido_1_V) {
            puntos_alemania[8].innerHTML = global_alemania
            puntos_japon[8].innerHTML = global_japon
        }
        //Colocar PG
        puntos_alemania[2].innerHTML = global_alemania_pg
        puntos_japon[2].innerHTML = global_japon_pg
        //Colocar PE
        puntos_alemania[3].innerHTML = global_alemania_pe
        puntos_japon[3].innerHTML = global_japon_pe
        //Colocar PP
        puntos_alemania[4].innerHTML = global_alemania_pp
        puntos_japon[4].innerHTML = global_japon_pp

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
        var pts_españa_1 = part1(partido_2_L, partido_2_V) //3
        var pts_costarica_1 = part2(partido_2_V, partido_2_L) //0

        //Sumar los puntos globales
        global_españa = global_españa + pts_españa_1
        global_costarica = global_costarica + pts_costarica_1

        //Partidos
        var res_local_2 = PG(pts_españa_1, pts_costarica_1)
        var res_visita_2 = PG(pts_costarica_1, pts_españa_1)
        var res_empate_2 = PE(pts_españa_1, pts_costarica_1)

        //Sumar PG
        global_españa_pg = global_españa_pg + res_local_2
        global_costarica_pg = global_costarica_pg + res_visita_2
        //Sumar PE
        global_españa_pe = global_españa_pe + res_empate_2
        global_costarica_pe = global_costarica_pe + res_empate_2
        //Sumar PP
        global_españa_pp = global_españa_pp + res_visita_2
        global_costarica_pp = global_costarica_pp + res_local_2

        //Sumar los goles a favor
        global_españa_gf = global_españa_gf + partido_2_L
        global_costarica_gf = global_costarica_gf + partido_2_V
        puntos_españa[5].innerHTML = global_españa_gf
        puntos_costarica[5].innerHTML = global_costarica_gf
        //Sumar goles en contra
        global_españa_gc = global_españa_gc + partido_2_V // 0 = 0 + 0
        global_costarica_gc = global_costarica_gc + partido_2_L // 3 = 3 + 0
        puntos_españa[6].innerHTML = global_españa_gc
        puntos_costarica[6].innerHTML = global_costarica_gc
        //Restar diferencia de goles
        //puntos_españa[7].innerHTML = global_españa_gf - global_costarica_gc
        //puntos_costarica[7].innerHTML = global_costarica_gf - global_españa_gc


        //Puntos obtenidos por 1er partido
        if (partido_2_L > partido_2_V) {
            puntos_españa[8].innerHTML = global_españa
            puntos_costarica[8].innerHTML = global_costarica
        }
        if (partido_2_L < partido_2_V) {
            puntos_españa[8].innerHTML = global_españa
            puntos_costarica[8].innerHTML = global_costarica
        }
        if (partido_2_L === partido_2_V) {
            puntos_españa[8].innerHTML = global_españa
            puntos_costarica[8].innerHTML = global_costarica
        }
        //Colocar PG
        puntos_españa[2].innerHTML = global_españa_pg
        puntos_costarica[2].innerHTML = global_costarica_pg
        //Colocar PE
        puntos_españa[3].innerHTML = global_españa_pe
        puntos_costarica[3].innerHTML = global_costarica_pe
        //Colocar PP
        puntos_españa[4].innerHTML = global_españa_pp
        puntos_costarica[4].innerHTML = global_costarica_pp
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
        var pts_japon_2 = part2(partido_3_L, partido_3_V)
        var pts_costarica_2 = part1(partido_3_V, partido_3_L)

        //Sumar a los puntos grupales
        global_costarica = global_costarica + pts_costarica_2
        global_japon = global_japon + pts_japon_2

        //Partidos
        var res_local_3 = PG(pts_japon_2, pts_costarica_2)
        var res_visita_3 = PG(pts_costarica_2, pts_japon_2)
        var res_empate_3 = PE(pts_japon_2, pts_costarica_2)

        //Sumar PG
        global_japon_pg = global_japon_pg + res_local_3
        global_costarica_pg = global_costarica_pg + res_visita_3
        //Sumar PE
        global_japon_pe = global_japon_pe + res_empate_3
        global_costarica_pe = global_costarica_pe + res_empate_3
        //Sumar PP
        global_japon_pp = global_japon_pp + res_visita_3
        global_costarica_pp = global_costarica_pp + res_local_3

        //Sumar los goles a favor
        global_japon_gf = global_japon_gf + partido_3_L // 0 = 0 + 0
        global_costarica_gf = global_costarica_gf + partido_3_V // 3 = 3 + 0
        puntos_japon[5].innerHTML = global_japon_gf //0
        puntos_costarica[5].innerHTML = global_costarica_gf // 3
        //Goles en contra
        global_japon_gc = global_japon_gc + partido_3_V // 0 = 0 + 0
        global_costarica_gc = global_costarica_gc + partido_3_L // 3 = 3 + 0
        puntos_japon[6].innerHTML = global_japon_gc // 3
        puntos_costarica[6].innerHTML = global_costarica_gc // 0
        //Restar diferencia de goles
        //puntos_japon[7].innerHTML = global_japon_gf - global_costarica_gc
        //puntos_costarica[7].innerHTML = global_costarica_gf - global_japon_gc

        //Puntos obtenidos por 3er partido
        if (partido_3_L > partido_3_V) {
            puntos_costarica[8].innerHTML = global_costarica
            puntos_japon[8].innerHTML = global_japon
        }
        if (partido_3_L < partido_3_V) {
            puntos_costarica[8].innerHTML = global_costarica
            puntos_japon[8].innerHTML = global_japon
        }

        if (partido_3_L === partido_3_V) {
            puntos_costarica[8].innerHTML = global_costarica
            puntos_japon[8].innerHTML = global_japon
        }
        //Colocar PG
        puntos_japon[2].innerHTML = global_japon_pg
        puntos_costarica[2].innerHTML = global_costarica_pg
        //Colocar PE
        puntos_japon[3].innerHTML = global_japon_pe
        puntos_costarica[3].innerHTML = global_costarica_pe
        //Colocar PP
        puntos_japon[4].innerHTML = global_japon_pp
        puntos_costarica[4].innerHTML = global_costarica_pp
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
        var pts_españa_2 = part2(partido_4_L, partido_4_V)
        var pts_alemania_2 = part1(partido_4_V, partido_4_L)

        //Sumar los puntos globales
        global_alemania = global_alemania + pts_alemania_2
        global_españa = global_españa + pts_españa_2

        //Partidos
        var res_local_4 = PG(pts_españa_2, pts_alemania_2)
        var res_visita_4 = PG(pts_alemania_2, pts_españa_2)
        var res_empate_4 = PE(pts_españa_2, pts_alemania_2)

        //Sumar PG
        global_españa_pg = global_españa_pg + res_local_4
        global_alemania_pg = global_alemania_pg + res_visita_4
        //Sumar PE
        global_españa_pe = global_españa_pe + res_empate_4
        global_alemania_pe = global_alemania_pe + res_empate_4
        //Sumar PP
        global_españa_pp = global_españa_pp + res_visita_4
        global_alemania_pp = global_alemania_pp + res_local_4

        //Sumar los goles a favor
        global_alemania_gf = global_alemania_gf + partido_4_V
        global_españa_gf = global_españa_gf + partido_4_L
        puntos_alemania[5].innerHTML = global_alemania_gf
        puntos_españa[5].innerHTML = global_españa_gf
        //Goles en contra
        global_españa_gc = global_españa_gc + partido_4_V //
        global_alemania_gc = global_alemania_gc + partido_4_L
        puntos_españa[6].innerHTML = global_españa_gc //
        puntos_alemania[6].innerHTML = global_alemania_gc // 0
        //Restar diferencia de goles
        //puntos_alemania[7].innerHTML = global_alemania_gf - global_españa_gc
        //puntos_españa[7].innerHTML = global_españa_gf - global_alemania_gc

        //Puntos obtenidos por 4er partido
        if (partido_4_L > partido_4_V) {
            puntos_alemania[8].innerHTML = global_alemania
            puntos_españa[8].innerHTML = global_españa
        }
        if (partido_4_L < partido_4_V) {
            puntos_alemania[8].innerHTML = global_alemania
            puntos_españa[8].innerHTML = global_españa
        }

        if (partido_4_L === partido_4_V) {
            puntos_alemania[8].innerHTML = global_alemania
            puntos_españa[8].innerHTML = global_españa
        }
        //Colocar PG
        puntos_alemania[2].innerHTML = global_alemania_pg
        puntos_españa[2].innerHTML = global_españa_pg
        //Colocar PE
        puntos_alemania[3].innerHTML = global_alemania_pe
        puntos_españa[3].innerHTML = global_españa_pe
        //Colocar PP
        puntos_alemania[4].innerHTML = global_alemania_pp
        puntos_españa[4].innerHTML = global_españa_pp
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
        var pts_japon_3 = part2(partido_5_L, partido_5_V)
        var pts_españa_3 = part1(partido_5_V, partido_5_L)

        //Sumar los puntos globales
        global_españa = global_españa + pts_españa_3
        global_japon = global_japon + pts_japon_3

        //Partidos
        var res_local_5 = PG(pts_japon_3, pts_españa_3)
        var res_visita_5 = PG(pts_españa_3, pts_japon_3)
        var res_empate_5 = PE(pts_japon_3, pts_españa_3)

        //Sumar PG
        global_japon_pg = global_japon_pg + res_local_5
        global_españa_pg = global_españa_pg + res_visita_5
        //Sumar PE
        global_japon_pe = global_japon_pe + res_empate_5
        global_españa_pe = global_españa_pe + res_empate_5
        //Sumar PP
        global_japon_pp = global_japon_pp + res_visita_5
        global_españa_pp = global_españa_pp + res_local_5

        //Sumar los goles a favor
        global_españa_gf = global_españa_gf + partido_5_V
        global_japon_gf = global_japon_gf + partido_5_L
        puntos_españa[5].innerHTML = global_españa_gf
        puntos_japon[5].innerHTML = global_japon_gf
        //Goles en contra
        global_japon_gc = global_japon_gc + partido_5_V // 0 = 0 + 0
        global_españa_gc = global_españa_gc + partido_5_L // 3 = 3 + 0
        puntos_japon[6].innerHTML = global_japon_gc // 3
        puntos_españa[6].innerHTML = global_españa_gc // 0
        //Restar diferencia de goles
        //puntos_españa[7].innerHTML = global_españa_gf - global_japon_gc
        //puntos_japon[7].innerHTML = global_japon_gf - global_españa_gc

        //Puntos obtenidos por 5er partido
        if (partido_5_L > partido_5_V) {
            puntos_españa[8].innerHTML = global_españa
            puntos_japon[8].innerHTML = global_japon
        }
        if (partido_5_L < partido_5_V) {
            puntos_españa[8].innerHTML = global_españa
            puntos_japon[8].innerHTML = global_japon
        }

        if (partido_5_L === partido_5_V) {
            puntos_españa[8].innerHTML = global_españa
            puntos_japon[8].innerHTML = global_japon
        }
        //Colocar PG
        puntos_japon[2].innerHTML = global_japon_pg
        puntos_españa[2].innerHTML = global_españa_pg
        //Colocar PE
        puntos_japon[3].innerHTML = global_japon_pe
        puntos_españa[3].innerHTML = global_españa_pe
        //Colocar PP
        puntos_japon[4].innerHTML = global_japon_pp
        puntos_españa[4].innerHTML = global_españa_pp
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
        var pts_costarica_3 = part2(partido_6_L, partido_6_V)
        var pts_alemania_3 = part1(partido_6_V, partido_6_L)

        //Sumar los puntos globales
        global_alemania = global_alemania + pts_alemania_3
        global_costarica = global_costarica + pts_costarica_3

        //Partidos
        var res_local_6 = PG(pts_costarica_3, pts_alemania_3)
        var res_visita_6 = PG(pts_alemania_3, pts_costarica_3)
        var res_empate_6 = PE(pts_costarica_3, pts_alemania_3)

        //Sumar PG
        global_costarica_pg = global_costarica_pg + res_local_6
        global_alemania_pg = global_alemania_pg + res_visita_6
        //Sumar PE
        global_costarica_pe = global_costarica_pe + res_empate_6
        global_alemania_pe = global_alemania_pe + res_empate_6
        //Sumar PP
        global_costarica_pp = global_costarica_pp + res_visita_6
        global_alemania_pp = global_alemania_pp + res_local_6

        //Sumar los goles a favor
        global_alemania_gf = global_alemania_gf + partido_6_V
        global_costarica_gf = global_costarica_gf + partido_6_L
        puntos_alemania[5].innerHTML = global_alemania_gf
        puntos_costarica[5].innerHTML = global_costarica_gf
        //Sumar goles en contra
        //Goles en contra
        global_costarica_gc = global_costarica_gc + partido_6_V // 0 = 0 + 0
        global_alemania_gc = global_alemania_gc + partido_6_L // 3 = 3 + 0
        puntos_alemania[6].innerHTML = global_alemania_gc
        puntos_costarica[6].innerHTML = global_costarica_gc
        //Restar diferencia de goles
        //puntos_alemania[7].innerHTML = global_alemania_gf - global_costarica_gc
        //puntos_costarica[7].innerHTML = global_costarica_gf - global_alemania_gc

        //Puntos obtenidos por 6er partido
        if (partido_6_L > partido_6_V) {
            puntos_alemania[8].innerHTML = global_alemania
            puntos_costarica[8].innerHTML = global_costarica
        }
        if (partido_6_L < partido_6_V) {
            puntos_alemania[8].innerHTML = global_alemania
            puntos_costarica[8].innerHTML = global_costarica
        }

        if (partido_6_L === partido_6_V) {
            puntos_alemania[8].innerHTML = global_alemania
            puntos_costarica[8].innerHTML = global_costarica
        }
        //Colocar PG
        puntos_alemania[2].innerHTML = global_alemania_pg
        puntos_costarica[2].innerHTML = global_costarica_pg
        //Colocar PE
        puntos_alemania[3].innerHTML = global_alemania_pe
        puntos_costarica[3].innerHTML = global_costarica_pe
        //Colocar PP
        puntos_alemania[4].innerHTML = global_alemania_pp
        puntos_costarica[4].innerHTML = global_costarica_pp
    }

    //Restar diferencia de goles
    global_alemania_dg = global_alemania_gf - global_alemania_gc
    global_españa_dg = global_españa_gf - global_españa_gc
    global_costarica_dg = global_costarica_gf - global_costarica_gc
    global_japon_dg = global_japon_gf - global_japon_gc
    //Insertarlos en el html
    puntos_alemania[7].innerHTML = global_alemania_dg
    puntos_españa[7].innerHTML = global_españa_dg
    puntos_costarica[7].innerHTML = global_costarica_dg
    puntos_japon[7].innerHTML = global_japon_dg
    //Partidos Jugados
    global_alemania_pj = 3
    global_españa_pj = 3
    global_costarica_pj = 3
    global_japon_pj = 3
    //Colocar PARTIDOS
    puntos_alemania[1].innerHTML = global_alemania_pj
    puntos_españa[1].innerHTML = global_españa_pj
    puntos_costarica[1].innerHTML = global_costarica_pj
    puntos_japon[1].innerHTML = global_japon_pj

    //console.log("GF ECUADOR : ", global_ecuador_gf , "GF QATAR : " , global_qatar_gf)
    //console.log("GF HOLANDA : ", global_paises_bajos_gf , "GF SENEGAL : " , global_senegal_gf)
    clasi5();
}

function clasi5() {

    //alemania
    //Obtener valores td de la columa alemania
    let fila_alemania = document.getElementById("row-alemania");
    let puntos_alemania = fila_alemania.getElementsByTagName("td");

    //----------------------------------------------------------

    //costarica
    //Obtener valores td de la columa costarica
    let fila_costarica = document.getElementById("row-costarica");
    let puntos_costarica = fila_costarica.getElementsByTagName("td");

    //----------------------------------------------------------

    //españa
    //Obtener valores td de la columa españa
    let fila_españa = document.getElementById("row-españa");
    let puntos_españa = fila_españa.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //japon
    //Obtener valores td de la columa japon
    let fila_japon = document.getElementById("row-japon");
    let puntos_japon = fila_japon.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Puntos de los equipos
    var points_alemania = parseInt(puntos_alemania[8].innerHTML);
    var points_costarica = parseInt(puntos_costarica[8].innerHTML);
    var points_españa = parseInt(puntos_españa[8].innerHTML);
    var points_japon = parseInt(puntos_japon[8].innerHTML);
    //Goles a favor
    var gf_alemania = parseInt(puntos_alemania[5].innerHTML);
    var gf_costarica = parseInt(puntos_costarica[5].innerHTML);
    var gf_españa = parseInt(puntos_españa[5].innerHTML);
    var gf_japon = parseInt(puntos_japon[5].innerHTML);
    //Diferencia de goles
    var df_alemania = parseInt(puntos_alemania[7].innerHTML);
    var df_costarica = parseInt(puntos_costarica[7].innerHTML);
    var df_españa = parseInt(puntos_españa[7].innerHTML);
    var df_japon = parseInt(puntos_japon[7].innerHTML);

    //Lista con los puntos de los equipos
    let lista_puntos_1 = [points_españa, points_japon, points_costarica, points_alemania]
    let lista_df = [df_alemania, df_costarica, df_españa, df_japon]
    lista_puntos_1.sort(Comparar)
    lista_df.sort(Comparar)

    //------------CONDICIONES PARA EL 1ER PUESTO-----------------------//

    //Condiciones para 1er puesto costarica y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_costarica) {
        //costarica iguala con japon
        if (lista_puntos_1[3] === points_japon) {
            if (df_costarica > df_japon) {
                document.getElementById("octavos9").innerText = puntos_costarica[0].innerText;
                document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                console.log("costarica primero  y japon Segundo")
            }
            if (df_costarica === df_japon) {
                if (gf_costarica > gf_japon) {
                    document.getElementById("octavos9").innerText = puntos_costarica[0].innerText;
                    document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                }
            }
            if (df_costarica < df_japon) {
                document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
            }
        }
        //costarica iguala con españa
        if (lista_puntos_1[3] === points_españa) {
            if (df_costarica > df_españa) {
                document.getElementById("octavos9").innerText = puntos_costarica[0].innerText;
                document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                console.log("costarica primero y españa segundo")
            }
            if (df_costarica === df_españa) {
                if (gf_costarica > gf_españa) {
                    document.getElementById("octavos9").innerText = puntos_costarica[0].innerText;
                    document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                }

            }
            if (df_costarica < df_españa) {
                document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
            }
        }

        //costarica iguala con alemania
        if (lista_puntos_1[3] === points_alemania) {
            if (df_costarica > df_alemania) {
                document.getElementById("octavos9").innerText = puntos_costarica[0].innerText;
                document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                console.log("costarica primero  y alemania Segundo")
            }
            if (df_costarica === df_alemania) {
                if (gf_costarica > gf_alemania) {
                    document.getElementById("octavos9").innerText = puntos_costarica[0].innerText;
                    document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                }
            }
            if (df_costarica < df_alemania) {
                document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
            }
        }
        //costarica no iguala con nadie
        if (lista_puntos_1[3] !== points_alemania && lista_puntos_1[3] !== points_españa &&
            lista_puntos_1[3] !== points_japon) {
            document.getElementById("octavos9").innerText = puntos_costarica[0].innerText;
        }

    }

    //Condiciones para 1er puesto alemania y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_alemania) {
        //alemania iguala con costarica
        if (lista_puntos_1[3] === points_costarica) {
            if (df_alemania > df_costarica) {
                document.getElementById("octavos9").innerText = puntos_alemania[0].innerText;
                document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                console.log("alemania primero  y costarica Segundo")
            }
            if (df_alemania === df_costarica) {
                if (gf_alemania > gf_costarica) {
                    document.getElementById("octavos9").innerText = puntos_alemania[0].innerText;
                    document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                }

            }
            if (df_alemania < df_costarica) {
                document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
            }
        }
        //alemania iguala con japon
        if (lista_puntos_1[3] === points_japon) {
            if (df_alemania > df_japon) {
                document.getElementById("octavos9").innerText = puntos_alemania[0].innerText;
                document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                console.log("alemania primero  y japon Segundo")
            }
            if (df_alemania === df_japon) {
                if (gf_alemania > gf_japon) {
                    document.getElementById("octavos9").innerText = puntos_alemania[0].innerText;
                    document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                }
            }
            if (df_alemania < df_japon) {
                document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
            }
        }

        //alemania iguala con españa
        if (lista_puntos_1[3] === points_españa) {
            if (df_alemania > df_españa) {
                document.getElementById("octavos9").innerText = puntos_alemania[0].innerText;
                document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                console.log("alemania primero  y españa Segundo")
            }
            if (df_alemania === df_españa) {
                if (gf_alemania > gf_españa) {
                    document.getElementById("octavos9").innerText = puntos_alemania[0].innerText;
                    document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                }

            }
            if (df_alemania < df_españa) {
                document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
            }
        }
        //alemania no iguala con nadie
        if (lista_puntos_1[3] !== points_españa && lista_puntos_1[3] !== points_japon &&
            lista_puntos_1[3] !== points_costarica) {
            document.getElementById("octavos9").innerText = puntos_alemania[0].innerText;
        }

    }

    //Condiciones para 1er puesto españa y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_españa) {
        //españa iguala con costarica
        if (lista_puntos_1[3] === points_costarica) {
            if (df_españa > df_costarica) {
                document.getElementById("octavos9").innerText = puntos_españa[0].innerText;
                document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                console.log("españa primero  y costarica Segundo")
            }
            if (df_españa === df_costarica) {
                if (gf_españa > gf_costarica) {
                    document.getElementById("octavos9").innerText = puntos_españa[0].innerText;
                    document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                }
            }
            if (df_españa < df_costarica) {
                document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
            }
        }
        //españa iguala con japon
        if (lista_puntos_1[3] === points_japon) {
            if (df_españa > df_japon) {
                document.getElementById("octavos9").innerText = puntos_españa[0].innerText;
                document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                console.log("españa primero  y japon Segundo")
            }
            if (df_españa === df_japon) {
                if (gf_españa > gf_japon) {
                    document.getElementById("octavos9").innerText = puntos_españa[0].innerText;
                    document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                }

            }
            if (df_españa < df_japon) {
                document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
            }
        }

        //españa iguala con alemania
        if (lista_puntos_1[3] === points_alemania) {
            if (df_españa > df_alemania) {
                document.getElementById("octavos9").innerText = puntos_españa[0].innerText;
                document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                console.log("españa primero  y alemania Segundo")
            }
            if (df_españa === df_alemania) {
                if (gf_españa > gf_alemania) {
                    document.getElementById("octavos9").innerText = puntos_españa[0].innerText;
                    document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                }

            }
            if (df_españa < df_alemania) {
                document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
            }
        }
        //españa no iguala con nadie
        if (lista_puntos_1[3] !== points_alemania && lista_puntos_1[3] !== points_japon &&
            lista_puntos_1[3] !== points_costarica) {
            document.getElementById("octavos9").innerText = puntos_españa[0].innerText;
        }

    }

    //Condiciones para 1er puesto japon y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_japon) {
        //japon iguala con costarica
        if (lista_puntos_1[3] === points_costarica) {
            if (df_japon > df_costarica) {
                document.getElementById("octavos9").innerText = puntos_japon[0].innerText;
                document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                console.log("japon primero  y costarica Segundo")
            }
            if (df_japon === df_costarica) {
                if (gf_japon > gf_costarica) {
                    document.getElementById("octavos9").innerText = puntos_japon[0].innerText;
                    document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                }
            }
            if (df_japon < df_costarica) {
                document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
            }
        }
        //japon iguala con españa
        if (lista_puntos_1[3] === points_españa) {
            if (df_japon > df_españa) {
                document.getElementById("octavos9").innerText = puntos_japon[0].innerText;
                document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                console.log("japon primero y españa segundo")
            }
            if (df_japon === df_españa) {
                if (gf_japon > gf_españa) {
                    document.getElementById("octavos9").innerText = puntos_japon[0].innerText;
                    document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                }
            }
            if (df_japon < df_españa) {
                document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
            }
        }

        //japon iguala con alemania
        if (lista_puntos_1[3] === points_alemania) {
            if (df_japon > df_alemania) {
                document.getElementById("octavos9").innerText = puntos_japon[0].innerText;
                document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                console.log("japon primero y alemania Segundo")
            }
            if (df_japon === df_alemania) {
                if (gf_japon > gf_alemania) {
                    document.getElementById("octavos9").innerText = puntos_japon[0].innerText;
                    document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                }
            }
            if (df_japon < df_alemania) {
                document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
            }
        }
        //Paises no iguala con nadie
        if (lista_puntos_1[3] !== points_alemania && lista_puntos_1[3] !== points_españa &&
            lista_puntos_1[3] !== points_costarica) {
            document.getElementById("octavos9").innerText = puntos_japon[0].innerText;
        }

    }

    //--------------------CONDICIONES PARA EL 2DO PUESTO--------------------------- //

    if (document.getElementById("octavos9").innerText !== puntos_costarica[0].innerText) {
        //Condiciones para 2do puesto costarica
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_costarica) {
            //costarica sin españa
            if (document.getElementById("octavos9").innerText !== "España") {
                //costarica iguala con japon
                if (lista_puntos_1[2] === points_japon) {
                    if (df_costarica > df_japon) {
                        document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        console.log("costarica segundo y japon 3er")
                    }
                    if (df_costarica === df_japon) {
                        if (gf_costarica > gf_japon) {
                            document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        }
                    }
                }
                //costarica iguala con alemania
                if (lista_puntos_1[2] === points_alemania) {
                    if (df_costarica > df_alemania) {
                        document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        console.log("costarica segundo y alemania 3ero")
                    }
                    if (df_costarica === df_alemania) {
                        if (gf_costarica > gf_alemania) {
                            document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        }
                    }
                }
            }
            //costarica sin japon
            if (document.getElementById("octavos9").innerText !== "Japon") {
                //costarica iguala con españa
                if (lista_puntos_1[2] === points_españa) {
                    if (df_costarica > df_españa) {
                        document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        console.log("costarica segundo y españa 3ero")
                    }
                    if (df_costarica === df_españa) {
                        if (gf_costarica > gf_españa) {
                            document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        }
                    }
                }
                //costarica iguala con alemania
                if (lista_puntos_1[2] === points_alemania) {
                    if (df_costarica > df_alemania) {
                        document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        console.log("costarica segundo y alemania 3ero")
                    }
                    if (df_costarica === df_alemania) {
                        if (gf_costarica > gf_alemania) {
                            document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        }
                    }
                }
            }
            //costarica sin alemania
            if (document.getElementById("octavos9").innerText !== "Alemania") {
                //costarica iguala con españa
                if (lista_puntos_1[2] === points_españa) {
                    if (df_costarica > df_españa) {
                        document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        console.log("costarica segundo y españa 3ero")
                    }
                    if (df_costarica === df_españa) {
                        if (gf_costarica > gf_españa) {
                            document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        }
                    }
                }
                //costarica iguala con japon
                if (lista_puntos_1[2] === points_japon) {
                    if (df_costarica > df_japon) {
                        document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        console.log("costarica segundo y japon 3er")
                    }
                    if (df_costarica === df_japon) {
                        if (gf_costarica > gf_japon) {
                            document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        }
                    }
                }
            }
            //costarica no iguala con nadie
            if (lista_puntos_1[2] !== points_alemania && lista_puntos_1[2] !== points_japon && lista_puntos_1[2] !== points_españa) {
                document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
            }

        }
    }


    if (document.getElementById("octavos9").innerText !== puntos_alemania[0].innerText) {
        //Condiciones para 2do puesto alemania
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_alemania) {
            //alemania sin alemania
            if (document.getElementById("octavos9").innerText !== "Costa Rica") {
                //alemania iguala con japon
                if (lista_puntos_1[2] === points_japon) {
                    if (df_alemania > df_japon) {
                        document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        console.log("alemania segundo y japon 3er")
                    }
                    if (df_alemania === df_japon) {
                        if (gf_alemania > gf_japon) {
                            document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        }
                    }
                }
                //alemania iguala con españa
                if (lista_puntos_1[2] === points_españa) {
                    if (df_alemania > df_españa) {
                        document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        console.log("alemania segundo y españa 3ero")
                    }
                    if (df_alemania === df_españa) {
                        if (gf_alemania > gf_españa) {
                            document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        }
                    }

                }
            }
            if (document.getElementById("octavos9").innerText !== "España") {
                //alemania iguala con costarica
                if (lista_puntos_1[2] === points_costarica) {
                    if (df_alemania > df_costarica) {
                        document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        console.log("alemania segundo y costarica 3ero")
                    }
                    if (df_alemania === df_costarica) {
                        if (gf_alemania > gf_costarica) {
                            document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        }
                    }
                }
                //alemania iguala con japon
                if (lista_puntos_1[2] === points_japon) {
                    if (df_alemania > df_japon) {
                        document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        console.log("alemania segundo y japon 3er")
                    }
                    if (df_alemania === df_japon) {
                        if (gf_alemania > gf_japon) {
                            document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos9").innerText !== "Japon") {
                //alemania iguala con costarica
                if (lista_puntos_1[2] === points_costarica) {
                    if (df_alemania > df_costarica) {
                        document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        console.log("alemania segundo y costarica 3ero")
                    }
                    if (df_alemania === df_costarica) {
                        if (gf_alemania > gf_costarica) {
                            document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        }
                    }
                }
                //alemania iguala con españa
                if (lista_puntos_1[2] === points_españa) {
                    if (df_alemania > df_españa) {
                        document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        console.log("alemania segundo y españa 3ero")
                    }
                    if (df_alemania === df_españa) {
                        if (gf_alemania > gf_españa) {
                            document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        }
                    }

                }
            }

            //alemania no iguala con nadie
            if (lista_puntos_1[2] !== points_españa && lista_puntos_1[2] !== points_japon &&
                lista_puntos_1[2] !== points_costarica) {
                document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
            }
        }
    }


    if (document.getElementById("octavos9").innerText !== puntos_españa[0].innerText) {
        //Condiciones para 2do puesto españa
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_españa) {
            //españa SIN japon
            if (document.getElementById("octavos9").innerText === "Japon") {
                //españa iguala con costarica
                if (lista_puntos_1[2] === points_costarica) {
                    if (df_españa > df_costarica) {
                        document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        console.log("españa segundo y costarica 3ero")
                    }
                    if (df_españa === df_costarica) {
                        if (gf_españa > gf_costarica) {
                            document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        }
                    }

                }
                //españa iguala con alemania
                if (lista_puntos_1[2] === points_alemania) {
                    if (df_españa > df_alemania) {
                        document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        console.log("españa segundo y alemania 3ero")
                    }
                    if (df_españa === df_alemania) {
                        if (gf_españa > gf_alemania) {
                            document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        }
                    }

                }
            }
            //españa SIN costarica
            if (document.getElementById("octavos9").innerText === "Costa Rica") {
                //españa iguala con japon
                if (lista_puntos_1[2] === points_japon) {
                    if (df_españa > df_japon) {
                        document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        console.log("españa segundo y japon 3er")
                    }
                    if (df_españa === df_japon) {
                        if (gf_españa > gf_japon) {
                            document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        }
                    }

                }
                //españa iguala con alemania
                if (lista_puntos_1[2] === points_alemania) {
                    if (df_españa > df_alemania) {
                        document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        console.log("españa segundo y alemania 3ero")
                    }
                    if (df_españa === df_alemania) {
                        if (gf_españa > gf_alemania) {
                            document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        }
                    }

                }
            }
            //españa SIN alemania
            if (document.getElementById("octavos9").innerText === "Alemania") {
                //españa iguala con japon
                if (lista_puntos_1[2] === points_japon) {
                    if (df_españa > df_japon) {
                        document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        console.log("españa segundo y japon 3er")
                    }
                    if (df_españa === df_japon) {
                        if (gf_españa > gf_japon) {
                            document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        }
                    }

                }
                //españa iguala con costarica
                if (lista_puntos_1[2] === points_costarica) {
                    if (df_españa > df_costarica) {
                        document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        console.log("españa segundo y costarica 3ero")
                    }
                    if (df_españa === df_costarica) {
                        if (gf_españa > gf_costarica) {
                            document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        }
                    }

                }
            }
            //españa no iguala con nadie
            if (lista_puntos_1[2] !== points_alemania && lista_puntos_1[2] !== points_japon &&
                lista_puntos_1[2] !== points_costarica) {
                document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
            }

        }
    }

    if (document.getElementById("octavos9").innerText !== puntos_japon[0].innerText) {
        //Condiciones para 2do puesto japon
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_japon) {
            //japon SIN alemania
            if (document.getElementById("octavos9").innerText === "Alemania") {
                //japon iguala con costarica
                if (lista_puntos_1[2] === points_costarica) {
                    if (df_japon > df_costarica) {
                        document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        console.log("japon segundo y costarica 3ero")
                    }
                    if (df_japon === df_costarica) {
                        if (gf_japon > gf_costarica) {
                            document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        }
                    }
                }
                //japon iguala con españa
                if (lista_puntos_1[2] === points_españa) {
                    if (df_japon > df_españa) {
                        document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        console.log("japon segundo y españa Bajos 3er")
                    }
                    if (df_japon === df_españa) {
                        if (gf_japon > gf_españa) {
                            document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        }
                    }

                }
            }
            //japon SIN costarica
            if (document.getElementById("octavos9").innerText === "Costa Rica") {
                //japon iguala con alemania
                if (lista_puntos_1[2] === points_alemania) {
                    if (df_japon > df_alemania) {
                        document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        console.log("japon segundo y alemania 3ero")
                    }
                    if (df_japon === df_alemania) {
                        if (gf_japon > gf_alemania) {
                            document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        }
                    }
                }
                //japon iguala con españa
                if (lista_puntos_1[2] === points_españa) {
                    if (df_japon > df_españa) {
                        document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        console.log("japon segundo y españa Bajos 3er")
                    }
                    if (df_japon === df_españa) {
                        if (gf_japon > gf_españa) {
                            document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_españa[0].innerText;
                        }
                    }

                }
            }
            //japon SIN españa
            if (document.getElementById("octavos9").innerText === "España") {
                //japon iguala con alemania
                if (lista_puntos_1[2] === points_alemania) {
                    if (df_japon > df_alemania) {
                        document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        console.log("japon segundo y alemania 3ero")
                    }
                    if (df_japon === df_alemania) {
                        if (gf_japon > gf_alemania) {
                            document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_alemania[0].innerText;
                        }
                    }
                }
                //japon iguala con costarica
                if (lista_puntos_1[2] === points_costarica) {
                    if (df_japon > df_costarica) {
                        document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        console.log("japon segundo y costarica 3ero")
                    }
                    if (df_japon === df_costarica) {
                        if (gf_japon > gf_costarica) {
                            document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
                        }
                        else {
                            document.getElementById("octavos12").innerText = puntos_costarica[0].innerText;
                        }
                    }
                }
            }
            //japon no iguala con nadie
            if (lista_puntos_1[2] !== points_alemania && lista_puntos_1[2] !== points_españa &&
                lista_puntos_1[2] !== points_costarica) {
                document.getElementById("octavos12").innerText = puntos_japon[0].innerText;
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



export default CompRonda5;