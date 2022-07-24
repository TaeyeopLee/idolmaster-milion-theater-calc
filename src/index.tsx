import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Footer from './pages/Footer';
import Router from './route';

export const MULTIPLIER = {
  x1: 'x1',
  x2: 'x2',
  x4: 'x4',
  x3: 'x3',
  'x4.5': 'x4.5',
  x5: 'x5',
}

export const REGION = {
  JPN: "jpn",
  KOR: "kor",
}

export const CalcType = {
  MM: "MM",
  "6MIX": "6MIX"
}

export type TState = {
  region: string; // 지역
  calcType?: string; // 계산타입 MM || 6MIX
  eventPointGoal: number; // 목표 이벤트 포인트
  currentPoint: number; // 현재 이벤트 포인트
  maxStamina: number; // 최대 스태미너
  currentMat?: number; // 현재 소지 재화
  deckBonus?: number; // 덱 보너스
  eventSongMultiplier?: string; // 이벤트 곡 배수
  liverun: {
    normalSong_Multiplier?: string; // 라이브런 일반곡 배수 1x || 2x
    normalSongCnt?: string; // 일반곡 횟수
    eventSong_Multiplier?: string; // 라이브런 이벤트곡 배수 1x || 2x || 4x
    eventSongCnt?: string; // 라이브런 이벤트곡 횟수
    jewel?: number; // 라이브런 소모 주얼
    stamina?: number; // 라이브런 소모 스태미너
    recover_stamina?: string; // 라이브런 스태미너 회복 예정 시간
    ellegant_stage_cnt?: string; // 엘레강트 스테이지 횟수
  };
  salesrun: {
    sales_Cnt?: string; // 영업 횟수
    sales_Multiplier?: string; // 영업 배수 x1 || x2 
    normalSong_o_Cnt?: string;// 영업런 티켓 10배수 횟수
    eventSong_o_Multiplier?: string; // 영업런 이벤트곡 횟수 1x || 2x || 4x
    eventSong_o_Cnt?: string;
    jewel_o?: number; // 영업런 소모 주얼
    stamina_o?: number; // 영업런 소모 스태미너
    recover_stamina_o?: string; // 영업런 스태미너 회복 예정 시간
    ellegant_stage_o_cnt?: string; // 엘레강트 스테이지 횟수
  };
}

const Home = () => {
  return (
      <>
        <div className="container">
          <div className="part_header" id="part_header">
            <div className="header_black">
              <div className="header_title" id="title_name">
                밀리시타 이벤트 포인트 계산기
              </div>
              <div className="header_name">
                <span>업데이트 : 2021년 06월 11일</span>
                <br />
                <span><a href="http://twitter.com/ln_sling">만든사람 : 라인슬링</a></span>
              </div>
            </div>
          </div>
          <Router pageName={'theater'} />
          <Footer />
        </div>
      </>
  )
}


// class HomeClass extends React.Component<{}, TState> {
//   constructor(props: any) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <React.Fragment>
//       	<div className="container">
//           <div className="part_header" id="part_header">
//             <div className="header_black">
//               <div className="header_title" id="title_name">
//                 밀리시타 이벤트 포인트 계산기
//               </div>
//               <div className="header_name">
//                 <span>업데이트 : 2021년 06월 11일</span>
//                 <br />
//                 <span><a href="http://twitter.com/ln_sling">만든사람 : 라인슬링</a></span>
//               </div>
//             </div>
//           </div>
//           <Router props={{page: 'theater'}} />
//           <Footer />
//         </div>
//       </React.Fragment>
//     )
//   }
// }

ReactDOM.render(<Home />, document.getElementById('app'));
