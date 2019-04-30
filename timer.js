function set2fig(num) {
   // ���l��1����������2���̕�����ɂ��ĕԂ�
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}
function isNumOrZero(num) {
   // ���l�łȂ�������0�ɂ��ĕԂ�
   if( isNaN(num) ) { return 0; }
   return num;
}

function showCountdown(id, inputYear, inputMonth, inputDate, inputHour, inputMin, inputSec) {
   
   //0��1���A1��2���Ȃ̂ŁA�f�N�������g
   inputMonth--;

   // ���ݓ����𐔒l(1970-01-01 00:00:00����̃~���b)�ɕϊ�
   var nowDate = new Date();
   var dnumNow = nowDate.getTime();
 
   //��r���鎞�Ԃ͈�������
   var targetDate = new Date( isNumOrZero(inputYear), isNumOrZero(inputMonth), isNumOrZero(inputDate), isNumOrZero(inputHour), isNumOrZero(inputMin), isNumOrZero(inputSec) );
   var dnumTarget = targetDate.getTime();
 
   // �����Z���ē���(�~���b)�̍����v�Z
   var diff2Dates = dnumTarget - dnumNow;
   if( dnumTarget < dnumNow ) {
      // �������߂����ꍇ�� -1 ���|���Đ��̒l�ɕϊ�
      diff2Dates *= -1;
   }
 
   // ���̃~���b���A�����E���ԁE���E�b�ɕ���
   var dDays  = diff2Dates / ( 1000 * 60 * 60 * 24 );   // ����
   diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
   var dHour  = diff2Dates / ( 1000 * 60 * 60 );   // ����
   diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
   var dMin   = diff2Dates / ( 1000 * 60 );   // ��
   diff2Dates = diff2Dates % ( 1000 * 60 );
   var dSec   = diff2Dates / 1000;   // �b
   var dMiSec = diff2Dates % 1000;
   
   var msg2 = Math.floor(dDays) + "��"
            + Math.floor(dHour) + "����"
            + Math.floor(dMin) + "��"
            + Math.floor(dSec) + "�b" + dMiSec;
   
   // �\��������̍쐬
   var msg;
   if( dnumTarget > dnumNow ) {
      // �܂����������Ă��Ȃ��ꍇ
      msg = "���ƁA" + msg2 + "�ł��B";
   } else {
      // �������߂����ꍇ
      msg = "����" + msg2 + "�O�ɉ߂��܂����B";
   }
 
   // �쐬�����������\��
   document.getElementById("RealtimeCountdownArea" + id).innerHTML = msg;
}

function showCount(id, inputYear, inputMonth, inputDate, inputHour, inputMin, inputSec) {
   
   //0��1���A1��2���Ȃ̂ŁA�f�N�������g
   inputMonth--;

   // ���ݓ����𐔒l(1970-01-01 00:00:00����̃~���b)�ɕϊ�
   var nowDate = new Date();
   var dnumNow = nowDate.getTime();
 
   //��r���鎞�Ԃ͈�������
   var targetDate = new Date( isNumOrZero(inputYear), isNumOrZero(inputMonth), isNumOrZero(inputDate), isNumOrZero(inputHour), isNumOrZero(inputMin), isNumOrZero(inputSec) );
   var dnumTarget = targetDate.getTime();
 
   // ミリ秒の取得
   var diff2Dates = dnumTarget - dnumNow;
   if( dnumTarget < dnumNow ) {
      // �������߂����ꍇ�� -1 ���|���Đ��̒l�ɕϊ�
      diff2Dates *= -1;
   }
   
   var count = diff2Dates * 9192631770 / 100;
   
   // �\��������̍쐬
   var msg;
   if( dnumTarget > dnumNow ) {
      // �܂����������Ă��Ȃ��ꍇ
      msg = "あと" + msg2 + "振動数です。";
   } else {
      // �������߂����ꍇ
      msg = "すでに" + msg2 + "回すぎました";
   }
 
   // �쐬�����������\��
   document.getElementById("RealtimeCount" + id).innerHTML = msg;
}

// 4���S�w��ver
setInterval('showCountdown(1,2019,5,1,00,00,00)',50);

// 9���S����ver
setInterval('showCount(1,2018,9,16,13,00,00)',50);

