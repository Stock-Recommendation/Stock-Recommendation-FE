import Tabs from "rc-tabs";
import TweetAnalysis from "./TweetAnalysis";
const { TabPane } = Tabs;
const RelatedTweets = () => {
  const categories = [
    { name: "All", query: "" },
    { name: "Strong Buy", query: "" },
    { name: "Buy", query: "" },
    { name: "Hold", query: "" },
    { name: "Hold tight", query: "" },
    { name: "Sell", query: "" },
    { name: "Strong Sell", query: "" },
  ];
  return (
    <>
      <h1>Related Tweets</h1>
      <Tabs defaultActiveKey="1">
        {categories.map((cate, i) => (
          <TabPane key={i} tabKey={i.toString()} tab={cate.name}>
            <TweetAnalysis />
          </TabPane>
        ))}
      </Tabs>
    </>
  );
};
export default RelatedTweets;
