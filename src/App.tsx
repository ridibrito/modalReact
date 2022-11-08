import { useState } from "react";
import Link from 'react'
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal(){
    setShowModal(true)
  }

  function handleCloseModal() {
    setShowModal(false)
  }


  return (
    <>
      <div className="container">
        <h1>Modal - Vite + React + Ts <img src="vite.svg" alt="logo vite"/></h1>
        <button onClick={handleOpenModal} className="btn-open">Abrir modal</button>
        <div>

        <div style={{opacity: showModal ? "1" : "0"}}  className="modal">
          <div className="header-modal">
            <h2>Vite</h2>
            <button className="btn-close" onClick={handleCloseModal}>Fechar</button>
          </div>
          <hr />
          <div>
            <p>
              Vite (palavra francesa para "rápido", pronunciada/vit/, como
              "veet") é uma ferramenta de construção que visa fornecer uma
              experiência de desenvolvimento mais rápida e enxuta para projetos
              web modernos. É composto por duas partes principais: Um servidor
              de desenvolvimento que fornece aprimoramentos de recursos
              avançados em módulos ES nativos , por exemplo,Hot Module
              Replacement (HMR) extremamente rápido . Um comando de compilação
              que agrupa seu código com Rollup , pré-configurado para gerar
              ativos estáticos altamente otimizados para produção. O Vite é
              opinativo e vem com padrões sensatos prontos para uso, mas também
              é altamente extensível por meio de sua API de plug - in e API
              JavaScript com suporte total à digitação.
            </p>
          <hr />
            <a target='_blank' href="https://vitejs.dev/">vite.dev</a>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
