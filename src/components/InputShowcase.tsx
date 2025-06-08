
import React, { useState } from 'react';

const InputShowcase = () => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-h3 mb-4">Form Inputs</h3>
        <p className="text-body text-muted-foreground mb-6">
          48px height, clear focus states, accessible labels
        </p>
      </div>

      <div className="space-y-6">
        {/* Basic Inputs */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Text Inputs</h4>
          
          <div className="space-y-2">
            <label htmlFor="pet-name" className="text-body-sm font-medium">Nome do Pet</label>
            <input
              id="pet-name"
              type="text"
              placeholder="Ex: Buddy"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              className="input-field w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="pet-weight" className="text-body-sm font-medium">Peso (kg)</label>
            <input
              id="pet-weight"
              type="number"
              placeholder="0.0"
              className="input-field w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="pet-notes" className="text-body-sm font-medium">Observações</label>
            <textarea
              id="pet-notes"
              placeholder="Adicione observações sobre seu pet..."
              rows={3}
              className="input-field w-full resize-none"
            />
          </div>
        </div>

        {/* Select Dropdown */}
        <div className="space-y-4">
          <h4 className="text-body font-medium">Select Inputs</h4>
          
          <div className="space-y-2">
            <label htmlFor="pet-type" className="text-body-sm font-medium">Tipo de Pet</label>
            <select
              id="pet-type"
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
              className="input-field w-full"
            >
              <option value="">Selecione...</option>
              <option value="dog">Cão</option>
              <option value="cat">Gato</option>
            </select>
          </div>
        </div>

        {/* Input States */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-body-sm font-medium">Estado Normal</label>
            <input
              type="text"
              placeholder="Texto do placeholder"
              className="input-field w-full"
            />
          </div>

          <div className="space-y-2">
            <label className="text-body-sm font-medium">Estado com Erro</label>
            <input
              type="text"
              placeholder="Campo obrigatório"
              className="input-field w-full border-destructive focus:ring-destructive"
            />
          </div>

          <div className="space-y-2">
            <label className="text-body-sm font-medium">Estado Sucesso</label>
            <input
              type="text"
              value="Valor válido"
              readOnly
              className="input-field w-full border-success focus:ring-success"
            />
          </div>

          <div className="space-y-2">
            <label className="text-body-sm font-medium text-muted-foreground">Estado Disabled</label>
            <input
              type="text"
              placeholder="Campo desabilitado"
              disabled
              className="input-field w-full"
            />
          </div>
        </div>

        {/* Input Guidelines */}
        <div className="card-base">
          <h4 className="text-body font-medium mb-4">Input Guidelines</h4>
          <div className="space-y-2 text-body-sm text-muted-foreground">
            <p>• Altura mínima: 48px para acessibilidade</p>
            <p>• Padding horizontal: 16px (4 * 4px grid)</p>
            <p>• Border radius: 8px</p>
            <p>• Focus ring: 2px com offset de 2px</p>
            <p>• Placeholder text: cor muted-foreground</p>
            <p>• Transições suaves de 200ms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputShowcase;
