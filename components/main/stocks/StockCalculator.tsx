import Tabs from "rc-tabs";
const { TabPane } = Tabs;
export const StockCalculator = () => {
  const timeQuery = [
    { time: "1m", query: "" },
    { time: "3m", query: "" },
    { time: "6m", query: "" },
    { time: "1y", query: "" },
  ];
  return (
    <div className="stock-calculator">
      <h1>Stock Calculator</h1>
      <h2>You invest</h2>
      <div className="invest">
        <input value={"$1000"} />
      </div>
      <h2>Duration</h2>
      <Tabs defaultActiveKey="1">
        {timeQuery.map((query, i) => (
          <TabPane tab={query.time} tabKey={i.toString()} key={i}>
            <div className="estimated-price">
              <h2>Estimated Price</h2>
              <div className="low">
                <div className="asset">
                  <div className="arrow-up">🞁</div>
                  <p>$1115</p>
                </div>
                <div className="stock-price">
                  <div className="per-stock">$371 per stock</div>
                  <div className="pred">(Low)</div>
                </div>
              </div>
              <div className="mid">
                <div className="asset">
                  <div className="arrow-up">🞁</div>
                  <p>$1185</p>
                </div>
                <div className="stock-price">
                  <div className="per-stock">$395 per stock</div>
                  <div className="pred">(Mid)</div>
                </div>
              </div>
              <div className="high">
                <div className="asset">
                  <div className="arrow-down">🞃</div>
                  <p>$1250</p>
                </div>
                <div className="stock-price">
                  <div className="per-stock">$416 per stock</div>
                  <div className="pred">(High)</div>
                </div>
              </div>
            </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};
