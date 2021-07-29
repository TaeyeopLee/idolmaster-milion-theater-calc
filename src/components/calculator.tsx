import * as React from 'react';
import { MULTIPLIER, TState } from '../index'


export function calculate(theme: TState) {
  console.log("calculate theme: ", JSON.stringify(theme));
  let result: TState = theme;
  const th_maxsta = result.maxStamina;
  const th_server = result.region;
  const th_diff = result.calcType;
  const th_eventnow = result.currentPoint;
  const th_eventmat = result.currentMat;
  const th_eventmokpyo = result.eventPointGoal;
  let norsta = 0, gainmat = 0, usemat = 0, gainpoint = 0, norsta_o = 0, gainmat_o = 0;

  //영업런 소비는 10배수 기준으로, 이벤트 곡은 포인트 소모 같아서 하나만 씀
  if (th_diff == "MM" && th_server == "jpn") { //일본서버MM
    norsta = 30; gainmat = 85; usemat = 180; gainpoint = 537;
    norsta_o = 300; gainmat_o = 595;
  }
  if (th_diff == "6MIX" && th_server == "jpn") { //일본서버6mix
    norsta = 25; gainmat = 64; usemat = 180; gainpoint = 537;
    norsta_o = 250; gainmat_o = 448;
  }
  if (th_diff == "MM" && th_server == "kor") { //한국서버MM
    norsta = 30; gainmat = 85; usemat = 180; gainpoint = 537;
    norsta_o = 300; gainmat_o = 595;
  }
  if (th_diff == "6MIX" && th_server == "kor") { //한국서버6MIX
    norsta = 25; gainmat = 64; usemat = 150; gainpoint = 447;
    norsta_o = 250; gainmat_o = 448;
  }

  let cons = ((gainpoint * gainmat) / usemat + gainmat) / norsta;
  let cons_o = ((gainpoint * gainmat_o) / usemat + gainmat_o) / norsta_o;
  //ㄴ스태1당 얻는 이벤트 포인트를 계산한 효율


  let eventnokori = th_eventmokpyo - th_eventnow - Math.floor(th_eventmat / usemat) * gainpoint;
  //ㄴ앞으로 모아야야 할 이벤트 포인트

  if (eventnokori < 0) {
    alert('이미 목표를 달성했거나, 보유하고 있는 재화를 모두 소모하면 목표 포인트를 초과 달성 할 수 있습니다.');
  }

  let sobista = eventnokori / cons;
  let sobista_o = eventnokori / cons_o;
  //ㄴ앞으로 소모해야 할 스태미너
  let playnormalsong = Math.ceil(sobista / norsta);
  let playnormalsong_o = Math.ceil(sobista_o / norsta_o);
  //플레이해야할 일반곡
  let playeventsong = Math.ceil((playnormalsong * gainmat) / usemat) + Math.ceil(th_eventmat / usemat);
  let playeventsong_o = Math.ceil((playnormalsong_o * gainmat_o) / usemat) + Math.ceil(th_eventmat / usemat);
  //플레이해야할 이벤트곡

  result.liverun.jewel = Math.ceil(sobista / th_maxsta) * 50;
  result.salesrun.jewel_o = Math.ceil(sobista_o / th_maxsta) * 50;
  result.liverun.stamina = Math.ceil(sobista);
  result.salesrun.stamina_o = Math.ceil(sobista_o);

  let sobista_final = (Math.ceil(sobista)) * 5;
  let sobista_min = sobista_final % 60;
  let sobista_hour = ((sobista_final - sobista_min) / 60) % 24;
  let sobista_day = (sobista_final - sobista_min - sobista_hour * 60) / (24 * 60);

  let sobista_final_o = Math.ceil(sobista_o) * 5;
  let sobista_min_o = sobista_final_o % 60;
  let sobista_hour_o = ((sobista_final_o - sobista_min_o) / 60) % 24;
  let sobista_day_o = (sobista_final_o - sobista_min_o - sobista_hour_o * 60) / (24 * 60);

  result.liverun.recover_stamina = '스태미너 회복까지 걸리는 시간 : ' + sobista_day + '일 ' + sobista_hour + '시간 ' + sobista_min + '분';
  result.salesrun.recover_stamina_o = '스태미너 회복까지 걸리는 시간 : ' + sobista_day_o + '일 ' + sobista_hour_o + '시간 ' + sobista_min_o + '분';
  // document.getElementById('th_sta_recover').innerHTML = '스태미너 회복까지 걸리는 시간 : ' + sobista_day + '일 ' + sobista_hour + '시간 ' + sobista_min + '분';
  // document.getElementById('th_sta_recover_o').innerHTML = '스태미너 회복까지 걸리는 시간 : ' + sobista_day_o + '일 ' + sobista_hour_o + '시간 ' + sobista_min_o + '분';


  // 라이브런 일반곡 횟수
  result.liverun.normalSongCnt = playnormalsong.toString();
  // document.getElementById('th_report_normalsong').value = playnormalsong;
  if (theme.liverun.normalSong_Multiplier === MULTIPLIER.x2) {
    if (playnormalsong % 2 == 0) {
      result.liverun.normalSongCnt = (playnormalsong / 2).toString();
      // document.getElementById('th_report_normalsong2').value = playnormalsong / 2;
    } else {
      result.liverun.normalSongCnt = (playnormalsong - 1) / 2 + '(+1)';
      // document.getElementById('th_report_normalsong2').value = (playnormalsong - 1) / 2 + '(+1)';
    }
  }

  // 영업런 티켓 10배수 횟수
  result.salesrun.normalSong_o_Cnt = playnormalsong_o.toString();
  // document.getElementById('th_report_normalsong_o').value = playnormalsong_o;

  // 라이브런 이벤트곡 횟수
  result.liverun.eventSongCnt = playeventsong.toString();
  // document.getElementById('th_report_eventsong').value = playeventsong;
  if (result.liverun.eventSong_Multiplier === MULTIPLIER.x2) {
    if (playeventsong % 2 == 0) {
      result.liverun.eventSongCnt = (playeventsong / 2).toString();
      // document.getElementById('th_report_eventsong2').value = playeventsong / 2;
    } else {
      result.liverun.eventSongCnt = (playeventsong - 1) / 2 + '(+1)';
      // document.getElementById('th_report_eventsong2').value = (playeventsong - 1) / 2 + '(+1)';
    }
  }
  else if (result.liverun.eventSong_Multiplier === MULTIPLIER.x4) {
    if (playeventsong % 4 == 0) {
      result.liverun.eventSongCnt = (playeventsong / 4).toString();
      // document.getElementById('th_report_eventsong4').value = playeventsong / 4;
    } else {
      result.liverun.eventSongCnt = (playeventsong - playeventsong % 4) / 4 + '(+' + playeventsong % 4 + ')';
      // document.getElementById('th_report_eventsong4').value = (playeventsong - playeventsong % 4) / 4 + '(+' + playeventsong % 4 + ')';
    }
  }

  // 영업런 이벤트 곡 횟수
  result.salesrun.eventSong_o_Cnt = playeventsong_o.toString();
  // document.getElementById('th_report_eventsong_o').value = playeventsong_o;
  if (result.salesrun.eventSong_o_Multiplier === MULTIPLIER.x2) {
    if (playeventsong_o % 2 == 0) {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o / 2).toString();
      // document.getElementById('th_report_eventsong2_o').value = playeventsong_o / 2;
    } else {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o - 1) / 2 + '(+1)';
      // document.getElementById('th_report_eventsong2_o').value = (playeventsong_o - 1) / 2 + '(+1)';
    }
  }
  else if (result.salesrun.eventSong_o_Multiplier === MULTIPLIER.x4) {
    if (playeventsong_o % 4 == 0) {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o / 4).toString();
      // document.getElementById('th_report_eventsong4_o').value = playeventsong_o / 4;
    } else {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o - playeventsong_o % 4) / 4 + '(+' + playeventsong_o % 4 + ')';
      // document.getElementById('th_report_eventsong4_o').value = (playeventsong_o - playeventsong_o % 4) / 4 + '(+' + playeventsong_o % 4 + ')';
    }
  }
  return result;
  // setCookie('cookie_th_maxsta', th_maxsta, 180);

}
// 시어터 이벤트 계산 끝