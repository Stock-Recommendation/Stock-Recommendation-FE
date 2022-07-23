import { Progress } from "antd";

const TweetAnalysis = () => {
  return (
    <div className="row g-3 mt-3">
      <div className="col-md-8 col-12">
        <div className="white-box">
          Tweet here, not integrated yet
        </div>
      </div>
      <div className="col-md-4 col-12">
        <div className="white-box">
          <div className="table1">
            <div className="left">
              <p>Credibility</p>
              <p>Rating</p>
              <p>Target Price</p>
              <p>Action</p>
            </div>
            <div className="right up">
              <Progress percent={90}showInfo={false}/>
              <p>Strong Buy</p>
              <p>$355</p>
              <p>Maintains</p>
            </div>
          </div>
          <div className="more">
            More Tweets from Nicole Petallides
          </div>
        </div>
      </div>
    </div>
  );
};
export default TweetAnalysis;
