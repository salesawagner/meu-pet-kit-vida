
import React from 'react';
import { Calendar, Syringe, Pill } from 'lucide-react';

const CardShowcase = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-h3 mb-4">Cards</h3>
        <p className="text-body text-muted-foreground mb-6">
          12px radius, 16px padding, white background with subtle shadows
        </p>
      </div>

      <div className="space-y-6">
        {/* Basic Cards */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Basic Cards</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-base">
              <h5 className="text-body font-semibold mb-2">Informações Básicas</h5>
              <p className="text-body-sm text-muted-foreground">
                Dados principais do seu pet: nome, idade, peso e características.
              </p>
            </div>

            <div className="card-base">
              <h5 className="text-body font-semibold mb-2">Próximos Eventos</h5>
              <p className="text-body-sm text-muted-foreground">
                Consultas, vacinas e medicamentos agendados.
              </p>
            </div>
          </div>
        </div>

        {/* Pet Profile Cards */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Pet Profile Cards</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-base">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">🐕</span>
                </div>
                <div>
                  <h5 className="text-body font-semibold">Buddy</h5>
                  <p className="text-body-sm text-muted-foreground">Golden Retriever • 3 anos</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="chip chip-primary">Saudável</span>
                <span className="chip">Vacinado</span>
              </div>
            </div>

            <div className="card-base">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">🐱</span>
                </div>
                <div>
                  <h5 className="text-body font-semibold">Luna</h5>
                  <p className="text-body-sm text-muted-foreground">Persa • 2 anos</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="chip chip-secondary">Consulta em breve</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Action Cards</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-base hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="text-body-sm font-semibold">Agendar</h5>
                  <p className="text-caption text-muted-foreground">Nova consulta</p>
                </div>
              </div>
            </div>

            <div className="card-base hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Syringe className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h5 className="text-body-sm font-semibold">Vacinas</h5>
                  <p className="text-caption text-muted-foreground">Histórico</p>
                </div>
              </div>
            </div>

            <div className="card-base hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Pill className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <h5 className="text-body-sm font-semibold">Medicamentos</h5>
                  <p className="text-caption text-muted-foreground">Lembretes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Guidelines */}
        <div className="card-base">
          <h4 className="text-body font-medium mb-4">Card Guidelines</h4>
          <div className="space-y-2 text-body-sm text-muted-foreground">
            <p>• Border radius: 12px para suavidade visual</p>
            <p>• Padding: 16px em todos os lados</p>
            <p>• Shadow: sutil para elevação</p>
            <p>• Hover states: aumento sutil da shadow</p>
            <p>• Máximo contraste para acessibilidade</p>
            <p>• Espaçamento interno usando grid de 8px</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShowcase;
