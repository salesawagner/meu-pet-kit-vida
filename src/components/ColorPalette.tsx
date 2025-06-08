
import React from 'react';

const ColorPalette = () => {
  const colors = [
    { name: 'Primary Blue', class: 'bg-primary', description: 'Main brand color - Soft Blue (#4A90E2)' },
    { name: 'Primary Light', class: 'bg-primary-light', description: 'Light variant for backgrounds' },
    { name: 'Secondary Green', class: 'bg-secondary', description: 'Success & Health - Soft Green (#7ED321)' },
    { name: 'Secondary Light', class: 'bg-secondary-light', description: 'Light variant for backgrounds' },
    { name: 'Accent Beige', class: 'bg-accent', description: 'Warm accent - Beige (#F5F5DC)' },
    { name: 'Background', class: 'bg-background border', description: 'Main background color' },
    { name: 'Card', class: 'bg-card border', description: 'Card background' },
    { name: 'Muted', class: 'bg-muted', description: 'Subtle backgrounds' },
  ];

  const statusColors = [
    { name: 'Success', class: 'bg-success', description: 'Positive actions' },
    { name: 'Warning', class: 'bg-warning', description: 'Attention needed' },
    { name: 'Destructive', class: 'bg-destructive', description: 'Error states' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-h3 mb-4">Brand Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="space-y-2">
              <div className={`w-full h-16 rounded-lg ${color.class}`}></div>
              <div>
                <p className="text-body-sm font-medium">{color.name}</p>
                <p className="text-caption text-muted-foreground">{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-h3 mb-4">Status Colors</h3>
        <div className="grid grid-cols-3 gap-4">
          {statusColors.map((color) => (
            <div key={color.name} className="space-y-2">
              <div className={`w-full h-16 rounded-lg ${color.class}`}></div>
              <div>
                <p className="text-body-sm font-medium">{color.name}</p>
                <p className="text-caption text-muted-foreground">{color.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
