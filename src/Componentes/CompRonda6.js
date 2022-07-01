import React from 'react';
import CompPartido1F from './Rondas/Ronda6/CompPartido1F';
import CompPartido2F from './Rondas/Ronda6/CompPartido2F';
import CompPartido3F from './Rondas/Ronda6/CompPartido3F';
import CompPartido4F from './Rondas/Ronda6/CompPartido4F';
import CompPartido5F from './Rondas/Ronda6/CompPartido5F';
import CompPartido6F from './Rondas/Ronda6/CompPartido6F';

function CompRonda6() {
    return (
        <div className='container'>
            <table className='table table-bordered container table1' border="">
                <CompPartido1F />
                <CompPartido2F />
                <CompPartido3F />
                <CompPartido4F />
                <CompPartido5F />
                <CompPartido6F />
            </table>
            <div className='boton-cal1'>
                <button type="button" class="btn btn-primary" onClick={() => { ronda6() }} >Calcular</button>
            </div>
            <br></br>
        </div>
    )
}

//Dos componentes colores y listo


function ronda6() {

    //Partido 1
    var partido_1_L = parseInt(document.getElementById("marruecos1").value);
    var partido_1_V = parseInt(document.getElementById("croacia1").value);
    //Partido 2
    var partido_2_L = parseInt(document.getElementById("belgica1").value);
    var partido_2_V = parseInt(document.getElementById("canada1").value);
    //Partido 3
    var partido_3_L = parseInt(document.getElementById("belgica2").value);
    var partido_3_V = parseInt(document.getElementById("marruecos2").value);
    //Partido 4
    var partido_4_L = parseInt(document.getElementById("croacia2").value);
    var partido_4_V = parseInt(document.getElementById("canada2").value);
    //Partido 5
    var partido_5_L = parseInt(document.getElementById("croacia3").value);
    var partido_5_V = parseInt(document.getElementById("belgica3").value);
    //Partido 6
    var partido_6_L = parseInt(document.getElementById("canada3").value);
    var partido_6_V = parseInt(document.getElementById("marruecos3").value);

    //Senegal
    //Obtener valores td de la columa senegal
    let fila_belgica = document.getElementById("row-belgica");
    let puntos_belgica = fila_belgica.getElementsByTagName("td");

    //----------------------------------------------------------

    //Paises bajos
    //Obtener valores td de la columa holanda
    let fila_canada = document.getElementById("row-canada");
    let puntos_canada = fila_canada.getElementsByTagName("td");

    //----------------------------------------------------------

    //Qatar
    //Obtener valores td de la columa qatar
    let fila_croacia = document.getElementById("row-croacia");
    let puntos_croacia = fila_croacia.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Ecuador
    //Obtener valores td de la columa ecuador
    let fila_marruecos = document.getElementById("row-marruecos");
    let puntos_marruecos = fila_marruecos.getElementsByTagName("td");

    //-------------------------------------------------------------------
    //Inicializar variables globales
    var global_belgica = 0
    var global_canada = 0
    var global_croacia = 0
    var global_marruecos = 0
    //Variables PJ
    var global_belgica_pj = 0
    var global_canada_pj = 0
    var global_croacia_pj = 0
    var global_marruecos_pj = 0
    //Variables PG
    var global_belgica_pg = 0
    var global_canada_pg = 0
    var global_croacia_pg = 0
    var global_marruecos_pg = 0
    //Variables PE
    var global_belgica_pe = 0
    var global_canada_pe = 0
    var global_croacia_pe = 0
    var global_marruecos_pe = 0
    //Variables PP
    var global_belgica_pp = 0
    var global_canada_pp = 0
    var global_croacia_pp = 0
    var global_marruecos_pp = 0
    //Variables de goles A FAVOR
    var global_belgica_gf = 0
    var global_canada_gf = 0
    var global_marruecos_gf = 0
    var global_croacia_gf = 0
    //Variables de goles EN CONTRA
    var global_belgica_gc = 0
    var global_canada_gc = 0
    var global_marruecos_gc = 0
    var global_croacia_gc = 0
    //Variables de DF goles
    var global_belgica_dg = 0
    var global_canada_dg = 0
    var global_marruecos_dg = 0
    var global_croacia_dg = 0
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
        var pts_marruecos_1 = part1(partido_1_L, partido_1_V) //3
        var pts_croacia_1 = part2(partido_1_V, partido_1_L) //0

        //Sumar a los puntos grupales
        global_marruecos = global_marruecos + pts_marruecos_1
        global_croacia = global_croacia + pts_croacia_1

        //Partidos
        var res_local_1 = PG(pts_marruecos_1, pts_croacia_1)
        var res_visita_1 = PG(pts_croacia_1, pts_marruecos_1)
        var res_empate_1 = PE(pts_marruecos_1, pts_croacia_1)

        //Sumar PG
        global_marruecos_pg = global_marruecos_pg + res_local_1
        global_croacia_pg = global_croacia_pg + res_visita_1
        //Sumar PE
        global_marruecos_pe = global_marruecos_pe + res_empate_1
        global_croacia_pe = global_croacia_pe + res_empate_1
        //Sumar PP
        global_marruecos_pp = global_marruecos_pp + res_visita_1
        global_croacia_pp = global_croacia_pp + res_local_1

        //Sumar los goles a favor
        global_marruecos_gf = global_marruecos_gf + partido_1_L // 6
        global_croacia_gf = global_croacia_gf + partido_1_V // 0
        puntos_marruecos[5].innerHTML = global_marruecos_gf //6
        puntos_croacia[5].innerHTML = global_croacia_gf //0
        //Goles en contra
        global_marruecos_gc = global_marruecos_gc + partido_1_V // 0 = 0 + 0
        global_croacia_gc = global_croacia_gc + partido_1_L // 0 = 0 + 3
        puntos_marruecos[6].innerHTML = global_marruecos_gc // 0
        puntos_croacia[6].innerHTML = global_croacia_gc // 3

        //Puntos obtenidos por 1er partido

        if (partido_1_L > partido_1_V) {
            puntos_marruecos[8].innerHTML = global_marruecos
            puntos_croacia[8].innerHTML = global_croacia
        }
        if (partido_1_L < partido_1_V) {
            //Prueba para ver quien gana
            puntos_marruecos[8].innerHTML = global_marruecos
            puntos_croacia[8].innerHTML = global_croacia
        }

        if (partido_1_L === partido_1_V) {
            puntos_marruecos[8].innerHTML = global_marruecos
            puntos_croacia[8].innerHTML = global_croacia
        }
        //Colocar PG
        puntos_croacia[2].innerHTML = global_croacia_pg
        puntos_marruecos[2].innerHTML = global_marruecos_pg
        //Colocar PE
        puntos_croacia[3].innerHTML = global_croacia_pe
        puntos_marruecos[3].innerHTML = global_marruecos_pe
        //Colocar PP
        puntos_croacia[4].innerHTML = global_croacia_pp
        puntos_marruecos[4].innerHTML = global_marruecos_pp
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
        var pts_belgica_1 = part1(partido_2_L, partido_2_V) //3
        var pts_canada_1 = part2(partido_2_V, partido_2_L) //0

        //Sumar los puntos globales
        global_belgica = global_belgica + pts_belgica_1
        global_canada = global_canada + pts_canada_1

        //Partidos
        var res_local_2 = PG(pts_belgica_1, pts_canada_1)
        var res_visita_2 = PG(pts_canada_1, pts_belgica_1)
        var res_empate_2 = PE(pts_belgica_1, pts_canada_1)

        //Sumar PG
        global_belgica_pg = global_belgica_pg + res_local_2
        global_canada_pg = global_canada_pg + res_visita_2
        //Sumar PE
        global_belgica_pe = global_belgica_pe + res_empate_2
        global_canada_pe = global_canada_pe + res_empate_2
        //Sumar PP
        global_belgica_pp = global_belgica_pp + res_visita_2
        global_canada_pp = global_canada_pp + res_local_2

        //Sumar los goles a favor
        global_belgica_gf = global_belgica_gf + partido_2_L
        global_canada_gf = global_canada_gf + partido_2_V
        puntos_belgica[5].innerHTML = global_belgica_gf
        puntos_canada[5].innerHTML = global_canada_gf
        //Sumar goles en contra
        global_belgica_gc = global_belgica_gc + partido_2_V // 0 = 0 + 0
        global_canada_gc = global_canada_gc + partido_2_L // 3 = 3 + 0
        puntos_belgica[6].innerHTML = global_belgica_gc
        puntos_canada[6].innerHTML = global_canada_gc
        //Restar diferencia de goles
        //puntos_belgica[7].innerHTML = global_belgica_gf - global_canada_gc
        //puntos_canada[7].innerHTML = global_canada_gf - global_belgica_gc


        //Puntos obtenidos por 1er partido
        if (partido_2_L > partido_2_V) {
            puntos_belgica[8].innerHTML = global_belgica
            puntos_canada[8].innerHTML = global_canada
        }
        if (partido_2_L < partido_2_V) {
            puntos_belgica[8].innerHTML = global_belgica
            puntos_canada[8].innerHTML = global_canada
        }
        if (partido_2_L === partido_2_V) {
            puntos_belgica[8].innerHTML = global_belgica
            puntos_canada[8].innerHTML = global_canada
        }
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
        var pts_belgica_2 = part1(partido_3_L, partido_3_V)
        var pts_marruecos_2 = part2(partido_3_V, partido_3_L)

        //Sumar a los puntos grupales
        global_belgica = global_belgica + pts_belgica_2
        global_marruecos = global_marruecos + pts_marruecos_2

        //Partidos
        var res_local_3 = PG(pts_belgica_2, pts_marruecos_2)
        var res_visita_3 = PG(pts_marruecos_2, pts_belgica_2)
        var res_empate_3 = PE(pts_belgica_2, pts_marruecos_2)

        //Sumar PG
        global_belgica_pg = global_belgica_pg + res_local_3
        global_marruecos_pg = global_marruecos_pg + res_visita_3
        //Sumar PE
        global_belgica_pe = global_belgica_pe + res_empate_3
        global_marruecos_pe = global_marruecos_pe + res_empate_3
        //Sumar PP
        global_belgica_pp = global_belgica_pp + res_visita_3
        global_marruecos_pp = global_marruecos_pp + res_local_3

        //Sumar los goles a favor
        global_belgica_gf = global_belgica_gf + partido_3_L // 0 = 0 + 0
        global_marruecos_gf = global_marruecos_gf + partido_3_V // 3 = 3 + 0
        puntos_belgica[5].innerHTML = global_belgica_gf //0
        puntos_marruecos[5].innerHTML = global_marruecos_gf // 3
        //Goles en contra
        global_belgica_gc = global_belgica_gc + partido_3_V // 0 = 0 + 0
        global_marruecos_gc = global_marruecos_gc + partido_3_L // 3 = 3 + 0
        puntos_belgica[6].innerHTML = global_belgica_gc // 3
        puntos_marruecos[6].innerHTML = global_marruecos_gc // 0
        //Restar diferencia de goles
        //puntos_belgica[7].innerHTML = global_belgica_gf - global_marruecos_gc
        //puntos_marruecos[7].innerHTML = global_marruecos_gf - global_belgica_gc

        //Puntos obtenidos por 3er partido
        if (partido_3_L > partido_3_V) {
            puntos_marruecos[8].innerHTML = global_marruecos
            puntos_belgica[8].innerHTML = global_belgica
        }
        if (partido_3_L < partido_3_V) {
            puntos_marruecos[8].innerHTML = global_marruecos
            puntos_belgica[8].innerHTML = global_belgica
        }

        if (partido_3_L === partido_3_V) {
            puntos_marruecos[8].innerHTML = global_marruecos
            puntos_belgica[8].innerHTML = global_belgica
        }
        //Colocar PG
        puntos_marruecos[2].innerHTML = global_marruecos_pg
        puntos_belgica[2].innerHTML = global_belgica_pg
        //Colocar PE
        puntos_marruecos[3].innerHTML = global_marruecos_pe
        puntos_belgica[3].innerHTML = global_belgica_pe
        //Colocar PP
        puntos_marruecos[4].innerHTML = global_marruecos_pp
        puntos_belgica[4].innerHTML = global_belgica_pp
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
        var pts_canada_2 = part2(partido_4_V, partido_4_L)
        var pts_croacia_2 = part1(partido_4_L, partido_4_V)

        //Sumar los puntos globales
        global_croacia = global_croacia + pts_croacia_2
        global_canada = global_canada + pts_canada_2

        //Partidos
        var res_local_4 = PG(pts_croacia_2, pts_canada_2)
        var res_visita_4 = PG(pts_canada_2, pts_croacia_2)
        var res_empate_4 = PE(pts_croacia_2, pts_canada_2)

        //Sumar PG
        global_croacia_pg = global_croacia_pg + res_local_4
        global_canada_pg = global_canada_pg + res_visita_4
        //Sumar PE
        global_croacia_pe = global_croacia_pe + res_empate_4
        global_canada_pe = global_canada_pe + res_empate_4
        //Sumar PP
        global_croacia_pp = global_croacia_pp + res_visita_4
        global_canada_pp = global_canada_pp + res_local_4

        //Sumar los goles a favor
        global_canada_gf = global_canada_gf + partido_4_V
        global_croacia_gf = global_croacia_gf + partido_4_L
        puntos_canada[5].innerHTML = global_canada_gf
        puntos_croacia[5].innerHTML = global_croacia_gf
        //Goles en contra
        global_croacia_gc = global_croacia_gc + partido_4_V //
        global_canada_gc = global_canada_gc + partido_4_L
        puntos_croacia[6].innerHTML = global_croacia_gc //
        puntos_canada[6].innerHTML = global_canada_gc // 0

        //Puntos obtenidos por 4er partido
        if (partido_4_L > partido_4_V) {
            puntos_canada[8].innerHTML = global_canada
            puntos_croacia[8].innerHTML = global_croacia
        }
        if (partido_4_L < partido_4_V) {
            puntos_canada[8].innerHTML = global_canada
            puntos_croacia[8].innerHTML = global_croacia
        }

        if (partido_4_L === partido_4_V) {
            puntos_canada[8].innerHTML = global_canada
            puntos_croacia[8].innerHTML = global_croacia
        }
        //Colocar PG
        puntos_canada[2].innerHTML = global_canada_pg
        puntos_croacia[2].innerHTML = global_croacia_pg
        //Colocar PE
        puntos_canada[3].innerHTML = global_canada_pe
        puntos_croacia[3].innerHTML = global_croacia_pe
        //Colocar PP
        puntos_canada[4].innerHTML = global_canada_pp
        puntos_croacia[4].innerHTML = global_croacia_pp
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
        var pts_belgica_3 = part2(partido_5_V, partido_5_L)
        var pts_croacia_3 = part1(partido_5_L, partido_5_V)

        //Sumar los puntos globales
        global_belgica = global_belgica + pts_belgica_3
        global_croacia = global_croacia + pts_croacia_3

        //Partidos
        var res_local_5 = PG(pts_croacia_3, pts_belgica_3)
        var res_visita_5 = PG(pts_belgica_3, pts_croacia_3)
        var res_empate_5 = PE(pts_croacia_3, pts_belgica_3)

        //Sumar PG
        global_croacia_pg = global_croacia_pg + res_local_5
        global_belgica_pg = global_belgica_pg + res_visita_5
        //Sumar PE
        global_croacia_pe = global_croacia_pe + res_empate_5
        global_belgica_pe = global_belgica_pe + res_empate_5
        //Sumar PP
        global_croacia_pp = global_croacia_pp + res_visita_5
        global_belgica_pp = global_belgica_pp + res_local_5

        //Sumar los goles a favor
        global_belgica_gf = global_belgica_gf + partido_5_V
        global_croacia_gf = global_croacia_gf + partido_5_L
        puntos_belgica[5].innerHTML = global_belgica_gf
        puntos_croacia[5].innerHTML = global_croacia_gf
        //Goles en contra
        global_croacia_gc = global_croacia_gc + partido_5_V // 0 = 0 + 0
        global_belgica_gc = global_belgica_gc + partido_5_L // 3 = 3 + 0
        puntos_croacia[6].innerHTML = global_croacia_gc // 3
        puntos_belgica[6].innerHTML = global_belgica_gc // 0
        //Restar diferencia de goles

        //Puntos obtenidos por 5er partido
        if (partido_5_L > partido_5_V) {
            puntos_belgica[8].innerHTML = global_belgica
            puntos_croacia[8].innerHTML = global_croacia
        }
        if (partido_5_L < partido_5_V) {
            puntos_belgica[8].innerHTML = global_belgica
            puntos_croacia[8].innerHTML = global_croacia
        }

        if (partido_5_L === partido_5_V) {
            puntos_belgica[8].innerHTML = global_belgica
            puntos_croacia[8].innerHTML = global_croacia
        }
        //Colocar PG
        puntos_croacia[2].innerHTML = global_croacia_pg
        puntos_belgica[2].innerHTML = global_belgica_pg
        //Colocar PE
        puntos_croacia[3].innerHTML = global_croacia_pe
        puntos_belgica[3].innerHTML = global_belgica_pe
        //Colocar PP
        puntos_croacia[4].innerHTML = global_croacia_pp
        puntos_belgica[4].innerHTML = global_belgica_pp
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
        var pts_marruecos_3 = part2(partido_6_V, partido_6_L)
        var pts_canada_3 = part1(partido_6_L, partido_6_V)

        //Sumar los puntos globales
        global_canada = global_canada + pts_canada_3
        global_marruecos = global_marruecos + pts_marruecos_3

        //Partidos
        var res_local_6 = PG(pts_marruecos_3, pts_canada_3)
        var res_visita_6 = PG(pts_canada_3, pts_marruecos_3)
        var res_empate_6 = PE(pts_marruecos_3, pts_canada_3)

        //Sumar PG
        global_marruecos_pg = global_marruecos_pg + res_local_6
        global_canada_pg = global_canada_pg + res_visita_6
        //Sumar PE
        global_marruecos_pe = global_marruecos_pe + res_empate_6
        global_canada_pe = global_canada_pe + res_empate_6
        //Sumar PP
        global_marruecos_pp = global_marruecos_pp + res_visita_6
        global_canada_pp = global_canada_pp + res_local_6

        //Sumar los goles a favor
        global_marruecos_gf = global_marruecos_gf + partido_6_V
        global_canada_gf = global_canada_gf + partido_6_L
        puntos_marruecos[5].innerHTML = global_marruecos_gf
        puntos_canada[5].innerHTML = global_canada_gf
        //Sumar goles en contra
        //Goles en contra
        global_canada_gc = global_canada_gc + partido_6_V // 0 = 0 + 0
        global_marruecos_gc = global_marruecos_gc + partido_6_L // 3 = 3 + 0
        puntos_marruecos[6].innerHTML = global_marruecos_gc
        puntos_canada[6].innerHTML = global_canada_gc
        //Restar diferencia de goles

        //Puntos obtenidos por 6er partido
        if (partido_6_L > partido_6_V) {
            puntos_marruecos[8].innerHTML = global_marruecos
            puntos_canada[8].innerHTML = global_canada
        }
        if (partido_6_L < partido_6_V) {
            puntos_marruecos[8].innerHTML = global_marruecos
            puntos_canada[8].innerHTML = global_canada
        }

        if (partido_6_L === partido_6_V) {
            puntos_marruecos[8].innerHTML = global_marruecos
            puntos_canada[8].innerHTML = global_canada
        }
        //Colocar PG
        puntos_marruecos[2].innerHTML = global_marruecos_pg
        puntos_canada[2].innerHTML = global_canada_pg
        //Colocar PE
        puntos_marruecos[3].innerHTML = global_marruecos_pe
        puntos_canada[3].innerHTML = global_canada_pe
        //Colocar PP
        puntos_marruecos[4].innerHTML = global_marruecos_pp
        puntos_canada[4].innerHTML = global_canada_pp
    }

    //Restar diferencia de goles
    global_belgica_dg = global_belgica_gf - global_belgica_gc
    global_canada_dg = global_canada_gf - global_canada_gc
    global_croacia_dg = global_croacia_gf - global_croacia_gc
    global_marruecos_dg = global_marruecos_gf - global_marruecos_gc
    //Insertarlos en el html
    puntos_belgica[7].innerHTML = global_belgica_dg
    puntos_canada[7].innerHTML = global_canada_dg
    puntos_croacia[7].innerHTML = global_croacia_dg
    puntos_marruecos[7].innerHTML = global_marruecos_dg
    //Partidos Jugados
    global_belgica_pj = 3
    global_canada_pj = 3
    global_croacia_pj = 3
    global_marruecos_pj = 3
    //Colocar PARTIDOS
    puntos_belgica[1].innerHTML = global_belgica_pj
    puntos_canada[1].innerHTML = global_canada_pj
    puntos_croacia[1].innerHTML = global_croacia_pj
    puntos_marruecos[1].innerHTML = global_marruecos_pj

    clasi6();
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

function clasi6() {

    //belgica
    //Obtener valores td de la columa belgica
    let fila_belgica = document.getElementById("row-belgica");
    let puntos_belgica = fila_belgica.getElementsByTagName("td");

    //----------------------------------------------------------

    //canada
    //Obtener valores td de la columa canada
    let fila_canada = document.getElementById("row-canada");
    let puntos_canada = fila_canada.getElementsByTagName("td");

    //----------------------------------------------------------

    //croacia
    //Obtener valores td de la columa croacia
    let fila_croacia = document.getElementById("row-croacia");
    let puntos_croacia = fila_croacia.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //marruecos
    //Obtener valores td de la columa marruecos
    let fila_marruecos = document.getElementById("row-marruecos");
    let puntos_marruecos = fila_marruecos.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Puntos de los equipos
    var points_belgica = parseInt(puntos_belgica[8].innerHTML);
    var points_canada = parseInt(puntos_canada[8].innerHTML);
    var points_croacia = parseInt(puntos_croacia[8].innerHTML);
    var points_marruecos = parseInt(puntos_marruecos[8].innerHTML);
    //Goles a favor
    var gf_belgica = parseInt(puntos_belgica[5].innerHTML);
    var gf_canada = parseInt(puntos_canada[5].innerHTML);
    var gf_croacia = parseInt(puntos_croacia[5].innerHTML);
    var gf_marruecos = parseInt(puntos_marruecos[5].innerHTML);
    //Diferencia de goles
    var df_belgica = parseInt(puntos_belgica[7].innerHTML);
    var df_canada = parseInt(puntos_canada[7].innerHTML);
    var df_croacia = parseInt(puntos_croacia[7].innerHTML);
    var df_marruecos = parseInt(puntos_marruecos[7].innerHTML);

    //Lista con los puntos de los equipos
    let lista_puntos_1 = [points_croacia, points_marruecos, points_canada, points_belgica]
    let lista_df = [df_belgica, df_canada, df_croacia, df_marruecos]
    lista_puntos_1.sort(Comparar)
    lista_df.sort(Comparar)

    //------------CONDICIONES PARA EL 1ER PUESTO-----------------------//

    //Condiciones para 1er puesto canada y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_canada) {
        //canada iguala con marruecos
        if (lista_puntos_1[3] === points_marruecos) {
            if (df_canada > df_marruecos) {
                document.getElementById("octavos11").innerText = puntos_canada[0].innerText;
                document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                console.log("canada primero  y marruecos Segundo")
            }
            if (df_canada === df_marruecos) {
                if (gf_canada > gf_marruecos) {
                    document.getElementById("octavos11").innerText = puntos_canada[0].innerText;
                    document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                }
            }
            if (df_canada < df_marruecos) {
                document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
            }
        }
        //canada iguala con croacia
        if (lista_puntos_1[3] === points_croacia) {
            if (df_canada > df_croacia) {
                document.getElementById("octavos11").innerText = puntos_canada[0].innerText;
                document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                console.log("canada primero y croacia segundo")
            }
            if (df_canada === df_croacia) {
                if (gf_canada > gf_croacia) {
                    document.getElementById("octavos11").innerText = puntos_canada[0].innerText;
                    document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                }

            }
            if (df_canada < df_croacia) {
                document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
            }
        }

        //canada iguala con belgica
        if (lista_puntos_1[3] === points_belgica) {
            if (df_canada > df_belgica) {
                document.getElementById("octavos11").innerText = puntos_canada[0].innerText;
                document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                console.log("canada primero  y belgica Segundo")
            }
            if (df_canada === df_belgica) {
                if (gf_canada > gf_belgica) {
                    document.getElementById("octavos11").innerText = puntos_canada[0].innerText;
                    document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                }
            }
            if (df_canada < df_belgica) {
                document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
            }
        }
        //canada no iguala con nadie
        if (lista_puntos_1[3] !== points_belgica && lista_puntos_1[3] !== points_croacia &&
            lista_puntos_1[3] !== points_marruecos) {
            document.getElementById("octavos11").innerText = puntos_canada[0].innerText;
        }

    }

    //Condiciones para 1er puesto belgica y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_belgica) {
        //belgica iguala con canada
        if (lista_puntos_1[3] === points_canada) {
            if (df_belgica > df_canada) {
                document.getElementById("octavos11").innerText = puntos_belgica[0].innerText;
                document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                console.log("belgica primero  y canada Segundo")
            }
            if (df_belgica === df_canada) {
                if (gf_belgica > gf_canada) {
                    document.getElementById("octavos11").innerText = puntos_belgica[0].innerText;
                    document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                }

            }
            if (df_belgica < df_canada) {
                document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
            }
        }
        //belgica iguala con marruecos
        if (lista_puntos_1[3] === points_marruecos) {
            if (df_belgica > df_marruecos) {
                document.getElementById("octavos11").innerText = puntos_belgica[0].innerText;
                document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                console.log("belgica primero  y marruecos Segundo")
            }
            if (df_belgica === df_marruecos) {
                if (gf_belgica > gf_marruecos) {
                    document.getElementById("octavos11").innerText = puntos_belgica[0].innerText;
                    document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                }
            }
            if (df_belgica < df_marruecos) {
                document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
            }
        }

        //belgica iguala con croacia
        if (lista_puntos_1[3] === points_croacia) {
            if (df_belgica > df_croacia) {
                document.getElementById("octavos11").innerText = puntos_belgica[0].innerText;
                document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                console.log("belgica primero  y croacia Segundo")
            }
            if (df_belgica === df_croacia) {
                if (gf_belgica > gf_croacia) {
                    document.getElementById("octavos11").innerText = puntos_belgica[0].innerText;
                    document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                }

            }
            if (df_belgica < df_croacia) {
                document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
            }
        }
        //belgica no iguala con nadie
        if (lista_puntos_1[3] !== points_croacia && lista_puntos_1[3] !== points_marruecos &&
            lista_puntos_1[3] !== points_canada) {
            document.getElementById("octavos11").innerText = puntos_belgica[0].innerText;
        }

    }

    //Condiciones para 1er puesto croacia y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_croacia) {
        //croacia iguala con canada
        if (lista_puntos_1[3] === points_canada) {
            if (df_croacia > df_canada) {
                document.getElementById("octavos11").innerText = puntos_croacia[0].innerText;
                document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                console.log("croacia primero  y canada Segundo")
            }
            if (df_croacia === df_canada) {
                if (gf_croacia > gf_canada) {
                    document.getElementById("octavos11").innerText = puntos_croacia[0].innerText;
                    document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                }
            }
            if (df_croacia < df_canada) {
                document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
            }
        }
        //croacia iguala con marruecos
        if (lista_puntos_1[3] === points_marruecos) {
            if (df_croacia > df_marruecos) {
                document.getElementById("octavos11").innerText = puntos_croacia[0].innerText;
                document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                console.log("croacia primero  y marruecos Segundo")
            }
            if (df_croacia === df_marruecos) {
                if (gf_croacia > gf_marruecos) {
                    document.getElementById("octavos11").innerText = puntos_croacia[0].innerText;
                    document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                }

            }
            if (df_croacia < df_marruecos) {
                document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
            }
        }

        //croacia iguala con belgica
        if (lista_puntos_1[3] === points_belgica) {
            if (df_croacia > df_belgica) {
                document.getElementById("octavos11").innerText = puntos_croacia[0].innerText;
                document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                console.log("croacia primero  y belgica Segundo")
            }
            if (df_croacia === df_belgica) {
                if (gf_croacia > gf_belgica) {
                    document.getElementById("octavos11").innerText = puntos_croacia[0].innerText;
                    document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                }

            }
            if (df_croacia < df_belgica) {
                document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
            }
        }
        //croacia no iguala con nadie
        if (lista_puntos_1[3] !== points_belgica && lista_puntos_1[3] !== points_marruecos &&
            lista_puntos_1[3] !== points_canada) {
            document.getElementById("octavos11").innerText = puntos_croacia[0].innerText;
        }

    }

    //Condiciones para 1er puesto marruecos y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_marruecos) {
        //marruecos iguala con canada
        if (lista_puntos_1[3] === points_canada) {
            if (df_marruecos > df_canada) {
                document.getElementById("octavos11").innerText = puntos_marruecos[0].innerText;
                document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                console.log("marruecos primero  y canada Segundo")
            }
            if (df_marruecos === df_canada) {
                if (gf_marruecos > gf_canada) {
                    document.getElementById("octavos11").innerText = puntos_marruecos[0].innerText;
                    document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                }
            }
            if (df_marruecos < df_canada) {
                document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
            }
        }
        //marruecos iguala con croacia
        if (lista_puntos_1[3] === points_croacia) {
            if (df_marruecos > df_croacia) {
                document.getElementById("octavos11").innerText = puntos_marruecos[0].innerText;
                document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                console.log("marruecos primero y croacia segundo")
            }
            if (df_marruecos === df_croacia) {
                if (gf_marruecos > gf_croacia) {
                    document.getElementById("octavos11").innerText = puntos_marruecos[0].innerText;
                    document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                }
            }
            if (df_marruecos < df_croacia) {
                document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
            }
        }

        //marruecos iguala con belgica
        if (lista_puntos_1[3] === points_belgica) {
            if (df_marruecos > df_belgica) {
                document.getElementById("octavos11").innerText = puntos_marruecos[0].innerText;
                document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                console.log("marruecos primero y belgica Segundo")
            }
            if (df_marruecos === df_belgica) {
                if (gf_marruecos > gf_belgica) {
                    document.getElementById("octavos11").innerText = puntos_marruecos[0].innerText;
                    document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                }
            }
            if (df_marruecos < df_belgica) {
                document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
            }
        }
        //Paises no iguala con nadie
        if (lista_puntos_1[3] !== points_belgica && lista_puntos_1[3] !== points_croacia &&
            lista_puntos_1[3] !== points_canada) {
            document.getElementById("octavos11").innerText = puntos_marruecos[0].innerText;
        }

    }

    //--------------------CONDICIONES PARA EL 2DO PUESTO--------------------------- //

    if (document.getElementById("octavos11").innerText !== puntos_canada[0].innerText) {
        //Condiciones para 2do puesto canada
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_canada) {
            //canada sin croacia
            if (document.getElementById("octavos11").innerText !== "croacia") {
                //canada iguala con marruecos
                if (lista_puntos_1[2] === points_marruecos) {
                    if (df_canada > df_marruecos) {
                        document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        console.log("canada segundo y marruecos 3er")
                    }
                    if (df_canada === df_marruecos) {
                        if (gf_canada > gf_marruecos) {
                            document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        }
                    }
                }
                //canada iguala con belgica
                if (lista_puntos_1[2] === points_belgica) {
                    if (df_canada > df_belgica) {
                        document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        console.log("canada segundo y belgica 3ero")
                    }
                    if (df_canada === df_belgica) {
                        if (gf_canada > gf_belgica) {
                            document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        }
                    }
                }
            }
            //canada sin marruecos
            if (document.getElementById("octavos11").innerText !== "marruecos") {
                //canada iguala con croacia
                if (lista_puntos_1[2] === points_croacia) {
                    if (df_canada > df_croacia) {
                        document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        console.log("canada segundo y croacia 3ero")
                    }
                    if (df_canada === df_croacia) {
                        if (gf_canada > gf_croacia) {
                            document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        }
                    }
                }
                //canada iguala con belgica
                if (lista_puntos_1[2] === points_belgica) {
                    if (df_canada > df_belgica) {
                        document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        console.log("canada segundo y belgica 3ero")
                    }
                    if (df_canada === df_belgica) {
                        if (gf_canada > gf_belgica) {
                            document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        }
                    }
                }
            }
            //canada sin belgica
            if (document.getElementById("octavos11").innerText !== "belgica") {
                //canada iguala con croacia
                if (lista_puntos_1[2] === points_croacia) {
                    if (df_canada > df_croacia) {
                        document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        console.log("canada segundo y croacia 3ero")
                    }
                    if (df_canada === df_croacia) {
                        if (gf_canada > gf_croacia) {
                            document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        }
                    }
                }
                //canada iguala con marruecos
                if (lista_puntos_1[2] === points_marruecos) {
                    if (df_canada > df_marruecos) {
                        document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        console.log("canada segundo y marruecos 3er")
                    }
                    if (df_canada === df_marruecos) {
                        if (gf_canada > gf_marruecos) {
                            document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        }
                    }
                }
            }
            //canada no iguala con nadie
            if (lista_puntos_1[2] !== points_belgica && lista_puntos_1[2] !== points_marruecos && lista_puntos_1[2] !== points_croacia) {
                document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
            }

        }
    }


    if (document.getElementById("octavos11").innerText !== puntos_belgica[0].innerText) {
        //Condiciones para 2do puesto belgica
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_belgica) {
            //belgica sin belgica
            if (document.getElementById("octavos11").innerText !== "canada") {
                //belgica iguala con marruecos
                if (lista_puntos_1[2] === points_marruecos) {
                    if (df_belgica > df_marruecos) {
                        document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        console.log("belgica segundo y marruecos 3er")
                    }
                    if (df_belgica === df_marruecos) {
                        if (gf_belgica > gf_marruecos) {
                            document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        }
                    }
                }
                //belgica iguala con croacia
                if (lista_puntos_1[2] === points_croacia) {
                    if (df_belgica > df_croacia) {
                        document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        console.log("belgica segundo y croacia 3ero")
                    }
                    if (df_belgica === df_croacia) {
                        if (gf_belgica > gf_croacia) {
                            document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        }
                    }

                }
            }
            if (document.getElementById("octavos11").innerText !== "croacia") {
                //belgica iguala con canada
                if (lista_puntos_1[2] === points_canada) {
                    if (df_belgica > df_canada) {
                        document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        console.log("belgica segundo y canada 3ero")
                    }
                    if (df_belgica === df_canada) {
                        if (gf_belgica > gf_canada) {
                            document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        }
                    }
                }
                //belgica iguala con marruecos
                if (lista_puntos_1[2] === points_marruecos) {
                    if (df_belgica > df_marruecos) {
                        document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        console.log("belgica segundo y marruecos 3er")
                    }
                    if (df_belgica === df_marruecos) {
                        if (gf_belgica > gf_marruecos) {
                            document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos11").innerText !== "marruecos") {
                //belgica iguala con canada
                if (lista_puntos_1[2] === points_canada) {
                    if (df_belgica > df_canada) {
                        document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        console.log("belgica segundo y canada 3ero")
                    }
                    if (df_belgica === df_canada) {
                        if (gf_belgica > gf_canada) {
                            document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        }
                    }
                }
                //belgica iguala con croacia
                if (lista_puntos_1[2] === points_croacia) {
                    if (df_belgica > df_croacia) {
                        document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        console.log("belgica segundo y croacia 3ero")
                    }
                    if (df_belgica === df_croacia) {
                        if (gf_belgica > gf_croacia) {
                            document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        }
                    }

                }
            }

            //belgica no iguala con nadie
            if (lista_puntos_1[2] !== points_croacia && lista_puntos_1[2] !== points_marruecos &&
                lista_puntos_1[2] !== points_canada) {
                document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
            }
        }
    }


    if (document.getElementById("octavos11").innerText !== puntos_croacia[0].innerText) {
        //Condiciones para 2do puesto croacia
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_croacia) {
            //croacia SIN marruecos
            if (document.getElementById("octavos11").innerText === "marruecos") {
                //croacia iguala con canada
                if (lista_puntos_1[2] === points_canada) {
                    if (df_croacia > df_canada) {
                        document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        console.log("croacia segundo y canada 3ero")
                    }
                    if (df_croacia === df_canada) {
                        if (gf_croacia > gf_canada) {
                            document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        }
                    }

                }
                //croacia iguala con belgica
                if (lista_puntos_1[2] === points_belgica) {
                    if (df_croacia > df_belgica) {
                        document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        console.log("croacia segundo y belgica 3ero")
                    }
                    if (df_croacia === df_belgica) {
                        if (gf_croacia > gf_belgica) {
                            document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        }
                    }

                }
            }
            //croacia SIN canada
            if (document.getElementById("octavos11").innerText === "canada") {
                //croacia iguala con marruecos
                if (lista_puntos_1[2] === points_marruecos) {
                    if (df_croacia > df_marruecos) {
                        document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        console.log("croacia segundo y marruecos 3er")
                    }
                    if (df_croacia === df_marruecos) {
                        if (gf_croacia > gf_marruecos) {
                            document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        }
                    }

                }
                //croacia iguala con belgica
                if (lista_puntos_1[2] === points_belgica) {
                    if (df_croacia > df_belgica) {
                        document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        console.log("croacia segundo y belgica 3ero")
                    }
                    if (df_croacia === df_belgica) {
                        if (gf_croacia > gf_belgica) {
                            document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        }
                    }

                }
            }
            //croacia SIN belgica
            if (document.getElementById("octavos11").innerText === "belgica") {
                //croacia iguala con marruecos
                if (lista_puntos_1[2] === points_marruecos) {
                    if (df_croacia > df_marruecos) {
                        document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        console.log("croacia segundo y marruecos 3er")
                    }
                    if (df_croacia === df_marruecos) {
                        if (gf_croacia > gf_marruecos) {
                            document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        }
                    }

                }
                //croacia iguala con canada
                if (lista_puntos_1[2] === points_canada) {
                    if (df_croacia > df_canada) {
                        document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        console.log("croacia segundo y canada 3ero")
                    }
                    if (df_croacia === df_canada) {
                        if (gf_croacia > gf_canada) {
                            document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        }
                    }

                }
            }
            //croacia no iguala con nadie
            if (lista_puntos_1[2] !== points_belgica && lista_puntos_1[2] !== points_marruecos &&
                lista_puntos_1[2] !== points_canada) {
                document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
            }

        }
    }

    if (document.getElementById("octavos11").innerText !== puntos_marruecos[0].innerText) {
        //Condiciones para 2do puesto marruecos
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_marruecos) {
            //marruecos SIN belgica
            if (document.getElementById("octavos11").innerText === "belgica") {
                //marruecos iguala con canada
                if (lista_puntos_1[2] === points_canada) {
                    if (df_marruecos > df_canada) {
                        document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        console.log("marruecos segundo y canada 3ero")
                    }
                    if (df_marruecos === df_canada) {
                        if (gf_marruecos > gf_canada) {
                            document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        }
                    }
                }
                //marruecos iguala con croacia
                if (lista_puntos_1[2] === points_croacia) {
                    if (df_marruecos > df_croacia) {
                        document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        console.log("marruecos segundo y croacia Bajos 3er")
                    }
                    if (df_marruecos === df_croacia) {
                        if (gf_marruecos > gf_croacia) {
                            document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        }
                    }

                }
            }
            //marruecos SIN canada
            if (document.getElementById("octavos11").innerText === "canada") {
                //marruecos iguala con belgica
                if (lista_puntos_1[2] === points_belgica) {
                    if (df_marruecos > df_belgica) {
                        document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        console.log("marruecos segundo y belgica 3ero")
                    }
                    if (df_marruecos === df_belgica) {
                        if (gf_marruecos > gf_belgica) {
                            document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        }
                    }
                }
                //marruecos iguala con croacia
                if (lista_puntos_1[2] === points_croacia) {
                    if (df_marruecos > df_croacia) {
                        document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        console.log("marruecos segundo y croacia Bajos 3er")
                    }
                    if (df_marruecos === df_croacia) {
                        if (gf_marruecos > gf_croacia) {
                            document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_croacia[0].innerText;
                        }
                    }

                }
            }
            //marruecos SIN croacia
            if (document.getElementById("octavos11").innerText === "croacia") {
                //marruecos iguala con belgica
                if (lista_puntos_1[2] === points_belgica) {
                    if (df_marruecos > df_belgica) {
                        document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        console.log("marruecos segundo y belgica 3ero")
                    }
                    if (df_marruecos === df_belgica) {
                        if (gf_marruecos > gf_belgica) {
                            document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_belgica[0].innerText;
                        }
                    }
                }
                //marruecos iguala con canada
                if (lista_puntos_1[2] === points_canada) {
                    if (df_marruecos > df_canada) {
                        document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        console.log("marruecos segundo y canada 3ero")
                    }
                    if (df_marruecos === df_canada) {
                        if (gf_marruecos > gf_canada) {
                            document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
                        }
                        else {
                            document.getElementById("octavos10").innerText = puntos_canada[0].innerText;
                        }
                    }
                }
            }
            //marruecos no iguala con nadie
            if (lista_puntos_1[2] !== points_belgica && lista_puntos_1[2] !== points_croacia &&
                lista_puntos_1[2] !== points_canada) {
                document.getElementById("octavos10").innerText = puntos_marruecos[0].innerText;
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



export default CompRonda6;