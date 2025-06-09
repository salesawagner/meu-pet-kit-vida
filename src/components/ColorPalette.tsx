
import React from 'react';

const ColorPalette = () => {
  const colors = [
    { name: 'Primary Blue', class: 'bg-primary', hex: '#4A90E2', description: 'Soft Blue - Cor principal da marca' },
    { name: 'Primary Light', class: 'bg-primary-light', hex: '#EBF4FF', description: 'Versão clara para fundos' },
    { name: 'Secondary Green', class: 'bg-secondary', hex: '#7ED321', description: 'Soft Green - Sucesso e saúde' },
    { name: 'Secondary Light', class: 'bg-secondary-light', hex: '#F0FDF4', description: 'Versão clara para fundos' },
    { name: 'Accent Beige', class: 'bg-accent', hex: '#F5F5DC', description: 'Beige - Cor de destaque quente' },
    { name: 'Background', class: 'bg-background border', hex: '#F9FAFB', description: 'Cor de fundo principal' },
    { name: 'Card', class: 'bg-card border', hex: '#FFFFFF', description: 'Fundo dos cards' },
    { name: 'Muted', class: 'bg-muted', hex: '#F3F4F6', description: 'Fundos sutis' },
  ];

  const statusColors = [
    { name: 'Success', class: 'bg-success', hex: '#22C55E', description: 'Ações positivas' },
    { name: 'Warning', class: 'bg-warning', hex: '#F59E0B', description: 'Atenção necessária' },
    { name: 'Destructive', class: 'bg-destructive', hex: '#EF4444', description: 'Estados de erro' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-h3 mb-4">Cores da Marca</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="space-y-2">
              <div className={`w-full h-16 rounded-lg ${color.class}`}></div>
              <div>
                <p className="text-body-sm font-medium">{color.name}</p>
                <p className="text-caption text-muted-foreground font-mono">{color.hex}</p>
                <p className="text-caption text-muted-foreground">{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-h3 mb-4">Cores de Status</h3>
        <div className="grid grid-cols-3 gap-4">
          {statusColors.map((color) => (
            <div key={color.name} className="space-y-2">
              <div className={`w-full h-16 rounded-lg ${color.class}`}></div>
              <div>
                <p className="text-body-sm font-medium">{color.name}</p>
                <p className="text-caption text-muted-foreground font-mono">{color.hex}</p>
                <p className="text-caption text-muted-foreground">{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-base">
        <h4 className="text-body font-medium mb-4">Paleta Original Especificada</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-full h-12 rounded-lg" style={{ backgroundColor: '#4A90E2' }}></div>
            <p className="text-caption mt-2 font-mono">#4A90E2</p>
            <p className="text-caption text-muted-foreground">Soft Blue</p>
          </div>
          <div className="text-center">
            <div className="w-full h-12 rounded-lg" style={{ backgroundColor: '#7ED321' }}></div>
            <p className="text-caption mt-2 font-mono">#7ED321</p>
            <p className="text-caption text-muted-foreground">Soft Green</p>
          </div>
          <div className="text-center">
            <div className="w-full h-12 rounded-lg" style={{ backgroundColor: '#F5F5DC' }}></div>
            <p className="text-caption mt-2 font-mono">#F5F5DC</p>
            <p className="text-caption text-muted-foreground">Beige</p>
          </div>
          <div className="text-center">
            <div className="w-full h-12 rounded-lg bg-muted border"></div>
            <p className="text-caption mt-2 font-mono">#F3F4F6</p>
            <p className="text-caption text-muted-foreground">Soft Neutral</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
