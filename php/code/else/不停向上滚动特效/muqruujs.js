var oMarquee = document.getElementById("mq"); //�������� 
var iLineHeight = 60; //���и߶ȣ����� 
var iLineCount = 9; //ʵ������ 
var iScrollAmount = 2; //ÿ�ι����߶ȣ����� 
function run() { oMarquee.scrollTop += iScrollAmount; if ( oMarquee.scrollTop == iLineCount * iLineHeight ) oMarquee.scrollTop = 0; if ( oMarquee.scrollTop % iLineHeight == 0 ) { window.setTimeout( "run()", 2500 ); } else { window.setTimeout( "run()", 10 ); } } oMarquee.innerHTML += oMarquee.innerHTML; window.setTimeout( "run()", 2500 );