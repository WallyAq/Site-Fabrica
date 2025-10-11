import "./Performance.css";
import { useEffect, useRef } from "react";

export default function Performance() {
  const performanceCarouselRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const carousel = performanceCarouselRef.current;
    const container = containerRef.current;
    if (!carousel || !container) return;

    let intervalId;

    const startAutoScroll = () => {
      // No mobile, o scroll acontece no container, no desktop no grid
      
      let scrollAmount = 0;
      const totalCards = 4;

      const autoScroll = () => {
        // Verifica novamente se ainda é mobile para evitar problemas
        const currentIsMobile = window.innerWidth <= 768;
        const currentScrollElement = currentIsMobile ? container : carousel;
        
        if (currentIsMobile) {
          // Mobile: mostra um card por vez, centralizado
          const containerWidth = currentScrollElement.offsetWidth;
          const cardWidth = 300; // largura do card no mobile
          const gap = 32; // 2rem gap
          
          // Calcula qual card está sendo mostrado atualmente
          const currentCardIndex = Math.round(scrollAmount / (cardWidth + gap));
          const nextCardIndex = (currentCardIndex + 1) % totalCards;
          
          // Centraliza o próximo card
          const cardCenterOffset = (containerWidth - cardWidth) / 2;
          scrollAmount = nextCardIndex * (cardWidth + gap) - cardCenterOffset;
          
          // Garante que o scroll não seja negativo
          if (scrollAmount < 0) scrollAmount = 0;
          
        } else {
          // Desktop: lógica original
          const cardWidth = 320;
          scrollAmount += cardWidth;
          
          const maxScroll = (totalCards - 2) * cardWidth;
          if (scrollAmount >= maxScroll) {
            scrollAmount = 0;
          }
        }
        
        currentScrollElement.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
      };

      // Auto scroll a cada 4 segundos
      intervalId = setInterval(autoScroll, 4000);
    };

    const handleResize = () => {
      // Limpa o interval anterior e reinicia com as novas dimensões
      if (intervalId) {
        clearInterval(intervalId);
      }
      // Pequeno delay para evitar múltiplas execuções durante o resize
      setTimeout(startAutoScroll, 100);
    };

    // Inicia o auto scroll
    startAutoScroll();

    // Adiciona listener para resize
    window.addEventListener('resize', handleResize);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section id="performance" className="performance">
      <div className="performance-container">
        <div className="performance-carousel-container" ref={containerRef}>
          <div className="performance-grid" ref={performanceCarouselRef}>
          {/* Card 1 - Pessoas Impactadas */}
          <div className="performance-card">
            <div className="card-icon">
              <div className="icon-group">
                <div className="person-icon"></div>
                <div className="person-icon center"></div>
                <div className="person-icon"></div>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">
                <span className="title-blue">PESSOAS</span>
                <span className="title-orange">IMPACTADAS</span>
              </h3>
              <div className="card-number">+200</div>
            </div>
          </div>

          {/* Card 2 - Softwares Impactados */}
          <div className="performance-card">
            <div className="card-icon">
              <div className="laptop-icon">
                <div className="laptop-screen"></div>
                <div className="laptop-keyboard"></div>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">
                <span className="title-blue">SOFTWARES</span>
                <span className="title-orange">IMPACTADOS</span>
              </h3>
              <div className="card-number">05</div>
            </div>
          </div>

          {/* Card 3 - Projetos Realizados */}
          <div className="performance-card">
            <div className="card-icon">
              <div className="project-icon">
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">
                <span className="title-blue">SERVIÇOS</span>
                <span className="title-orange">REALIZADOS</span>
              </h3>
              <div className="card-number">05</div>
            </div>
          </div>

          {/* Card 4 - Cursos Oferecidos */}
          <div className="performance-card">
            <div className="card-icon">
              <div className="course-icon">
                <div className="book-spine"></div>
                <div className="book-pages"></div>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">
                <span className="title-blue">CURSOS</span>
                <span className="title-orange">OFERECIDOS</span>
              </h3>
              <div className="card-number">06</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
