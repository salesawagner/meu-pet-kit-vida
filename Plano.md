## Plano de Ação: Inputs e Ferramentas (com Perplexity nos pontos estratégicos)

Abaixo está o plano de ação para criar a UI de um projeto mobile com design system, UI kit e style guide, aproveitando o Perplexity para pesquisa, benchmarks, geração de listas e documentação, e Figma/Figma AI para execução visual e organização.

---

### 1. Levantamento de requisitos e benchmarking

- **Input:** Briefing do app, público-alvo, funcionalidades principais, referências visuais desejadas.
- **Ferramenta:** Perplexity
- **Como usar:** 
  - Pesquise prompts como:  
    - “Quais são os componentes essenciais em apps mobile de [segmento]?”
    - “Quais são as melhores práticas de UI/UX para apps mobile em 2025?”
    - “Exemplos de design system para apps mobile modernos.”
- **Output:** Listas de componentes, sugestões de telas, links para referências atuais, melhores práticas e tendências[2][5].

---

### 2. Definição de design tokens e style guide

- **Input:** Diretrizes de marca, paleta de cores desejada, tipografia, referências de estilo.
- **Ferramenta:** Perplexity (para pesquisa e exemplos), Figma (para implementação)
- **Como usar:** 
  - Peça ao Perplexity:  
    - “Sugira uma paleta de cores moderna para um app mobile [tema/categoria].”
    - “Quais tokens são essenciais para um design system escalável?”
    - “Exemplos de estrutura de tokens para apps mobile.”
  - Implemente os tokens sugeridos no Figma, usando Figma Variables para facilitar a manutenção[4][5].
- **Output:** Paleta de cores, tokens de tipografia, espaçamentos, radius, etc., prontos para uso no Figma.

---

### 3. Geração do style guide visual

- **Input:** Tokens definidos (cores, tipografia, espaçamentos).
- **Ferramenta:** Figma AI (First Draft ou plugins de style guide)
- **Como usar:** 
  - Use os recursos de IA do Figma para gerar automaticamente páginas de style guide a partir dos tokens criados.
  - Prompt sugerido: “Gerar style guide visual com base nos tokens definidos.”
- **Output:** Style guide visual documentado no Figma, pronto para consulta e atualização.

---

### 4. Criação do UI Kit (componentes)

- **Input:** Lista de componentes essenciais (obtida com Perplexity).
- **Ferramenta:** Figma AI (First Draft), AI DesignGen, UXPilot
- **Como usar:**
  - Use prompts como:  
    - “Crie um botão primário, secundário e desabilitado seguindo meu style guide.”
    - “Gere cards de produto, listas, inputs, navegação, etc.”
  - Refine os componentes conforme necessário usando as ferramentas de IA.
- **Output:** Componentes editáveis, organizados em frames no Figma.

---

### 5. Organização e documentação do UI Kit

- **Input:** Componentes criados no Figma.
- **Ferramenta:** Figma AI (Rename layers, Auto layout), Perplexity (para guidelines e documentação)
- **Como usar:**
  - No Figma, organize os componentes em páginas/categorias, padronize nomes e utilize auto layout.
  - Use Perplexity para gerar guidelines e descrições detalhadas dos componentes e boas práticas de uso (“Como documentar um UI kit de forma eficiente?”).
- **Output:** UI Kit organizado, documentado e fácil de reutilizar.

---

### 6. Prototipagem e interações

- **Input:** Telas e componentes prontos.
- **Ferramenta:** Figma AI (Add Interactions), Motiff (opcional)
- **Como usar:**
  - Peça para “Adicionar interações padrão entre as telas.”
  - Gere protótipos navegáveis automaticamente.
- **Output:** Protótipo interativo pronto para validação e testes.

---

### 7. Documentação final e handoff

- **Input:** Design system, UI Kit e protótipo finalizados.
- **Ferramenta:** Perplexity (para gerar documentação e checklists), Figma AI (para documentação visual), Builder.io/Supernova (para exportação de código e documentação viva)
- **Como usar:**
  - Use Perplexity para criar checklists de acessibilidade, guidelines para desenvolvedores e documentação de handoff (“Checklist de handoff para design system mobile”).
  - Gere documentação visual e, se necessário, exporte assets/código.
- **Output:** Documentação pronta para devs e stakeholders, assets exportáveis, handoff facilitado[5][2].

---

## Resumo Visual

| Etapa                | Input Principal                              | Ferramenta Sugerida           | Output Esperado                        |
|----------------------|----------------------------------------------|-------------------------------|----------------------------------------|
| 1. Requisitos        | Briefing, referências                        | Perplexity                    | Lista de telas/componentes, benchmarks |
| 2. Tokens/Paleta     | Diretrizes de marca, referências             | Perplexity + Figma            | Tokens prontos                         |
| 3. Style Guide       | Tokens                                       | Figma AI                      | Style guide visual                     |
| 4. Componentes UI    | Lista de componentes                         | Figma AI, AI DesignGen, UXPilot| Componentes editáveis                  |
| 5. Organização Kit   | Componentes criados                          | Figma AI + Perplexity         | UI Kit organizado e documentado        |
| 6. Protótipo         | Telas/componentes                            | Figma AI, Motiff              | Protótipo interativo                   |
| 7. Documentação      | Design final                                 | Perplexity, Figma AI, Builder.io/Supernova | Documentação e handoff                |

---

**Dica:** Sempre que precisar de informações atualizadas, benchmarks, exemplos de boas práticas ou checklists, use Perplexity. Para execução visual, organização e prototipagem, concentre-se nas ferramentas do Figma e seus plugins de IA[2][5][3].

Fontes
[1] Perplexity vs. ChatGPT for designers—Who wins? : r/UXDesign https://www.reddit.com/r/UXDesign/comments/1fwnt9n/perplexity_vs_chatgpt_for_designerswho_wins/
[2] Perplexity vs ChatGPT: A Detailed Guide to Know the Difference https://www.amplework.com/blog/perplexity-vs-chatgpt-guide/
[3] Perplexity AI: Review, Advantages & Guide (2025) - Elegant Themes https://www.elegantthemes.com/blog/business/perplexity-ai
[4] The Ultimate Guide to a Scalable Design Token Pipeline | by Rumana https://www.designsystemscollective.com/the-ultimate-guide-to-a-scalable-design-token-pipeline-e85c6aea8169
[5] What is Perplexity AI and how can you use it in the design process? https://www.uxdesigninstitute.com/blog/perplexity-ai-and-design-process/
[6] Perplexity vs. ChatGPT: Which AI tool is better? - Zapier https://zapier.com/blog/perplexity-vs-chatgpt/
[7] Perplexity AI vs. ChatGPT: Key Differences and Best Use Cases https://www.netcomlearning.com/blog/perplexity-ai-vs-chatgpt
[8] Perplexity vs ChatGPT: A Detailed Comparison for Content Creators ... https://www.link-assistant.com/rankdots/blog/perplexity-vs-chatgpt.html
[9] A Quick Guide to Master Perplexity | by Edward Chechique - UX Planet https://uxplanet.org/a-quick-guide-to-master-perplexity-0b49a57b4e26
[10] Epic System Design: Claude 3.7 + Perplexity Workflow - YouTube https://www.youtube.com/watch?v=HtA5nhPqYPg
