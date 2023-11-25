import { useState } from "react";

import Parallax from "./components/Parallax";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

import "./Home.css";

const HomePage = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={"home-root"}>
        <div className={"home-content"}>
          <h1 className={"home-header"}>
            <strong>React.js</strong>
          </h1>
          <p className={"home-paragraph"}>
            Приложение с использованием <br /> рендеринга на стороне клиента
          </p>

          <Button onClick={() => setOpenModal(true)}>Модальное окно</Button>
        </div>
        <Parallax />
      </div>

      {isOpenModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <span className={"home-modal_content"}>
            Контент внутри ленивого модального окна
          </span>
        </Modal>
      )}
    </>
  );
};

export default HomePage;
