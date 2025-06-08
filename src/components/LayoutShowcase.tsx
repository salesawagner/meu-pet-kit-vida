
import React from 'react';

const LayoutShowcase = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-h3 mb-4">Layout System</h3>
        <p className="text-body text-muted-foreground mb-6">
          8pt grid system, responsive design, minimum 48x48px touch targets
        </p>
      </div>

      <div className="space-y-6">
        {/* Grid System */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">8pt Grid System</h4>
          
          <div className="card-base">
            <div className="grid grid-cols-8 gap-2 h-32">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-primary/10 rounded flex items-center justify-center text-caption">
                  {(i + 1) * 8}px
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-body-sm text-muted-foreground">
            Todos os espaçamentos seguem múltiplos de 8px: 8px, 16px, 24px, 32px, 40px, 48px...
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Mobile Layout Example</h4>
          
          <div className="max-w-sm mx-auto bg-card border rounded-2xl p-1">
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 rounded-xl mb-4">
              <div className="flex items-center justify-between">
                <h5 className="text-body font-semibold">MeuPetVida</h5>
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full"></div>
                <div className="flex-1">
                  <h6 className="text-body-sm font-medium">Buddy</h6>
                  <p className="text-caption text-muted-foreground">Golden Retriever</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-muted/50 p-3 rounded-lg min-h-touch">
                  <p className="text-caption font-medium">PRÓXIMA CONSULTA</p>
                  <p className="text-body-sm">15 Jun</p>
                </div>
                <div className="bg-muted/50 p-3 rounded-lg min-h-touch">
                  <p className="text-caption font-medium">MEDICAMENTO</p>
                  <p className="text-body-sm">2x ao dia</p>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-around p-4 border-t border-border">
              {['🏠', '📅', '🐕', '⚙️'].map((emoji, i) => (
                <button key={i} className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-muted">
                  <span className="text-lg">{emoji}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Touch Targets */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Touch Target Guidelines</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-base text-center">
              <div className="w-12 h-12 bg-success/10 border-2 border-success rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-success font-bold">✓</span>
              </div>
              <p className="text-body-sm font-medium">48x48px</p>
              <p className="text-caption text-muted-foreground">Tamanho mínimo recomendado</p>
            </div>

            <div className="card-base text-center">
              <div className="w-10 h-10 bg-warning/10 border-2 border-warning rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-warning font-bold">!</span>
              </div>
              <p className="text-body-sm font-medium">40x40px</p>
              <p className="text-caption text-muted-foreground">Marginal - usar com cuidado</p>
            </div>

            <div className="card-base text-center">
              <div className="w-8 h-8 bg-destructive/10 border-2 border-destructive rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-destructive font-bold">✕</span>
              </div>
              <p className="text-body-sm font-medium">32x32px</p>
              <p className="text-caption text-muted-foreground">Muito pequeno</p>
            </div>
          </div>
        </div>

        {/* Layout Guidelines */}
        <div className="card-base">
          <h4 className="text-body font-medium mb-4">Layout Guidelines</h4>
          <div className="space-y-2 text-body-sm text-muted-foreground">
            <p>• Sistema de grid: 8pt base para espaçamentos consistentes</p>
            <p>• Touch targets: mínimo 48x48px para acessibilidade</p>
            <p>• Margens laterais: 16px mínimo em dispositivos móveis</p>
            <p>• Responsive: mobile-first com breakpoints em 768px e 1024px</p>
            <p>• Densidade: adequada para uso com uma mão</p>
            <p>• Hierarquia visual: uso de espaçamentos para organizar conteúdo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutShowcase;
