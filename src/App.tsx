// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { useEffect, useRef, useState } from "react";
import "./App.css";

import GoogleRecaptcha from "react-google-invisible-recaptcha";
function App() {
  const [value, setValue] = useState("");
  const [resolved, setResolved] = useState(false);
  const [validateData, setValidateData] = useState("");

  const refRecaptcha = useRef(null);
  const [token, setToken] = useState("");

  const onResolved = () => {
    const tokenCaptcha = refRecaptcha.current.callbacks.getResponse();
    setToken(tokenCaptcha);
    // refRecaptcha.current.callbacks.reset();

    setResolved(true);
  };

  const onRestart = () => {
    setValue("");
    setResolved(false);
  };

  const onSubmit = () => {
    // refRecaptcha.current.callbacks.reset();
    refRecaptcha.current.callbacks.execute();
  };

  useEffect(() => {
    fetch("/api/recaptcha/api/siteverify", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: "6LfgVqMqAAAAAHdIOXELXj2T_3CL0eIjUOkL4vRp",
        response: token,
      }),
    })
      .then((response) => response.json())
      .then((data) => setValidateData(JSON.stringify(data)));
  }, [token]);

  return (
    <>
      <div>
        Token:{" "}
        <textarea
          value={token}
          style={{ width: "200px", height: "100px" }}
        ></textarea>
      </div>
      <div>Validate data: {validateData}</div>

      {resolved && "Human detected!"}
      <div>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={onSubmit}>Submit</button>
        <GoogleRecaptcha
          onResolved={onResolved}
          ref={refRecaptcha}
          sitekey="6LfgVqMqAAAAAK_Es1YkHkLj-2L9KCXlUA7fakqL"
        />
      </div>
    </>
  );
}

export default App;
