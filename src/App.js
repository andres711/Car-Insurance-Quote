import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Summary from "./Components/Summary";
import Result from "./Components/Result";
import Spinner from "./Components/Spinner/Spinner.jsx";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 3rem;
`;
const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [data, saveData] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [quotation, saveQuotation] = useState(0);

  const [loading, setLoading] = useState(false);

  const handleData = (data, quotation) => {
    saveData(data);
    saveQuotation(quotation);
  };

  return (
    <div>
      <Container>
        <Header />

        <ContainerForm>
          <Form handleData={handleData} setLoading={setLoading} />
          {loading ? <Spinner /> : null}

          {!loading ? (
            <div>
              <Summary data={data} />
              <Result quotation={quotation} />
            </div>
          ) : null}
        </ContainerForm>
      </Container>
    </div>
  );
}

export default App;
