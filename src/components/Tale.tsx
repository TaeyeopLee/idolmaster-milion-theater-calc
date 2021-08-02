import * as React from 'react';
import { taleCalculate } from './calculator';
import { TState, REGION, CalcType, MULTIPLIER } from '../index';

class Tale extends React.Component<any, TState> {
  constructor(props: any) {
    super(props);
    this.state = {
      region: REGION.JPN,
      calcType: CalcType.MM,
      maxStamina: 0,
      eventPointGoal: 300000,
      currentPoint: 0,
      liverun: {
        normalSongCnt: '0',
        normalSong_Multiplier: MULTIPLIER.x1,
        ellegant_stage_cnt: '0',
        jewel: 0,
        stamina: 0,
        recover_stamina: '',
      },
      salesrun: {
        sales_Cnt: '0',
        sales_Multiplier: MULTIPLIER.x1,
        ellegant_stage_o_cnt: '0',
        jewel_o: 0,
        stamina_o: 0,
        recover_stamina_o: ''
      }
    }
  }

  twittertale = () => {
    console.log("twittertale");
    window.open('https://twitter.com/intent/tweet?text=테일 이벤트 목표 ' +
				this.state.eventPointGoal +
				'pt까지%0A%0A' +
				'라이브런 : 일반곡 ' +
        this.state.liverun.normalSongCnt +
				'회, 이벤트곡 ' +
        this.state.liverun.ellegant_stage_cnt +
				'회, 주얼 ' +
        this.state.liverun.jewel +
				'개 소모 예상%0A' +
				'영업런 : 10배수 티켓 라이브 ' +
        this.state.salesrun.sales_Cnt +
				'회, 이벤트곡 ' +
        this.state.salesrun.ellegant_stage_o_cnt +
				'회, 주얼 ' +
        this.state.salesrun.jewel_o +
				'개 소모 예상%0A%0A%23밀리시타_계산기 https%3A%2F%2Fmilli-calc.tistory.com%2F'
				, '_blank', "height=400,width=600")
  }

  onChangeRegion = (e: string) => {
    console.log('onChangeRegion : ', e);
    this.setState({
      ...this.state,
      region: e,
    })
  }

  onClickCalcBtn = () => {
    let theme: TState = taleCalculate(this.state);
    this.setState({
      ...this.state,
      ...theme
    });
  }

  onChangeInputMaxSta = (e: any) => {
    console.log("onChangeInputMaxSta", e);
    this.setState({
      ...this.state,
      maxStamina: e.target.value,
    })
  }

  onChangeInputPointGoal = (e: any) => {
    this.setState({
      ...this.state,
      eventPointGoal: e.target.value,
    })
  }

  onChangeInputCurrentPoint = (e: any) => {
    this.setState({
      ...this.state,
      currentPoint: e.target.value,
    })
  }

  onChangeInputLiveRunNormalSongMultiplier = (e: string) => {
    console.log('onChangeInputNormalSongMultiplier : ', e);
    this.setState({
      liverun: {
        ...this.state.liverun,
        normalSong_Multiplier: e,
      }
    }, this.onClickCalcBtn)
  }

  onChangeSalesRunSalesCntMultiplier = (e: string) => {
    console.log('onChangeSalesRunSalesCntMultiplier', e);
    this.setState({
      ...this.state,
      salesrun: {
        ...this.state.salesrun,
        sales_Multiplier: e,
      }
    }, this.onClickCalcBtn)
  }

  render() {
    console.log("Tale render");
    console.log("Tale props : ", this.props);
    return (
      <div className="input_tale input_main" id="input_tale">
        <br />
        <div className="yoso">
          <div className="yoso2-button">
            <input type="radio" id="ta_select_jpn" value={REGION.JPN} name="ta_server" checked={this.state.region === REGION.JPN} onChange={this.onChangeRegion.bind(this, REGION.JPN)} />
            <label htmlFor="ta_select_jpn" className="label">일본판</label>
            <input type="radio" id="ta_select_kor" value={REGION.KOR} name="ta_server" checked={this.state.region === REGION.KOR} onChange={this.onChangeRegion.bind(this, REGION.KOR)} />
            <label htmlFor="ta_select_kor" className="label">한국판</label>
          </div>
        </div>
        <div className="yoso">
          <div className="yoso2">
            <span>최대스태미너</span>
            <input className="inputstyle" type="number" id="ta_maxsta" value={this.state.maxStamina} onChange={this.onChangeInputMaxSta} />
          </div>
          <div className="yoso2">
            <span>목표 이벤트 포인트</span><input className="inputstyle" type="number" id="ta_eventmokpyo" value={this.state.eventPointGoal} 
              onChange={this.onChangeInputPointGoal}/>
          </div>
        </div>
        <div className="yoso">
          <div className="yoso2">
            <span>현재 이벤트 포인트</span><input className="inputstyle" type="number" id="ta_eventnow" value={this.state.currentPoint}
              onChange={this.onChangeInputCurrentPoint} />
          </div>
          <div className="yoso2">
          </div>
        </div>
        <div className="yoso calc" id="ta_calc" onClick={this.onClickCalcBtn}>계산</div>
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
              <input type="radio" id="ta_selectsong_x1" name="ta_song_multi" checked={this.state.liverun.normalSong_Multiplier === MULTIPLIER.x1} onChange={this.onChangeInputLiveRunNormalSongMultiplier.bind(this, MULTIPLIER.x1)} />
              <label htmlFor="ta_selectsong_x1" >x1</label>
              <input type="radio" id="ta_selectsong_x2" name="ta_song_multi" checked={this.state.liverun.normalSong_Multiplier === MULTIPLIER.x2} onChange={this.onChangeInputLiveRunNormalSongMultiplier.bind(this, MULTIPLIER.x2)} />
              <label htmlFor="ta_selectsong_x2" >x2</label>
            </div>
            <input className="inputstyle result_song" readOnly type="text" id="ta_report_normalsong"  value={this.state.liverun.normalSongCnt} />
          </div>
          <div className="yoso2">
            <span>영업 횟수</span>
            <div className="yoso2-button">
            <input
                type="radio"
                id="ta_selectoshigoto_x1"
                name="ta_oshigoto_multi"
                checked={this.state.salesrun.sales_Multiplier === MULTIPLIER.x1}
                onChange={this.onChangeSalesRunSalesCntMultiplier.bind(this, MULTIPLIER.x1)}
              />
              <label htmlFor="ta_selectoshigoto_x1" className="label">
                x1
              </label>
              <input
                type="radio"
                id="ta_selectoshigoto_x2"
                name="ta_oshigoto_multi"
                checked={this.state.salesrun.sales_Multiplier === MULTIPLIER.x2}
                onChange={this.onChangeSalesRunSalesCntMultiplier.bind(this, MULTIPLIER.x2)}
              />
              <label htmlFor="ta_selectoshigoto_x2" className="label">
                x2
              </label>
            </div>
            <input className="inputstyle result_song" readOnly type="text" id="ta_report_normalsong_o" value={this.state.salesrun.sales_Cnt} />
          </div>
        </div>
        <div className="yoso result">
          <div className="yoso2">
            <span>엘레강트 스테이지 횟수</span>
            <input className="inputstyle result_song" readOnly type="text" id="ta_report_eventsong" value={this.state.liverun.ellegant_stage_cnt} />
          </div>
          <div className="yoso2">
            <span>엘레강트 스테이지 횟수</span>
            <input className="inputstyle result_song" readOnly type="text" id="ta_report_eventsong_o" value={this.state.salesrun.ellegant_stage_o_cnt} />
          </div>
        </div>
        <div className="yoso result">
          <div className="yoso2">
            <span>소모 주얼</span>
            <input className="inputstyle" readOnly id="ta_report_jew" value={this.state.liverun.jewel} />
          </div>
          <div className="yoso2">
            <span>소모 주얼</span>
            <input className="inputstyle" readOnly id="ta_report_jew_o" value={this.state.salesrun.jewel_o} />
          </div>
        </div>
        <div className="yoso result">
          <div className="yoso2">
            <span>소모 스태미너</span>
            <input
              className="inputstyle"
              readOnly
              id="ta_report_sta"
              value={this.state.liverun.stamina}
            />
            <span className="sta_recover" id="ta_sta_recover">
              {this.state.liverun.recover_stamina}
            </span>
          </div>
          <div className="yoso2">
            <span>소모 스태미너</span>
            <input
              className="inputstyle"
              readOnly
              id="ta_report_sta_o"
              value={this.state.salesrun.stamina_o}
            />
            <span className="sta_recover" id="ta_sta_recover_o">
              {this.state.salesrun.recover_stamina_o}
            </span>
          </div>
        </div>
        <div className="twittershare">
          <button onClick={this.twittertale}>
            <img src="./images/twitterwhite2.png" />
          </button>
          <br /><br />
        </div>


      </div>
    )
  }
}

export default Tale;
