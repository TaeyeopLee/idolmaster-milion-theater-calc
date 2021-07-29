import * as React from 'react';
import { MULTIPLIER, TState } from '../index'


export function theaterCalculate(theme: TState) {
  console.log("theaterCalculate theme: ", JSON.stringify(theme));
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


  // 라이브런 일반곡 횟수
  result.liverun.normalSongCnt = playnormalsong.toString();
  if (theme.liverun.normalSong_Multiplier === MULTIPLIER.x2) {
    if (playnormalsong % 2 == 0) {
      result.liverun.normalSongCnt = (playnormalsong / 2).toString();
    } else {
      result.liverun.normalSongCnt = (playnormalsong - 1) / 2 + '(+1)';
    }
  }

  // 영업런 티켓 10배수 횟수
  result.salesrun.normalSong_o_Cnt = playnormalsong_o.toString();

  // 라이브런 이벤트곡 횟수
  result.liverun.eventSongCnt = playeventsong.toString();
  if (result.liverun.eventSong_Multiplier === MULTIPLIER.x2) {
    if (playeventsong % 2 == 0) {
      result.liverun.eventSongCnt = (playeventsong / 2).toString();
    } else {
      result.liverun.eventSongCnt = (playeventsong - 1) / 2 + '(+1)';
    }
  }
  else if (result.liverun.eventSong_Multiplier === MULTIPLIER.x4) {
    if (playeventsong % 4 == 0) {
      result.liverun.eventSongCnt = (playeventsong / 4).toString();
    } else {
      result.liverun.eventSongCnt = (playeventsong - playeventsong % 4) / 4 + '(+' + playeventsong % 4 + ')';
    }
  }

  // 영업런 이벤트 곡 횟수
  result.salesrun.eventSong_o_Cnt = playeventsong_o.toString();
  if (result.salesrun.eventSong_o_Multiplier === MULTIPLIER.x2) {
    if (playeventsong_o % 2 == 0) {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o / 2).toString();
    } else {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o - 1) / 2 + '(+1)';
    }
  }
  else if (result.salesrun.eventSong_o_Multiplier === MULTIPLIER.x4) {
    if (playeventsong_o % 4 == 0) {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o / 4).toString();
    } else {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o - playeventsong_o % 4) / 4 + '(+' + playeventsong_o % 4 + ')';
    }
  }
  return result;
  // setCookie('cookie_th_maxsta', th_maxsta, 180);

}
// 시어터 이벤트 계산 끝

export function tourCalculate(theme: TState) {
  console.log("tourCalculate theme: ", JSON.stringify(theme));
  let result: TState = theme;
  const to_maxsta = result.maxStamina;
  const to_server = result.region;
  const to_diff = result.calcType;
  const to_eventnow = result.currentPoint;
  let to_eventmat = result.currentMat;
  const to_eventmokpyo = result.eventPointGoal;
  const to_multiStr = result.eventSongMultiplier;
  let to_multi = 0;
  let norsta = 0, gainmat = 0, gainnormalpoint = 0, usemat = 0, gainpoint = 0, norsta_o = 0, gainmat_o = 0, gainnormalpoint_o = 0;

  if (to_multiStr === MULTIPLIER.x5) {
    to_multi = 5;
  } else if (to_multiStr === MULTIPLIER['x4.5']) {
    to_multi = 4.5;
  }
  else {
    to_multi = 4;
  }
  to_eventmat = to_eventmat * 20;

  //영업런 소비는 10배수 기준으로
  if (to_diff == "MM" && to_server == "jpn") { //일본서버MM
    norsta = 30; gainmat = 6; gainnormalpoint = 140; usemat = 20; gainpoint = 144;
    gainnormalpoint_o = 48;
  }
  if (to_diff == "MM" && to_server == "kor") { //한국서버MM
    norsta = 30; gainmat = 6; gainnormalpoint = 140; usemat = 20; gainpoint = 144;
    gainnormalpoint_o = 48;
  }
  if (to_diff == "6MIX" && to_server == "kor") { //일본서버6믹
    norsta = 25; gainmat = 5; gainnormalpoint = 116; usemat = 20; gainpoint = 144;
    gainnormalpoint_o = 40;
  }
  if (to_diff == "6MIX" && to_server == "kor") { //한국서버6믹
    norsta = 25; gainmat = 5; gainnormalpoint = 116; usemat = 20; gainpoint = 144;
    gainnormalpoint_o = 40;
  }

  let cons = (gainnormalpoint / norsta) + (gainmat * gainpoint * to_multi) / (norsta * usemat);
  let cons_o = (gainnormalpoint_o / norsta) + (gainmat * gainpoint * to_multi) / (norsta * usemat);


  let eventnokori = to_eventmokpyo - to_eventnow - Math.floor(to_eventmat / usemat) * gainpoint * to_multi;

  if (eventnokori < 0) {
    alert('이미 목표를 달성했거나, 보유하고 있는 재화를 모두 소모하면 목표 포인트를 초과 달성 할 수 있습니다.');
  }

  //ㄴ앞으로 모아야야 할 이벤트 포인트
  let sobista = eventnokori / cons;
  let sobista_o = eventnokori / cons_o;
  //ㄴ앞으로 소모해야 할 스태미너
  let playnormalsong = Math.floor(sobista / norsta);
  let playnormalsong_o = Math.floor(sobista_o / norsta);
  //플레이해야할 일반곡
  let playeventsong = Math.floor((playnormalsong * gainmat) / usemat) + Math.floor(to_eventmat / usemat);
  let playeventsong_o = Math.floor((playnormalsong_o * gainmat) / usemat) + Math.floor(to_eventmat / usemat);
  //플레이해야할 이벤트곡

  result.liverun.jewel = Math.ceil(sobista / to_maxsta) * 50;
  result.salesrun.jewel_o = Math.ceil(sobista_o / to_maxsta) * 50;
  result.liverun.stamina = Math.ceil(sobista);
  result.salesrun.stamina_o = Math.ceil(sobista_o);

  let sobista_final = Math.ceil(sobista) * 5;
  let sobista_min = sobista_final % 60;
  let sobista_hour = ((sobista_final - sobista_min) / 60) % 24;
  let sobista_day = (sobista_final - sobista_min - sobista_hour * 60) / (24 * 60);

  let sobista_final_o = Math.ceil(sobista_o) * 5;
  let sobista_min_o = sobista_final_o % 60;
  let sobista_hour_o = ((sobista_final_o - sobista_min_o) / 60) % 24;
  let sobista_day_o = (sobista_final_o - sobista_min_o - sobista_hour_o * 60) / (24 * 60);

  result.liverun.recover_stamina = '스태미너 회복까지 걸리는 시간 : ' + sobista_day + '일 ' + sobista_hour + '시간 ' + sobista_min + '분';
  result.salesrun.recover_stamina_o = '스태미너 회복까지 걸리는 시간 : ' + sobista_day_o + '일 ' + sobista_hour_o + '시간 ' + sobista_min_o + '분';

  result.liverun.normalSongCnt = playnormalsong.toString();
  if (result.liverun.normalSong_Multiplier == MULTIPLIER.x2) {
    if (playnormalsong % 2 == 0) {
      result.liverun.normalSongCnt =  (playnormalsong / 2).toString();
    } else {
      result.liverun.normalSongCnt =  (playnormalsong - 1) / 2 + '(+1)';
    }
  }

  result.liverun.eventSongCnt = playeventsong.toString();
  if (result.liverun.eventSong_Multiplier === MULTIPLIER.x2) {
  if (playeventsong % 2 == 0) {
    result.liverun.eventSongCnt = (playeventsong / 2).toString();
  } else {
    result.liverun.eventSongCnt = (playeventsong - 1) / 2 + '(+1)';
  }
}
else if (result.liverun.eventSong_Multiplier === MULTIPLIER.x3) {
  if (playeventsong % 3 == 0) {
    result.liverun.eventSongCnt = (playeventsong / 3).toString();
  } else {
    result.liverun.eventSongCnt = (playeventsong - playeventsong % 3) / 3 + '(+' + playeventsong % 3 + ')';
  }
}
  result.salesrun.sales_Cnt = playnormalsong_o.toString();
  if (result.salesrun.sales_Multiplier === MULTIPLIER.x2) {
  if (playnormalsong_o % 2 == 0) {
    result.salesrun.sales_Cnt = (playnormalsong_o / 2).toString();
  } else {
    result.salesrun.sales_Cnt = (playnormalsong_o - 1) / 2 + '(+1)';
  }
}

  result.salesrun.eventSong_o_Cnt = playeventsong_o.toString();
  if (result.salesrun.eventSong_o_Multiplier === MULTIPLIER.x2) {
    if (playeventsong_o % 2 == 0) {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o / 2).toString();
    } else {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o - 1) / 2 + '(+1)';
    }
  }
  else if (result.salesrun.eventSong_o_Multiplier === MULTIPLIER.x3) {
    if (playeventsong_o % 3 == 0) {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o / 3).toString();
    } else {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o - playeventsong_o % 3) / 3 + '(+' + playeventsong_o % 3 + ')';
    }
  }
  // setCookie('cookie_to_maxsta', to_maxsta, 180);

  return result;
}
// 투어 이벤트 계산 끝

export function tuneCalculate(theme: TState) {
  console.log("tourCalculate theme: ", JSON.stringify(theme));
  let result: TState = theme;
  const tu_maxsta = result.maxStamina;
  const tu_server = result.region;
  const tu_diff = result.calcType;
  const tu_eventnow = result.currentPoint;
  const tu_eventmat = result.currentMat;
  const tu_eventmokpyo = result.eventPointGoal;
  const tu_bonus_percent = result.deckBonus !== undefined ? result.deckBonus : 0;
  var tu_bonus = 1 + tu_bonus_percent / 100;
  let norsta = 0, gainmat = 0, usemat = 0, gainpoint = 0, norsta_o = 0, gainmat_o = 0, gainpoint_o = 0;
  // var norsta, gainmat, usemat, gainpoint, norsta_o, gainmat_o, usemat_o, gainpoint_o;

  //영업런 소비는 10배수 기준으로, 이벤트 곡은 포인트 소모 같아서 하나만 씀
  if (tu_diff == "MM" && tu_server == "jpn") { //일본서버MM
    norsta = 30; gainmat = 75; usemat = 140; gainpoint = 490;
    norsta_o = 300; gainmat_o = 525;
  }
  if (tu_diff == "6MIX" && tu_server == "jpn") { //일본서버6mix
    norsta = 25; gainmat = 64; usemat = 180; gainpoint = 537;
    norsta_o = 250; gainmat_o = 448;
  }
  gainpoint = gainpoint * tu_bonus;
  gainpoint_o = gainpoint_o * tu_bonus;

  var cons = ((gainpoint * gainmat) / usemat + gainmat) / norsta;
  var cons_o = ((gainpoint * gainmat_o) / usemat + gainmat_o) / norsta_o;
  //ㄴ스태1당 얻는 이벤트 포인트를 계산한 효율


  var eventnokori = tu_eventmokpyo - tu_eventnow - Math.floor(tu_eventmat / usemat) * gainpoint;
  //ㄴ앞으로 모아야야 할 이벤트 포인트

  if (eventnokori < 0) {
    alert('이미 목표를 달성했거나, 보유하고 있는 재화를 모두 소모하면 목표 포인트를 초과 달성 할 수 있습니다.');
  }

  var sobista = eventnokori / cons;
  var sobista_o = eventnokori / cons_o;
  //ㄴ앞으로 소모해야 할 스태미너
  var playnormalsong = Math.ceil(sobista / norsta);
  var playnormalsong_o = Math.ceil(sobista_o / norsta_o);
  //플레이해야할 일반곡
  var playeventsong = Math.ceil((playnormalsong * gainmat) / usemat) + Math.ceil(tu_eventmat / usemat);
  var playeventsong_o = Math.ceil((playnormalsong_o * gainmat_o) / usemat) + Math.ceil(tu_eventmat / usemat);
  //플레이해야할 이벤트곡

  result.liverun.jewel = Math.ceil(sobista / tu_maxsta) * 50;
  result.salesrun.jewel_o = Math.ceil(sobista_o / tu_maxsta) * 50;
  result.liverun.stamina = Math.ceil(sobista);
  result.salesrun.stamina_o = Math.ceil(sobista_o);

  var sobista_final = (Math.ceil(sobista)) * 5;
  var sobista_min = sobista_final % 60;
  var sobista_hour = ((sobista_final - sobista_min) / 60) % 24;
  var sobista_day = (sobista_final - sobista_min - sobista_hour * 60) / (24 * 60);

  var sobista_final_o = Math.ceil(sobista_o) * 5;
  var sobista_min_o = sobista_final_o % 60;
  var sobista_hour_o = ((sobista_final_o - sobista_min_o) / 60) % 24;
  var sobista_day_o = (sobista_final_o - sobista_min_o - sobista_hour_o * 60) / (24 * 60);

  result.liverun.recover_stamina = '스태미너 회복까지 걸리는 시간 : ' + sobista_day + '일 ' + sobista_hour + '시간 ' + sobista_min + '분';
  result.salesrun.recover_stamina_o = '스태미너 회복까지 걸리는 시간 : ' + sobista_day_o + '일 ' + sobista_hour_o + '시간 ' + sobista_min_o + '분';


  result.liverun.normalSongCnt = playnormalsong.toString();
  if (result.liverun.normalSong_Multiplier === MULTIPLIER.x2) {
    if (playnormalsong % 2 == 0) {
      result.liverun.normalSongCnt = (playnormalsong / 2).toString();
    } else {
      result.liverun.normalSongCnt = (playnormalsong - 1) / 2 + '(+1)'.toString();
    }
  }
  result.salesrun.normalSong_o_Cnt = playnormalsong_o.toString();

  result.liverun.eventSongCnt = playeventsong.toString();
  if (result.liverun.eventSong_Multiplier === MULTIPLIER.x2) {
    if (playeventsong % 2 == 0) {
      result.liverun.eventSongCnt = (playeventsong / 2).toString();
    } else {
      result.liverun.eventSongCnt = (playeventsong - 1) / 2 + '(+1)';
    }
  }
  else if (result.liverun.eventSong_Multiplier === MULTIPLIER.x4) {
    if (playeventsong % 4 == 0) {
      result.liverun.eventSongCnt = (playeventsong / 4).toString();
    } else {
      result.liverun.eventSongCnt = (playeventsong - playeventsong % 4) / 4 + '(+' + playeventsong % 4 + ')';
    }
  }

  result.salesrun.eventSong_o_Cnt = playeventsong_o.toString();
  if (result.salesrun.eventSong_o_Multiplier === MULTIPLIER.x2) {
    if (playeventsong_o % 2 == 0) {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o / 2).toString();
    } else {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o - 1) / 2 + '(+1)';
    }
  }
  else if (result.salesrun.eventSong_o_Multiplier === MULTIPLIER.x4) {
    if (playeventsong_o % 4 == 0) {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o / 4).toString();
    } else {
      result.salesrun.eventSong_o_Cnt = (playeventsong_o - playeventsong_o % 4) / 4 + '(+' + playeventsong_o % 4 + ')';
    }
  }
  
  // setCookie('cookie_tu_maxsta', tu_maxsta, 180);
  // setCookie('cookie_tu_bonus', tu_bonus_percent, 180);

  return result;

}
// 튠 이벤트 계산 끝