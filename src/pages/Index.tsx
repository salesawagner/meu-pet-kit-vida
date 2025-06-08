
import React from 'react';
import ColorPalette from '@/components/ColorPalette';
import Typography from '@/components/Typography';
import ButtonShowcase from '@/components/ButtonShowcase';
import InputShowcase from '@/components/InputShowcase';
import CardShowcase from '@/components/CardShowcase';
import IconShowcase from '@/components/IconShowcase';
import LayoutShowcase from '@/components/LayoutShowcase';
import ComponentShowcase from '@/components/ComponentShowcase';
import DarkModeToggle from '@/components/DarkModeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DarkModeToggle />
      
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="text-center space-y-4">
            <h1 className="text-display">MeuPetVida</h1>
            <p className="text-body-lg max-w-2xl mx-auto">
              Design System & UI Kit para aplicativo de gestão de pets brasileiros
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="chip bg-primary-foreground/20 text-primary-foreground">Mobile First</span>
              <span className="chip bg-primary-foreground/20 text-primary-foreground">Acessível</span>
              <span className="chip bg-primary-foreground/20 text-primary-foreground">Pet Friendly</span>
              <span className="chip bg-primary-foreground/20 text-primary-foreground">Brasil</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="space-y-16">
          {/* Introduction */}
          <section className="text-center max-w-4xl mx-auto">
            <h2 className="text-h1 mb-6">Um design system pensado para tutores brasileiros</h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Interface limpa, moderna e amigável que transmite confiança e facilita o cuidado 
              com cães e gatos. Inspirado nas melhores práticas de UX e adaptado para o mercado brasileiro.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-base text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-h3 mb-2">Design Moderno</h3>
                <p className="text-body-sm text-muted-foreground">
                  Interface limpa com cores suaves e tipografia acessível
                </p>
              </div>
              
              <div className="card-base text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-h3 mb-2">Mobile First</h3>
                <p className="text-body-sm text-muted-foreground">
                  Otimizado para dispositivos móveis com touch targets adequados
                </p>
              </div>
              
              <div className="card-base text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🐕</span>
                </div>
                <h3 className="text-h3 mb-2">Pet Friendly</h3>
                <p className="text-body-sm text-muted-foreground">
                  Iconografia e linguagem voltada para o universo pet
                </p>
              </div>
            </div>
          </section>

          {/* Color Palette */}
          <section>
            <h2 className="text-h1 mb-8">Paleta de Cores</h2>
            <ColorPalette />
          </section>

          {/* Typography */}
          <section>
            <h2 className="text-h1 mb-8">Tipografia</h2>
            <Typography />
          </section>

          {/* Buttons */}
          <section>
            <h2 className="text-h1 mb-8">Botões</h2>
            <ButtonShowcase />
          </section>

          {/* Form Inputs */}
          <section>
            <h2 className="text-h1 mb-8">Campos de Entrada</h2>
            <InputShowcase />
          </section>

          {/* Cards */}
          <section>
            <h2 className="text-h1 mb-8">Cards</h2>
            <CardShowcase />
          </section>

          {/* Icons */}
          <section>
            <h2 className="text-h1 mb-8">Ícones</h2>
            <IconShowcase />
          </section>

          {/* Layout */}
          <section>
            <h2 className="text-h1 mb-8">Sistema de Layout</h2>
            <LayoutShowcase />
          </section>

          {/* Components */}
          <section>
            <h2 className="text-h1 mb-8">Componentes</h2>
            <ComponentShowcase />
          </section>

          {/* Guidelines */}
          <section className="card-base">
            <h2 className="text-h1 mb-6">Diretrizes de Acessibilidade</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-h3 mb-4">Contraste de Cores</h3>
                <ul className="space-y-2 text-body text-muted-foreground">
                  <li>• Razão mínima 4.5:1 para texto normal</li>
                  <li>• Razão mínima 3:1 para texto grande</li>
                  <li>• Cores não como única forma de comunicação</li>
                  <li>• Suporte para modo escuro</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-h3 mb-4">Interação</h3>
                <ul className="space-y-2 text-body text-muted-foreground">
                  <li>• Touch targets mínimos de 48x48px</li>
                  <li>• Estados de foco visíveis</li>
                  <li>• Feedback tátil e visual</li>
                  <li>• Navegação por teclado</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-16">
        <div className="container text-center">
          <p className="text-body text-muted-foreground">
            MeuPetVida Design System • Criado com amor para pets brasileiros
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
