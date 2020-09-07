import React, { useState } from "react";
import Form from "./components/form";
import join from "./assets/join.svg";
import successImg from "./assets/success.svg";
import { AppContainer, Card } from "./styles";

function App() {
  const [success, setSuccess] = useState(false);
  return (
    <AppContainer>
      {success ? (
        <Card>
          <img src={successImg} alt="success" />
          <h2 style={{ fontFamily: "cursive", fontSize: "1.2rem" }}>
            REGISTRATION COMPLETED
          </h2>
        </Card>
      ) : (
        <Card isForm={true}>
          <h2>JOIN US</h2>
          <Form setSuccess={setSuccess} />
        </Card>
      )}

      <Card width="400px" backgroundColor="#6271f0" noPriority={true}>
        <img src={join} alt="join" />
      </Card>
    </AppContainer>
  );
}

export default App;
