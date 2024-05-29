import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Estilo CSS para a navbar
import icon2 from '../assets/icon2.png';
import LoginIcon from '@mui/icons-material/Login';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu'; // Importando ícone de menu

function Navbar() {
  const [showButton, setShowButton] = useState(false); // Estado para controlar a visibilidade do botão
  const [selectedAnchor, setSelectedAnchor] = useState(0); // Estado para armazenar a âncora selecionada
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para controlar o menu mobile

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (index) => {
    setSelectedAnchor(index);
    setMobileMenuOpen(false); // Fecha o menu mobile ao clicar em um link
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div className="left-section">
          <div className="icon">
            <img style={{ height: 24, width: 44 }} src={icon2} alt="Ícone" />
          </div>
          <div className="anchors">
            <a href="#" onClick={() => handleAnchorClick(0)} className={selectedAnchor === 0 ? "selected" : ""}>
              Página Inicial {selectedAnchor === 0 && <span className="dot"></span>}<ExpandMoreIcon />
            </a>
            <a href="#" onClick={() => handleAnchorClick(1)} className={selectedAnchor === 1 ? "selected" : ""}>
              Menu {selectedAnchor === 1 && <span className="dot"></span>}<ExpandMoreIcon />
            </a>
            <a href="#" onClick={() => handleAnchorClick(2)} className={selectedAnchor === 2 ? "selected" : ""}>
              Para seu Negócio {selectedAnchor === 2 && <span className="dot"></span>}<ExpandMoreIcon />
            </a>
            <a href="#" onClick={() => handleAnchorClick(3)} className={selectedAnchor === 3 ? "selected" : ""}>
              O Nubank {selectedAnchor === 3 && <span className="dot"></span>}<ExpandMoreIcon />
            </a>
            <a href="#" onClick={() => handleAnchorClick(4)} className={selectedAnchor === 4 ? "selected" : ""}>
              Perguntas {selectedAnchor === 4 && <span className="dot"></span>}<ExpandMoreIcon />
            </a>
          </div>
        </div>
        <div className="right-section">
          <div className='btn1' >
          <button style={{color: 'rgb(130, 10, 209)', fontSize:'20px', fontWeight:'400'}} >
            {" "}
            Login <LoginIcon style={{ fontSize: 18, position: "relative", color:'rgb(130, 10, 209)' }} />
          </button>
          </div>
          <div
            className={`quero-ser-nubank-button ${
              showButton ? "show-button" : ""
            }`}
          >
            Quero ser Nubank
          </div>
          <div className="menu-icon" onClick={toggleMobileMenu}>
            <MenuIcon />
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#" onClick={() => handleAnchorClick(0)} className={selectedAnchor === 0 ? "selected" : ""}>
            Página Inicial {selectedAnchor === 0 && <span className="dot"></span>}
          </a>
          <a href="#" onClick={() => handleAnchorClick(1)} className={selectedAnchor === 1 ? "selected" : ""}>
            Menu {selectedAnchor === 1 && <span className="dot"></span>}
          </a>
          <a href="#" onClick={() => handleAnchorClick(2)} className={selectedAnchor === 2 ? "selected" : ""}>
            Para seu Negócio {selectedAnchor === 2 && <span className="dot"></span>}
          </a>
          <a href="#" onClick={() => handleAnchorClick(3)} className={selectedAnchor === 3 ? "selected" : ""}>
            O Nubank {selectedAnchor === 3 && <span className="dot"></span>}
          </a>
          <a href="#" onClick={() => handleAnchorClick(4)} className={selectedAnchor === 4 ? "selected" : ""}>
            Perguntas {selectedAnchor === 4 && <span className="dot"></span>}
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
