import DetailGraph from "@components/main/stocks/DetailGraph";
import RelatedTweets from "@components/main/stocks/RelatedTweets";
import { StockCalculator } from "@components/main/stocks/StockCalculator";

const StocksList = () => {
  return (
    <section id="stock-detail">
      <div className="title">
        <h1>Apple Inc Stock Detail</h1>
      </div>
      <div className="technical">
        <div className="row">
          <div className="col-12 col-lg-8">
            <DetailGraph />
          </div>
          <div className="col-12 col-lg-4">
            <StockCalculator />
          </div>
        </div>
      </div>
      <div className="related-tweets">
        <RelatedTweets />
      </div>
    </section>
  );
};
export default StocksList;
