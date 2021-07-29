            {/* <!--튠 계산기 리뉴얼 시작--> */}
            {/* <div className="input_tune input_main" id="input_tune">
              <br />
              <div className="yoso">
                <div className="yoso2-button">
                  <input type="radio" id="tu_select_jpn" value="jpn" name="tu_server" checked /><label htmlFor="tu_select_jpn"
                    className="label">일본판</label>
                  <input type="radio" id="tu_select_kor" value="kor" name="tu_server" /><label htmlFor="tu_select_kor"
                    className="label">한국판</label>
                </div>
                <div className="yoso2-button">
                  <input type="radio" id="tu_select_MM" value="MM" name="tu_diff" checked /><label htmlFor="tu_select_MM">MM</label>
                  <input type="radio" id="tu_select_6MIX" value="6MIX" name="tu_diff" /><label htmlFor="tu_select_6MIX">6MIX</label>
                </div>
              </div>
              <div className="yoso">
                <div className="yoso2">
                  <span>최대스태미너</span>
                  <input className="inputstyle" type="number" id="tu_maxsta" value="" />
                </div>
                <div className="yoso2">
                  <span>목표 이벤트 포인트</span><input className="inputstyle" type="number" id="tu_eventmokpyo" value="300000" />
                </div>
              </div>
              <div className="yoso">
                <div className="yoso2">
                  <span>현재 이벤트 포인트</span><input className="inputstyle" type="number" id="tu_eventnow" value="0" />
                </div>
                <div className="yoso2">
                  <span>덱 보너스 (%)</span><input className="inputstyle" type="number" id="tu_bonus" value="20" />
                </div>
              </div>
              <div className="yoso">
                <div className="yoso2">
                  <span>현재 소지 재화</span><input className="inputstyle" type="number" id="tu_eventmat" value="0" />
                </div>
                <div className="yoso2">
                </div>
              </div>
              <div className="yoso calc" id="tu_calc">계산</div>
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
                    <input type="radio" id="tu_selectsong_x1" name="tu_song_multi" checked /><label htmlFor="tu_selectsong_x1"
                      className="label">x1</label>
                    <input type="radio" id="tu_selectsong_x2" name="tu_song_multi" /><label htmlFor="tu_selectsong_x2"
                      className="label">x2</label>
                  </div>
                  <input className="inputstyle result_song" readOnly type="text" id="tu_report_normalsong" value="" />
                  <input className="inputstyle result_song" readOnly type="text" id="tu_report_normalsong2" value="" />
                </div>
                <div className="yoso2">
                  <span>티켓 10배수 횟수</span>
                  <input className="inputstyle result_song" readOnly id="tu_report_normalsong_o" />
                </div>
              </div>
              <div className="yoso result">
                <div className="yoso2">
                  <span>이벤트곡 횟수</span>
                  <div className="yoso2-button">
                    <input type="radio" id="tu_select_x1" name="tu_event_multi" checked /><label htmlFor="tu_select_x1"
                      className="label">x1</label>
                    <input type="radio" id="tu_select_x2" name="tu_event_multi" /><label htmlFor="tu_select_x2"
                      className="label">x2</label>
                    <input type="radio" id="tu_select_x4" name="tu_event_multi" /><label htmlFor="tu_select_x4"
                      className="label">x4</label>
                  </div>
                  <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong" value="" />
                  <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong2" value="" />
                  <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong4" value="" />
                </div>
                <div className="yoso2">
                  <span>이벤트곡 횟수</span>
                  <div className="yoso2-button">
                    <input type="radio" id="tu_select_x1_o" name="tu_multi_o" checked /><label htmlFor="tu_select_x1_o">x1</label>
                    <input type="radio" id="tu_select_x2_o" name="tu_multi_o" /><label htmlFor="tu_select_x2_o">x2</label>
                    <input type="radio" id="tu_select_x4_o" name="tu_multi_o" /><label htmlFor="tu_select_x4_o">x4</label>
                  </div>
                  <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong_o" value="" />
                  <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong2_o" value="" />
                  <input className="inputstyle result_song" readOnly type="text" id="tu_report_eventsong4_o" value="" />
                </div>
              </div>
              <div className="yoso result">
                <div className="yoso2">
                  <span>소모 주얼</span>
                  <input className="inputstyle" readOnly id="tu_report_jew" />
                </div>
                <div className="yoso2">
                  <span>소모 주얼</span>
                  <input className="inputstyle" readOnly id="tu_report_jew_o" />
                </div>
              </div>
              <div className="yoso result">
                <div className="yoso2">
                  <span>소모 스태미너</span>
                  <input className="inputstyle" readOnly id="tu_report_sta" />
                  <span className="sta_recover" id="tu_sta_recover">스태미너 회복 예정 시간 : </span>
                </div>
                <div className="yoso2">
                  <span>소모 스태미너</span>
                  <input className="inputstyle" readOnly id="tu_report_sta_o" />
                  <span className="sta_recover" id="tu_sta_recover_o">스태미너 회복 예정 시간 : </span>
                </div>
              </div>
              <div className="twittershare">
                <button onClick={this.twittertune}>
                  <img src="./images/twitterwhite2.png" />
                </button>
                <br /><br />
              </div>


            </div> */}
            {/* <!--튠 계산기 리뉴얼 끝--> */}