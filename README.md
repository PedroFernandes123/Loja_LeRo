# LeRo Atelier — Curadoria de Desapego Feminino (Roupas, Sapatos & Acessórios)

Website institucional e catálogo interativo para a **LeRo Atelier**, boutique digital de desapego feminino com estética **Noir & Ametista (Roxo e Preto)**.

## Arquitetura e Destaques Técnicos

- **Stack Zero-Dependência Externa de Runtime**: HTML5 Semântico, Vanilla CSS3 (variáveis HSL, design responsivo, tipografia editorial *Cormorant Garamond*, *Plus Jakarta Sans* e *JetBrains Mono*) e JavaScript ES6+ puro.
- **Navbar Completa & Responsiva**: Navegação com filtros instantâneos por categoria (`Acervo Completo`, `Roupas`, `Sapatos`, `Acessórios`), busca em tempo real por tecido/peça, atalho para o Concierge e Sacola de Compras lateral com persistência em `localStorage`.
- **Chatbot Determinístico Local (Sem LLM e Sem API Externa)**:
  - Processamento 100% client-side baseado em regras determinísticas, correspondência léxica normalizada e consulta direta ao inventário local.
  - **Guardrail Estrito Multi-Camada**:
    1. **Camada 1 (Bloqueio de Prompt Injection & Temas Fora de Escopo)**: Intercepta e bloqueia tentativas de *jailbreak* (`ignore as regras`, `aja como`, `system prompt`), programação, matemática, receitas culinárias, política, esportes, horóscopo, piadas ou tarefas acadêmicas.
    2. **Camada 2 (Whitelist de Domínio LeRo)**: Só permite respostas quando a intenção pertence comprovadamente ao universo da loja (roupas, sapatos, acessórios, medidas em centímetros, estado de conservação, frete, pagamento, trocas ou consignação/venda de peças).
    3. **Camada 3 (Rejeição Padrão Segura)**: Qualquer entrada fora do domínio da LeRo aciona o card visual de bloqueio do Guardrail (`⛔ GUARDRAIL ATIVADO`).
- **Hospedagem**: Configurado para publicação direta no **GitHub Pages** (incluindo `.nojekyll`).