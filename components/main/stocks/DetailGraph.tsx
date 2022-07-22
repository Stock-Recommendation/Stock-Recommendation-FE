import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Tabs from "rc-tabs";
const { TabPane } = Tabs;
const DetailGraph = () => {
  const data = [
    { name: "Page A", uv: 4000 },
    { name: "Page B", uv: 3000 },
    { name: "Page C", uv: 2000 },
    { name: "Page D" },
    { name: "Page E", uv: 1890 },
    { name: "Page F", uv: 2390 },
    { name: "Page G", uv: 3490 },
  ];

  const timeQuery = [
    { time: "24h", query: "" },
    { time: "3d", query: "" },
    { time: "7d", query: "" },
    { time: "1m", query: "" },
    { time: "3m", query: "" },
  ];

  return (
    <div className="detail-chart-wrapper">
      <div className="detail-chart">
        <h1>Graph</h1>
        <Tabs defaultActiveKey="1">
          {timeQuery.map((query, i) => (
            <TabPane tab={query.time} tabKey={i.toString()} key={i}>
              <div style={{ width: "100%" }}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="uv"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
      <div className="row py-4 gx-3">
        <div className="col-6 left">
          <div className="white-box">
            <div className="buysell">Buy/Sell</div>
            <h2 className="positive">Strong Buy</h2>
          </div>
        </div>
        <div className="col-6 right">
          <div className="white-box">
            <div className="progress">
              <div className="row">
                <div className="col-4">
                  <CircularProgressbar
                    value={82}
                    text={`${82}%`}
                    // styles={buildStyles({ textSize: "10px" })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailGraph;
