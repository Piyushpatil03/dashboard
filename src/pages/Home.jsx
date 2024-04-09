import { useEffect, useState } from "react";
import Linechart from "../components/Linechart/Linechart";
import "../App.css";
import Card from "../components/Card/Card";

const Home = () => {
  const [data, setData] = useState();
  const [cryptoData, setCryptoData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const pop_response = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    const pop_data = await pop_response.json();
    setData(pop_data);

    const crypto_response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const crypto_data = await crypto_response.json();
    setCryptoData(crypto_data);
  };

  return (
    <div className="App">
      <div className="row">
        <div className="col-3 col-lg-3 col-md-3 col-sm-0"></div>
        <div className="col-12 col-lg-6 col-sm-12">
          <div>
            <h3 className="h3">Hello, Brooklyn Simmons👋</h3>
            <h5 className="h5">
              Welcome to
              <span style={{ color: "rgb(63, 125, 0)" }}> Spot trading!</span>
            </h5>
          </div>

          {data && <Linechart data={data} />}
        </div>
      </div>

      <div className="row">
        <div className="col-0 col-lg-3"></div>
        <div className="col-9">
          <h5 className="h5">Assets Details</h5>
        </div>
      </div>

      <div className="row">
        <div className="col-3 col-lg-3 col-md-0 col-sm-0"></div>
        {cryptoData &&
          cryptoData.bpi &&
          Object.keys(cryptoData.bpi).map((item) => {
            return (
              <div className="col-12 col-lg-2">
                <Card data={cryptoData.bpi[item]} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
