
import React from 'react';

const ButtonShowcase = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-h3 mb-4">Buttons</h3>
        <p className="text-body text-muted-foreground mb-6">
          48px height, 8px radius, minimum touch area compliant
        </p>
      </div>

      <div className="space-y-6">
        {/* Primary Buttons */}
        <div className="space-y-3">
          <h4 className="text-body font-medium">Primary Buttons</h4>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Cadastrar Pet</button>
            <button className="btn-primary" disabled>Disabled</button>
          </div>
        </div>

        {/* Secondary Buttons */}
        <div className="space-y-3">
          <h4 className="text-body font-medium">Secondary Buttons</h4>
          <div className="flex flex-wrap gap-4">
            <button className="btn-secondary">Agendar Consulta</button>
            <button className="btn-secondary" disabled>Disabled</button>
          </div>
        </div>

        {/* Outline Buttons */}
        <div className="space-y-3">
          <h4 className="text-body font-medium">Outline Buttons</h4>
          <div className="flex flex-wrap gap-4">
            <button className="btn-outline">Ver Histórico</button>
            <button className="btn-outline" disabled>Disabled</button>
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="space-y-3">
          <h4 className="text-body font-medium">Icon Buttons</h4>
          <div className="flex flex-wrap gap-4 items-center">
            <button className="btn-primary flex items-center gap-2">
              <span className="w-5 h-5">🐕</span>
              Adicionar Cão
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <span className="w-5 h-5">🐱</span>
              Adicionar Gato
            </button>
            <button className="w-12 h-12 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              <span className="w-5 h-5 block mx-auto">+</span>
            </button>
          </div>
        </div>

        {/* Button States */}
        <div className="card-base">
          <h4 className="text-body font-medium mb-4">Interactive States</h4>
          <div className="space-y-2 text-body-sm text-muted-foreground">
            <p>• Hover: 90% opacity</p>
            <p>• Active: 80% opacity</p>
            <p>• Focus: Ring outline with 2px offset</p>
            <p>• Disabled: 50% opacity, no pointer events</p>
            <p>• Transition: 200ms ease-out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;
