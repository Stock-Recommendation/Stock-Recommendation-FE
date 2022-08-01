import { BoxALignCenter_Justify_ItemsBetween } from "@styles/styled-components/styledBox";
import { Progress } from "antd";

const Dashboard = () => {
  const UpDown = (predictedPrice: number, oldPrice: number) =>{
    const percentDiff = (predictedPrice/oldPrice-1)*100;
    return <td className="predicted-price">
      <div className={percentDiff > 0 ? "up": "down"}>
        {percentDiff > 0 ? "▲ " : "▼ "}
        {percentDiff.toFixed(2)}%
      </div>
    </td>
  }
  return (
    <section id="dashboard">
      <h1>Dashboard</h1>
      <div className="time-query">
        <p>Predicted Price</p>
        <div className="button-wrapper">
          <button>24h</button>
          <button>3d</button>
          <button>1w</button>
          <button>1m</button>
        </div>
      </div>
      <div className="block-for-pc">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Ticker</th>
              <th>Name</th>
              <th>Recommendation</th>
              <th>Label</th>
              <th>Stock performance graph</th>
              <th>Market Cap</th>
              <th>Current Price</th>
              <th>Predicted Price</th>
              <th>Historical Accuracy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img className="icon" src="/favicon.ico"></img>
              </td>
              <td>APPL</td>
              <td>APPL INC</td>
              <td>
                <Progress percent={20} status="exception" showInfo={false}/>
              </td>
              <td>Hold Tight</td>
              <td>
                <img src="/graph.png" alt="" className="graph" />
              </td>
              <td>$2.38T</td>
              <td>$147.04</td>
              {UpDown(150, 147.04)}
              <td className="up">82%</td>
            </tr>
            <tr>
              <td>
                <img className="icon" src="/favicon.ico"></img>
              </td>
              <td>APPL</td>
              <td>APPL INC</td>
              <td>
                <Progress percent={20} status="exception" showInfo={false}/>
              </td>
              <td>Hold Tight</td>
              <td>
                <img src="/graph.png" alt="" className="graph" />
              </td>
              <td>$2.38T</td>
              <td>$147.04</td>
              {UpDown(150, 147.04)}
              <td className="up">82%</td>
            </tr>
            <tr>
              <td>
                <img className="icon" src="/favicon.ico"></img>
              </td>
              <td>APPL</td>
              <td>APPL INC</td>
              <td>
                <Progress percent={20} status="exception" showInfo={false}/>
              </td>
              <td>Hold Tight</td>
              <td>
                <img src="/graph.png" alt="" className="graph" />
              </td>
              <td>$2.38T</td>
              <td>$147.04</td>
              {UpDown(150, 147.04)}
              <td className="up">82%</td>
            </tr>
            <tr>
              <td>
                <img className="icon" src="/favicon.ico"></img>
              </td>
              <td>APPL</td>
              <td>APPL INC</td>
              <td>
                <Progress percent={20} status="exception" showInfo={false}/>
              </td>
              <td>Hold Tight</td>
              <td>
                <img src="/graph.png" alt="" className="graph" />
              </td>
              <td>$2.38T</td>
              <td>$147.04</td>
              {UpDown(150, 147.04)}
              <td className="up">82%</td>
            </tr>
            <tr>
              <td>
                <img className="icon" src="/favicon.ico"></img>
              </td>
              <td>APPL</td>
              <td>APPL INC</td>
              <td>
                <Progress percent={20} status="exception" showInfo={false}/>
              </td>
              <td>Hold Tight</td>
              <td>
                <img src="/graph.png" alt="" className="graph" />
              </td>
              <td>$2.38T</td>
              <td>$147.04</td>
              {UpDown(150, 147.04)}
              <td className="up">82%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-for-mobile">Coming soon</div>
    </section>
  );
};
export default Dashboard;
