import { useRef, useState } from "react";
import "./App.css";

function App() {
  const refEmail = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleFocusEmail = () => {
    refEmail.current?.focus();
  };

  const handleClearFields = () => {
    setName("");
    setEmail("");
  };

  return (
    <>
      <div className="container">
        <h2 className="title">Форма</h2>

        <div className="field">
          <label>Ім'я</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            ref={refEmail}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button onClick={handleFocusEmail}>Перейти до Email</button>
          <button className="clear-btn" onClick={handleClearFields}>
            Очистити всі поля
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
