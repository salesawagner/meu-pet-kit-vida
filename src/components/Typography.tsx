
import React from 'react';

const Typography = () => {
  const typeStyles = [
    { name: 'Display', class: 'text-display', sample: 'MeuPetVida' },
    { name: 'Heading 1', class: 'text-h1', sample: 'Cuidar do seu pet nunca foi tão fácil' },
    { name: 'Heading 2', class: 'text-h2', sample: 'Organize a vida do seu pet' },
    { name: 'Heading 3', class: 'text-h3', sample: 'Próximas vacinas' },
    { name: 'Body Large', class: 'text-body-lg', sample: 'Mantenha todos os dados de saúde, alimentação e cuidados do seu pet organizados em um só lugar.' },
    { name: 'Body', class: 'text-body', sample: 'Cadastre as informações do seu pet e receba lembretes importantes.' },
    { name: 'Body Small', class: 'text-body-sm', sample: 'Última atualização: hoje às 14:30' },
    { name: 'Caption', class: 'text-caption', sample: 'PRÓXIMA CONSULTA' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-h3 mb-4">Typography Scale</h3>
        <p className="text-body text-muted-foreground mb-6">
          Usando Inter como fonte principal para alta legibilidade e acessibilidade.
        </p>
      </div>

      <div className="space-y-6">
        {typeStyles.map((style) => (
          <div key={style.name} className="border-b border-border pb-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
              <div className="md:w-32">
                <span className="text-caption font-medium text-muted-foreground">{style.name}</span>
              </div>
              <div className="flex-1">
                <p className={style.class}>{style.sample}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card-base">
        <h4 className="text-h3 mb-4">Font Weights & Sizes</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-body">
          <div>
            <p className="font-light">Light (300) - Texto secundário</p>
            <p className="font-normal">Regular (400) - Texto principal</p>
            <p className="font-medium">Medium (500) - Labels</p>
          </div>
          <div>
            <p className="font-semibold">Semibold (600) - Títulos</p>
            <p className="font-bold">Bold (700) - Destaques</p>
            <p className="font-extrabold">Extra Bold (800) - Headers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
