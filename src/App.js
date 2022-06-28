import "./App.css";
import CountUpList from "./components/CountUpList";
function App() {
  return (
    <section className="App">
      <div className="container">
        <div className="inner">
          <div className="left">
            <div className="left__inner">
              <div className="photo">
                <span>2019년 2월 기준</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right__inner">
              <div className="right__inner__top">
                <CountUpList />
              </div>
              <div className="right__inner__bottom">
                <div className="google-award">
                  2018 구글 플레이스토어 <br />
                  올해의 앱 최우수상 수상
                </div>
                <div className="apple-award">
                  2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
