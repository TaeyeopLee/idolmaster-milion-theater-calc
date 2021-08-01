import * as React from "react";
import { tuneCalculate } from "./calculator";
import { TState, REGION, CalcType, MULTIPLIER } from "../index";

class Tune extends React.Component<any, TState> {
  constructor(props: any) {
    super(props);
    this.state = {
      region: REGION.JPN,
      calcType: CalcType.MM,
      maxStamina: 0,
      currentPoint: 0,
      eventPointGoal: 3000000,
      deckBonus: 0,
      currentMat: 0,
      liverun: {
        normalSongCnt: '0',
        normalSong_Multiplier: MULTIPLIER.x1,
        eventSongCnt: '0',
        eventSong_Multiplier: MULTIPLIER.x1,
        jewel: 0,
        stamina: 0,
        recover_stamina: '',
      },
      salesrun: {
        normalSong_o_Cnt: '0',
        eventSong_o_Cnt: '0',
        eventSong_o_Multiplier: MULTIPLIER.x1,
        jewel_o: 0,
        stamina_o: 0,
        recover_stamina_o: '',
      }
    }
  }

  twittertune = () => {
    console.log('twittertune');
  }

  onChangeRegion = (e: string) => {
    console.log("onChangeRegion : ", e);
    this.setState({
      ...this.state,
      region: e,
    });
  };

  onChangeCalcType = (e: string) => {
    console.log("onChangeCalcType : ", e);
    this.setState({
      ...this.state,
      calcType: e,
    });
  };

  onClickCalcBtn = () => {
    let theme: TState = tuneCalculate(this.state);
    this.setState({
      ...this.state,
      ...theme,
    });
  };

  onChangeInputMaxSta = (e: any) => {
    console.log("onChangeInputMaxSta", e);
    this.setState({
      ...this.state,
      maxStamina: e.target.value,
    });
  };

  onChangeInputPointGoal = (e: any) => {
    this.setState({
      ...this.state,
      eventPointGoal: e.target.value,
    });
  };

  onChangeInputCurrentPoint = (e: any) => {
    this.setState({
      ...this.state,
      currentPoint: e.target.value,
    });
  };

  onChangeInputCurrentMat = (e: any) => {
    this.setState({
      ...this.state,
      currentMat: e.target.value,
    });
  };

  onChangeInputDeckBonus = (e: any) => {
    this.setState({
      ...this.state,
      deckBonus: e.target.value,
    })
  }

  onChangeInputLiveRunNormalSongMultiplier = (e: string) => {
    console.log('onChangeInputNormalSongMultiplier : ', e);
    this.setState({
      liverun: {
        ...this.state.liverun,
        normalSong_Multiplier: e,
      }
    })
  }

  onChangeInputLiveRunEventSongMultiplier = (e: string) => {
    console.log('onChangeInputEventSongMultiplier : ', e);
    this.setState({
      liverun: {
        ...this.state.liverun,
        eventSong_Multiplier: e,
      }
    })
  }

  onChangeInputSalesRunEventSongMultiplier = (e: string) => {
    console.log('onChangeInputSalesRunEventSongMultiplier : ', e);
    this.setState({
      ...this.state,
      salesrun: {
        ...this.state.salesrun,
        eventSong_o_Multiplier: e,
      }
    })
  }

  render() {
    console.log("Tune render");
    console.log("Tune props : ", this.props);
    return (
      <div className="input_tune input_main" id="input_tune">
        <br />
        <div className="yoso">
          <div className="yoso2-button">
            <input type="radio" id="tu_select_jpn" value={REGION.JPN} name="tu_server" checked={this.state.region === REGION.JPN} onChange={this.onChangeRegion.bind(this, REGION.JPN)} />
            <label htmlFor="tu_select_jpn"
              className="label">일본판</label>
            <input type="radio" id="tu_select_kor" value={REGION.KOR} name="tu_server" checked={this.state.region === REGION.KOR} onChange={this.onChangeRegion.bind(this, REGION.KOR)} />
            <label htmlFor="tu_select_kor"
              className="label">한국판</label>
          </div>
          <div className="yoso2-button">
          <input type="radio" id="tu_select_MM" value={CalcType.MM} name="tu_diff" checked={this.state.calcType === CalcType.MM} onChange={this.onChangeCalcType.bind(this, CalcType.MM)} />
            <label htmlFor="tu_select_MM">{CalcType.MM}</label>
            <input type="radio" id="tu_select_6MIX" value={CalcType["6MIX"]} name="tu_diff" checked={this.state.calcType === CalcType["6MIX"]} onChange={this.onChangeCalcType.bind(this, CalcType["6MIX"])} />
            <label htmlFor="tu_select_6MIX">{CalcType["6MIX"]}</label>
          </div>
        </div>
        <div className="yoso">
          <div className="yoso2">
            <span>최대스태미너</span>
            <input className="inputstyle" type="number" id="tu_maxsta" value={this.state.maxStamina} onChange={this.onChangeInputMaxSta} />
          </div>
          <div className="yoso2">
            <span>목표 이벤트 포인트</span><input className="inputstyle" type="number" id="tu_eventmokpyo" value={this.state.eventPointGoal} onChange={this.onChangeInputPointGoal} />
          </div>
        </div>
        <div className="yoso">
          <div className="yoso2">
            <span>현재 이벤트 포인트</span><input className="inputstyle" type="number" id="tu_eventnow" value={this.state.currentPoint} onChange={this.onChangeInputCurrentPoint} />
          </div>
          <div className="yoso2">
            <span>덱 보너스 (%)</span><input className="inputstyle" type="number" id="tu_bonus" value={this.state.deckBonus} onChange={this.onChangeInputDeckBonus} />
          </div>
        </div>
        <div className="yoso">
          <div className="yoso2">
            <span>현재 소지 재화</span><input className="inputstyle" type="number" id="tu_eventmat" value={this.state.currentMat} onChange={this.onChangeInputCurrentMat} />
          </div>
          <div className="yoso2">
          </div>
        </div>
        <div className="yoso calc" id="tu_calc" onClick={this.onClickCalcBtn}>계산</div>
        <div className="yoso gong100">로코 귀여운</div>
        <div className="yoso result">
          <div className="yoso2">
            <p className="yoso-title">라이브런</p>
          </div>
          <div className="yoso2">
            <p className="yoso-title">영업런</p>
          </div>
        </div>
        <div className="yoso result">
          <div className="yoso2">
            <span>일반곡 횟수</span>
            <div className="yoso2-button">
              <input type="radio" id="tu_selectsong_x1" name="tu_song_multi" checked={this.state.liverun.normalSong_Multiplier === MULTIPLIER.x1} onChange={this.onChangeInputLiveRunNormalSongMultiplier.bind(this, MULTIPLIER.x1)} />
              <label htmlFor="tu_selectsong_x1" >x1</label>
              <input type="radio" id="tu_selectsong_x2" name="tu_song_multi" checked={this.state.liverun.normalSong_Multiplier === MULTIPLIER.x2} onChange={this.onChangeInputLiveRunNormalSongMultiplier.bind(this, MULTIPLIER.x2)} />
              <label htmlFor="tu_selectsong_x2" >x2</label>
            </div>
            <input className="inputstyle result_song" readOnly type="text" id="tu_report_normalsong" value={this.state.liverun.normalSongCnt} />
          </div>
          <div className="yoso2">
            <span>티켓 10배수 횟수</span>
            <input className="inputstyle result_song" readOnly id="tu_report_normalsong_o" value={this.state.salesrun.normalSong_o_Cnt} />
          </div>
        </div>
        <div className="yoso result">
          <div className="yoso2">
            <span>이벤트곡 횟수</span>
            <div className="yoso2-button">
              <input type="radio" id="tu_select_x1" name="tu_event_multi" checked={this.state.liverun.eventSong_Multiplier === MULTIPLIER.x1} onChange={this.onChangeInputLiveRunEventSongMultiplier.bind(this, MULTIPLIER.x1)} />
              <label htmlFor="tu_select_x1" >x1</label>
              <input type="radio" id="tu_select_x2" name="tu_event_multi" checked={this.state.liverun.eventSong_Multiplier === MULTIPLIER.x2} onChange={this.onChangeInputLiveRunEventSongMultiplier.bind(this, MULTIPLIER.x2)} />
              <label htmlFor="tu_select_x2" >x2</label>
              <input type="radio" id="tu_select_x4" name="tu_event_multi" checked={this.state.liverun.eventSong_Multiplier === MULTIPLIER.x4} onChange={this.onChangeInputLiveRunEventSongMultiplier.bind(this, MULTIPLIER.x4)} />
              <label htmlFor="tu_select_x4" >x4</label>
            </div>
            <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong" value={this.state.liverun.eventSongCnt} />
          </div>
          <div className="yoso2">
            <span>이벤트곡 횟수</span>
            <div className="yoso2-button">
              <input type="radio" id="tu_select_x1_o" name="tu_multi_o" checked={this.state.salesrun.eventSong_o_Multiplier === MULTIPLIER.x1} onChange={this.onChangeInputSalesRunEventSongMultiplier.bind(this, MULTIPLIER.x1)} />
              <label htmlFor="tu_select_x1_o">x1</label>
              <input type="radio" id="tu_select_x2_o" name="tu_multi_o" checked={this.state.salesrun.eventSong_o_Multiplier === MULTIPLIER.x2} onChange={this.onChangeInputSalesRunEventSongMultiplier.bind(this, MULTIPLIER.x2)} />
              <label htmlFor="tu_select_x2_o">x2</label>
              <input type="radio" id="tu_select_x4_o" name="tu_multi_o" checked={this.state.salesrun.eventSong_o_Multiplier === MULTIPLIER.x4} onChange={this.onChangeInputSalesRunEventSongMultiplier.bind(this, MULTIPLIER.x4)} />
              <label htmlFor="tu_select_x4_o">x4</label>
            </div>
            <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong_o" value={this.state.salesrun.eventSong_o_Cnt} />
          </div>
        </div>
        <div className="yoso result">
          <div className="yoso2">
            <span>소모 주얼</span>
            <input className="inputstyle" readOnly id="tu_report_jew" value={this.state.liverun.jewel}/>
          </div>
          <div className="yoso2">
            <span>소모 주얼</span>
            <input className="inputstyle" readOnly id="tu_report_jew_o" value={this.state.salesrun.jewel_o} />
          </div>
        </div>
        <div className="yoso result">
          <div className="yoso2">
            <span>소모 스태미너</span>
            <input className="inputstyle" readOnly id="tu_report_sta" value={this.state.liverun.stamina}/>
            <span className="sta_recover" id="tu_sta_recover">{this.state.liverun.recover_stamina}</span>
          </div>
          <div className="yoso2">
            <span>소모 스태미너</span>
            <input className="inputstyle" readOnly id="tu_report_sta_o" value={this.state.salesrun.stamina_o}/>
            <span className="sta_recover" id="tu_sta_recover_o">{this.state.salesrun.recover_stamina_o}</span>
          </div>
        </div>
        <div className="twittershare">
          <button onClick={this.twittertune}>
            <img src="./images/twitterwhite2.png" />
          </button>
          <br /><br />
        </div>
      </div>
    )
  }
}

export default Tune;
