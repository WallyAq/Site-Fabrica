import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-container">
          
          
          <div className="footer-grid">

            {/* Coluna 1 - Contatos */}
            <div className="footer-column">
              <h3 className="column-title">CONTATOS</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <a href="mailto:fabrica.testadores@uece.br" className="contact-link">
                    fabrica.testadores@uece.br
                  </a>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="contact-text">
                    <p>Av. Dr. Silas Munguba, 1700<br />
                    Itaperi, Fortaleza - CE<br />
                    CEP: 60714-903</p>
                  </div>
                </div>


              </div>
            </div>

            {/* Coluna 2 - Parcerias */}
            <div className="footer-column">
              <h3 className="column-title">PARCERIAS</h3>
              <div className="partners-list">
                <div className="partner-item">
                  <a href="https://www.great.ufc.br/" target="_blank" rel="noopener noreferrer">
                    <img src="/Site-Fabrica/great.png" alt="GREat" className="partner-logo" />
                  </a>
                </div>
                <div className="partner-item">
                  <a href="http://rsi.dc.ufc.br/" target="_blank" rel="noopener noreferrer">
                    <img src="/Site-Fabrica/Residencia.png" alt="Residência em Segurança da Informação" className="partner-logo" />
                  </a>
                </div>
                <div className="partner-item">
                  <a href="https://www.uece.br/proplan/detic/" target="_blank" rel="noopener noreferrer">
                    <img src="/Site-Fabrica/detic.png" alt="DETIC" className="partner-logo" />
                  </a>
                </div>
                <div className="partner-item">
                  <a href="https://www.uece.br/proex/" target="_blank" rel="noopener noreferrer">
                    <img src="/Site-Fabrica/PROEX.png" alt="PROEX" className="partner-logo" />
                  </a>
                </div>
              </div>
            </div>

            {/* Coluna 3 - Redes Sociais */}
            <div className="footer-column">
              <h3 className="column-title">REDES SOCIAIS</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <a href="https://github.com/FabricadeTestadores" target="_blank" rel="noopener noreferrer" className="contact-link">
                    GitHub
                  </a>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <a href="https://www.linkedin.com/in/f%C3%A1brica-de-testadores-06b161381/?originalSubdomain=br" target="_blank" rel="noopener noreferrer" className="contact-link">
                    LinkedIn
                  </a>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon youtube-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="YouTube">
                      <path d="M23.498 6.186a3.019 3.019 0 00-2.136-2.119C19.653 3.5 12 3.5 12 3.5s-7.653 0-9.393.567A3.019 3.019 0 00.502 6.186 31.9 31.9 0 000 12a31.9 31.9 0 00.502 5.814 3.019 3.019 0 002.105 2.119C4.347 20.5 12 20.5 12 20.5s7.653 0 9.393-.567a3.02 3.02 0 002.105-2.119A31.9 31.9 0 0024 12a31.9 31.9 0 00-.502-5.814z" fill="currentColor"/>
                      <path d="M9.75 15.02V8.98L15.5 12l-5.75 3.02z" fill="#FFFFFF"/>
                    </svg>
                  </div>
                  <a href="https://www.youtube.com/@FabricadeTestadores" target="_blank" rel="noopener noreferrer" className="contact-link">
                    YouTube
                  </a>
                </div>

                <div className="contact-item">
                  <div className="contact-icon instagram-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  </div>
                  <a href="https://www.instagram.com/gesad.uece/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    Instagram - GESAD
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="copyright-content">
            <p>&copy; 2025 Fábrica de Testadores - UECE. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
