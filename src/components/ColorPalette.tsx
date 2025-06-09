
import React from 'react';

const ColorPalette = () => {
  const colors = [
    { name: 'Primary Blue', class: 'bg-primary', hex: '#4A90E2', rgb: 'rgb(74, 144, 226)', description: 'Soft Blue - Cor principal da marca' },
    { name: 'Primary Light', class: 'bg-primary-light', hex: '#EBF4FF', rgb: 'rgb(235, 244, 255)', description: 'Versão clara para fundos' },
    { name: 'Secondary Green', class: 'bg-secondary', hex: '#7ED321', rgb: 'rgb(126, 211, 33)', description: 'Soft Green - Sucesso e saúde' },
    { name: 'Secondary Light', class: 'bg-secondary-light', hex: '#F0FDF4', rgb: 'rgb(240, 253, 244)', description: 'Versão clara para fundos' },
    { name: 'Accent Beige', class: 'bg-accent', hex: '#F5F5DC', rgb: 'rgb(245, 245, 220)', description: 'Beige - Cor de destaque quente' },
    { name: 'Background', class: 'bg-background border', hex: '#F9FAFB', rgb: 'rgb(249, 250, 251)', description: 'Cor de fundo principal' },
    { name: 'Card', class: 'bg-card border', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', description: 'Fundo dos cards' },
    { name: 'Muted', class: 'bg-muted', hex: '#F3F4F6', rgb: 'rgb(243, 244, 246)', description: 'Fundos sutis' },
  ];

  const statusColors = [
    { name: 'Success', class: 'bg-success', hex: '#22C55E', rgb: 'rgb(34, 197, 94)', description: 'Ações positivas' },
    { name: 'Warning', class: 'bg-warning', hex: '#F59E0B', rgb: 'rgb(245, 158, 11)', description: 'Atenção necessária' },
    { name: 'Destructive', class: 'bg-destructive', hex: '#EF4444', rgb: 'rgb(239, 68, 68)', description: 'Estados de erro' },
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
                <p className="text-caption text-muted-foreground font-mono text-xs">{color.rgb}</p>
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
                <p className="text-caption text-muted-foreground font-mono text-xs">{color.rgb}</p>
                <p className="text-caption text-muted-foreground">{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-base">
        <h4 className="text-body font-medium mb-4">Demonstração com Valores Diretos</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-full h-12 rounded-lg border" style={{ backgroundColor: '#4A90E2' }}></div>
            <p className="text-caption mt-2 font-mono">#4A90E2</p>
            <p className="text-caption text-muted-foreground">Soft Blue</p>
          </div>
          <div className="text-center">
            <div className="w-full h-12 rounded-lg border" style={{ backgroundColor: '#7ED321' }}></div>
            <p className="text-caption mt-2 font-mono">#7ED321</p>
            <p className="text-caption text-muted-foreground">Soft Green</p>
          </div>
          <div className="text-center">
            <div className="w-full h-12 rounded-lg border" style={{ backgroundColor: '#F5F5DC' }}></div>
            <p className="text-caption mt-2 font-mono">#F5F5DC</p>
            <p className="text-caption text-muted-foreground">Beige</p>
          </div>
          <div className="text-center">
            <div className="w-full h-12 rounded-lg border" style={{ backgroundColor: '#F3F4F6' }}></div>
            <p className="text-caption mt-2 font-mono">#F3F4F6</p>
            <p className="text-caption text-muted-foreground">Soft Neutral</p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-body-sm text-muted-foreground">
            <strong>Comparação:</strong> A seção acima mostra as cores com valores CSS diretos. 
            Se houver diferença visual com as cores do sistema acima, indica que há um problema na configuração do design system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
