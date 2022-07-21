import DetailGraph from "@components/main/stocks/DetailGraph";

const StocksList = () => {
  return (
    <section id="stock-detail">
      <div className="title">
        <h1>Apple Inc Stock Detail</h1>
      </div>
      <div className="technical">
        <div className="row">
          <div className="col-12 col-lg-7">
            <DetailGraph />
          </div>
          <div className="col-12 col-lg-5"></div>
        </div>
      </div>
      <div className="related-tweets"></div>
    </section>
  );
};
export default StocksList;
