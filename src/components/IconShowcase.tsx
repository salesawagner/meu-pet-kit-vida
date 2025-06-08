
import React from 'react';
import { Cat, Dog, PawPrint, Syringe, Pill, Calendar } from 'lucide-react';

const IconShowcase = () => {
  const icons = [
    { Icon: Dog, name: 'Dog', description: 'Representação de cães' },
    { Icon: Cat, name: 'Cat', description: 'Representação de gatos' },
    { Icon: PawPrint, name: 'Paw Print', description: 'Pegadas de pets' },
    { Icon: Syringe, name: 'Syringe', description: 'Vacinas e injeções' },
    { Icon: Pill, name: 'Pill', description: 'Medicamentos' },
    { Icon: Calendar, name: 'Calendar', description: 'Agendamentos' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-h3 mb-4">Icons</h3>
        <p className="text-body text-muted-foreground mb-6">
          24x24px, outline style, pet-friendly iconography
        </p>
      </div>

      <div className="space-y-6">
        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {icons.map(({ Icon, name, description }) => (
            <div key={name} className="card-base text-center">
              <div className="flex justify-center mb-3">
                <Icon className="w-6 h-6 text-foreground" />
              </div>
              <h5 className="text-body-sm font-medium mb-1">{name}</h5>
              <p className="text-caption text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>

        {/* Icon Variations */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Icon Variations</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Default */}
            <div className="card-base text-center">
              <Dog className="w-6 h-6 text-foreground mx-auto mb-2" />
              <p className="text-body-sm">Default</p>
            </div>

            {/* Primary Color */}
            <div className="card-base text-center">
              <Dog className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-body-sm">Primary</p>
            </div>

            {/* Secondary Color */}
            <div className="card-base text-center">
              <Dog className="w-6 h-6 text-secondary mx-auto mb-2" />
              <p className="text-body-sm">Secondary</p>
            </div>

            {/* Muted */}
            <div className="card-base text-center">
              <Dog className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
              <p className="text-body-sm">Muted</p>
            </div>
          </div>
        </div>

        {/* Icon in Context */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Icons in Context</h4>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-body">Próxima consulta em 3 dias</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Syringe className="w-5 h-5 text-success" />
              <span className="text-body">Vacinação em dia</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Pill className="w-5 h-5 text-warning" />
              <span className="text-body">Lembrete de medicamento</span>
            </div>
          </div>
        </div>

        {/* Icon Guidelines */}
        <div className="card-base">
          <h4 className="text-body font-medium mb-4">Icon Guidelines</h4>
          <div className="space-y-2 text-body-sm text-muted-foreground">
            <p>• Tamanho padrão: 24x24px (w-6 h-6)</p>
            <p>• Estilo: outline para consistência</p>
            <p>• Cores: usar tokens semânticos (primary, secondary, etc.)</p>
            <p>• Contextual: ícones menores (20px) em componentes pequenos</p>
            <p>• Acessibilidade: sempre com labels ou contexto claro</p>
            <p>• Temática pet-friendly para conexão emocional</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconShowcase;
