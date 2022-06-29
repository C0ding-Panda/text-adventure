function musik_einblenden() {
    document.getElementById("audio_controls").style.display = "flex";
    document.getElementById("einblend_button_id").innerHTML = "Controls einblenden";
    document.getElementById("einblend_button_id").style.width = "110px";
    document.getElementById("einblend_button_id").style.height = "100px";
    document.getElementById("ausblend_button_id").innerHTML = "Controls ausblenden";
    document.getElementById("ausblend_button_id").style.width = "110px";
    document.getElementById("ausblend_button_id").style.height = "100px";
}//musik controls einblenden
function musik_ausblenden() {
    document.getElementById("audio_controls").style.display = "none";
    document.getElementById("einblend_button_id").innerHTML = "E";
    document.getElementById("einblend_button_id").style.width = "50px";
    document.getElementById("einblend_button_id").style.height = "40px";
    document.getElementById("ausblend_button_id").innerHTML = "A";
    document.getElementById("ausblend_button_id").style.width = "50px";
    document.getElementById("ausblend_button_id").style.height = "40px";
}//musik controls ausblenden
function start() {
    document.getElementById("einfuerung_id").style.display = "none";
    document.getElementById("chapter1").style.display = "block";
    document.getElementById("btns_con_unten1_id").style.display = "flex";
    window.scrollBy({ top: 700, left: 0, behavior: "smooth" });
}
    function stop() {
    document.getElementById("einfuerung_id").style.display = "block";//kapitel 1
    document.getElementById("chapter1").style.display = "none";//kapitel 2
    document.getElementById("btns_con_unten1_id").style.display = "none";//kapitel 2
    document.getElementById("chapter_bootkauf").style.display = "none";//kapitel 3
    document.getElementById("btns_con_unten2_id").style.display = "none";//kapitel 3
    document.getElementById("chapter_essen").style.display = "none";//kapitel 4
    document.getElementById("sensenmann_con_ch4_id").style.display = "none";//kapitel 4
    document.getElementById("chapter_karte_befolgen").style.display = "none";//kapitel 5
    document.getElementById("btns_con_unten4_id").style.display = "none";//kapitel 5
    document.getElementById("chapter_karte_nichtbefolgen").style.display = "none";//kapitel 6
    document.getElementById("sensenmann_con_ch6_id").style.display = "none";//kapitel 6
    document.getElementById("chapter_karte_verkaufen").style.display = "none";//kapitel 7
    document.getElementById("sensenmann_con_ch7_id").style.display = "none";//kapitel 7
    document.getElementById("chapter_wald").style.display = "none";//kapitel 8
    document.getElementById("sensenmann_con_ch8_id").style.display = "none";//kapitel 8
    document.getElementById("chapter_berge").style.display = "none";//kapitel 9
    document.getElementById("btns_con_unten9_id").style.display = "none";//kapitel 9
    document.getElementById("chapter_lagerfeuer").style.display = "none";//kapitel 10
    document.getElementById("chapter_hütten").style.display = "none";//kapitel 11
    document.getElementById("sensenmann_con_ch11_id").style.display = "none";//kapitel 11
    document.getElementById("chapter_weiterkarte").style.display = "none";//kapitel 12
}//alles stooppen
function bootkauf() {
    document.getElementById("chapter1").style.display = "none";
    document.getElementById("btns_con_unten1_id").style.display = "none";
    document.getElementById("chapter_bootkauf").style.display = "block";
    document.getElementById("btns_con_unten2_id").style.display = "flex";
    window.scrollBy({ top: -200, left: 0, behavior: "smooth" });//nach oben scrollen
}//boot kaufen
function essengehen() {
    document.getElementById("chapter1").style.display = "none";
    document.getElementById("btns_con_unten1_id").style.display = "none";
    document.getElementById("chapter_essen").style.display = "block";
    document.getElementById("sensenmann_con_ch4_id").style.display = "flex";
    window.scrollBy({ top: -450, left: 0,});//nach oben scrollen
}//essen gehen
function karte_folgen() {
    document.getElementById("chapter_bootkauf").style.display = "none";
    document.getElementById("btns_con_unten2_id").style.display = "none";
    document.getElementById("chapter_karte_befolgen").style.display = "block";
    document.getElementById("btns_con_unten4_id").style.display = "flex";
    window.scrollBy({ top: -400, left: 0, behavior: "smooth" });//nach oben scrollen
}//wenn man der Karte folgt
function karte_nichtfolgen() {
    document.getElementById("chapter_bootkauf").style.display = "none";
    document.getElementById("btns_con_unten2_id").style.display = "none";
    document.getElementById("chapter_karte_nichtbefolgen").style.display = "block";
    document.getElementById("sensenmann_con_ch6_id").style.display = "flex";
    window.scrollBy({ top: -500, left: 0,});//nach oben scrollen
}//wenn man der Karte nicht folgt
function verkaufen() {
    document.getElementById("chapter_bootkauf").style.display = "none";
    document.getElementById("btns_con_unten2_id").style.display = "none";
    document.getElementById("chapter_karte_verkaufen").style.display = "block";
    document.getElementById("sensenmann_con_ch7_id").style.display = "flex";
    window.scrollBy({ top: -550, left: 0,});//nach oben scrollen
}//wenn man sein BOot verkaufen will
function wald_gehen() {
    document.getElementById("chapter_karte_befolgen").style.display = "none";
    document.getElementById("btns_con_unten4_id").style.display = "none";
    document.getElementById("chapter_wald").style.display = "block";
    document.getElementById("sensenmann_con_ch8_id").style.display = "flex";
}//wenn man den Wald betreten will
function berge_gehen() {
    document.getElementById("chapter_karte_befolgen").style.display = "none";
    document.getElementById("btns_con_unten4_id").style.display = "none";
    document.getElementById("chapter_berge").style.display = "block";
    document.getElementById("btns_con_unten9_id").style.display = "flex";
}//wenn man die Berge betreten will
function lagerfeuer_gehen() {
    document.getElementById("chapter_berge").style.display = "none";
    document.getElementById("btns_con_unten9_id").style.display = "none";
    document.getElementById("chapter_lagerfeuer").style.display = "block";
}//Lagerfeuer endung
function hütten_gehen() {
    document.getElementById("chapter_berge").style.display = "none";
    document.getElementById("btns_con_unten9_id").style.display = "none";
    document.getElementById("chapter_hütten").style.display = "block";
    document.getElementById("sensenmann_con_ch11_id").style.display = "flex";
}
function weiterkarte_gehen() {
    document.getElementById("chapter_berge").style.display = "none";
    document.getElementById("btns_con_unten9_id").style.display = "none";
    document.getElementById("chapter_weiterkarte").style.display = "block";
}