import "../style/style.css";
import Page1 from "../components/Pages/Page1";
import Page2 from "../components/Pages/Page2";
import Head from "../components/Head";
import Page2Content from "../components/parts/Page2Content";
import Page3 from "../components/Pages/Page3";
import Shopping from "../components/Shopping";
import Page4 from "../components/Pages/Page4";
import Page4Content from "../components/parts/Page4Content";
import Nav from "../components/parts/Nav";
import { useState } from "react";

function Home() {
  const [currency, setCurrency] = useState();

  const handleChangeCurrency = async (e) => {
    // try {
    //   const read = await axios(`http:localhost:8000/`, { method: "GET" });
    //   console.log(read);
    // } catch (err) {
    //   console.log(err);
    // }
    setCurrency(e.target.value);
  };

  return (
    <div className="App">
      <Page1>
        <Nav />
        <Head />
      </Page1>

      <Page2>
        <Page2Content />
      </Page2>

      <Page3>
        <Shopping
          handleChangeCurrency={handleChangeCurrency}
          currency={currency}
        />
      </Page3>

      <Page4>
        <Page4Content />
      </Page4>
    </div>
  );
}

export default Home;
