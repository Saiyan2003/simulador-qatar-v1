import React from 'react';

function oct1() {
    let octavos1 = document.getElementById("octavos1").innerText;
    document.getElementById("cuartos1").innerHTML = octavos1;
}

function oct2() {
    let octavos2 = document.getElementById("octavos2").innerText;
    document.getElementById("cuartos1").innerHTML = octavos2;
}

function oct3() {
    let octavos3 = document.getElementById("octavos3").innerText;
    document.getElementById("cuartos3").innerHTML = octavos3;
}

function oct4() {
    let octavos4 = document.getElementById("octavos4").innerText;
    document.getElementById("cuartos3").innerHTML = octavos4;
}

function oct5() {
    let octavos5 = document.getElementById("octavos5").innerText;
    document.getElementById("cuartos2").innerHTML = octavos5;
}

function oct6() {
    let octavos6 = document.getElementById("octavos6").innerText;
    document.getElementById("cuartos2").innerHTML = octavos6;
}

function oct7() {
    let octavos7 = document.getElementById("octavos7").innerText;
    document.getElementById("cuartos4").innerHTML = octavos7;
}

function oct8() {
    let octavos8 = document.getElementById("octavos8").innerText;
    document.getElementById("cuartos4").innerHTML = octavos8;
}

function oct9() {
    let octavos9 = document.getElementById("octavos9").innerText;
    document.getElementById("cuartos5").innerHTML = octavos9;
}

function oct10() {
    let octavos10 = document.getElementById("octavos10").innerText;
    document.getElementById("cuartos5").innerHTML = octavos10;
}

function oct11() {
    let octavos11 = document.getElementById("octavos11").innerText;
    document.getElementById("cuartos7").innerHTML = octavos11;
}

function oct12() {
    let octavos12 = document.getElementById("octavos12").innerText;
    document.getElementById("cuartos7").innerHTML = octavos12;
}

function oct13() {
    let octavos13 = document.getElementById("octavos13").innerText;
    document.getElementById("cuartos6").innerHTML = octavos13;
}

function oct14() {
    let octavos14 = document.getElementById("octavos14").innerText;
    document.getElementById("cuartos6").innerHTML = octavos14;
}

function oct15() {
    let octavos15 = document.getElementById("octavos15").innerText;
    document.getElementById("cuartos8").innerHTML = octavos15;
}

function oct16() {
    let octavos16 = document.getElementById("octavos16").innerText;
    document.getElementById("cuartos8").innerHTML = octavos16;
}

function cuart1() {
    let cuartos1 = document.getElementById("cuartos1").innerText;
    document.getElementById("semis1").innerHTML = cuartos1;
}

function cuart2() {
    let cuartos2 = document.getElementById("cuartos2").innerText;
    document.getElementById("semis1").innerHTML = cuartos2;
}

function cuart3() {
    let cuartos3 = document.getElementById("cuartos3").innerText;
    document.getElementById("semis3").innerHTML = cuartos3;
}

function cuart4() {
    let cuartos4 = document.getElementById("cuartos4").innerText;
    document.getElementById("semis3").innerHTML = cuartos4;
}

function cuart5() {
    let cuartos5 = document.getElementById("cuartos5").innerText;
    document.getElementById("semis2").innerHTML = cuartos5;
}

function cuart6() {
    let cuartos6 = document.getElementById("cuartos6").innerText;
    document.getElementById("semis2").innerHTML = cuartos6;
}

function cuart7() {
    let cuartos7 = document.getElementById("cuartos7").innerText;
    document.getElementById("semis4").innerHTML = cuartos7;
}

function cuart8() {
    let cuartos8 = document.getElementById("cuartos8").innerText;
    document.getElementById("semis4").innerHTML = cuartos8;
}

function semi1() {
    let semis1 = document.getElementById("semis1").innerText;
    document.getElementById("final1").innerHTML = semis1;
}

function semi2() {
    let semis2 = document.getElementById("semis2").innerText;
    document.getElementById("final1").innerHTML = semis2;
}

function semi3() {
    let semis3 = document.getElementById("semis3").innerText;
    document.getElementById("final2").innerHTML = semis3;
}

function semi4() {
    let semis4 = document.getElementById("semis4").innerText;
    document.getElementById("final2").innerHTML = semis4;
}

function final1() {
    let final1 = document.getElementById("final1").innerText;
    document.getElementById("card-ganador").innerHTML = final1;
    campeon();
}

function final2() {
    let final2 = document.getElementById("final2").innerText;
    document.getElementById("card-ganador").innerHTML = final2;
    campeon();
}

function cambios1() {

    let cuartos1 = document.getElementById("cuartos1").innerText;
    let cuartos2 = document.getElementById("cuartos2").innerText;

    if (cuartos1 !== "cuartos1" && cuartos2 !== "cuartos2") {
        document.getElementById("cuar1").disabled = false;
        document.getElementById("cuar2").disabled = false;
    }

    let cuartos3 = document.getElementById("cuartos3").innerText;
    let cuartos4 = document.getElementById("cuartos4").innerText;
    if (cuartos3 !== "cuartos3" && cuartos4 !== "cuartos4") {
        document.getElementById("cuar3").disabled = false;
        document.getElementById("cuar4").disabled = false;
        console.log(cuartos3)
    }

    let cuartos5 = document.getElementById("cuartos5").innerText;
    let cuartos6 = document.getElementById("cuartos6").innerText;

    if (cuartos5 !== "cuartos5" && cuartos6 !== "cuartos6") {
        document.getElementById("cuar5").disabled = false;
        document.getElementById("cuar6").disabled = false;
    }

    let cuartos7 = document.getElementById("cuartos7").innerText;
    let cuartos8 = document.getElementById("cuartos8").innerText;
    if (cuartos7 !== "cuartos7" && cuartos8 !== "cuartos8") {
        document.getElementById("cuar7").disabled = false;
        document.getElementById("cuar8").disabled = false;
    }

    let semis1 = document.getElementById("semis1").innerText;
    let semis2 = document.getElementById("semis2").innerText;
    if (semis1 !== "semis1" && semis2 !== "semis2") {
        document.getElementById("sem1").disabled = false;
        document.getElementById("sem2").disabled = false;
    }

    let semis3 = document.getElementById("semis3").innerText;
    let semis4 = document.getElementById("semis4").innerText;
    if (semis3 !== "semis3" && semis4 !== "semis4") {
        document.getElementById("sem3").disabled = false;
        document.getElementById("sem4").disabled = false;
    }

    let final1 = document.getElementById("final1").innerText;
    let final2 = document.getElementById("final2").innerText;
    if (final1 !== "final1" && final2 !== "final2") {
        document.getElementById("fin1").disabled = false;
        document.getElementById("fin2").disabled = false;
    }

}

function campeon(){
    if (document.getElementById("fin1").disabled === false || document.getElementById("fin2").disabled === false){
        document.getElementById("card-campeon").style.opacity = 1;
    }
}

function CompFaseFinal() {
    return (
        <div className='container' onChange={() => { cambios1() }}>
            <div class="row align-items-center fondo-fase-final container">
                <div class="col octavos1">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check" >
                                <label class="form-check-label" for="flexRadioDefault1" id='octavos1'>
                                    1A
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="oct1" onChange={() => { oct1() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault2" id='octavos2'>
                                    2B
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="oct2" onChange={() => { oct2() }} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault3" id='octavos5'>
                                    1C
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id='oct5' onChange={() => { oct5() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault4" id='octavos6'>
                                    2D
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault2" id='oct6' onChange={() => { oct6() }} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault5" id='octavos9'>
                                    1E
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault3" id='oct9' onChange={() => { oct9() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault6" id='octavos10'>
                                    2F
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault3" id='oct10' onChange={() => { oct10() }} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault7" id='octavos13'>
                                    1G
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault4" id='oct13' onChange={() => { oct13() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault8" id='octavos14'>
                                    2H
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault4" id='oct14' onChange={() => { oct14() }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col cuartos1">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault9" id='cuartos1'>
                                    cuartos1
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault5" id='cuar1' onChange={() => { cuart1() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault10" id='cuartos2'>
                                    cuartos2
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault5" id='cuar2' onChange={() => { cuart2() }} />
                            </div>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br />
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault11" id='cuartos5'>
                                    cuartos5
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault6" id='cuar5' onChange={() => { cuart5() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault12" id='cuartos6'>
                                    cuartos6
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault6" id='cuar6' onChange={() => { cuart6() }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault12" id='semis1'>
                                    semis1
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault7" id='sem1' onChange={() => { semi1() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault23" id='semis2'>
                                    semis2
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault7" id='sem2' onChange={() => { semi2() }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-campeon" id='card-campeon'>
                        <div class="card-header">
                            Campeón
                        </div>
                        <div class="card-body">
                            <p class="card-text" id='card-ganador'>----</p>
                        </div>
                    </div>
                    <br />
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault14" id='final1'>
                                    final1
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id='fin1' onChange={() => { final1() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault15" id='final2'>
                                    final2
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault8" id='fin2' onChange={() => { final2() }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault16" id='semis3'>
                                    semis3
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault9" id='sem3' onChange={() => { semi3() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault17" id='semis4'>
                                    semis4
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault9" id='sem4' onChange={() => { semi4() }} />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault18" id='cuartos3'>
                                    cuartos3
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault10" id='cuar3' onChange={() => { cuart3() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault19" id='cuartos4'>
                                    cuartos4
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault10" id='cuar4' onChange={() => { cuart4() }} />
                            </div>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br />
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault20" id='cuartos7'>
                                    cuartos7
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault11" id='cuar7' onChange={() => { cuart7() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault21" id='cuartos8'>
                                    cuartos8
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault11" id='cuar8' onChange={() => { cuart8() }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault22" id='octavos3'>
                                    1B
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault12" id="oct3" onChange={() => { oct3() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault23" id='octavos4'>
                                    2A
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault12" id="oct4" onChange={() => { oct4() }} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault24" id='octavos7'>
                                    1D
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault13" id='oct7' onChange={() => { oct7() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault25" id='octavos8'>
                                    2C
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault13" id='oct8' onChange={() => { oct8() }} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault26" id='octavos11'>
                                    1F
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault14" id='oct11' onChange={() => { oct11() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault27" id='octavos12'>
                                    2E
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault14" id='oct12' onChange={() => { oct12() }} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="card">
                        <div class="card-body">
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault28" id='octavos15'>
                                    1H
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault15" id='oct15' onChange={() => { oct15() }} />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label" for="flexRadioDefault29" id='octavos16'>
                                    2G
                                </label>
                                <input class="form-check-input" type="radio" name="flexRadioDefault15" id='oct16' onChange={() => { oct16() }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
/*
function validar_equipos(){

    let a1 = document.querySelectorAll("input[name = 'flexRadioDefault']")

    let findSelect = () => {
        let selected = document.querySelector("input[name = 'flexRadioDefault']:checked")
        console.log(selected)
    }

}
*/


export default CompFaseFinal;
