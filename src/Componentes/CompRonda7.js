import React from 'react';
import CompPartido1G from './Rondas/Ronda7/CompPartido1G';
import CompPartido2G from './Rondas/Ronda7/CompPartido2G';
import CompPartido3G from './Rondas/Ronda7/CompPartido3G';
import CompPartido4G from './Rondas/Ronda7/CompPartido4G';
import CompPartido5G from './Rondas/Ronda7/CompPartido5G';
import CompPartido6G from './Rondas/Ronda7/CompPartido6G';

function CompRonda7() {
    return (
        <div className='container'>
            <table className='table table-bordered container table1' border="">
                <CompPartido1G />
                <CompPartido2G />
                <CompPartido3G />
                <CompPartido4G />
                <CompPartido5G />
                <CompPartido6G />
            </table>
            <div className='boton-cal1'>
                <button type="button" class="btn btn-primary" onClick={() => { ronda7() }} >Calcular</button>
            </div>
            <br></br>
        </div>
    )
}

function ronda7() {

    //Partido 1
    var partido_1_L = parseInt(document.getElementById("suiza1").value);
    var partido_1_V = parseInt(document.getElementById("camerun1").value);
    //Partido 2
    var partido_2_L = parseInt(document.getElementById("brasil1").value);
    var partido_2_V = parseInt(document.getElementById("serbia1").value);
    //Partido 3
    var partido_3_L = parseInt(document.getElementById("camerun2").value);
    var partido_3_V = parseInt(document.getElementById("serbia2").value);
    //Partido 4
    var partido_4_L = parseInt(document.getElementById("brasil2").value);
    var partido_4_V = parseInt(document.getElementById("suiza2").value);
    //Partido 5
    var partido_5_L = parseInt(document.getElementById("camerun3").value);
    var partido_5_V = parseInt(document.getElementById("brasil3").value);
    //Partido 6
    var partido_6_L = parseInt(document.getElementById("serbia3").value);
    var partido_6_V = parseInt(document.getElementById("suiza3").value);

    //Senegal
    //Obtener valores td de la columa senegal
    let fila_brasil = document.getElementById("row-brasil");
    let puntos_brasil = fila_brasil.getElementsByTagName("td");

    //----------------------------------------------------------

    //Paises bajos
    //Obtener valores td de la columa holanda
    let fila_camerun = document.getElementById("row-camerun");
    let puntos_camerun = fila_camerun.getElementsByTagName("td");

    //----------------------------------------------------------

    //Qatar
    //Obtener valores td de la columa qatar
    let fila_serbia = document.getElementById("row-serbia");
    let puntos_serbia = fila_serbia.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Ecuador
    //Obtener valores td de la columa ecuador
    let fila_suiza = document.getElementById("row-suiza");
    let puntos_suiza = fila_suiza.getElementsByTagName("td");

    //-------------------------------------------------------------------
    //Inicializar variables globales
    var global_brasil = 0
    var global_camerun = 0
    var global_serbia = 0
    var global_suiza = 0
    //Variables PJ
    var global_brasil_pj = 0
    var global_camerun_pj = 0
    var global_serbia_pj = 0
    var global_suiza_pj = 0
    //Variables PG
    var global_brasil_pg = 0
    var global_camerun_pg = 0
    var global_serbia_pg = 0
    var global_suiza_pg = 0
    //Variables PE
    var global_brasil_pe = 0
    var global_camerun_pe = 0
    var global_serbia_pe = 0
    var global_suiza_pe = 0
    //Variables PP
    var global_brasil_pp = 0
    var global_camerun_pp = 0
    var global_serbia_pp = 0
    var global_suiza_pp = 0
    //Variables de goles A FAVOR
    var global_brasil_gf = 0
    var global_camerun_gf = 0
    var global_suiza_gf = 0
    var global_serbia_gf = 0
    //Variables de goles EN CONTRA
    var global_brasil_gc = 0
    var global_camerun_gc = 0
    var global_suiza_gc = 0
    var global_serbia_gc = 0
    //Variables de DF goles
    var global_brasil_dg = 0
    var global_camerun_dg = 0
    var global_suiza_dg = 0
    var global_serbia_dg = 0
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
        var pts_suiza_1 = part1(partido_1_L, partido_1_V) //3
        var pts_camerun_1 = part2(partido_1_V, partido_1_L) //0

        //Sumar a los puntos grupales
        global_suiza = global_suiza + pts_suiza_1
        global_camerun = global_camerun + pts_camerun_1

        //Partidos
        var res_local_1 = PG(pts_suiza_1, pts_camerun_1)
        var res_visita_1 = PG(pts_camerun_1, pts_suiza_1)
        var res_empate_1 = PE(pts_suiza_1, pts_camerun_1)

        //Sumar PG
        global_suiza_pg = global_suiza_pg + res_local_1
        global_camerun_pg = global_camerun_pg + res_visita_1
        //Sumar PE
        global_suiza_pe = global_suiza_pe + res_empate_1
        global_camerun_pe = global_camerun_pe + res_empate_1
        //Sumar PP
        global_suiza_pp = global_suiza_pp + res_visita_1
        global_camerun_pp = global_camerun_pp + res_local_1

        //Sumar los goles a favor
        global_suiza_gf = global_suiza_gf + partido_1_L // 6
        global_camerun_gf = global_camerun_gf + partido_1_V // 0
        puntos_suiza[5].innerHTML = global_suiza_gf //6
        puntos_camerun[5].innerHTML = global_camerun_gf //0
        //Goles en contra
        global_suiza_gc = global_suiza_gc + partido_1_V // 0 = 0 + 0
        global_camerun_gc = global_camerun_gc + partido_1_L // 0 = 0 + 3
        puntos_suiza[6].innerHTML = global_suiza_gc // 0
        puntos_camerun[6].innerHTML = global_camerun_gc // 3

        //Puntos obtenidos por 1er partido

        if (partido_1_L > partido_1_V) {
            puntos_suiza[8].innerHTML = global_suiza
            puntos_camerun[8].innerHTML = global_camerun
        }
        if (partido_1_L < partido_1_V) {
            //Prueba para ver quien gana
            puntos_suiza[8].innerHTML = global_suiza
            puntos_camerun[8].innerHTML = global_camerun
        }

        if (partido_1_L === partido_1_V) {
            puntos_suiza[8].innerHTML = global_suiza
            puntos_camerun[8].innerHTML = global_camerun
        }

        //Colocar PG
        puntos_suiza[2].innerHTML = global_suiza_pg
        puntos_camerun[2].innerHTML = global_camerun_pg
        //Colocar PE
        puntos_suiza[3].innerHTML = global_suiza_pe
        puntos_camerun[3].innerHTML = global_camerun_pe
        //Colocar PP
        puntos_suiza[4].innerHTML = global_suiza_pp
        puntos_camerun[4].innerHTML = global_camerun_pp

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
        var pts_brasil_1 = part1(partido_2_L, partido_2_V) //3
        var pts_serbia_1 = part2(partido_2_V, partido_2_L) //0

        //Sumar los puntos globales
        global_brasil = global_brasil + pts_brasil_1
        global_serbia = global_serbia + pts_serbia_1

        //Partidos
        var res_local_2 = PG(pts_brasil_1, pts_serbia_1)
        var res_visita_2 = PG(pts_serbia_1, pts_brasil_1)
        var res_empate_2 = PE(pts_brasil_1, pts_serbia_1)

        //Sumar PG
        global_brasil_pg = global_brasil_pg + res_local_2
        global_serbia_pg = global_serbia_pg + res_visita_2
        //Sumar PE
        global_brasil_pe = global_brasil_pe + res_empate_2
        global_serbia_pe = global_serbia_pe + res_empate_2
        //Sumar PP
        global_brasil_pp = global_brasil_pp + res_visita_2
        global_serbia_pp = global_serbia_pp + res_local_2

        //Sumar los goles a favor
        global_brasil_gf = global_brasil_gf + partido_2_L
        global_serbia_gf = global_serbia_gf + partido_2_V
        puntos_brasil[5].innerHTML = global_brasil_gf
        puntos_serbia[5].innerHTML = global_serbia_gf
        //Sumar goles en contra
        global_brasil_gc = global_brasil_gc + partido_2_V // 0 = 0 + 0
        global_serbia_gc = global_serbia_gc + partido_2_L // 3 = 3 + 0
        puntos_brasil[6].innerHTML = global_brasil_gc
        puntos_serbia[6].innerHTML = global_serbia_gc
        //Restar diferencia de goles
        //puntos_brasil[7].innerHTML = global_brasil_gf - global_serbia_gc
        //puntos_serbia[7].innerHTML = global_serbia_gf - global_brasil_gc


        //Puntos obtenidos por 1er partido
        if (partido_2_L > partido_2_V) {
            puntos_brasil[8].innerHTML = global_brasil
            puntos_serbia[8].innerHTML = global_serbia
        }
        if (partido_2_L < partido_2_V) {
            puntos_brasil[8].innerHTML = global_brasil
            puntos_serbia[8].innerHTML = global_serbia
        }
        if (partido_2_L === partido_2_V) {
            puntos_brasil[8].innerHTML = global_brasil
            puntos_serbia[8].innerHTML = global_serbia
        }
        //Colocar PG
        puntos_brasil[2].innerHTML = global_brasil_pg
        puntos_serbia[2].innerHTML = global_serbia_pg
        //Colocar PE
        puntos_brasil[3].innerHTML = global_brasil_pe
        puntos_serbia[3].innerHTML = global_serbia_pe
        //Colocar PP
        puntos_brasil[4].innerHTML = global_brasil_pp
        puntos_serbia[4].innerHTML = global_serbia_pp
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
        var pts_camerun_2 = part2(partido_3_L, partido_3_V)
        var pts_serbia_2 = part1(partido_3_V, partido_3_L)

        //Sumar a los puntos grupales
        global_serbia = global_serbia + pts_serbia_2
        global_camerun = global_camerun + pts_camerun_2

        //Partidos
        var res_local_3 = PG(pts_camerun_2, pts_serbia_2)
        var res_visita_3 = PG(pts_serbia_2, pts_camerun_2)
        var res_empate_3 = PE(pts_camerun_2, pts_serbia_2)

        //Sumar PG
        global_camerun_pg = global_camerun_pg + res_local_3
        global_serbia_pg = global_serbia_pg + res_visita_3
        //Sumar PE
        global_camerun_pe = global_camerun_pe + res_empate_3
        global_serbia_pe = global_serbia_pe + res_empate_3
        //Sumar PP
        global_camerun_pp = global_camerun_pp + res_visita_3
        global_serbia_pp = global_serbia_pp + res_local_3

        //Sumar los goles a favor
        global_camerun_gf = global_camerun_gf + partido_3_L // 0 = 0 + 0
        global_serbia_gf = global_serbia_gf + partido_3_V // 3 = 3 + 0
        puntos_camerun[5].innerHTML = global_camerun_gf //0
        puntos_serbia[5].innerHTML = global_serbia_gf // 3
        //Goles en contra
        global_camerun_gc = global_camerun_gc + partido_3_V // 0 = 0 + 0
        global_serbia_gc = global_serbia_gc + partido_3_L // 3 = 3 + 0
        puntos_camerun[6].innerHTML = global_camerun_gc // 3
        puntos_serbia[6].innerHTML = global_serbia_gc // 0
        //Restar diferencia de goles
        //puntos_camerun[7].innerHTML = global_camerun_gf - global_serbia_gc
        //puntos_serbia[7].innerHTML = global_serbia_gf - global_camerun_gc

        //Puntos obtenidos por 3er partido
        if (partido_3_L > partido_3_V) {
            puntos_serbia[8].innerHTML = global_serbia
            puntos_camerun[8].innerHTML = global_camerun
        }
        if (partido_3_L < partido_3_V) {
            puntos_serbia[8].innerHTML = global_serbia
            puntos_camerun[8].innerHTML = global_camerun
        }

        if (partido_3_L === partido_3_V) {
            puntos_serbia[8].innerHTML = global_serbia
            puntos_camerun[8].innerHTML = global_camerun
        }
        //Colocar PG
        puntos_camerun[2].innerHTML = global_camerun_pg
        puntos_serbia[2].innerHTML = global_serbia_pg
        //Colocar PE
        puntos_camerun[3].innerHTML = global_camerun_pe
        puntos_serbia[3].innerHTML = global_serbia_pe
        //Colocar PP
        puntos_camerun[4].innerHTML = global_camerun_pp
        puntos_serbia[4].innerHTML = global_serbia_pp
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
        var pts_brasil_2 = part2(partido_4_L, partido_4_V)
        var pts_suiza_2 = part1(partido_4_V, partido_4_L)

        //Sumar los puntos globales
        global_suiza = global_suiza + pts_suiza_2
        global_brasil = global_brasil + pts_brasil_2

        //Partidos
        var res_local_4 = PG(pts_brasil_2, pts_suiza_2)
        var res_visita_4 = PG(pts_suiza_2, pts_brasil_2)
        var res_empate_4 = PE(pts_brasil_2, pts_suiza_2)

        //Sumar PG
        global_brasil_pg = global_brasil_pg + res_local_4
        global_suiza_pg = global_suiza_pg + res_visita_4
        //Sumar PE
        global_brasil_pe = global_brasil_pe + res_empate_4
        global_suiza_pe = global_suiza_pe + res_empate_4
        //Sumar PP
        global_brasil_pp = global_brasil_pp + res_visita_4
        global_suiza_pp = global_suiza_pp + res_local_4

        //Sumar los goles a favor
        global_suiza_gf = global_suiza_gf + partido_4_V
        global_brasil_gf = global_brasil_gf + partido_4_L
        puntos_suiza[5].innerHTML = global_suiza_gf
        puntos_brasil[5].innerHTML = global_brasil_gf
        //Goles en contra
        global_brasil_gc = global_brasil_gc + partido_4_V //
        global_suiza_gc = global_suiza_gc + partido_4_L
        puntos_brasil[6].innerHTML = global_brasil_gc //
        puntos_suiza[6].innerHTML = global_suiza_gc // 0
        //Restar diferencia de goles
        //puntos_suiza[7].innerHTML = global_suiza_gf - global_brasil_gc
        //puntos_brasil[7].innerHTML = global_brasil_gf - global_suiza_gc

        //Puntos obtenidos por 4er partido
        if (partido_4_L > partido_4_V) {
            puntos_suiza[8].innerHTML = global_suiza
            puntos_brasil[8].innerHTML = global_brasil
        }
        if (partido_4_L < partido_4_V) {
            puntos_suiza[8].innerHTML = global_suiza
            puntos_brasil[8].innerHTML = global_brasil
        }

        if (partido_4_L === partido_4_V) {
            puntos_suiza[8].innerHTML = global_suiza
            puntos_brasil[8].innerHTML = global_brasil
        }
        //Colocar PG
        puntos_suiza[2].innerHTML = global_suiza_pg
        puntos_brasil[2].innerHTML = global_brasil_pg
        //Colocar PE
        puntos_suiza[3].innerHTML = global_suiza_pe
        puntos_brasil[3].innerHTML = global_brasil_pe
        //Colocar PP
        puntos_suiza[4].innerHTML = global_suiza_pp
        puntos_brasil[4].innerHTML = global_brasil_pp
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
        var pts_camerun_3 = part2(partido_5_L, partido_5_V)
        var pts_brasil_3 = part1(partido_5_V, partido_5_L)

        //Sumar los puntos globales
        global_brasil = global_brasil + pts_brasil_3
        global_camerun = global_camerun + pts_camerun_3

        //Partidos
        var res_local_5 = PG(pts_camerun_3, pts_brasil_3)
        var res_visita_5 = PG(pts_brasil_3, pts_camerun_3)
        var res_empate_5 = PE(pts_camerun_3, pts_brasil_3)

        //Sumar PG
        global_camerun_pg = global_camerun_pg + res_local_5
        global_brasil_pg = global_brasil_pg + res_visita_5
        //Sumar PE
        global_camerun_pe = global_camerun_pe + res_empate_5
        global_brasil_pe = global_brasil_pe + res_empate_5
        //Sumar PP
        global_camerun_pp = global_camerun_pp + res_visita_5
        global_brasil_pp = global_brasil_pp + res_local_5

        //Sumar los goles a favor
        global_brasil_gf = global_brasil_gf + partido_5_V
        global_camerun_gf = global_camerun_gf + partido_5_L
        puntos_brasil[5].innerHTML = global_brasil_gf
        puntos_camerun[5].innerHTML = global_camerun_gf
        //Goles en contra
        global_camerun_gc = global_camerun_gc + partido_5_V // 0 = 0 + 0
        global_brasil_gc = global_brasil_gc + partido_5_L // 3 = 3 + 0
        puntos_camerun[6].innerHTML = global_camerun_gc // 3
        puntos_brasil[6].innerHTML = global_brasil_gc // 0
        //Restar diferencia de goles
        //puntos_brasil[7].innerHTML = global_brasil_gf - global_camerun_gc
        //puntos_camerun[7].innerHTML = global_camerun_gf - global_brasil_gc

        //Puntos obtenidos por 5er partido
        if (partido_5_L > partido_5_V) {
            puntos_brasil[8].innerHTML = global_brasil
            puntos_camerun[8].innerHTML = global_camerun
        }
        if (partido_5_L < partido_5_V) {
            puntos_brasil[8].innerHTML = global_brasil
            puntos_camerun[8].innerHTML = global_camerun
        }

        if (partido_5_L === partido_5_V) {
            puntos_brasil[8].innerHTML = global_brasil
            puntos_camerun[8].innerHTML = global_camerun
        }
        //Colocar PG
        puntos_brasil[2].innerHTML = global_brasil_pg
        puntos_serbia[2].innerHTML = global_serbia_pg
        //Colocar PE
        puntos_brasil[3].innerHTML = global_brasil_pe
        puntos_serbia[3].innerHTML = global_serbia_pe
        //Colocar PP
        puntos_brasil[4].innerHTML = global_brasil_pp
        puntos_serbia[4].innerHTML = global_serbia_pp
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
        var pts_serbia_3 = part2(partido_6_L, partido_6_V)
        var pts_suiza_3 = part1(partido_6_V, partido_6_L)

        //Sumar los puntos globales
        global_suiza = global_suiza + pts_suiza_3
        global_serbia = global_serbia + pts_serbia_3

        //Partidos
        var res_local_6 = PG(pts_serbia_3, pts_suiza_3)
        var res_visita_6 = PG(pts_suiza_3, pts_serbia_3)
        var res_empate_6 = PE(pts_serbia_3, pts_suiza_3)

        //Sumar PG
        global_serbia_pg = global_serbia_pg + res_local_6
        global_suiza_pg = global_suiza_pg + res_visita_6
        //Sumar PE
        global_serbia_pe = global_serbia_pe + res_empate_6
        global_suiza_pe = global_suiza_pe + res_empate_6
        //Sumar PP
        global_serbia_pp = global_serbia_pp + res_visita_6
        global_suiza_pp = global_suiza_pp + res_local_6

        //Sumar los goles a favor
        global_suiza_gf = global_suiza_gf + partido_6_V
        global_serbia_gf = global_serbia_gf + partido_6_L
        puntos_suiza[5].innerHTML = global_suiza_gf
        puntos_serbia[5].innerHTML = global_serbia_gf
        //Sumar goles en contra
        //Goles en contra
        global_serbia_gc = global_serbia_gc + partido_6_V // 0 = 0 + 0
        global_suiza_gc = global_suiza_gc + partido_6_L // 3 = 3 + 0
        puntos_suiza[6].innerHTML = global_suiza_gc
        puntos_serbia[6].innerHTML = global_serbia_gc
        //Restar diferencia de goles
        //puntos_suiza[7].innerHTML = global_suiza_gf - global_serbia_gc
        //puntos_serbia[7].innerHTML = global_serbia_gf - global_suiza_gc

        //Puntos obtenidos por 6er partido
        if (partido_6_L > partido_6_V) {
            puntos_suiza[8].innerHTML = global_suiza
            puntos_serbia[8].innerHTML = global_serbia
        }
        if (partido_6_L < partido_6_V) {
            puntos_suiza[8].innerHTML = global_suiza
            puntos_serbia[8].innerHTML = global_serbia
        }

        if (partido_6_L === partido_6_V) {
            puntos_suiza[8].innerHTML = global_suiza
            puntos_serbia[8].innerHTML = global_serbia
        }
        //Colocar PG
        puntos_suiza[2].innerHTML = global_suiza_pg
        puntos_serbia[2].innerHTML = global_serbia_pg
        //Colocar PE
        puntos_suiza[3].innerHTML = global_suiza_pe
        puntos_serbia[3].innerHTML = global_serbia_pe
        //Colocar PP
        puntos_suiza[4].innerHTML = global_suiza_pp
        puntos_serbia[4].innerHTML = global_serbia_pp
    }

    //Restar diferencia de goles
    global_suiza_dg = global_suiza_gf - global_suiza_gc
    global_brasil_dg = global_brasil_gf - global_brasil_gc
    global_serbia_dg = global_serbia_gf - global_serbia_gc
    global_camerun_dg = global_camerun_gf - global_camerun_gc
    //Insertarlos en el html
    puntos_suiza[7].innerHTML = global_suiza_dg
    puntos_brasil[7].innerHTML = global_brasil_dg
    puntos_serbia[7].innerHTML = global_serbia_dg
    puntos_camerun[7].innerHTML = global_camerun_dg
    //Partidos Jugados
    global_brasil_pj = 3
    global_suiza_pj = 3
    global_serbia_pj = 3
    global_camerun_pj = 3
    //Colocar PARTIDOS
    puntos_brasil[1].innerHTML = global_brasil_pj
    puntos_suiza[1].innerHTML = global_suiza_pj
    puntos_serbia[1].innerHTML = global_serbia_pj
    puntos_camerun[1].innerHTML = global_camerun_pj
    clasi7()

}

function clasi7() {

    //brasil
    //Obtener valores td de la columa brasil
    let fila_brasil = document.getElementById("row-brasil");
    let puntos_brasil = fila_brasil.getElementsByTagName("td");

    //----------------------------------------------------------

    //camerun
    //Obtener valores td de la columa camerun
    let fila_camerun = document.getElementById("row-camerun");
    let puntos_camerun = fila_camerun.getElementsByTagName("td");

    //----------------------------------------------------------

    //serbia
    //Obtener valores td de la columa serbia
    let fila_serbia = document.getElementById("row-serbia");
    let puntos_serbia = fila_serbia.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //suiza
    //Obtener valores td de la columa suiza
    let fila_suiza = document.getElementById("row-suiza");
    let puntos_suiza = fila_suiza.getElementsByTagName("td");

    //-------------------------------------------------------------------

    //Puntos de los equipos
    var points_brasil = parseInt(puntos_brasil[8].innerHTML);
    var points_camerun = parseInt(puntos_camerun[8].innerHTML);
    var points_serbia = parseInt(puntos_serbia[8].innerHTML);
    var points_suiza = parseInt(puntos_suiza[8].innerHTML);
    //Goles a favor
    var gf_brasil = parseInt(puntos_brasil[5].innerHTML);
    var gf_camerun = parseInt(puntos_camerun[5].innerHTML);
    var gf_serbia = parseInt(puntos_serbia[5].innerHTML);
    var gf_suiza = parseInt(puntos_suiza[5].innerHTML);
    //Diferencia de goles
    var df_brasil = parseInt(puntos_brasil[7].innerHTML);
    var df_camerun = parseInt(puntos_camerun[7].innerHTML);
    var df_serbia = parseInt(puntos_serbia[7].innerHTML);
    var df_suiza = parseInt(puntos_suiza[7].innerHTML);

    //Lista con los puntos de los equipos
    let lista_puntos_1 = [points_serbia, points_suiza, points_camerun, points_brasil]
    let lista_df = [df_brasil, df_camerun, df_serbia, df_suiza]
    lista_puntos_1.sort(Comparar)
    lista_df.sort(Comparar)

    //------------CONDICIONES PARA EL 1ER PUESTO-----------------------//

    //Condiciones para 1er puesto camerun y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_camerun) {
        //camerun iguala con Suiza
        if (lista_puntos_1[3] === points_suiza) {
            if (df_camerun > df_suiza) {
                document.getElementById("octavos13").innerText = puntos_camerun[0].innerText;
                document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                console.log("camerun primero  y Suiza Segundo")
            }
            if (df_camerun === df_suiza) {
                if (gf_camerun > gf_suiza) {
                    document.getElementById("octavos13").innerText = puntos_camerun[0].innerText;
                    document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                }
            }
            if (df_camerun < df_suiza) {
                document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
            }
        }
        //camerun iguala con serbia
        if (lista_puntos_1[3] === points_serbia) {
            if (df_camerun > df_serbia) {
                document.getElementById("octavos13").innerText = puntos_camerun[0].innerText;
                document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                console.log("camerun primero y serbia segundo")
            }
            if (df_camerun === df_serbia) {
                if (gf_camerun > gf_serbia) {
                    document.getElementById("octavos13").innerText = puntos_camerun[0].innerText;
                    document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                }

            }
            if (df_camerun < df_serbia) {
                document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
            }
        }

        //camerun iguala con brasil
        if (lista_puntos_1[3] === points_brasil) {
            if (df_camerun > df_brasil) {
                document.getElementById("octavos13").innerText = puntos_camerun[0].innerText;
                document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                console.log("camerun primero  y brasil Segundo")
            }
            if (df_camerun === df_brasil) {
                if (gf_camerun > gf_brasil) {
                    document.getElementById("octavos13").innerText = puntos_camerun[0].innerText;
                    document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                }
            }
            if (df_camerun < df_brasil) {
                document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
            }
        }
        //camerun no iguala con nadie
        if (lista_puntos_1[3] !== points_brasil && lista_puntos_1[3] !== points_serbia &&
            lista_puntos_1[3] !== points_suiza) {
            document.getElementById("octavos13").innerText = puntos_camerun[0].innerText;
        }

    }

    //Condiciones para 1er puesto brasil y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_brasil) {
        //brasil iguala con camerun
        if (lista_puntos_1[3] === points_camerun) {
            if (df_brasil > df_camerun) {
                document.getElementById("octavos13").innerText = puntos_brasil[0].innerText;
                document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                console.log("brasil primero  y camerun Segundo")
            }
            if (df_brasil === df_camerun) {
                if (gf_brasil > gf_camerun) {
                    document.getElementById("octavos13").innerText = puntos_brasil[0].innerText;
                    document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                }

            }
            if (df_brasil < df_camerun) {
                document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
            }
        }
        //brasil iguala con suiza
        if (lista_puntos_1[3] === points_suiza) {
            if (df_brasil > df_suiza) {
                document.getElementById("octavos13").innerText = puntos_brasil[0].innerText;
                document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                console.log("brasil primero  y Suiza Segundo")
            }
            if (df_brasil === df_suiza) {
                if (gf_brasil > gf_suiza) {
                    document.getElementById("octavos13").innerText = puntos_brasil[0].innerText;
                    document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                }
            }
            if (df_brasil < df_suiza) {
                document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
            }
        }

        //brasil iguala con serbia
        if (lista_puntos_1[3] === points_serbia) {
            if (df_brasil > df_serbia) {
                document.getElementById("octavos13").innerText = puntos_brasil[0].innerText;
                document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                console.log("brasil primero  y serbia Segundo")
            }
            if (df_brasil === df_serbia) {
                if (gf_brasil > gf_serbia) {
                    document.getElementById("octavos13").innerText = puntos_brasil[0].innerText;
                    document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                }

            }
            if (df_brasil < df_serbia) {
                document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
            }
        }
        //brasil no iguala con nadie
        if (lista_puntos_1[3] !== points_serbia && lista_puntos_1[3] !== points_suiza &&
            lista_puntos_1[3] !== points_camerun) {
            document.getElementById("octavos13").innerText = puntos_brasil[0].innerText;
        }

    }

    //Condiciones para 1er puesto serbia y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_serbia) {
        //serbia iguala con camerun
        if (lista_puntos_1[3] === points_camerun) {
            if (df_serbia > df_camerun) {
                document.getElementById("octavos13").innerText = puntos_serbia[0].innerText;
                document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                console.log("serbia primero  y camerun Segundo")
            }
            if (df_serbia === df_camerun) {
                if (gf_serbia > gf_camerun) {
                    document.getElementById("octavos13").innerText = puntos_serbia[0].innerText;
                    document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                }
            }
            if (df_serbia < df_camerun) {
                document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
            }
        }
        //serbia iguala con suiza
        if (lista_puntos_1[3] === points_suiza) {
            if (df_serbia > df_suiza) {
                document.getElementById("octavos13").innerText = puntos_serbia[0].innerText;
                document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                console.log("serbia primero  y Suiza Segundo")
            }
            if (df_serbia === df_suiza) {
                if (gf_serbia > gf_suiza) {
                    document.getElementById("octavos13").innerText = puntos_serbia[0].innerText;
                    document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                }

            }
            if (df_serbia < df_suiza) {
                document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
            }
        }

        //serbia iguala con brasil
        if (lista_puntos_1[3] === points_brasil) {
            if (df_serbia > df_brasil) {
                document.getElementById("octavos13").innerText = puntos_serbia[0].innerText;
                document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                console.log("serbia primero  y brasil Segundo")
            }
            if (df_serbia === df_brasil) {
                if (gf_serbia > gf_brasil) {
                    document.getElementById("octavos13").innerText = puntos_serbia[0].innerText;
                    document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                }

            }
            if (df_serbia < df_brasil) {
                document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
            }
        }
        //serbia no iguala con nadie
        if (lista_puntos_1[3] !== points_brasil && lista_puntos_1[3] !== points_suiza &&
            lista_puntos_1[3] !== points_camerun) {
            document.getElementById("octavos13").innerText = puntos_serbia[0].innerText;
        }

    }

    //Condiciones para 1er puesto suiza y 2do ?
    //En caso de igualdad de goles
    if (lista_puntos_1[3] === points_suiza) {
        //suiza iguala con camerun
        if (lista_puntos_1[3] === points_camerun) {
            if (df_suiza > df_camerun) {
                document.getElementById("octavos13").innerText = puntos_suiza[0].innerText;
                document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                console.log("suiza primero  y camerun Segundo")
            }
            if (df_suiza === df_camerun) {
                if (gf_suiza > gf_camerun) {
                    document.getElementById("octavos13").innerText = puntos_suiza[0].innerText;
                    document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                }
            }
            if (df_suiza < df_camerun) {
                document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
            }
        }
        //suiza iguala con serbia
        if (lista_puntos_1[3] === points_serbia) {
            if (df_suiza > df_serbia) {
                document.getElementById("octavos13").innerText = puntos_suiza[0].innerText;
                document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                console.log("suiza primero y serbia segundo")
            }
            if (df_suiza === df_serbia) {
                if (gf_suiza > gf_serbia) {
                    document.getElementById("octavos13").innerText = puntos_suiza[0].innerText;
                    document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                }
            }
            if (df_suiza < df_serbia) {
                document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
            }
        }

        //suiza iguala con brasil
        if (lista_puntos_1[3] === points_brasil) {
            if (df_suiza > df_brasil) {
                document.getElementById("octavos13").innerText = puntos_suiza[0].innerText;
                document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                console.log("suiza primero y brasil Segundo")
            }
            if (df_suiza === df_brasil) {
                if (gf_suiza > gf_brasil) {
                    document.getElementById("octavos13").innerText = puntos_suiza[0].innerText;
                    document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                }
            }
            if (df_suiza < df_brasil) {
                document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
            }
        }
        //Paises no iguala con nadie
        if (lista_puntos_1[3] !== points_brasil && lista_puntos_1[3] !== points_serbia &&
            lista_puntos_1[3] !== points_camerun) {
            document.getElementById("octavos13").innerText = puntos_suiza[0].innerText;
        }

    }

    //--------------------CONDICIONES PARA EL 2DO PUESTO--------------------------- //

    if (document.getElementById("octavos13").innerText !== puntos_camerun[0].innerText) {
        //Condiciones para 2do puesto camerun
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_camerun) {
            //camerun sin serbia
            if (document.getElementById("octavos13").innerText !== "Serbia") {
                //camerun iguala con suiza
                if (lista_puntos_1[2] === points_suiza) {
                    if (df_camerun > df_suiza) {
                        document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        console.log("camerun segundo y suiza 3er")
                    }
                    if (df_camerun === df_suiza) {
                        if (gf_camerun > gf_suiza) {
                            document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        }
                    }
                }
                //camerun iguala con brasil
                if (lista_puntos_1[2] === points_brasil) {
                    if (df_camerun > df_brasil) {
                        document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        console.log("camerun segundo y brasil 3ero")
                    }
                    if (df_camerun === df_brasil) {
                        if (gf_camerun > gf_brasil) {
                            document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        }
                    }
                }
            }
            //camerun sin suiza
            if (document.getElementById("octavos13").innerText !== "Suiza") {
                //camerun iguala con serbia
                if (lista_puntos_1[2] === points_serbia) {
                    if (df_camerun > df_serbia) {
                        document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        console.log("camerun segundo y serbia 3ero")
                    }
                    if (df_camerun === df_serbia) {
                        if (gf_camerun > gf_serbia) {
                            document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        }
                    }
                }
                //camerun iguala con brasil
                if (lista_puntos_1[2] === points_brasil) {
                    if (df_camerun > df_brasil) {
                        document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        console.log("camerun segundo y brasil 3ero")
                    }
                    if (df_camerun === df_brasil) {
                        if (gf_camerun > gf_brasil) {
                            document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        }
                    }
                }
            }
            //camerun sin Brasil
            if (document.getElementById("octavos13").innerText !== "Brasil") {
                //camerun iguala con serbia
                if (lista_puntos_1[2] === points_serbia) {
                    if (df_camerun > df_serbia) {
                        document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        console.log("camerun segundo y serbia 3ero")
                    }
                    if (df_camerun === df_serbia) {
                        if (gf_camerun > gf_serbia) {
                            document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        }
                    }
                }
                //camerun iguala con suiza
                if (lista_puntos_1[2] === points_suiza) {
                    if (df_camerun > df_suiza) {
                        document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        console.log("camerun segundo y suiza 3er")
                    }
                    if (df_camerun === df_suiza) {
                        if (gf_camerun > gf_suiza) {
                            document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        }
                    }
                }
            }
            //camerun no iguala con nadie
            if (lista_puntos_1[2] !== points_brasil && lista_puntos_1[2] !== points_suiza && lista_puntos_1[2] !== points_serbia) {
                document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
            }

        }
    }


    if (document.getElementById("octavos13").innerText !== puntos_brasil[0].innerText) {
        //Condiciones para 2do puesto brasil
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_brasil) {
            //brasil sin Brasil
            if (document.getElementById("octavos13").innerText !== "Camerun") {
                //brasil iguala con suiza
                if (lista_puntos_1[2] === points_suiza) {
                    if (df_brasil > df_suiza) {
                        document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        console.log("brasil segundo y suiza 3er")
                    }
                    if (df_brasil === df_suiza) {
                        if (gf_brasil > gf_suiza) {
                            document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        }
                    }
                }
                //brasil iguala con serbia
                if (lista_puntos_1[2] === points_serbia) {
                    if (df_brasil > df_serbia) {
                        document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        console.log("brasil segundo y serbia 3ero")
                    }
                    if (df_brasil === df_serbia) {
                        if (gf_brasil > gf_serbia) {
                            document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        }
                    }

                }
            }
            if (document.getElementById("octavos13").innerText !== "Serbia") {
                //brasil iguala con camerun
                if (lista_puntos_1[2] === points_camerun) {
                    if (df_brasil > df_camerun) {
                        document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        console.log("brasil segundo y camerun 3ero")
                    }
                    if (df_brasil === df_camerun) {
                        if (gf_brasil > gf_camerun) {
                            document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        }
                    }
                }
                //brasil iguala con suiza
                if (lista_puntos_1[2] === points_suiza) {
                    if (df_brasil > df_suiza) {
                        document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        console.log("brasil segundo y suiza 3er")
                    }
                    if (df_brasil === df_suiza) {
                        if (gf_brasil > gf_suiza) {
                            document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        }
                    }
                }
            }
            if (document.getElementById("octavos13").innerText !== "Suiza") {
                //brasil iguala con camerun
                if (lista_puntos_1[2] === points_camerun) {
                    if (df_brasil > df_camerun) {
                        document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        console.log("brasil segundo y camerun 3ero")
                    }
                    if (df_brasil === df_camerun) {
                        if (gf_brasil > gf_camerun) {
                            document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        }
                    }
                }
                //brasil iguala con serbia
                if (lista_puntos_1[2] === points_serbia) {
                    if (df_brasil > df_serbia) {
                        document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        console.log("brasil segundo y serbia 3ero")
                    }
                    if (df_brasil === df_serbia) {
                        if (gf_brasil > gf_serbia) {
                            document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        }
                    }

                }
            }

            //brasil no iguala con nadie
            if (lista_puntos_1[2] !== points_serbia && lista_puntos_1[2] !== points_suiza &&
                lista_puntos_1[2] !== points_camerun) {
                document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
            }
        }
    }


    if (document.getElementById("octavos13").innerText !== puntos_serbia[0].innerText) {
        //Condiciones para 2do puesto serbia
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_serbia) {
            //serbia SIN suiza
            if (document.getElementById("octavos13").innerText === "Suiza") {
                //serbia iguala con camerun
                if (lista_puntos_1[2] === points_camerun) {
                    if (df_serbia > df_camerun) {
                        document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        console.log("serbia segundo y camerun 3ero")
                    }
                    if (df_serbia === df_camerun) {
                        if (gf_serbia > gf_camerun) {
                            document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        }
                    }

                }
                //serbia iguala con brasil
                if (lista_puntos_1[2] === points_brasil) {
                    if (df_serbia > df_brasil) {
                        document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        console.log("serbia segundo y brasil 3ero")
                    }
                    if (df_serbia === df_brasil) {
                        if (gf_serbia > gf_brasil) {
                            document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        }
                    }

                }
            }
            //serbia SIN camerun
            if (document.getElementById("octavos13").innerText === "Camerun") {
                //serbia iguala con suiza
                if (lista_puntos_1[2] === points_suiza) {
                    if (df_serbia > df_suiza) {
                        document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        console.log("serbia segundo y suiza 3er")
                    }
                    if (df_serbia === df_suiza) {
                        if (gf_serbia > gf_suiza) {
                            document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        }
                    }

                }
                //serbia iguala con brasil
                if (lista_puntos_1[2] === points_brasil) {
                    if (df_serbia > df_brasil) {
                        document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        console.log("serbia segundo y brasil 3ero")
                    }
                    if (df_serbia === df_brasil) {
                        if (gf_serbia > gf_brasil) {
                            document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        }
                    }

                }
            }
            //serbia SIN Brasil
            if (document.getElementById("octavos13").innerText === "Brasil") {
                //serbia iguala con suiza
                if (lista_puntos_1[2] === points_suiza) {
                    if (df_serbia > df_suiza) {
                        document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        console.log("serbia segundo y suiza 3er")
                    }
                    if (df_serbia === df_suiza) {
                        if (gf_serbia > gf_suiza) {
                            document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        }
                    }

                }
                //serbia iguala con camerun
                if (lista_puntos_1[2] === points_camerun) {
                    if (df_serbia > df_camerun) {
                        document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        console.log("serbia segundo y camerun 3ero")
                    }
                    if (df_serbia === df_camerun) {
                        if (gf_serbia > gf_camerun) {
                            document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        }
                    }

                }
            }
            //serbia no iguala con nadie
            if (lista_puntos_1[2] !== points_brasil && lista_puntos_1[2] !== points_suiza &&
                lista_puntos_1[2] !== points_camerun) {
                document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
            }

        }
    }

    if (document.getElementById("octavos13").innerText !== puntos_suiza[0].innerText) {
        //Condiciones para 2do puesto suiza
        //En caso de igualdad de goles
        if (lista_puntos_1[2] === points_suiza) {
            //suiza SIN Brasil
            if (document.getElementById("octavos13").innerText === "Brasil") {
                //suiza iguala con camerun
                if (lista_puntos_1[2] === points_camerun) {
                    if (df_suiza > df_camerun) {
                        document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        console.log("suiza segundo y camerun 3ero")
                    }
                    if (df_suiza === df_camerun) {
                        if (gf_suiza > gf_camerun) {
                            document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        }
                    }
                }
                //suiza iguala con serbia
                if (lista_puntos_1[2] === points_serbia) {
                    if (df_suiza > df_serbia) {
                        document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        console.log("suiza segundo y serbia Bajos 3er")
                    }
                    if (df_suiza === df_serbia) {
                        if (gf_suiza > gf_serbia) {
                            document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        }
                    }

                }
            }
            //suiza SIN camerun
            if (document.getElementById("octavos13").innerText === "Camerun") {
                //suiza iguala con brasil
                if (lista_puntos_1[2] === points_brasil) {
                    if (df_suiza > df_brasil) {
                        document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        console.log("suiza segundo y brasil 3ero")
                    }
                    if (df_suiza === df_brasil) {
                        if (gf_suiza > gf_brasil) {
                            document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        }
                    }
                }
                //suiza iguala con serbia
                if (lista_puntos_1[2] === points_serbia) {
                    if (df_suiza > df_serbia) {
                        document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        console.log("suiza segundo y serbia Bajos 3er")
                    }
                    if (df_suiza === df_serbia) {
                        if (gf_suiza > gf_serbia) {
                            document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_serbia[0].innerText;
                        }
                    }

                }
            }
            //suiza SIN Serbia
            if (document.getElementById("octavos13").innerText === "Serbia") {
                //suiza iguala con brasil
                if (lista_puntos_1[2] === points_brasil) {
                    if (df_suiza > df_brasil) {
                        document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        console.log("suiza segundo y brasil 3ero")
                    }
                    if (df_suiza === df_brasil) {
                        if (gf_suiza > gf_brasil) {
                            document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_brasil[0].innerText;
                        }
                    }
                }
                //suiza iguala con camerun
                if (lista_puntos_1[2] === points_camerun) {
                    if (df_suiza > df_camerun) {
                        document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        console.log("suiza segundo y camerun 3ero")
                    }
                    if (df_suiza === df_camerun) {
                        if (gf_suiza > gf_camerun) {
                            document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
                        }
                        else {
                            document.getElementById("octavos16").innerText = puntos_camerun[0].innerText;
                        }
                    }
                }
            }
            //suiza no iguala con nadie
            if (lista_puntos_1[2] !== points_brasil && lista_puntos_1[2] !== points_serbia &&
                lista_puntos_1[2] !== points_camerun) {
                document.getElementById("octavos16").innerText = puntos_suiza[0].innerText;
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


export default CompRonda7;