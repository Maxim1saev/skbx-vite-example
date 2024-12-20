import { useCallback, useState } from "react";

import "./App.css";

import { InvisibleSmartCaptcha } from "@yandex/smart-captcha";
function App() {
  const [token, setToken] = useState("");
  const [visible, setVisible] = useState(false);

  const handleChallengeHidden = useCallback(() => setVisible(false), []);

  const [resetCaptcha, setResetCaptcha] = useState(0);

  /* Update the state */
  const handleReset = () => setResetCaptcha((prev) => prev + 1);

  const handleButtonClick = () => {
    setVisible(true);
    handleReset();
  };
  return (
    <>
      <button onClick={handleButtonClick}>Validate</button>
      {token}
      <InvisibleSmartCaptcha
        key={resetCaptcha}
        sitekey="ysc1_WGR4Qb2tB0cJkL856mev1X9T9zCZQo7NYMWD0iza5e9b7dc3"
        onSuccess={(token) => {
          setToken(token);
        }}
        onChallengeHidden={handleChallengeHidden}
        visible={visible}
        // test
      />
    </>
  );
}

export default App;
