import { useCallback, useRef, useState } from "react";

import "./App.css";

import { InvisibleSmartCaptcha } from "@yandex/smart-captcha";
import GoogleRecaptcha from "react-google-invisible-recaptcha";
function App() {
  const [value, setValue] = useState("");
  const [resolved, setResolved] = useState(false);

  const refRecaptcha = useRef(null);

  const onResolved = () => {
    // alert(
    //   name +
    //     ": Recaptcha resolved with response: " +
    //     refRecaptcha.current.callbacks.getResponse()
    // );
    setResolved(true);
  };

  const onRestart = () => {
    setValue("");
    setResolved(false);
  };

  const onSubmit = () => {
    // refRecaptcha.current.callbacks.reset();
    // refRecaptcha.current.callbacks.execute();
    if (window.smartCaptcha) window.smartCaptcha.execute();
  };

  return resolved ? (
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
      {/* <GoogleRecaptcha
        onResolved={onResolved}
        ref={refRecaptcha}
        sitekey="6LeH_x8UAAAAAKKuaaod4GsENkTJTHdeQIm8l6y2"
      /> */}
    </div>
  );
}

export default App;
