
import React, { useState } from 'react';

const ComponentShowcase = () => {
  const [activeTab, setActiveTab] = useState('perfil');
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const tabs = [
    { id: 'perfil', label: 'Perfil' },
    { id: 'saude', label: 'Saúde' },
    { id: 'agenda', label: 'Agenda' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-h3 mb-4">Components</h3>
        <p className="text-body text-muted-foreground mb-6">
          Componentes reutilizáveis seguindo as diretrizes do design system
        </p>
      </div>

      <div className="space-y-8">
        {/* Tabs */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Tabs</h4>
          
          <div className="card-base">
            <div className="flex border-b border-border mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-body-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="py-4">
              {activeTab === 'perfil' && (
                <p className="text-body">Informações básicas do pet: nome, raça, idade, peso.</p>
              )}
              {activeTab === 'saude' && (
                <p className="text-body">Histórico de vacinas, medicamentos e consultas veterinárias.</p>
              )}
              {activeTab === 'agenda' && (
                <p className="text-body">Próximos agendamentos e lembretes importantes.</p>
              )}
            </div>
          </div>
        </div>

        {/* Chips */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Chips</h4>
          
          <div className="flex flex-wrap gap-2">
            <span className="chip">Cão</span>
            <span className="chip">Gato</span>
            <span className="chip chip-primary">Saudável</span>
            <span className="chip chip-secondary">Vacinado</span>
            <span className="chip">2 anos</span>
            <span className="chip">Golden Retriever</span>
          </div>
        </div>

        {/* Lists */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Lists</h4>
          
          <div className="card-base">
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-body">Consulta veterinária</span>
                </div>
                <span className="text-body-sm text-muted-foreground">15 Jun</span>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-body">Vacina antirrábica</span>
                </div>
                <span className="text-body-sm text-muted-foreground">22 Jun</span>
              </div>
              
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <span className="text-body">Medicamento (2x ao dia)</span>
                </div>
                <span className="text-body-sm text-muted-foreground">Diário</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Modal</h4>
          
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary"
          >
            Abrir Modal
          </button>

          {showModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-card rounded-xl p-6 m-4 max-w-sm w-full animate-slide-up">
                <h5 className="text-h3 mb-4">Adicionar Medicamento</h5>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nome do medicamento"
                    className="input-field w-full"
                  />
                  <input
                    type="text"
                    placeholder="Dosagem"
                    className="input-field w-full"
                  />
                </div>
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setShowModal(false)}
                    className="btn-outline flex-1"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="btn-primary flex-1"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Alerts */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Alerts</h4>
          
          <button
            onClick={() => setShowAlert(true)}
            className="btn-secondary"
          >
            Mostrar Alert
          </button>

          {showAlert && (
            <div className="fixed top-4 right-4 z-50 animate-fade-in">
              <div className="bg-success text-success-foreground p-4 rounded-lg shadow-lg max-w-sm">
                <div className="flex items-center justify-between">
                  <span className="text-body-sm font-medium">Medicamento adicionado com sucesso!</span>
                  <button
                    onClick={() => setShowAlert(false)}
                    className="ml-3 text-success-foreground/80 hover:text-success-foreground"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <div className="bg-success/10 border border-success/20 text-success p-3 rounded-lg">
              <p className="text-body-sm font-medium">Sucesso: Dados salvos com êxito</p>
            </div>
            
            <div className="bg-warning/10 border border-warning/20 text-warning p-3 rounded-lg">
              <p className="text-body-sm font-medium">Atenção: Consulta agendada em 24 horas</p>
            </div>
            
            <div className="bg-destructive/10 border border-destructive/20 text-destructive p-3 rounded-lg">
              <p className="text-body-sm font-medium">Erro: Falha ao conectar com o servidor</p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Bottom Navigation</h4>
          
          <div className="max-w-sm mx-auto">
            <div className="bg-card border border-border rounded-t-xl p-4">
              <div className="flex justify-around">
                <button className="flex flex-col items-center gap-1 p-2">
                  <span className="text-xl">🏠</span>
                  <span className="text-caption text-primary font-medium">Início</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-2">
                  <span className="text-xl">📅</span>
                  <span className="text-caption text-muted-foreground">Agenda</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-2">
                  <span className="text-xl">🐕</span>
                  <span className="text-caption text-muted-foreground">Pets</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-2">
                  <span className="text-xl">⚙️</span>
                  <span className="text-caption text-muted-foreground">Config</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
