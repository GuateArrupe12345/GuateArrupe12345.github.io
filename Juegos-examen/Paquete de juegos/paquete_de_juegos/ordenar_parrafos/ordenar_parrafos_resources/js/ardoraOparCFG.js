//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=80; timeIni=80; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=1;
var score=0; scoreMax=2; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="felicidades has ganado"; messageTime=""; messageError="buen intento"; messageErrorG="buen intento"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="b3JkZW5hcl9wYXJyYWZvcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="ordenar_parrafos_resources/media/";
var indexG=0;
var words1G=["LkRldGVybWluYXIgbMOtbmVhcyBkZSBjw7NkaWdv","RXN0aW1hciB0aWVtcG8gdG90YWw=","RXN0aW1hciBlbCBjb3N0bw==","RGV0ZXJtaW5hciBlbCBwZXJzb25hbCBpbnZvbHVjcmFkbw==","RXN0aW1hciBob3JhcyBob21icmU=","LkVzdGFibGVjZXIgcGxhem8gZGUgZW50cmVnYQ=="];
var words2G=["c29uIGVsIGNvbmp1bnRvIGRlIGhlcnJhbWllbnRhcyB5IHNpc3RlbWFzIGluZm9ybcOhdGljb3M=","cXVlIHB1ZWRlbiBzZXIgdXRpbGl6YWRvcyBlbiBlbCBtYXJjbyBkZSBsYSBlZHVjYWNpw7NuIHkgZGUgbGEgZW5zZcOxYW56YQ==","dXRpbGl6YWRhcyBwYXJhIHByb2R1Y2lyLCB0cmF0YXIsIGludGVyY2FtYmlhciwgY2xhc2lmaWNhciwgcmVjdXBlcmFyIHkgcHJlc2VudGFyIGRvY3VtZW50b3MgZGlnaXRhbGVzIGNvbiBmaW5lcyBlZHVjYXRpdm9z"];
var words3G=[];
var c1=[28,20,16,34,20,28];
var c2=[55,71,123];
var c3=[];
colorText="#000000";colorButton="#0099FF";colorBack="#FFFFFF";colorSele="#DEEDFE";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
