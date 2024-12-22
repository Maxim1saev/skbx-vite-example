// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { useRef, useState } from "react";
import "./App.css";

import GoogleRecaptcha from "react-google-invisible-recaptcha";
function App() {
  const [value, setValue] = useState("");
  const [resolved, setResolved] = useState(false);

  const refRecaptcha = useRef(null);

  const onResolved = () => {
    const data = refRecaptcha.current.callbacks.getResponse();
    refRecaptcha.current.callbacks.reset();

    console.log("data", data);
    setResolved(true);
  };

  const onRestart = () => {
    setValue("");
    setResolved(false);
  };

  const onSubmit = () => {
    refRecaptcha.current.callbacks.reset();
    refRecaptcha.current.callbacks.execute();
  };

  return (
    <>
      {resolved ? (
        <div>
          Human detected!
          <button onClick={onRestart}>Restart</button>
        </div>
      ) : (
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
            sitekey="6LeH_x8UAAAAAKKuaaod4GsENkTJTHdeQIm8l6y2"
          />
        </div>
      )}
    </>
  );
}

export default App;
