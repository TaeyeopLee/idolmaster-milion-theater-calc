// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { calculate } from './components/calculator';
// import Menu from './Menu';

// const REGION = {
//   JPN: "jpn",
//   KOR: "kor",
// }

// const CalcType = {
//   MM: "MM",
//   "6MIX": "6MIX"
// }

// export type TState = {
//   region: string; // 지역
//   calcType: string; // 계산타입 MM || 6MIX
//   eventPointGoal: number; // 목표 이벤트 포인트
//   currentPoint: number; // 현재 이벤트 포인트
//   maxStamina: number; // 최대 스태미너
//   currentMat: number; // 현재 소지 재화
//   liverun: {
//     normalSong_Multiplier?: number; // 라이브런 일반곡 횟수 1x || 2x
//     normalSongCnt?: string;
//     eventSong_Multiplier?: number; // 라이브런 이벤트곡 횟수 1x || 2x || 4x
//     eventSongCnt?: string;
//     jewel?: number; // 라이브런 소모 주얼
//     stamina?: number; // 라이브런 소모 스태미너
//     recover_stamina?: string; // 라이브런 스태미너 회복 예정 시간
//   };
//   salesrun: {
//     normalSong_o_Multiplier: number; // 영업런 티켓 10배수 횟수
//     normalSong_o_Cnt: string;
//     eventSong_o_Multiplier: number; // 영업런 이벤트곡 횟수 1x || 2x || 4x
//     eventSong_o_Cnt: string;
//     jewel_o: number; // 영업런 소모 주얼
//     stamina_o: number; // 영업런 소모 스태미너
//     recover_stamina_o: string; // 영업런 스태미너 회복 예정 시간
//   };

// }

// class Home extends React.Component<{}, TState> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       region: REGION.JPN,
//       calcType: CalcType.MM,
//       eventPointGoal: 1000000,
//       currentPoint: 0,
//       maxStamina: 0,
//       currentMat: 0,
//       liverun: {
//         normalSong_Multiplier: 1,
//         normalSongCnt: '0',
//         eventSong_Multiplier: 1,
//         eventSongCnt: '0',
//         jewel: 0,
//         stamina: 0,
//         recover_stamina: '',
//       },
//       salesrun: {
//         normalSong_o_Multiplier: 0,
//         normalSong_o_Cnt: '0',
//         eventSong_o_Multiplier: 1,
//         eventSong_o_Cnt: '0',
//         jewel_o: 0,
//         stamina_o: 0,
//         recover_stamina_o: '',
//       },
//       // tale: {

//       // },
//       // tune: {

//       // },
//       // theater: {

//       // },
//       // tour: {

//       // },
//     }
//   }

//   onClickCalcBtn = () => {
//     let theme: TState = this.state;
//     theme = calculate(theme);
//     this.setState(theme);
//   }

//   onChangeInputPointGoal = (e: any) => {
//     this.setState({
//       eventPointGoal: e.target.value,
//     })
//   }

//   onChangeInputCurrentPoint = (e: any) => {
//     this.setState({
//       currentPoint: e.target.value,
//     })
//   }

//   onChangeInputCurrentMat = (e: any) => {
//     this.setState({
//       currentMat: e.target.value,
//     })
//   }

//   onChangeInputNormalSongCnt = (e: any) => {
//     this.setState({
//       liverun: {
//         normalSongCnt: e.target.value,
//       }
//     })
//   }

//   onChangeJPN = (e: any) => {
//     console.log('region change : ', e.target.value);
//     this.setState({
//       region: e.target.value,
//     })
//   }
//   onChangeKOR = (e: any) => {
//     console.log('region change : ', e.target.value);
//     this.setState({
//       region: e.target.value,
//     })
//   }

//   render() {
//     return (
//       <React.Fragment>
//       	<div className="container">
//           <div className="slingname">
//             <img src="./images/slingname333.png" />
//           </div>
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

//           <div className="part_type">
//             <div className="type_theater">
//               <table>
//                 <td id="theater_button">시어터</td>
//               </table>
//             </div>
//             <div className="type_tour">
//               <table>
//                 <td id="tour_button">투어</td>
//               </table>
//             </div>
//             <div className="type_tune">
//               <table>
//                 <td id="tune_button">튠</td>
//               </table>
//             </div>
//             <div className="type_tale">
//               <table>
//                 <td id="tale_button">테일</td>
//               </table>
//             </div>
//           </div>

//           <div className="part_input" id="part_input">
//             {/* <!--시어터 계산기 리뉴얼 시작--> */}
//             <div className="input_theater input_main" id="input_theater">
//               <br />
//               <div className="yoso">
//                 <div className="yoso2-button">
//                   <input type="radio" id="th_select_jpn" value={REGION.JPN} name="th_server" checked onChange={this.onChangeJPN} />
//                   <label htmlFor="th_select_jpn" className="label">일본판</label>
//                   <input type="radio" id="th_select_kor" value={REGION.KOR} name="th_server" onChange={this.onChangeKOR} />
//                   <label htmlFor="th_select_kor" className="label">한국판</label>
//                 </div>
//                 <div className="yoso2-button">
//                   <input type="radio" id="th_select_MM" value={CalcType.MM} name="th_diff" checked /><label htmlFor="th_select_MM">MM</label>
//                   <input type="radio" id="th_select_6MIX" value={CalcType['6MIX']} name="th_diff" /><label htmlFor="th_select_6MIX">6MIX</label>
//                 </div>
//               </div>
//               <div className="yoso">
//                 <div className="yoso2">
//                   <span>최대스태미너</span>
//                   <input className="inputstyle" type="number" id="th_maxsta" value="240" />
//                 </div>
//                 <div className="yoso2">
//                   <span>목표 이벤트 포인트</span><input className="inputstyle" type="number" id="th_eventmokpyo" value={this.state.eventPointGoal} 
//                     onChange={this.onChangeInputPointGoal}/>
//                 </div>
//               </div>
//               <div className="yoso">
//                 <div className="yoso2">
//                   <span>현재 이벤트 포인트</span><input className="inputstyle" type="number" id="th_eventnow" value={this.state.currentPoint}
//                     onChange={this.onChangeInputCurrentPoint} />
//                 </div>
//                 <div className="yoso2">
//                   <span>현재 소지 재화</span><input className="inputstyle" type="number" id="th_eventmat" value={this.state.currentMat}
//                     onChange={this.onChangeInputCurrentMat} />
//                 </div>
//               </div>
//               <div className="yoso calc" id="th_calc" onClick={this.onClickCalcBtn}>계산</div>
//               <div className="yoso gong100">로코 귀여운</div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <p className="yoso-title">라이브런</p>
//                 </div>
//                 <div className="yoso2">
//                   <p className="yoso-title">영업런</p>
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>일반곡 횟수</span>
//                   <div className="yoso2-button">
//                     <input type="radio" id="th_selectsong_x1" name="th_song_multi" checked onChange={this.onChangeInputNormalSongCnt}/>
//                     <label htmlFor="th_selectsong_x1" className="label">x1</label>
//                     <input type="radio" id="th_selectsong_x2" name="th_song_multi" />
//                     <label htmlFor="th_selectsong_x2" className="label">x2</label>
//                   </div>
//                   <input className="inputstyle result_song" readOnly type="text" id="th_report_normalsong" value={this.state.liverun.normalSongCnt} />
//                   {/* <input className="inputstyle result_song" readOnly type="text" id="th_report_normalsong2" value="" /> */}
//                 </div>
//                 <div className="yoso2">
//                   <span>티켓 10배수 횟수</span>
//                   <input className="inputstyle result_song" readOnly id="th_report_normalsong_o" />
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>이벤트곡 횟수</span>
//                   <div className="yoso2-button">
//                     <input type="radio" id="th_select_x1" name="th_event_multi" checked /><label htmlFor="th_select_x1"
//                       className="label">x1</label>
//                     <input type="radio" id="th_select_x2" name="th_event_multi" /><label htmlFor="th_select_x2"
//                       className="label">x2</label>
//                     <input type="radio" id="th_select_x4" name="th_event_multi" /><label htmlFor="th_select_x4"
//                       className="label">x4</label>
//                   </div>
//                   <input className="inputstyle result_song" readOnly type="text" id="th_report_eventsong" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="th_report_eventsong2" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="th_report_eventsong4" value="" />
//                 </div>
//                 <div className="yoso2">
//                   <span>이벤트곡 횟수</span>
//                   <div className="yoso2-button">
//                     <input type="radio" id="th_select_x1_o" name="th_multi_o" checked /><label htmlFor="th_select_x1_o">x1</label>
//                     <input type="radio" id="th_select_x2_o" name="th_multi_o" /><label htmlFor="th_select_x2_o">x2</label>
//                     <input type="radio" id="th_select_x4_o" name="th_multi_o" /><label htmlFor="th_select_x4_o">x4</label>
//                   </div>
//                   <input className="inputstyle result_song" readOnly type="text" id="th_report_eventsong_o" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="th_report_eventsong2_o" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="th_report_eventsong4_o" value="" />
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>소모 주얼</span>
//                   <input className="inputstyle" readOnly id="th_report_jew" />
//                 </div>
//                 <div className="yoso2">
//                   <span>소모 주얼</span>
//                   <input className="inputstyle" readOnly id="th_report_jew_o" />
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>소모 스태미너</span>
//                   <input className="inputstyle" readOnly id="th_report_sta" />
//                   <span className="sta_recover" id="th_sta_recover">스태미너 회복 예정 시간 : </span>
//                 </div>
//                 <div className="yoso2">
//                   <span>소모 스태미너</span>
//                   <input className="inputstyle" readOnly id="th_report_sta_o" />
//                   <span className="sta_recover" id="th_sta_recover_o">스태미너 회복 예정 시간 : </span>
//                 </div>
//               </div>
//               {/* <div className="twittershare">
//                 <button onClick={this.twittertale}>
//                   <img src="./images/twitterwhite2.png" />
//                 </button>
//                 <br /><br />
//               </div> */}


//             </div>
//             {/* <!--시어터 계산기 리뉴얼 끝--> */}

//             {/* <!--투어 계산기 리뉴얼 시작--> */}
//             {/* <div className="input_tour input_main" id="input_tour">
//               <br />
//               <div className="yoso">
//                 <div className="yoso2-button">
//                   <input type="radio" id="to_select_jpn" value="jpn" name="to_server" checked /><label htmlFor="to_select_jpn"
//                     className="label">일본판</label>
//                   <input type="radio" id="to_select_kor" value="kor" name="to_server" /><label htmlFor="to_select_kor"
//                     className="label">한국판</label>
//                 </div>
//                 <div className="yoso2-button">
//                   <input type="radio" id="to_select_MM" value="MM" name="to_diff" checked /><label htmlFor="to_select_MM">MM</label>
//                   <input type="radio" id="to_select_6MIX" value="6MIX" name="to_diff" /><label htmlFor="to_select_6MIX">6MIX</label>
//                 </div>
//               </div>
//               <div className="yoso">
//                 이벤트 곡 배수<br />
//                 <div className="yoso2-button">
//                   <input type="radio" id="to_select_50" value="5.0" name="to_multi" checked /><label
//                     htmlFor="to_select_50">x5.0</label>
//                   <input type="radio" id="to_select_45" value="4.5" name="to_multi" /><label htmlFor="to_select_45">x4.5</label>
//                   <input type="radio" id="to_select_40" value="4.0" name="to_multi" /><label htmlFor="to_select_40">x4.0</label>
//                 </div>
//               </div>
//               <div className="yoso">
//                 <div className="yoso2">
//                   <span>최대스태미너</span>
//                   <input className="inputstyle" type="number" id="to_maxsta" value="" />
//                 </div>
//                 <div className="yoso2">
//                   <span>목표 이벤트 포인트</span><input className="inputstyle" type="number" id="to_eventmokpyo" value="300000" />
//                 </div>
//               </div>
//               <div className="yoso">
//                 <div className="yoso2">
//                   <span>현재 이벤트 포인트</span><input className="inputstyle" type="number" id="to_eventnow" value="0" />
//                 </div>
//                 <div className="yoso2">
//                   <span>현재 소지 재화</span><input className="inputstyle" type="number" id="to_eventmat" value="0" />
//                 </div>
//               </div>
//               <div className="yoso calc" id="to_calc">계산</div>
//               <div className="yoso gong100">로코 귀여운</div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <p className="yoso-title">라이브런</p>
//                 </div>
//                 <div className="yoso2">
//                   <p className="yoso-title">영업런</p>
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>일반곡 횟수</span>
//                   <div className="yoso2-button">
//                     <input type="radio" id="to_selectsong_x1" name="to_song_multi" checked /><label htmlFor="to_selectsong_x1"
//                       className="label">x1</label>
//                     <input type="radio" id="to_selectsong_x2" name="to_song_multi" /><label htmlFor="to_selectsong_x2"
//                       className="label">x2</label>
//                   </div>
//                   <input className="inputstyle result_song" readOnly type="text" id="to_report_normalsong" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="to_report_normalsong2" value="" />
//                 </div>
//                 <div className="yoso2">
//                   <span>영업 횟수</span>
//                   <div className="yoso2-button">
//                     <input type="radio" id="to_selectoshigoto_x1" name="to_oshigoto_multi" checked /><label
//                       htmlFor="to_selectoshigoto_x1" className="label">x1</label>
//                     <input type="radio" id="to_selectoshigoto_x2" name="to_oshigoto_multi" /><label htmlFor="to_selectoshigoto_x2"
//                       className="label">x2</label>
//                   </div>
//                   <input className="inputstyle result_song" readOnly id="to_report_oshigoto_o" />
//                   <input className="inputstyle result_song" readOnly id="to_report_oshigoto2_o" />
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>이벤트곡 횟수</span>
//                   <div className="yoso2-button">
//                     <input type="radio" id="to_select_x1" name="to_event_multi" checked /><label htmlFor="to_select_x1"
//                       className="label">x1</label>
//                     <input type="radio" id="to_select_x2" name="to_event_multi" /><label htmlFor="to_select_x2"
//                       className="label">x2</label>
//                     <input type="radio" id="to_select_x3" name="to_event_multi" /><label htmlFor="to_select_x3"
//                       className="label">x3</label>
//                   </div>
//                   <input className="inputstyle result_song" readOnly type="text" id="to_report_eventsong" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="to_report_eventsong2" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="to_report_eventsong3" value="" />
//                 </div>
//                 <div className="yoso2">
//                   <span>이벤트곡 횟수</span>
//                   <div className="yoso2-button">
//                     <input type="radio" id="to_select_x1_o" name="to_multi_o" checked /><label htmlFor="to_select_x1_o">x1</label>
//                     <input type="radio" id="to_select_x2_o" name="to_multi_o" /><label htmlFor="to_select_x2_o">x2</label>
//                     <input type="radio" id="to_select_x3_o" name="to_multi_o" /><label htmlFor="to_select_x3_o">x3</label>
//                   </div>
//                   <input className="inputstyle result_song" readOnly type="text" id="to_report_eventsong_o" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="to_report_eventsong2_o" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="to_report_eventsong3_o" value="" />
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>소모 주얼</span>
//                   <input className="inputstyle" readOnly id="to_report_jew" />
//                 </div>
//                 <div className="yoso2">
//                   <span>소모 주얼</span>
//                   <input className="inputstyle" readOnly id="to_report_jew_o" />
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>소모 스태미너</span>
//                   <input className="inputstyle" readOnly id="to_report_sta" />
//                   <span className="sta_recover" id="to_sta_recover">스태미너 회복 예정 시간 : </span>
//                 </div>
//                 <div className="yoso2">
//                   <span>소모 스태미너</span>
//                   <input className="inputstyle" readOnly id="to_report_sta_o" />
//                   <span className="sta_recover" id="to_sta_recover_o">스태미너 회복 예정 시간 : </span>
//                 </div>
//               </div>
//               <div className="twittershare">
//                 <button onClick={this.twittertour}>
//                   <img src="./images/twitterwhite2.png" />
//                 </button>
//                 <br /><br />
//               </div>


//             </div> */}
//             {/* <!--투어 계산기 리뉴얼 끝--> */}

//             {/* <!--튠 계산기 리뉴얼 시작--> */}
//             {/* <div className="input_tune input_main" id="input_tune">
//               <br />
//               <div className="yoso">
//                 <div className="yoso2-button">
//                   <input type="radio" id="tu_select_jpn" value="jpn" name="tu_server" checked /><label htmlFor="tu_select_jpn"
//                     className="label">일본판</label>
//                   <input type="radio" id="tu_select_kor" value="kor" name="tu_server" /><label htmlFor="tu_select_kor"
//                     className="label">한국판</label>
//                 </div>
//                 <div className="yoso2-button">
//                   <input type="radio" id="tu_select_MM" value="MM" name="tu_diff" checked /><label htmlFor="tu_select_MM">MM</label>
//                   <input type="radio" id="tu_select_6MIX" value="6MIX" name="tu_diff" /><label htmlFor="tu_select_6MIX">6MIX</label>
//                 </div>
//               </div>
//               <div className="yoso">
//                 <div className="yoso2">
//                   <span>최대스태미너</span>
//                   <input className="inputstyle" type="number" id="tu_maxsta" value="" />
//                 </div>
//                 <div className="yoso2">
//                   <span>목표 이벤트 포인트</span><input className="inputstyle" type="number" id="tu_eventmokpyo" value="300000" />
//                 </div>
//               </div>
//               <div className="yoso">
//                 <div className="yoso2">
//                   <span>현재 이벤트 포인트</span><input className="inputstyle" type="number" id="tu_eventnow" value="0" />
//                 </div>
//                 <div className="yoso2">
//                   <span>덱 보너스 (%)</span><input className="inputstyle" type="number" id="tu_bonus" value="20" />
//                 </div>
//               </div>
//               <div className="yoso">
//                 <div className="yoso2">
//                   <span>현재 소지 재화</span><input className="inputstyle" type="number" id="tu_eventmat" value="0" />
//                 </div>
//                 <div className="yoso2">
//                 </div>
//               </div>
//               <div className="yoso calc" id="tu_calc">계산</div>
//               <div className="yoso gong100">로코 귀여운</div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <p className="yoso-title">라이브런</p>
//                 </div>
//                 <div className="yoso2">
//                   <p className="yoso-title">영업런</p>
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>일반곡 횟수</span>
//                   <div className="yoso2-button">
//                     <input type="radio" id="tu_selectsong_x1" name="tu_song_multi" checked /><label htmlFor="tu_selectsong_x1"
//                       className="label">x1</label>
//                     <input type="radio" id="tu_selectsong_x2" name="tu_song_multi" /><label htmlFor="tu_selectsong_x2"
//                       className="label">x2</label>
//                   </div>
//                   <input className="inputstyle result_song" readOnly type="text" id="tu_report_normalsong" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="tu_report_normalsong2" value="" />
//                 </div>
//                 <div className="yoso2">
//                   <span>티켓 10배수 횟수</span>
//                   <input className="inputstyle result_song" readOnly id="tu_report_normalsong_o" />
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>이벤트곡 횟수</span>
//                   <div className="yoso2-button">
//                     <input type="radio" id="tu_select_x1" name="tu_event_multi" checked /><label htmlFor="tu_select_x1"
//                       className="label">x1</label>
//                     <input type="radio" id="tu_select_x2" name="tu_event_multi" /><label htmlFor="tu_select_x2"
//                       className="label">x2</label>
//                     <input type="radio" id="tu_select_x4" name="tu_event_multi" /><label htmlFor="tu_select_x4"
//                       className="label">x4</label>
//                   </div>
//                   <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong2" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong4" value="" />
//                 </div>
//                 <div className="yoso2">
//                   <span>이벤트곡 횟수</span>
//                   <div className="yoso2-button">
//                     <input type="radio" id="tu_select_x1_o" name="tu_multi_o" checked /><label htmlFor="tu_select_x1_o">x1</label>
//                     <input type="radio" id="tu_select_x2_o" name="tu_multi_o" /><label htmlFor="tu_select_x2_o">x2</label>
//                     <input type="radio" id="tu_select_x4_o" name="tu_multi_o" /><label htmlFor="tu_select_x4_o">x4</label>
//                   </div>
//                   <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong_o" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong2_o" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong4_o" value="" />
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>소모 주얼</span>
//                   <input className="inputstyle" readOnly id="tu_report_jew" />
//                 </div>
//                 <div className="yoso2">
//                   <span>소모 주얼</span>
//                   <input className="inputstyle" readOnly id="tu_report_jew_o" />
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>소모 스태미너</span>
//                   <input className="inputstyle" readOnly id="tu_report_sta" />
//                   <span className="sta_recover" id="tu_sta_recover">스태미너 회복 예정 시간 : </span>
//                 </div>
//                 <div className="yoso2">
//                   <span>소모 스태미너</span>
//                   <input className="inputstyle" readOnly id="tu_report_sta_o" />
//                   <span className="sta_recover" id="tu_sta_recover_o">스태미너 회복 예정 시간 : </span>
//                 </div>
//               </div>
//               <div className="twittershare">
//                 <button onClick={this.twittertune}>
//                   <img src="./images/twitterwhite2.png" />
//                 </button>
//                 <br /><br />
//               </div>


//             </div> */}
//             {/* <!--튠 계산기 리뉴얼 끝--> */}

//             {/* <!--테일 계산기 리뉴얼 시작--> */}
//             {/* <div className="input_tale input_main" id="input_tale">
//               <br />
//               <div className="yoso">
//                 <div className="yoso2-button">
//                   <input type="radio" id="ta_select_jpn" value="jpn" name="ta_server" checked /><label htmlFor="ta_select_jpn"
//                     className="label">일본판</label>
//                   <input type="radio" id="to_select_kor" value="kor" name="ta_server" /><label htmlFor="ta_select_kor"
//                     className="label">한국판</label>
//                 </div>
//               </div>
//               <div className="yoso">
//                 <div className="yoso2">
//                   <span>최대스태미너</span>
//                   <input className="inputstyle" type="number" id="ta_maxsta" value="" />
//                 </div>
//                 <div className="yoso2">
//                   <span>목표 이벤트 포인트</span><input className="inputstyle" type="number" id="ta_eventmokpyo" value="300000" />
//                 </div>
//               </div>
//               <div className="yoso">
//                 <div className="yoso2">
//                   <span>현재 이벤트 포인트</span><input className="inputstyle" type="number" id="ta_eventnow" value="0" />
//                 </div>
//                 <div className="yoso2">
//                 </div>
//               </div>
//               <div className="yoso calc" id="ta_calc">계산</div>
//               <div className="yoso gong100">로코 귀여운</div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <p className="yoso-title">라이브런</p>
//                 </div>
//                 <div className="yoso2">
//                   <p className="yoso-title">영업런</p>
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>일반곡 횟수</span>
//                   <div className="yoso2-button">
//                     <input type="radio" id="ta_selectsong_x1" name="ta_song_multi" checked /><label htmlFor="ta_selectsong_x1"
//                       className="label">x1</label>
//                     <input type="radio" id="ta_selectsong_x2" name="ta_song_multi" /><label htmlFor="ta_selectsong_x2"
//                       className="label">x2</label>
//                   </div>
//                   <input className="inputstyle result_song" readOnly type="text" id="ta_report_normalsong" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="ta_report_normalsong2" value="" />
//                 </div>
//                 <div className="yoso2">
//                   <span>영업 횟수</span>
//                   <div className="yoso2-button">
//                     <input type="radio" id="ta_selectoshigoto_x1" name="ta_oshigoto_multi" checked />
//                     <label htmlFor="ta_selectoshigoto_x1" className="label">x1</label>
//                     <input type="radio" id="ta_selectoshigoto_x2" name="ta_oshigoto_multi" />
//                     <label htmlFor="ta_selectoshigoto_x2" className="label">x2</label>
//                   </div>
//                   <input className="inputstyle result_song" readOnly type="text" id="ta_report_normalsong_o" value="" />
//                   <input className="inputstyle result_song" readOnly type="text" id="ta_report_normalsong2_o" value="" />
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>엘레강트 스테이지 횟수</span>
//                   <input className="inputstyle result_song" readOnly type="text" id="ta_report_eventsong" value="" />
//                 </div>
//                 <div className="yoso2">
//                   <span>엘레강트 스테이지 횟수</span>
//                   <input className="inputstyle result_song" readOnly type="text" id="ta_report_eventsong_o" value="" />
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>소모 주얼</span>
//                   <input className="inputstyle" readOnly id="ta_report_jew" />
//                 </div>
//                 <div className="yoso2">
//                   <span>소모 주얼</span>
//                   <input className="inputstyle" readOnly id="ta_report_jew_o" />
//                 </div>
//               </div>
//               <div className="yoso result">
//                 <div className="yoso2">
//                   <span>소모 스태미너</span>
//                   <input className="inputstyle" readOnly id="ta_report_sta" />
//                   <span className="sta_recover" id="ta_sta_recover">스태미너 회복 예정 시간 : </span>
//                 </div>
//                 <div className="yoso2">
//                   <span>소모 스태미너</span>
//                   <input className="inputstyle" readOnly id="ta_report_sta_o" />
//                   <span className="sta_recover" id="ta_sta_recover_o">스태미너 회복 예정 시간 : </span>
//                 </div>
//               </div>
//               <div className="twittershare">
//                 <button onClick={this.twittertale}>
//                   <img src="./images/twitterwhite2.png" />
//                 </button>
//                 <br /><br />
//               </div>


//             </div> */}
//             {/* <!--테일 계산기 리뉴얼 끝--> */}
//           </div>

//           <div className="part_footer"><br />
//             <span className="caution">※ 이 계산기는 정확한 결과를 보장하지 않습니다. 참고하는 용도로만 사용해주세요.</span><br /><br />
//             ※ 모든 계산은 라이브 S랭크 클리어를 기준으로 합니다.<br />
//             ※ 시어터, 튠 영업런에서는 티켓을 10배수로 사용하는것만을 기준으로 합니다.<br />
//             ※ 투어, 테일 영업런에서는 찬스가 뜨지 않는 최저치를 기준으로 합니다.<br />
//             ※ 투어 일반곡은 PUSH 대상인 1.2배수 플레이를 기준으로 합니다.<br />
//             ※ 테일 이벤트는 라이브런의 경우 세 곡 연속 라이브, 영업런의 경우 세 곡 연속 영업을 돌리는 것을 기본으로 합니다.<br /><br />
//             ※ 구글 크롬, 파이어폭스, 웨일브라우저 외에는 정확하게 작동하지 않을 수도 있습니다.<br />
//             ※ 브라우저 설정에서 자바스크립트 사용을 막아둔 경우엔 사용 할 수 없습니다.<br /><br />
//             ※ 문의 사항이 있을 경우 아래 연락처로 연락해주세요.<br />
//             메일 : linesling@gmail.com<br />
//             트위터 : <a href="http://twitter.com/ln_sling">@Ln_sling</a><br />
//             블로그 : <a href="http://linesling.tistory.com">linesling.tistory.com</a><br />
//             <br />
//             <a href="https://linesling.tistory.com/tag/%EB%A1%9C%EC%BD%94">
//               ロコのレゾンデートルってプレゼンテーションそのものなんです！
//             </a><br />
//             <img className="bottomslingname" src="./images/slingname333.png" />
//             <br />
//           </div>
//         </div>
//       </React.Fragment>
//     )
//   }
// }

// ReactDOM.render(<Home />, document.getElementById('app'));
