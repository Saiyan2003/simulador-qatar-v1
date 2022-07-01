import React from 'react';
import CompPartido1D from './Rondas/Ronda4/CompPartido1D';
import CompPartido2D from './Rondas/Ronda4/CompPartido2D';
import CompPartido3D from './Rondas/Ronda4/CompPartido3D';
import CompPartido4D from './Rondas/Ronda4/CompPartido4D';
import CompPartido5D from './Rondas/Ronda4/CompPartido5D';
import CompPartido6D from './Rondas/Ronda4/CompPartido6D';

function CompRonda4() {
    return (
        <div className='container'>
            <table className='table table-bordered container table1' border="">
                <CompPartido1D />
                <CompPartido2D />
                <CompPartido3D />
                <CompPartido4D />
                <CompPartido5D />
                <CompPartido6D />
            </table>
            <div className='boton-cal1'>
                <button type="button" class="btn btn-primary" onClick={() => { ronda4() }} >Calcular</button>
            </div>
            <br />
        </div>
    )
}


function ronda4() {

    //Partido 1
    var partido_1_L = parseInt(document.getElementById("dinamarca1").value);
    var partido_1_V = parseInt(document.getElementById("tunez1").value);
    //Partido 2
    var partido_2_L = parseInt(document.getElementById("francia1").value);
    var partido_2_V = parseInt(document.getElementById("australia1").value);
    //Partido 3
    var partido_3_L = parseInt(document.getElementById("tunez2").value);
    var partido_3_V = parseInt(document.getElementById("australia2").value);
    //Partido 4
    var partido_4_L = parseInt(document.getElementById("francia2").value);
    var partido_4_V = parseInt(document.getElementById("dinamarca2").value);
    //Partido 5
    var partido_5_L = parseInt(document.getElementById("tunez3").value);
    var partido_5_V = parseInt(document.getElementById("francia3").value);
    //Partido 6
    var partido_6_L = parseInt(document.getElementById("australia3").value);
    var partido_6_V = parseInt(document.getElementById("dinamarca3").value);

    //Senegal
    //Obtener valores td de la columa senegal
    let fila_francia = document.getElementById("row-francia");
    let puntos_francia = fila_francia.getElementsByTagName("td");

    //----------------------------------------------------------

    //Paises bajos
    //Obtener valores td de la columa holanda
    let fila_tunez = document.getElementById("row-tunez");
    let puntos_tunez = fila_tunez.getElementsByTagName("td");

    //----------------------------------------------------------

    //Qatar
    //Obtener valores td de la columa qatar
    let fila_australia = document.getElementById("row-australia");
    let puntos_australia = fila_australia.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Ecuador
    //Obtener valores td de la columa ecuador
    let fila_dinamarca = document.getElementById("row-dinamarca");
    let puntos_dinamarca = fila_dinamarca.getElementsByTagName("td");

    //-------------------------------------------------------------------
    //Inicializar variables globales
    var global_francia = 0
    var global_tunez = 0
    var global_australia = 0
    var global_dinamarca = 0
    //Variables PJ
    var global_francia_pj = 0
    var global_tunez_pj = 0
    var global_australia_pj = 0
    var global_dinamarca_pj = 0
    //Variables PG
    var global_francia_pg = 0
    var global_tunez_pg = 0
    var global_australia_pg = 0
    var global_dinamarca_pg = 0
    //Variables PE
    var global_francia_pe = 0
    var global_tunez_pe = 0
    var global_australia_pe = 0
    var global_dinamarca_pe = 0
    //Variables PP
    var global_francia_pp = 0
    var global_tunez_pp = 0
    var global_australia_pp = 0
    var global_dinamarca_pp = 0
    //Variables de goles A FAVOR
    var global_francia_gf = 0
    var global_tunez_gf = 0
    var global_dinamarca_gf = 0
    var global_australia_gf = 0
    //Variables de goles EN CONTRA
    var global_francia_gc = 0
    var global_tunez_gc = 0
    var global_dinamarca_gc = 0
    var global_australia_gc = 0
    //Variables de DF goles
    var global_francia_dg = 0
    var global_tunez_dg = 0
    var global_dinamarca_dg = 0
    var global_australia_dg = 0
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
        var pts_dinamarca_1 = part1(partido_1_L, partido_1_V) //3
        var pts_tunez_1 = part2(partido_1_V, partido_1_L) //0

        //Sumar a los puntos grupales
        global_dinamarca = global_dinamarca + pts_dinamarca_1
        global_tunez = global_tunez + pts_tunez_1

        //Partidos
        var res_local_1 = PG(pts_dinamarca_1, pts_tunez_1)
        var res_visita_1 = PG(pts_tunez_1, pts_dinamarca_1)
        var res_empate_1 = PE(pts_dinamarca_1, pts_tunez_1)

        //Sumar PG
        global_dinamarca_pg = global_dinamarca_pg + res_local_1
        global_tunez_pg = global_tunez_pg + res_visita_1
        //Sumar PE
        global_dinamarca_pe = global_dinamarca_pe + res_empate_1
        global_tunez_pe = global_tunez_pe + res_empate_1
        //Sumar PP
        global_dinamarca_pp = global_dinamarca_pp + res_visita_1
        global_tunez_pp = global_tunez_pp + res_local_1


        //Sumar los goles a favor
        global_dinamarca_gf = global_dinamarca_gf + partido_1_L // 6
        global_tunez_gf = global_tunez_gf + partido_1_V // 0
        puntos_dinamarca[5].innerHTML = global_dinamarca_gf //6
        puntos_tunez[5].innerHTML = global_tunez_gf //0
        //Goles en contra
        global_dinamarca_gc = global_dinamarca_gc + partido_1_V // 0 = 0 + 0
        global_tunez_gc = global_tunez_gc + partido_1_L // 0 = 0 + 3
        puntos_dinamarca[6].innerHTML = global_dinamarca_gc // 0
        puntos_tunez[6].innerHTML = global_tunez_gc // 3

        //Puntos obtenidos por 1er partido

        if (partido_1_L > partido_1_V) {
            puntos_dinamarca[8].innerHTML = global_dinamarca
            puntos_tunez[8].innerHTML = global_tunez
        }
        if (partido_1_L < partido_1_V) {
            //Prueba para ver quien gana
            puntos_dinamarca[8].innerHTML = global_dinamarca
            puntos_tunez[8].innerHTML = global_tunez
        }

        if (partido_1_L === partido_1_V) {
            puntos_dinamarca[8].innerHTML = global_dinamarca
            puntos_tunez[8].innerHTML = global_tunez
        }
        //Colocar PG
        puntos_dinamarca[2].innerHTML = global_dinamarca_pg
        puntos_tunez[2].innerHTML = global_tunez_pg
        //Colocar PE
        puntos_dinamarca[3].innerHTML = global_dinamarca_pe
        puntos_tunez[3].innerHTML = global_tunez_pe
        //Colocar PP
        puntos_dinamarca[4].innerHTML = global_dinamarca_pp
        puntos_tunez[4].innerHTML = global_tunez_pp

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
        var pts_francia_1 = part1(partido_2_L, partido_2_V) //3
        var pts_australia_1 = part2(partido_2_V, partido_2_L) //0

        //Sumar los puntos globales
        global_francia = global_francia + pts_francia_1
        global_australia = global_australia + pts_australia_1

        //Partidos
        var res_local_2 = PG(pts_francia_1, pts_australia_1)
        var res_visita_2 = PG(pts_australia_1, pts_francia_1)
        var res_empate_2 = PE(pts_francia_1, pts_australia_1)

        //Sumar PG
        global_francia_pg = global_francia_pg + res_local_2
        global_australia_pg = global_australia_pg + res_visita_2
        //Sumar PE
        global_francia_pe = global_francia_pe + res_empate_2
        global_australia_pe = global_australia_pe + res_empate_2
        //Sumar PP
        global_francia_pp = global_francia_pp + res_visita_2
        global_australia_pp = global_australia_pp + res_local_2


        //Sumar los goles a favor
        global_francia_gf = global_francia_gf + partido_2_L
        global_australia_gf = global_australia_gf + partido_2_V
        puntos_francia[5].innerHTML = global_francia_gf
        puntos_australia[5].innerHTML = global_australia_gf
        //Sumar goles en contra
        global_francia_gc = global_francia_gc + partido_2_V // 0 = 0 + 0
        global_australia_gc = global_australia_gc + partido_2_L // 3 = 3 + 0
        puntos_francia[6].innerHTML = global_francia_gc
        puntos_australia[6].innerHTML = global_australia_gc
        //Restar diferencia de goles
        //puntos_francia[7].innerHTML = global_francia_gf - global_australia_gc
        //puntos_australia[7].innerHTML = global_australia_gf - global_francia_gc


        //Puntos obtenidos por 1er partido
        if (partido_2_L > partido_2_V) {
            puntos_francia[8].innerHTML = global_francia
            puntos_australia[8].innerHTML = global_australia
        }
        if (partido_2_L < partido_2_V) {
            puntos_francia[8].innerHTML = global_francia
            puntos_australia[8].innerHTML = global_australia
        }
        if (partido_2_L === partido_2_V) {
            puntos_francia[8].innerHTML = global_francia
            puntos_australia[8].innerHTML = global_australia
        }
        //Colocar PG
        puntos_australia[2].innerHTML = global_australia_pg
        puntos_francia[2].innerHTML = global_francia_pg
        //Colocar PE
        puntos_australia[3].innerHTML = global_australia_pe
        puntos_francia[3].innerHTML = global_francia_pe
        //Colocar PP
        puntos_australia[4].innerHTML = global_australia_pp
        puntos_francia[4].innerHTML = global_francia_pp
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
        var pts_tunez_2 = part2(partido_3_L, partido_3_V)
        var pts_australia_2 = part1(partido_3_V, partido_3_L)

        //Partidos
        var res_local_3 = PG(pts_tunez_2, pts_australia_2)
        var res_visita_3 = PG(pts_australia_2, pts_tunez_2)
        var res_empate_3 = PE(pts_tunez_2, pts_australia_2)

        //Sumar PG
        global_tunez_pg = global_tunez_pg + res_local_3
        global_australia_pg = global_australia_pg + res_visita_3
        //Sumar PE
        global_tunez_pe = global_tunez_pe + res_empate_3
        global_australia_pe = global_australia_pe + res_empate_3
        //Sumar PP
        global_tunez_pp = global_tunez_pp + res_visita_3
        global_australia_pp = global_australia_pp + res_local_3

        //Sumar a los puntos grupales
        global_australia = global_australia + pts_australia_2
        global_tunez = global_tunez + pts_tunez_2
        //Sumar los goles a favor
        global_tunez_gf = global_tunez_gf + partido_3_L // 0 = 0 + 0
        global_australia_gf = global_australia_gf + partido_3_V // 3 = 3 + 0
        puntos_tunez[5].innerHTML = global_tunez_gf //0
        puntos_australia[5].innerHTML = global_australia_gf // 3
        //Goles en contra
        global_tunez_gc = global_tunez_gc + partido_3_V // 0 = 0 + 0
        global_australia_gc = global_australia_gc + partido_3_L // 3 = 3 + 0
        puntos_tunez[6].innerHTML = global_tunez_gc // 3
        puntos_australia[6].innerHTML = global_australia_gc // 0
        //Restar diferencia de goles
        //puntos_tunez[7].innerHTML = global_tunez_gf - global_australia_gc
        //puntos_australia[7].innerHTML = global_australia_gf - global_tunez_gc

        //Puntos obtenidos por 3er partido
        if (partido_3_L > partido_3_V) {
            puntos_australia[8].innerHTML = global_australia
            puntos_tunez[8].innerHTML = global_tunez
        }
        if (partido_3_L < partido_3_V) {
            puntos_australia[8].innerHTML = global_australia
            puntos_tunez[8].innerHTML = global_tunez
        }

        if (partido_3_L === partido_3_V) {
            puntos_australia[8].innerHTML = global_australia
            puntos_tunez[8].innerHTML = global_tunez
        }
        //Colocar PG
        puntos_australia[2].innerHTML = global_australia_pg
        puntos_tunez[2].innerHTML = global_tunez_pg
        //Colocar PE
        puntos_australia[3].innerHTML = global_australia_pe
        puntos_tunez[3].innerHTML = global_tunez_pe
        //Colocar PP
        puntos_australia[4].innerHTML = global_australia_pp
        puntos_tunez[4].innerHTML = global_tunez_pp
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
        var pts_francia_2 = part2(partido_4_L, partido_4_V)
        var pts_dinamarca_2 = part1(partido_4_V, partido_4_L)

        //Sumar los puntos globales
        global_dinamarca = global_dinamarca + pts_dinamarca_2
        global_francia = global_francia + pts_francia_2

        //Partidos
        var res_local_4 = PG(pts_francia_2, pts_dinamarca_2)
        var res_visita_4 = PG(pts_dinamarca_2, pts_francia_2)
        var res_empate_4 = PE(pts_francia_2, pts_dinamarca_2)

        //Sumar PG
        global_francia_pg = global_francia_pg + res_local_4
        global_dinamarca_pg = global_dinamarca_pg + res_visita_4
        //Sumar PE
        global_francia_pe = global_francia_pe + res_empate_4
        global_dinamarca_pe = global_dinamarca_pe + res_empate_4
        //Sumar PP
        global_francia_pp = global_francia_pp + res_visita_4
        global_dinamarca_pp = global_dinamarca_pp + res_local_4

        //Sumar los goles a favor
        global_dinamarca_gf = global_dinamarca_gf + partido_4_V
        global_francia_gf = global_francia_gf + partido_4_L
        puntos_dinamarca[5].innerHTML = global_dinamarca_gf
        puntos_francia[5].innerHTML = global_francia_gf
        //Goles en contra
        global_francia_gc = global_francia_gc + partido_4_V //
        global_dinamarca_gc = global_dinamarca_gc + partido_4_L
        puntos_francia[6].innerHTML = global_francia_gc //
        puntos_dinamarca[6].innerHTML = global_dinamarca_gc // 0
        //Restar diferencia de goles
        //puntos_dinamarca[7].innerHTML = global_dinamarca_gf - global_francia_gc
        //puntos_francia[7].innerHTML = global_francia_gf - global_dinamarca_gc

        //Puntos obtenidos por 4er partido
        if (partido_4_L > partido_4_V) {
            puntos_dinamarca[8].innerHTML = global_dinamarca
            puntos_francia[8].innerHTML = global_francia
        }
        if (partido_4_L < partido_4_V) {
            puntos_dinamarca[8].innerHTML = global_dinamarca
            puntos_francia[8].innerHTML = global_francia
        }

        if (partido_4_L === partido_4_V) {
            puntos_dinamarca[8].innerHTML = global_dinamarca
            puntos_francia[8].innerHTML = global_francia
        }
        //Colocar PG
        puntos_francia[2].innerHTML = global_francia_pg
        puntos_dinamarca[2].innerHTML = global_dinamarca_pg
        //Colocar PE
        puntos_francia[3].innerHTML = global_francia_pe
        puntos_dinamarca[3].innerHTML = global_dinamarca_pe
        //Colocar PP
        puntos_francia[4].innerHTML = global_francia_pp
        puntos_dinamarca[4].innerHTML = global_dinamarca_pp
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
        var pts_tunez_3 = part2(partido_5_L, partido_5_V)
        var pts_francia_3 = part1(partido_5_V, partido_5_L)

        //Sumar los puntos globales
        global_francia = global_francia + pts_francia_3
        global_tunez = global_tunez + pts_tunez_3

        //Partidos
        var res_local_5 = PG(pts_tunez_3, pts_francia_3)
        var res_visita_5 = PG(pts_francia_3, pts_tunez_3)
        var res_empate_5 = PE(pts_tunez_3, pts_francia_3)

        //Sumar PG
        global_tunez_pg = global_tunez_pg + res_local_5
        global_francia_pg = global_francia_pg + res_visita_5
        //Sumar PE
        global_tunez_pe = global_tunez_pe + res_empate_5
        global_francia_pe = global_francia_pe + res_empate_5
        //Sumar PP
        global_tunez_pp = global_tunez_pp + res_visita_5
        global_francia_pp = global_francia_pp + res_local_5

        //Sumar los goles a favor
        global_francia_gf = global_francia_gf + partido_5_V
        global_tunez_gf = global_tunez_gf + partido_5_L
        puntos_francia[5].innerHTML = global_francia_gf
        puntos_tunez[5].innerHTML = global_tunez_gf
        //Goles en contra
        global_tunez_gc = global_tunez_gc + partido_5_V // 0 = 0 + 0
        global_francia_gc = global_francia_gc + partido_5_L // 3 = 3 + 0
        puntos_tunez[6].innerHTML = global_tunez_gc // 3
        puntos_francia[6].innerHTML = global_francia_gc // 0
        //Restar diferencia de goles
        //puntos_francia[7].innerHTML = global_francia_gf - global_tunez_gc
        //puntos_tunez[7].innerHTML = global_tunez_gf - global_francia_gc

        //Puntos obtenidos por 5er partido
        if (partido_5_L > partido_5_V) {
            puntos_francia[8].innerHTML = global_francia
            puntos_tunez[8].innerHTML = global_tunez
        }
        if (partido_5_L < partido_5_V) {
            puntos_francia[8].innerHTML = global_francia
            puntos_tunez[8].innerHTML = global_tunez
        }

        if (partido_5_L === partido_5_V) {
            puntos_francia[8].innerHTML = global_francia
            puntos_tunez[8].innerHTML = global_tunez
        }
        //Colocar PG
        puntos_francia[2].innerHTML = global_francia_pg
        puntos_tunez[2].innerHTML = global_tunez_pg
        //Colocar PE
        puntos_francia[3].innerHTML = global_francia_pe
        puntos_tunez[3].innerHTML = global_tunez_pe
        //Colocar PP
        puntos_francia[4].innerHTML = global_francia_pp
        puntos_tunez[4].innerHTML = global_tunez_pp
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
        var pts_australia_3 = part2(partido_6_L, partido_6_V)
        var pts_dinamarca_3 = part1(partido_6_V, partido_6_L)

        //Sumar los puntos globales
        global_dinamarca = global_dinamarca + pts_dinamarca_3
        global_australia = global_australia + pts_australia_3

        //Partidos
        var res_local_6 = PG(pts_australia_3, pts_dinamarca_3)
        var res_visita_6 = PG(pts_dinamarca_3, pts_australia_3)
        var res_empate_6 = PE(pts_australia_3, pts_dinamarca_3)

        //Sumar PG
        global_australia_pg = global_australia_pg + res_local_6
        global_dinamarca_pg = global_dinamarca_pg + res_visita_6
        //Sumar PE
        global_australia_pe = global_australia_pe + res_empate_6
        global_dinamarca_pe = global_dinamarca_pe + res_empate_6
        //Sumar PP
        global_australia_pp = global_australia_pp + res_visita_6
        global_dinamarca_pp = global_dinamarca_pp + res_local_6

        //Sumar los goles a favor
        global_dinamarca_gf = global_dinamarca_gf + partido_6_V
        global_australia_gf = global_australia_gf + partido_6_L
        puntos_dinamarca[5].innerHTML = global_dinamarca_gf
        puntos_australia[5].innerHTML = global_australia_gf
        //Sumar goles en contra
        //Goles en contra
        global_australia_gc = global_australia_gc + partido_6_V // 0 = 0 + 0
        global_dinamarca_gc = global_dinamarca_gc + partido_6_L // 3 = 3 + 0
        puntos_dinamarca[6].innerHTML = global_dinamarca_gc
        puntos_australia[6].innerHTML = global_australia_gc
        //Restar diferencia de goles
        //puntos_dinamarca[7].innerHTML = global_dinamarca_gf - global_australia_gc
        //puntos_australia[7].innerHTML = global_australia_gf - global_dinamarca_gc

        //Puntos obtenidos por 6er partido
        if (partido_6_L > partido_6_V) {
            puntos_dinamarca[8].innerHTML = global_dinamarca
            puntos_australia[8].innerHTML = global_australia
        }
        if (partido_6_L < partido_6_V) {
            puntos_dinamarca[8].innerHTML = global_dinamarca
            puntos_australia[8].innerHTML = global_australia
        }

        if (partido_6_L === partido_6_V) {
            puntos_dinamarca[8].innerHTML = global_dinamarca
            puntos_australia[8].innerHTML = global_australia
        }
        //Colocar PG
        puntos_dinamarca[2].innerHTML = global_dinamarca_pg
        puntos_australia[2].innerHTML = global_australia_pg
        //Colocar PE
        puntos_dinamarca[3].innerHTML = global_dinamarca_pe
        puntos_australia[3].innerHTML = global_australia_pe
        //Colocar PP
        puntos_dinamarca[4].innerHTML = global_dinamarca_pp
        puntos_australia[4].innerHTML = global_australia_pp
    }

    //Restar diferencia de goles
    global_dinamarca_dg = global_dinamarca_gf - global_dinamarca_gc
    global_francia_dg = global_francia_gf - global_francia_gc
    global_australia_dg = global_australia_gf - global_australia_gc
    global_tunez_dg = global_tunez_gf - global_tunez_gc
    //Insertarlos en el html
    puntos_dinamarca[7].innerHTML = global_dinamarca_dg
    puntos_francia[7].innerHTML = global_francia_dg
    puntos_australia[7].innerHTML = global_australia_dg
    puntos_tunez[7].innerHTML = global_tunez_dg
    //Partidos Jugados
    global_dinamarca_pj = 3
    global_francia_pj = 3
    global_australia_pj = 3
    global_tunez_pj = 3
    //Colocar PARTIDOS
    puntos_dinamarca[1].innerHTML = global_dinamarca_pj
    puntos_francia[1].innerHTML = global_francia_pj
    puntos_australia[1].innerHTML = global_australia_pj
    puntos_tunez[1].innerHTML = global_tunez_pj

    //console.log("GF ECUADOR : ", global_ecuador_gf , "GF QATAR : " , global_qatar_gf)
    //console.log("GF HOLANDA : ", global_paises_bajos_gf , "GF SENEGAL : " , global_senegal_gf)
    clasi4()
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

function clasi4() {

    //australia
    //Obtener valores td de la columa australia
    let fila_australia = document.getElementById("row-australia");
    let puntos_australia = fila_australia.getElementsByTagName("td");

    //----------------------------------------------------------

    //dinamarca
    //Obtener valores td de la columa dinamarca
    let fila_dinamarca = document.getElementById("row-dinamarca");
    let puntos_dinamarca = fila_dinamarca.getElementsByTagName("td");

    //----------------------------------------------------------

    //francia
    //Obtener valores td de la columa francia
    let fila_francia = document.getElementById("row-francia");
    let puntos_francia = fila_francia.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //tunez
    //Obtener valores td de la columa tunez
    let fila_tunez = document.getElementById("row-tunez");
    let puntos_tunez = fila_tunez.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Puntos de los equipos
    var points_australia = parseInt(puntos_australia[8].innerHTML);
    var points_dinamarca = parseInt(puntos_dinamarca[8].innerHTML);
    var points_francia = parseInt(puntos_francia[8].innerHTML);
    var points_tunez = parseInt(puntos_tunez[8].innerHTML);
    //Goles a favor
    var gf_australia = parseInt(puntos_australia[5].innerHTML);
    var gf_dinamarca = parseInt(puntos_dinamarca[5].innerHTML);
    var gf_francia = parseInt(puntos_francia[5].innerHTML);
    var gf_tunez = parseInt(puntos_tunez[5].innerHTML);
    //Diferencia de goles
    var df_australia = parseInt(puntos_australia[7].innerHTML);
    var df_dinamarca = parseInt(puntos_dinamarca[7].innerHTML);
    var df_francia = parseInt(puntos_francia[7].innerHTML);
    var df_tunez = parseInt(puntos_tunez[7].innerHTML);

    //Lista con los puntos de los equipos
    let lista_puntos_1 = [points_francia, points_tunez, points_dinamarca, points_australia]
    let lista_df = [df_australia, df_dinamarca, df_francia, df_tunez]
    lista_puntos_1.sort(Comparar)
    lista_df.sort(Comparar)

    //------------CONDICIONES PARA EL 1ER PUESTO-----------------------//

    //Condiciones para 1er puesto dinamarca y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_dinamarca) {
        //dinamarca iguala con tunez
        if (lista_puntos_1[3] === points_tunez) {
            if (df_dinamarca > df_tunez) {
                document.getElementById("octavos7").innerText = puntos_dinamarca[0].innerText;
                document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                console.log("dinamarca primero  y tunez Segundo")
            }
            if (df_dinamarca === df_tunez) {
                if (gf_dinamarca > gf_tunez) {
                    document.getElementById("octavos7").innerText = puntos_dinamarca[0].innerText;
                    document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                }
            }
            if (df_dinamarca < df_tunez) {
                document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
            }
        }
        //dinamarca iguala con francia
        if (lista_puntos_1[3] === points_francia) {
            if (df_dinamarca > df_francia) {
                document.getElementById("octavos7").innerText = puntos_dinamarca[0].innerText;
                document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                console.log("dinamarca primero y francia segundo")
            }
            if (df_dinamarca === df_francia) {
                if (gf_dinamarca > gf_francia) {
                    document.getElementById("octavos7").innerText = puntos_dinamarca[0].innerText;
                    document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                }

            }
            if (df_dinamarca < df_francia) {
                document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
            }
        }

        //dinamarca iguala con australia
        if (lista_puntos_1[3] === points_australia) {
            if (df_dinamarca > df_australia) {
                document.getElementById("octavos7").innerText = puntos_dinamarca[0].innerText;
                document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                console.log("dinamarca primero  y australia Segundo")
            }
            if (df_dinamarca === df_australia) {
                if (gf_dinamarca > gf_australia) {
                    document.getElementById("octavos7").innerText = puntos_dinamarca[0].innerText;
                    document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                }
            }
            if (df_dinamarca < df_australia) {
                document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
            }
        }
        //dinamarca no iguala con nadie
        if (lista_puntos_1[3] !== points_australia && lista_puntos_1[3] !== points_francia &&
            lista_puntos_1[3] !== points_tunez) {
            document.getElementById("octavos7").innerText = puntos_dinamarca[0].innerText;
        }

    }

    //Condiciones para 1er puesto australia y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_australia) {
        //australia iguala con dinamarca
        if (lista_puntos_1[3] === points_dinamarca) {
            if (df_australia > df_dinamarca) {
                document.getElementById("octavos7").innerText = puntos_australia[0].innerText;
                document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                console.log("australia primero  y dinamarca Segundo")
            }
            if (df_australia === df_dinamarca) {
                if (gf_australia > gf_dinamarca) {
                    document.getElementById("octavos7").innerText = puntos_australia[0].innerText;
                    document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                }

            }
            if (df_australia < df_dinamarca) {
                document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
            }
        }
        //australia iguala con tunez
        if (lista_puntos_1[3] === points_tunez) {
            if (df_australia > df_tunez) {
                document.getElementById("octavos7").innerText = puntos_australia[0].innerText;
                document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                console.log("australia primero  y tunez Segundo")
            }
            if (df_australia === df_tunez) {
                if (gf_australia > gf_tunez) {
                    document.getElementById("octavos7").innerText = puntos_australia[0].innerText;
                    document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                }
            }
            if (df_australia < df_tunez) {
                document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
            }
        }

        //australia iguala con francia
        if (lista_puntos_1[3] === points_francia) {
            if (df_australia > df_francia) {
                document.getElementById("octavos7").innerText = puntos_australia[0].innerText;
                document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                console.log("australia primero  y francia Segundo")
            }
            if (df_australia === df_francia) {
                if (gf_australia > gf_francia) {
                    document.getElementById("octavos7").innerText = puntos_australia[0].innerText;
                    document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                }

            }
            if (df_australia < df_francia) {
                document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
            }
        }
        //australia no iguala con nadie
        if (lista_puntos_1[3] !== points_francia && lista_puntos_1[3] !== points_tunez &&
            lista_puntos_1[3] !== points_dinamarca) {
            document.getElementById("octavos7").innerText = puntos_australia[0].innerText;
        }

    }

    //Condiciones para 1er puesto francia y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_francia) {
        //francia iguala con dinamarca
        if (lista_puntos_1[3] === points_dinamarca) {
            if (df_francia > df_dinamarca) {
                document.getElementById("octavos7").innerText = puntos_francia[0].innerText;
                document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                console.log("francia primero  y dinamarca Segundo")
            }
            if (df_francia === df_dinamarca) {
                if (gf_francia > gf_dinamarca) {
                    document.getElementById("octavos7").innerText = puntos_francia[0].innerText;
                    document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                }
            }
            if (df_francia < df_dinamarca) {
                document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
            }
        }
        //francia iguala con tunez
        if (lista_puntos_1[3] === points_tunez) {
            if (df_francia > df_tunez) {
                document.getElementById("octavos7").innerText = puntos_francia[0].innerText;
                document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                console.log("francia primero  y tunez Segundo")
            }
            if (df_francia === df_tunez) {
                if (gf_francia > gf_tunez) {
                    document.getElementById("octavos7").innerText = puntos_francia[0].innerText;
                    document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                }

            }
            if (df_francia < df_tunez) {
                document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
            }
        }

        //francia iguala con australia
        if (lista_puntos_1[3] === points_australia) {
            if (df_francia > df_australia) {
                document.getElementById("octavos7").innerText = puntos_francia[0].innerText;
                document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                console.log("francia primero  y australia Segundo")
            }
            if (df_francia === df_australia) {
                if (gf_francia > gf_australia) {
                    document.getElementById("octavos7").innerText = puntos_francia[0].innerText;
                    document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                }

            }
            if (df_francia < df_australia) {
                document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
            }
        }
        //francia no iguala con nadie
        if (lista_puntos_1[3] !== points_australia && lista_puntos_1[3] !== points_tunez &&
            lista_puntos_1[3] !== points_dinamarca) {
            document.getElementById("octavos7").innerText = puntos_francia[0].innerText;
        }

    }

    //Condiciones para 1er puesto tunez y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_tunez) {
        //tunez iguala con dinamarca
        if (lista_puntos_1[3] === points_dinamarca) {
            if (df_tunez > df_dinamarca) {
                document.getElementById("octavos7").innerText = puntos_tunez[0].innerText;
                document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                console.log("tunez primero  y dinamarca Segundo")
            }
            if (df_tunez === df_dinamarca) {
                if (gf_tunez > gf_dinamarca) {
                    document.getElementById("octavos7").innerText = puntos_tunez[0].innerText;
                    document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                }
            }
            if (df_tunez < df_dinamarca) {
                document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
            }
        }
        //tunez iguala con francia
        if (lista_puntos_1[3] === points_francia) {
            if (df_tunez > df_francia) {
                document.getElementById("octavos7").innerText = puntos_tunez[0].innerText;
                document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                console.log("tunez primero y francia segundo")
            }
            if (df_tunez === df_francia) {
                if (gf_tunez > gf_francia) {
                    document.getElementById("octavos7").innerText = puntos_tunez[0].innerText;
                    document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                }
            }
            if (df_tunez < df_francia) {
                document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
            }
        }

        //tunez iguala con australia
        if (lista_puntos_1[3] === points_australia) {
            if (df_tunez > df_australia) {
                document.getElementById("octavos7").innerText = puntos_tunez[0].innerText;
                document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                console.log("tunez primero y australia Segundo")
            }
            if (df_tunez === df_australia) {
                if (gf_tunez > gf_australia) {
                    document.getElementById("octavos7").innerText = puntos_tunez[0].innerText;
                    document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                }
            }
            if (df_tunez < df_australia) {
                document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
            }
        }
        //Paises no iguala con nadie
        if (lista_puntos_1[3] !== points_australia && lista_puntos_1[3] !== points_francia &&
            lista_puntos_1[3] !== points_dinamarca) {
            document.getElementById("octavos7").innerText = puntos_tunez[0].innerText;
        }

    }

    //--------------------CONDICIONES PARA EL 2DO PUESTO--------------------------- //

    if (document.getElementById("octavos7").innerText !== puntos_dinamarca[0].innerText) {
        //Condiciones para 2do puesto dinamarca
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_dinamarca) {
            //dinamarca sin francia
            if (document.getElementById("octavos7").innerText !== "Francia") {
                //dinamarca iguala con tunez
                if (lista_puntos_1[2] === points_tunez) {
                    if (df_dinamarca > df_tunez) {
                        document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        console.log("dinamarca segundo y tunez 3er")
                    }
                    if (df_dinamarca === df_tunez) {
                        if (gf_dinamarca > gf_tunez) {
                            document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        }
                    }
                }
                //dinamarca iguala con australia
                if (lista_puntos_1[2] === points_australia) {
                    if (df_dinamarca > df_australia) {
                        document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        console.log("dinamarca segundo y australia 3ero")
                    }
                    if (df_dinamarca === df_australia) {
                        if (gf_dinamarca > gf_australia) {
                            document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        }
                    }
                }
            }
            //dinamarca sin tunez
            if (document.getElementById("octavos7").innerText !== "Tunez") {
                //dinamarca iguala con francia
                if (lista_puntos_1[2] === points_francia) {
                    if (df_dinamarca > df_francia) {
                        document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        console.log("dinamarca segundo y francia 3ero")
                    }
                    if (df_dinamarca === df_francia) {
                        if (gf_dinamarca > gf_francia) {
                            document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        }
                    }
                }
                //dinamarca iguala con australia
                if (lista_puntos_1[2] === points_australia) {
                    if (df_dinamarca > df_australia) {
                        document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        console.log("dinamarca segundo y australia 3ero")
                    }
                    if (df_dinamarca === df_australia) {
                        if (gf_dinamarca > gf_australia) {
                            document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        }
                    }
                }
            }
            //dinamarca sin australia
            if (document.getElementById("octavos7").innerText !== "Australia") {
                //dinamarca iguala con francia
                if (lista_puntos_1[2] === points_francia) {
                    if (df_dinamarca > df_francia) {
                        document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        console.log("dinamarca segundo y francia 3ero")
                    }
                    if (df_dinamarca === df_francia) {
                        if (gf_dinamarca > gf_francia) {
                            document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        }
                    }
                }
                //dinamarca iguala con tunez
                if (lista_puntos_1[2] === points_tunez) {
                    if (df_dinamarca > df_tunez) {
                        document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        console.log("dinamarca segundo y tunez 3er")
                    }
                    if (df_dinamarca === df_tunez) {
                        if (gf_dinamarca > gf_tunez) {
                            document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        }
                    }
                }
            }
            //dinamarca no iguala con nadie
            if (lista_puntos_1[2] !== points_australia && lista_puntos_1[2] !== points_tunez && lista_puntos_1[2] !== points_francia) {
                document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
            }

        }
    }


    if (document.getElementById("octavos7").innerText !== puntos_australia[0].innerText) {
        //Condiciones para 2do puesto australia
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_australia) {
            //australia sin australia
            if (document.getElementById("octavos7").innerText !== "Dinamarca") {
                //australia iguala con tunez
                if (lista_puntos_1[2] === points_tunez) {
                    if (df_australia > df_tunez) {
                        document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        console.log("australia segundo y tunez 3er")
                    }
                    if (df_australia === df_tunez) {
                        if (gf_australia > gf_tunez) {
                            document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        }
                    }
                }
                //australia iguala con francia
                if (lista_puntos_1[2] === points_francia) {
                    if (df_australia > df_francia) {
                        document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        console.log("australia segundo y francia 3ero")
                    }
                    if (df_australia === df_francia) {
                        if (gf_australia > gf_francia) {
                            document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        }
                    }

                }
            }
            if (document.getElementById("octavos7").innerText !== "Francia") {
                //australia iguala con dinamarca
                if (lista_puntos_1[2] === points_dinamarca) {
                    if (df_australia > df_dinamarca) {
                        document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        console.log("australia segundo y dinamarca 3ero")
                    }
                    if (df_australia === df_dinamarca) {
                        if (gf_australia > gf_dinamarca) {
                            document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        }
                    }
                }
                //australia iguala con tunez
                if (lista_puntos_1[2] === points_tunez) {
                    if (df_australia > df_tunez) {
                        document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        console.log("australia segundo y tunez 3er")
                    }
                    if (df_australia === df_tunez) {
                        if (gf_australia > gf_tunez) {
                            document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos7").innerText !== "Tunez") {
                //australia iguala con dinamarca
                if (lista_puntos_1[2] === points_dinamarca) {
                    if (df_australia > df_dinamarca) {
                        document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        console.log("australia segundo y dinamarca 3ero")
                    }
                    if (df_australia === df_dinamarca) {
                        if (gf_australia > gf_dinamarca) {
                            document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        }
                    }
                }
                //australia iguala con francia
                if (lista_puntos_1[2] === points_francia) {
                    if (df_australia > df_francia) {
                        document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        console.log("australia segundo y francia 3ero")
                    }
                    if (df_australia === df_francia) {
                        if (gf_australia > gf_francia) {
                            document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        }
                    }

                }
            }

            //australia no iguala con nadie
            if (lista_puntos_1[2] !== points_francia && lista_puntos_1[2] !== points_tunez &&
                lista_puntos_1[2] !== points_dinamarca) {
                document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
            }
        }
    }


    if (document.getElementById("octavos7").innerText !== puntos_francia[0].innerText) {
        //Condiciones para 2do puesto francia
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_francia) {
            //francia SIN tunez
            if (document.getElementById("octavos7").innerText === "Tunez") {
                //francia iguala con dinamarca
                if (lista_puntos_1[2] === points_dinamarca) {
                    if (df_francia > df_dinamarca) {
                        document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        console.log("francia segundo y dinamarca 3ero")
                    }
                    if (df_francia === df_dinamarca) {
                        if (gf_francia > gf_dinamarca) {
                            document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        }
                    }

                }
                //francia iguala con australia
                if (lista_puntos_1[2] === points_australia) {
                    if (df_francia > df_australia) {
                        document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        console.log("francia segundo y australia 3ero")
                    }
                    if (df_francia === df_australia) {
                        if (gf_francia > gf_australia) {
                            document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        }
                    }

                }
            }
            //francia SIN dinamarca
            if (document.getElementById("octavos7").innerText === "Dinamarca") {
                //francia iguala con tunez
                if (lista_puntos_1[2] === points_tunez) {
                    if (df_francia > df_tunez) {
                        document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        console.log("francia segundo y tunez 3er")
                    }
                    if (df_francia === df_tunez) {
                        if (gf_francia > gf_tunez) {
                            document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        }
                    }

                }
                //francia iguala con australia
                if (lista_puntos_1[2] === points_australia) {
                    if (df_francia > df_australia) {
                        document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        console.log("francia segundo y australia 3ero")
                    }
                    if (df_francia === df_australia) {
                        if (gf_francia > gf_australia) {
                            document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        }
                    }

                }
            }
            //francia SIN australia
            if (document.getElementById("octavos7").innerText === "Australia") {
                //francia iguala con tunez
                if (lista_puntos_1[2] === points_tunez) {
                    if (df_francia > df_tunez) {
                        document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        console.log("francia segundo y tunez 3er")
                    }
                    if (df_francia === df_tunez) {
                        if (gf_francia > gf_tunez) {
                            document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        }
                    }

                }
                //francia iguala con dinamarca
                if (lista_puntos_1[2] === points_dinamarca) {
                    if (df_francia > df_dinamarca) {
                        document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        console.log("francia segundo y dinamarca 3ero")
                    }
                    if (df_francia === df_dinamarca) {
                        if (gf_francia > gf_dinamarca) {
                            document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        }
                    }

                }
            }
            //francia no iguala con nadie
            if (lista_puntos_1[2] !== points_australia && lista_puntos_1[2] !== points_tunez &&
                lista_puntos_1[2] !== points_dinamarca) {
                document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
            }

        }
    }

    if (document.getElementById("octavos7").innerText !== puntos_tunez[0].innerText) {
        //Condiciones para 2do puesto tunez
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_tunez) {
            //tunez SIN australia
            if (document.getElementById("octavos7").innerText === "Australia") {
                //tunez iguala con dinamarca
                if (lista_puntos_1[2] === points_dinamarca) {
                    if (df_tunez > df_dinamarca) {
                        document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        console.log("tunez segundo y dinamarca 3ero")
                    }
                    if (df_tunez === df_dinamarca) {
                        if (gf_tunez > gf_dinamarca) {
                            document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        }
                    }
                }
                //tunez iguala con francia
                if (lista_puntos_1[2] === points_francia) {
                    if (df_tunez > df_francia) {
                        document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        console.log("tunez segundo y francia Bajos 3er")
                    }
                    if (df_tunez === df_francia) {
                        if (gf_tunez > gf_francia) {
                            document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        }
                    }

                }
            }
            //tunez SIN dinamarca
            if (document.getElementById("octavos7").innerText === "Dinamarca") {
                //tunez iguala con australia
                if (lista_puntos_1[2] === points_australia) {
                    if (df_tunez > df_australia) {
                        document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        console.log("tunez segundo y australia 3ero")
                    }
                    if (df_tunez === df_australia) {
                        if (gf_tunez > gf_australia) {
                            document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        }
                    }
                }
                //tunez iguala con francia
                if (lista_puntos_1[2] === points_francia) {
                    if (df_tunez > df_francia) {
                        document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        console.log("tunez segundo y francia Bajos 3er")
                    }
                    if (df_tunez === df_francia) {
                        if (gf_tunez > gf_francia) {
                            document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_francia[0].innerText;
                        }
                    }

                }
            }
            //tunez SIN francia
            if (document.getElementById("octavos7").innerText === "francia") {
                //tunez iguala con australia
                if (lista_puntos_1[2] === points_australia) {
                    if (df_tunez > df_australia) {
                        document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        console.log("tunez segundo y australia 3ero")
                    }
                    if (df_tunez === df_australia) {
                        if (gf_tunez > gf_australia) {
                            document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_australia[0].innerText;
                        }
                    }
                }
                //tunez iguala con dinamarca
                if (lista_puntos_1[2] === points_dinamarca) {
                    if (df_tunez > df_dinamarca) {
                        document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        console.log("tunez segundo y dinamarca 3ero")
                    }
                    if (df_tunez === df_dinamarca) {
                        if (gf_tunez > gf_dinamarca) {
                            document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
                        }
                        else {
                            document.getElementById("octavos6").innerText = puntos_dinamarca[0].innerText;
                        }
                    }
                }
            }
            //tunez no iguala con nadie
            if (lista_puntos_1[2] !== points_australia && lista_puntos_1[2] !== points_francia &&
                lista_puntos_1[2] !== points_dinamarca) {
                document.getElementById("octavos6").innerText = puntos_tunez[0].innerText;
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


export default CompRonda4;
