/**
 * ============================================================================
 * LeRo Atelier — Curadoria de Desapego Feminino
 * Front-End Architecture:
 *  1. Curated Product Catalog (Roupas, Sapatos, Acessórios)
 *  2. Interactive Filtering, Search, Sorting & Persistent Shopping Bag
 *  3. Zero-LLM / Zero-API Deterministic Chatbot Engine with Multi-Layer Guardrail
 * ============================================================================
 */

(function () {
  "use strict";

  /* --------------------------------------------------------------------------
     1. CURATED RESALE INVENTORY (Roupas, Sapatos e Acessórios)
     -------------------------------------------------------------------------- */
  const LERO_PRODUCTS = [
    {
      id: "LR-RP-01",
      title: "Blazer Veludo Imperial Ameixa",
      category: "roupas",
      categoryLabel: "Roupas • Alfaiataria",
      size: "M (38/40)",
      condition: "Impecável (Mint)",
      price: 289.0,
      originalPrice: 790.0,
      measurements: "Ombro 41cm • Busto 96cm • Comprimento 71cm",
      description:
        "Blazer estruturado em veludo alemão 100% algodão na tonalidade ameixa profunda, forro em acetato acetinado preto e botões forrados.",
      image: "assets/images/prod-blazer-veludo.jpg",
      keywords: ["blazer", "veludo", "casaco", "alfaiataria", "ameixa", "roxo", "roupa"]
    },
    {
      id: "LR-RP-02",
      title: "Slip Dress Seda Nocturne & Renda",
      category: "roupas",
      categoryLabel: "Roupas • Vestidos",
      size: "P (36/38)",
      condition: "Nunca Usado (Com Etiqueta)",
      price: 340.0,
      originalPrice: 920.0,
      measurements: "Busto 88cm • Cintura 72cm • Comprimento 118cm",
      description:
        "Vestido midi corte enviesado em cetim de seda pura preto obsidiana com aplicação de renda francesa tingida em ametista escuro e fenda lateral.",
      image: "assets/images/prod-vestido-cetim.jpg",
      keywords: ["vestido", "slip dress", "seda", "cetim", "renda", "festa", "noite", "roupa"]
    },
    {
      id: "LR-RP-03",
      title: "Jaqueta Perfecto Couro Noir",
      category: "roupas",
      categoryLabel: "Roupas • Casacos",
      size: "M (40)",
      condition: "Excelente",
      price: 420.0,
      originalPrice: 1250.0,
      measurements: "Ombro 42cm • Busto 98cm • Manga 61cm",
      description:
        "Jaqueta biker vintage em couro legítimo macio preto com ferragens em prata escovada, zíperes YKK e modelagem acinturada clássica.",
      image: "assets/images/prod-jaqueta-couro.jpg",
      keywords: ["jaqueta", "couro", "biker", "perfecto", "casaco", "preta", "roupa"]
    },
    {
      id: "LR-RP-04",
      title: "Corset Estruturado Brocado Violeta",
      category: "roupas",
      categoryLabel: "Roupas • Tops & Corsets",
      size: "P (36)",
      condition: "Impecável (Mint)",
      price: 235.0,
      originalPrice: 610.0,
      measurements: "Busto 84cm • Cintura 66cm • Barbatanas em aço flexível",
      description:
        "Corset de arquivo confeccionado em jacquard brocado floral roxo e preto, fechamento frontal por colchetes ocultos e amarração regulável nas costas.",
      image: "assets/images/prod-corset-brocado.jpg",
      keywords: ["corset", "corpete", "top", "brocado", "blusa", "jacquard", "roupa"]
    },
    {
      id: "LR-SP-01",
      title: "Bota Ankle Obsidian Salto Escultural",
      category: "sapatos",
      categoryLabel: "Sapatos • Botas",
      size: "37 BR",
      condition: "Impecável (Mint)",
      price: 365.0,
      originalPrice: 890.0,
      measurements: "Palmilha 24,7cm • Salto bloco 7,5cm • Cano 15cm",
      description:
        "Ankle boot em pelica italiana preta com pespontos contrastantes em linha vinho-violeta e salto geométrico facetado ultra estável.",
      image: "assets/images/prod-bota-couro.jpg",
      keywords: ["bota", "ankle boot", "couro", "salto", "sapato", "calcado", "37"]
    },
    {
      id: "LR-SP-02",
      title: "Scarpin Camurça Ametista Imperial",
      category: "sapatos",
      categoryLabel: "Sapatos • Salto Fino",
      size: "36 BR",
      condition: "Nunca Usado (Com Etiqueta)",
      price: 295.0,
      originalPrice: 740.0,
      measurements: "Palmilha 24,0cm • Salto fino 9,5cm • Solado laqueado",
      description:
        "Scarpin clássico de bico fino em camurça natural roxo ametista com palmilha acolchoada em couro preto. Peça de acervo sem marcas de solo.",
      image: "assets/images/prod-scarpin-ametista.jpg",
      keywords: ["scarpin", "salto", "camurca", "ametista", "roxo", "sapato", "36"]
    },
    {
      id: "LR-SP-03",
      title: "Mule Veludo Nocturne Fivela Prata",
      category: "sapatos",
      categoryLabel: "Sapatos • Mules",
      size: "38 BR",
      condition: "Excelente",
      price: 260.0,
      originalPrice: 680.0,
      measurements: "Palmilha 25,3cm • Salto taça 6,5cm",
      description:
        "Mule de bico fino em veludo de seda violeta escuro e preto com tira no peito do pé adornada por fivela cravejada em cristais fumê.",
      image: "assets/images/prod-mule-veludo.jpg",
      keywords: ["mule", "tamanco", "veludo", "sapato", "salto", "38"]
    },
    {
      id: "LR-AC-01",
      title: "Bolsa Tiracolo Couro & Debrum Violeta",
      category: "acessorios",
      categoryLabel: "Acessórios • Bolsas",
      size: "Único",
      condition: "Impecável (Mint)",
      price: 380.0,
      originalPrice: 1100.0,
      measurements: "Largura 23cm • Altura 17cm • Profundidade 8cm",
      description:
        "Bolsa estruturada vintage em couro granulado preto com acabamento de borda em couro roxo ameixa, fecho em prata envelhecida e alça regulável.",
      image: "assets/images/prod-bolsa-tiracolo.jpg",
      keywords: ["bolsa", "tiracolo", "crossbody", "couro", "acessorio"]
    },
    {
      id: "LR-AC-02",
      title: "Choker Prata 925 & Ametista Bruta",
      category: "acessorios",
      categoryLabel: "Acessórios • Joias de Arquivo",
      size: "Ajustável",
      condition: "Impecável (Mint)",
      price: 310.0,
      originalPrice: 780.0,
      measurements: "Circunferência 38cm a 43cm • Pedra central 3,2cm",
      description:
        "Colar choker trabalhado artesanalmente em prata de lei oxidada com cravação central de ametista natural lapidação bruta.",
      image: "assets/images/prod-colar-ametista.jpg",
      keywords: ["colar", "choker", "joia", "prata", "ametista", "pedra", "acessorio"]
    },
    {
      id: "LR-AC-03",
      title: "Óculos Solar Cat-Eye Acetato & Lente Violeta",
      category: "acessorios",
      categoryLabel: "Acessórios • Óculos",
      size: "Único",
      condition: "Nunca Usado (Com Etiqueta)",
      price: 215.0,
      originalPrice: 590.0,
      measurements: "Frontal 14,2cm • Lente UV400 • Acompanha estojo rígido",
      description:
        "Armação gatinho em acetato italiano preto polido com charneiras em metal e lentes orgânicas com tonalidade ametista e proteção 100% UV400.",
      image: "assets/images/prod-oculos-vintage.jpg",
      keywords: ["oculos", "sol", "cat eye", "gatinho", "lente", "acessorio"]
    }
  ];

  /* --------------------------------------------------------------------------
     2. STATE & DOM REFERENCES
     -------------------------------------------------------------------------- */
  let activeCategory = "all";
  let activeCondition = "all";
  let activeSort = "featured";
  let searchQuery = "";
  let shoppingBag = [];

  try {
    const savedBag = localStorage.getItem("lero_bag_v1");
    if (savedBag) {
      shoppingBag = JSON.parse(savedBag);
    }
  } catch (e) {
    shoppingBag = [];
  }

  const productGridEl = document.getElementById("product-grid");
  const catalogCountLabelEl = document.getElementById("catalog-count-label");
  const conditionSelectEl = document.getElementById("condition-filter-select");
  const sortSelectEl = document.getElementById("sort-select");
  const searchInputEl = document.getElementById("navbar-search-input");
  const bagCountBadgeEl = document.getElementById("bag-count-badge");
  const bagDrawerEl = document.getElementById("bag-drawer");
  const bagBackdropEl = document.getElementById("bag-backdrop");
  const bagItemsContainerEl = document.getElementById("bag-items-container");
  const bagTotalPriceEl = document.getElementById("bag-total-price");
  const bagShippingNoteEl = document.getElementById("bag-shipping-note");

  function formatBRL(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }

  function normalizeText(str) {
    return String(str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  /* --------------------------------------------------------------------------
     3. CATALOG RENDERING & FILTERING
     -------------------------------------------------------------------------- */
  function getFilteredProducts() {
    const normSearch = normalizeText(searchQuery);

    const filtered = LERO_PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesCondition =
        activeCondition === "all" || item.condition === activeCondition;

      if (!matchesCategory || !matchesCondition) return false;

      if (!normSearch) return true;

      const haystack = normalizeText(
        `${item.title} ${item.description} ${item.categoryLabel} ${item.size} ${item.keywords.join(" ")}`
      );
      return haystack.includes(normSearch);
    });

    if (activeSort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (activeSort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }

  function renderCatalog() {
    const list = getFilteredProducts();

    catalogCountLabelEl.textContent =
      list.length === 1
        ? "Exibindo 1 peça única"
        : `Exibindo ${list.length} peças únicas`;

    if (list.length === 0) {
      productGridEl.innerHTML = `
        <div class="empty-catalog" style="grid-column: 1 / -1;">
          <h3 style="font-family: var(--font-serif); font-size: 1.6rem; margin-bottom: 0.5rem;">
            Nenhuma peça encontrada com esses filtros
          </h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.2rem;">
            Experimente limpar a busca ou visualizar todo o acervo disponível.
          </p>
          <button type="button" class="btn-secondary" id="reset-catalog-filters-btn">
            Restaurar Acervo Completo
          </button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-catalog-filters-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          setCategoryFilter("all");
          activeCondition = "all";
          conditionSelectEl.value = "all";
          searchQuery = "";
          if (searchInputEl) searchInputEl.value = "";
          renderCatalog();
        });
      }
      return;
    }

    productGridEl.innerHTML = list
      .map((item) => {
        const isInBag = shoppingBag.includes(item.id);
        const discountPct = Math.round(
          ((item.originalPrice - item.price) / item.originalPrice) * 100
        );

        return `
          <article class="product-card" data-product-id="${item.id}">
            <div class="product-media">
              <img
                src="${item.image}"
                alt="${item.title} - ${item.categoryLabel}"
                loading="lazy"
                width="600"
                height="800"
              />
              <div class="product-badges">
                <span class="condition-tag">${item.condition}</span>
                <span class="size-tag">${item.size}</span>
              </div>
            </div>

            <div class="product-body">
              <div class="product-meta-top">
                <span>${item.categoryLabel}</span>
                <span>-${discountPct}% OFF</span>
              </div>

              <h3 class="product-title">${item.title}</h3>
              <p class="product-desc">${item.description}</p>
              <div class="product-measurements">${item.measurements}</div>

              <div class="product-footer">
                <div class="price-block">
                  <span class="original-price">Loja: ${formatBRL(item.originalPrice)}</span>
                  <strong class="current-price">${formatBRL(item.price)}</strong>
                </div>

                <button
                  type="button"
                  class="add-bag-btn ${isInBag ? "in-bag" : ""}"
                  data-action-bag="${item.id}"
                >
                  ${isInBag ? "Na Sacola ✓" : "Reservar Peça"}
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    productGridEl.querySelectorAll("[data-action-bag]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const prodId = btn.getAttribute("data-action-bag");
        toggleBagItem(prodId);
      });
    });
  }

  function setCategoryFilter(category) {
    activeCategory = category;

    document.querySelectorAll(".filter-tab").forEach((tab) => {
      tab.classList.toggle(
        "active",
        tab.getAttribute("data-category") === category
      );
    });

    document.querySelectorAll("[data-nav-category]").forEach((navBtn) => {
      navBtn.classList.toggle(
        "active",
        navBtn.getAttribute("data-nav-category") === category
      );
    });

    renderCatalog();
  }

  /* --------------------------------------------------------------------------
     4. SHOPPING BAG DRAWER
     -------------------------------------------------------------------------- */
  function saveBag() {
    try {
      localStorage.setItem("lero_bag_v1", JSON.stringify(shoppingBag));
    } catch (e) {
      // ignore storage errors
    }
  }

  function toggleBagItem(productId) {
    const idx = shoppingBag.indexOf(productId);
    if (idx >= 0) {
      shoppingBag.splice(idx, 1);
    } else {
      shoppingBag.push(productId);
      openBagDrawer();
    }
    saveBag();
    updateBagUI();
    renderCatalog();
  }

  function updateBagUI() {
    bagCountBadgeEl.textContent = String(shoppingBag.length);

    const items = shoppingBag
      .map((id) => LERO_PRODUCTS.find((p) => p.id === id))
      .filter(Boolean);

    if (items.length === 0) {
      bagItemsContainerEl.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <p style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--text-primary); margin-bottom: 0.4rem;">
            Sua sacola está vazia
          </p>
          <p style="font-size: 0.84rem;">
            Como trabalhamos com desapego de peças únicas (1 exemplar de cada), adicione seus achados favoritos para garantir a reserva.
          </p>
        </div>
      `;
      bagTotalPriceEl.textContent = "R$ 0,00";
      bagShippingNoteEl.textContent =
        "Frete grátis para todo o Brasil em compras acima de R$ 280,00.";
      return;
    }

    const total = items.reduce((acc, item) => acc + item.price, 0);
    bagTotalPriceEl.textContent = formatBRL(total);

    if (total >= 280) {
      bagShippingNoteEl.textContent =
        "✓ Parabéns! Seu pedido conquistou Frete Grátis Expresso LeRo.";
    } else {
      const falta = 280 - total;
      bagShippingNoteEl.textContent = `Faltam apenas ${formatBRL(falta)} para liberar Frete Grátis.`;
    }

    bagItemsContainerEl.innerHTML = items
      .map(
        (item) => `
        <div class="bag-item">
          <img src="${item.image}" alt="${item.title}" />
          <div class="bag-item-info">
            <h4>${item.title}</h4>
            <span>Tam: ${item.size} • ${item.condition}</span>
            <strong>${formatBRL(item.price)}</strong>
          </div>
          <button
            type="button"
            class="remove-item-btn"
            data-remove-bag="${item.id}"
            aria-label="Remover ${item.title} da sacola"
          >
            Remover
          </button>
        </div>
      `
      )
      .join("");

    bagItemsContainerEl.querySelectorAll("[data-remove-bag]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-remove-bag");
        toggleBagItem(id);
      });
    });
  }

  function openBagDrawer() {
    bagDrawerEl.classList.add("open");
    bagBackdropEl.classList.add("open");
  }

  function closeBagDrawer() {
    bagDrawerEl.classList.remove("open");
    bagBackdropEl.classList.remove("open");
  }

  /* --------------------------------------------------------------------------
     5. DETERMINISTIC CHATBOT + STRICT MULTI-LAYER GUARDRAIL (NO LLM / NO API)
     --------------------------------------------------------------------------
     Architecture:
     - Layer 1 (Prompt Injection / Jailbreak / Roleplay / Off-Domain Blocklist):
       Immediately detects and blocks any attempt to use the assistant for
       coding, math, politics, recipes, homework, general trivia, translation,
       poems, medical/legal advice, or overriding instructions.
     - Layer 2 (Store Domain Whitelist Verifier):
       Requires the input to match at least one verified LeRo store intent or
       domain token (roupas, sapatos, acessórios, preços, medidas, frete,
       pagamento, trocas, autenticidade, desapego/venda ou saudação cordial).
     - Layer 3 (Deterministic Response Synthesis):
       Queries the local LERO_PRODUCTS array and store policy rules to answer
       accurately in real time without any external network call or LLM.
  -------------------------------------------------------------------------- */

  const GUARDRAIL_BLOCKED_PATTERNS = [
    // Prompt injection & jailbreak patterns
    /ignore\s+(todas|as|previous|all)/i,
    /esque(c|ç)a\s+(as\s+)?(regras|instru(c|ç)(o|õ)es)/i,
    /system\s*prompt/i,
    /jailbreak/i,
    /finja\s+que/i,
    /aja\s+como/i,
    /act\s+as/i,
    /modo\s+desenvolvedor/i,
    /bypass/i,

    // Programming, software, technology & scripts
    /\b(python|javascript|typescript|java|html|css|sql|react|node|c\+\+|php|linux|bash|git|github|api|json|algoritmo|codigo|programar|programa(c|ç)(a|ã)o|script|bug|compilar)\b/i,

    // Math, physics, chemistry, school/academic homework
    /\b(equa(c|ç)(a|ã)o|integral|derivada|raiz\s+quadrada|bhaskara|f(i|í)sica|qu(i|í)mica|biologia|hist(o|ó)ria\s+do|geografia|redac(a|ã)o|enem|vestibular|tcc|resumo\s+do\s+livro|traduzir|traduza)\b/i,
    /\bquanto\s+(e|é)\s*\d+\s*[\+\-\*\/x]\s*\d+/i,
    /^\s*\d+\s*[\+\-\*\/\^]\s*\d+\s*[\?\=]?\s*$/,

    // Cooking, recipes, food
    /\b(receita\s+de|bolo\s+de|lasanha|brigadeiro|cozinhar|ingredientes|culin(a|á)ria|calorias)\b/i,

    // Politics, religion, sports, news, crypto, gambling, weather
    /\b(pol(i|í)tica|presidente|elei(c|ç)(a|ã)o|deputado|senador|futebol|flamengo|corinthians|palmeiras|copa\s+do\s+mundo|bitcoin|criptomoeda|bolsa\s+de\s+valores|aposta|cassino|previs(a|ã)o\s+do\s+tempo|clima\s+hoje|hor(o|ó)scopo|signo)\b/i,

    // Creative writing unrelated to the store, jokes, medical/legal
    /\b(piada|conte\s+uma\s+hist(o|ó)ria|escreva\s+um\s+poema|poesia|m(e|é)dico|rem(e|é)dio|sintoma|advogado|processo\s+judicial)\b/i
  ];

  const STORE_INTENT_RULES = [
    {
      id: "greeting",
      tokens: [
        "oi",
        "ola",
        "bom dia",
        "boa tarde",
        "boa noite",
        "tudo bem",
        "ajuda",
        "menu",
        "opcoes",
        "comecar",
        "atendimento",
        "concierge"
      ],
      handler: () =>
        "Olá! Sou o **Concierge Determinístico da LeRo Atelier**. Estou programado exclusivamente para auxiliar você com nosso acervo de **roupas, sapatos e acessórios femininos de desapego**, além de dúvidas sobre **medidas em centímetros, estado de conservação, frete, pagamento, trocas** ou **como vender sua peça**. O que você procura hoje?"
    },
    {
      id: "roupas",
      tokens: [
        "roupa",
        "roupas",
        "blazer",
        "vestido",
        "slip dress",
        "jaqueta",
        "casaco",
        "corset",
        "corpete",
        "top",
        "blusa",
        "veludo",
        "seda",
        "cetim",
        "alfaiataria"
      ],
      handler: () => {
        const roupas = LERO_PRODUCTS.filter((p) => p.category === "roupas");
        const lines = roupas
          .map(
            (r) =>
              `• **${r.title}** (${r.size} | ${r.condition}) — **${formatBRL(r.price)}** _(Medidas: ${r.measurements})_`
          )
          .join("<br>");
        return `No momento temos **${roupas.length} roupas únicas** disponíveis na curadoria LeRo:<br><br>${lines}<br><br>Você pode filtrar a vitrine clicando em **Roupas** na barra superior.`;
      }
    },
    {
      id: "sapatos",
      tokens: [
        "sapato",
        "sapatos",
        "bota",
        "botas",
        "ankle boot",
        "scarpin",
        "mule",
        "salto",
        "calcado",
        "calcados",
        "camurca",
        "palmilha",
        "35",
        "36",
        "37",
        "38",
        "39"
      ],
      handler: () => {
        const sapatos = LERO_PRODUCTS.filter((p) => p.category === "sapatos");
        const lines = sapatos
          .map(
            (s) =>
              `• **${s.title}** (Tam ${s.size} | ${s.condition}) — **${formatBRL(s.price)}** _(${s.measurements})_`
          )
          .join("<br>");
        return `Nosso acervo de **Calçados Femininos** conta com estas peças únicas higienizadas:<br><br>${lines}<br><br>Dica: compare o comprimento da palmilha em centímetros com um calçado seu para garantir caimento perfeito!`;
      }
    },
    {
      id: "acessorios",
      tokens: [
        "acessorio",
        "acessorios",
        "bolsa",
        "bolsas",
        "tiracolo",
        "colar",
        "choker",
        "joia",
        "prata",
        "ametista",
        "oculos",
        "lente"
      ],
      handler: () => {
        const acessorios = LERO_PRODUCTS.filter(
          (p) => p.category === "acessorios"
        );
        const lines = acessorios
          .map(
            (a) =>
              `• **${a.title}** (${a.condition}) — **${formatBRL(a.price)}** _(${a.measurements})_`
          )
          .join("<br>");
        return `Confira os **Acessórios de Arquivo** disponíveis hoje na LeRo:<br><br>${lines}`;
      }
    },
    {
      id: "sizes_measurements",
      tokens: [
        "medida",
        "medidas",
        "tamanho",
        "tamanhos",
        "tabela",
        "busto",
        "cintura",
        "quadril",
        "comprimento",
        "caimento",
        "serve",
        "manequim",
        "numera"
      ],
      handler: () =>
        "Na **LeRo**, todas as peças possuem medidas reais em centímetros no card do produto:<br><br>• **Roupas (P / 36-38):** Busto 84–88cm | Cintura 66–72cm.<br>• **Roupas (M / 38-40):** Busto 94–98cm | Ombro 41–42cm.<br>• **Sapatos:** Informamos a medida exata da palmilha (ex.: 36 BR = 24,0cm | 37 BR = 24,7cm | 38 BR = 25,3cm)."
    },
    {
      id: "shipping",
      tokens: [
        "frete",
        "envio",
        "entrega",
        "prazo",
        "correios",
        "sedex",
        "pac",
        "rastreio",
        "embalagem",
        "chega",
        "brasil"
      ],
      handler: () =>
        "**Política de Frete & Envio LeRo:**<br>• **Despacho em até 24h úteis** após aprovação do pedido.<br>• **Frete Grátis Expresso** para todo o Brasil em compras a partir de **R$ 280,00**.<br>• Para pedidos abaixo desse valor, o frete fixo reduzido é de R$ 18,90 (Sudeste/Sul) e R$ 26,90 (demais regiões), com código de rastreio enviado imediatamente."
    },
    {
      id: "payment",
      tokens: [
        "pagamento",
        "pagar",
        "pix",
        "cartao",
        "parcela",
        "parcelamento",
        "desconto",
        "preco",
        "precos",
        "valor",
        "valores",
        "comprar",
        "reserva"
      ],
      handler: () =>
        "**Formas de Pagamento & Condições:**<br>• **PIX:** 5% de desconto adicional imediato no fechamento da sacola.<br>• **Cartão de Crédito:** Parcelamento em até **6x sem juros**.<br>• Nossas peças têm valores entre **R$ 215,00 e R$ 420,00** (economia de até 65% em relação ao preço original de loja)."
    },
    {
      id: "returns_exchange",
      tokens: [
        "troca",
        "trocar",
        "devolucao",
        "devolver",
        "arrependimento",
        "estorno",
        "reembolso",
        "garantia",
        "defeito"
      ],
      handler: () =>
        "**Trocas & Devoluções Transparentes:**<br>Mesmo sendo peças únicas de desapego, você tem **7 dias corridos** após o recebimento (Direito de Arrependimento - CDC) para solicitar devolução gratuita com logística reversa paga pela LeRo, desde que o lacre de curadoria esteja intacto."
    },
    {
      id: "hygiene_condition",
      tokens: [
        "higieniza",
        "limpeza",
        "lavagem",
        "conservacao",
        "estado",
        "original",
        "autentic",
        "curadoria",
        "usado",
        "seminovo",
        "mint",
        "qualidade"
      ],
      handler: () =>
        "**Padrão de Curadoria & Higienização LeRo:**<br>Trabalhamos apenas com 3 graus de conservação: **Nunca Usado (Com Etiqueta)**, **Impecável (Mint)** e **Excelente**. Todas as peças passam por triagem de 12 pontos (costuras, zíperes, solados e autenticidade) e higienização profissional a ozônio e vapor."
    },
    {
      id: "sell_consign",
      tokens: [
        "vender",
        "venda",
        "desapegar",
        "desapego",
        "consignado",
        "consignacao",
        "comissao",
        "fornecer",
        "avaliar",
        "repasse"
      ],
      handler: () =>
        "**Quer vender suas peças na LeRo?**<br>Selecionamos roupas femininas, sapatos em couro/camurça e acessórios de design em estado impecável:<br>• Você recebe **70% do valor líquido** via PIX em até 5 dias úteis após a entrega, ou **85% em créditos** para renovar seu closet no site.<br>• Cuidamos de toda a higienização, fotografia editorial e envio!"
    }
  ];

  function evaluateChatbotInput(rawInput) {
    const trimmed = String(rawInput || "").trim();
    if (!trimmed) {
      return null;
    }

    const normalized = normalizeText(trimmed);

    // LAYER 1: Explicit Off-Topic / Prompt-Injection / General-Purpose Blocklist
    for (const pattern of GUARDRAIL_BLOCKED_PATTERNS) {
      if (pattern.test(trimmed) || pattern.test(normalized)) {
        return {
          blocked: true,
          reason: "FORA DE ESCOPO / TENTATIVA DE DESVIO DE FINALIDADE",
          message:
            "Este assistente opera sob um **Guardrail Estrito de Escopo** (sem LLM e sem API externa) e responde **exclusivamente** sobre o acervo da **Loja LeRo** (roupas, sapatos, acessórios femininos de desapego, medidas, frete, pagamentos, trocas e consignação). Solicitações de outros temas não são processadas."
        };
      }
    }

    // LAYER 2: Direct Product Match from Catalog
    const matchedProducts = LERO_PRODUCTS.filter((prod) => {
      const titleNorm = normalizeText(prod.title);
      if (normalized.length >= 4 && titleNorm.includes(normalized)) return true;
      return prod.keywords.some(
        (kw) => kw.length >= 4 && normalized.includes(normalizeText(kw))
      );
    });

    // LAYER 3: Intent Scoring against Verified Store Intents
    let bestIntent = null;
    let bestScore = 0;

    for (const rule of STORE_INTENT_RULES) {
      let score = 0;
      for (const token of rule.tokens) {
        const normToken = normalizeText(token);
        if (normalized.includes(normToken)) {
          score += normToken.length >= 5 ? 2 : 1;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestIntent = rule;
      }
    }

    if (bestIntent && bestScore > 0) {
      return {
        blocked: false,
        message: bestIntent.handler()
      };
    }

    if (matchedProducts.length > 0) {
      const summary = matchedProducts
        .map(
          (p) =>
            `• **${p.title}** (${p.size} | ${p.condition}) — **${formatBRL(p.price)}** _(${p.measurements})_`
        )
        .join("<br>");
      return {
        blocked: false,
        message: `Encontrei ${matchedProducts.length} peça(s) no acervo LeRo relacionada(s) à sua busca:<br><br>${summary}`
      };
    }

    // LAYER 4: Default Strict Whitelist Reject (Anything not explicitly matched to LeRo store domain is blocked)
    return {
      blocked: true,
      reason: "ASSUNTO NÃO RECONHECIDO NO DOMÍNIO DA LOJA LERO",
      message:
        "**Bloqueio de Guardrail:** Não identifiquei relação da sua mensagem com o catálogo ou serviços da **LeRo Atelier**. Por segurança, este chatbot não conversa sobre assuntos gerais. Experimente perguntar sobre **roupas, sapatos, bolsas, colares, medidas em cm, frete, PIX/parcelamento, trocas** ou **como vender sua peça**."
    };
  }

  /* --------------------------------------------------------------------------
     6. CHATBOT UI CONTROLLER
     -------------------------------------------------------------------------- */
  const chatbotLauncherBtn = document.getElementById("chatbot-launcher-btn");
  const chatbotPanelEl = document.getElementById("chatbot-panel");
  const chatbotCloseBtn = document.getElementById("chatbot-close-btn");
  const chatMessagesListEl = document.getElementById("chat-messages-list");
  const chatFormEl = document.getElementById("chat-form");
  const chatUserInputEl = document.getElementById("chat-user-input");

  function formatSimpleMarkdown(htmlStr) {
    return htmlStr
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/_(.*?)_/g, "<em>$1</em>");
  }

  function appendChatMessage(role, content, guardrailMeta) {
    const msgDiv = document.createElement("div");

    if (role === "guardrail") {
      msgDiv.className = "chat-msg guardrail-blocked";
      msgDiv.innerHTML = `
        <div class="guardrail-header">
          <span>⛔ GUARDRAIL ATIVADO • ${guardrailMeta || "ESCOPO RESTRITO"}</span>
        </div>
        <div>${formatSimpleMarkdown(content)}</div>
      `;
    } else {
      msgDiv.className = `chat-msg ${role}`;
      msgDiv.innerHTML = formatSimpleMarkdown(content);
    }

    chatMessagesListEl.appendChild(msgDiv);
    chatMessagesListEl.scrollTop = chatMessagesListEl.scrollHeight;
  }

  function openChatbot() {
    chatbotPanelEl.classList.add("open");
    chatbotLauncherBtn.setAttribute("aria-expanded", "true");
    setTimeout(() => {
      chatUserInputEl.focus();
    }, 150);
  }

  function closeChatbot() {
    chatbotPanelEl.classList.remove("open");
    chatbotLauncherBtn.setAttribute("aria-expanded", "false");
  }

  function handleUserChatSubmit(queryText) {
    const cleanText = String(queryText || "").trim();
    if (!cleanText) return;

    appendChatMessage("user", cleanText);
    const result = evaluateChatbotInput(cleanText);
    if (!result) return;

    setTimeout(() => {
      if (result.blocked) {
        appendChatMessage("guardrail", result.message, result.reason);
      } else {
        appendChatMessage("bot", result.message);
      }
    }, 140);
  }

  /* --------------------------------------------------------------------------
     7. EVENT LISTENERS & INITIALIZATION
     -------------------------------------------------------------------------- */
  function initEvents() {
    // Navbar sticky elevation
    const navbarEl = document.getElementById("main-navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbarEl.classList.add("scrolled");
      } else {
        navbarEl.classList.remove("scrolled");
      }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-toggle");
    const navMenuList = document.getElementById("nav-menu-list");
    if (mobileMenuBtn && navMenuList) {
      mobileMenuBtn.addEventListener("click", () => {
        navMenuList.classList.toggle("mobile-open");
      });
    }

    // Category tabs in catalog toolbar
    document.querySelectorAll(".filter-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const cat = tab.getAttribute("data-category");
        setCategoryFilter(cat);
      });
    });

    // Category buttons in Navbar
    document.querySelectorAll("[data-nav-category]").forEach((navBtn) => {
      navBtn.addEventListener("click", () => {
        const cat = navBtn.getAttribute("data-nav-category");
        setCategoryFilter(cat);
        if (navMenuList) navMenuList.classList.remove("mobile-open");
        const catalogSection = document.getElementById("catalogo");
        if (catalogSection) {
          catalogSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Footer category buttons
    document.querySelectorAll("[data-footer-cat]").forEach((fBtn) => {
      fBtn.addEventListener("click", () => {
        const cat = fBtn.getAttribute("data-footer-cat");
        setCategoryFilter(cat);
        const catalogSection = document.getElementById("catalogo");
        if (catalogSection) {
          catalogSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Condition & Sort Selects
    conditionSelectEl.addEventListener("change", (e) => {
      activeCondition = e.target.value;
      renderCatalog();
    });

    sortSelectEl.addEventListener("change", (e) => {
      activeSort = e.target.value;
      renderCatalog();
    });

    // Navbar live search
    if (searchInputEl) {
      searchInputEl.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderCatalog();
      });
    }

    // Bag Drawer Controls
    document
      .getElementById("nav-bag-toggle-btn")
      .addEventListener("click", openBagDrawer);
    document
      .getElementById("bag-close-btn")
      .addEventListener("click", closeBagDrawer);
    bagBackdropEl.addEventListener("click", closeBagDrawer);

    document
      .getElementById("bag-checkout-btn")
      .addEventListener("click", () => {
        if (shoppingBag.length === 0) {
          openChatbot();
          closeBagDrawer();
          appendChatMessage(
            "bot",
            "Sua sacola ainda está vazia! Escolha suas peças únicas no catálogo clicando em **Reservar Peça** para garantir seus achados."
          );
          return;
        }
        const totalItems = shoppingBag.length;
        shoppingBag = [];
        saveBag();
        updateBagUI();
        renderCatalog();
        closeBagDrawer();
        openChatbot();
        appendChatMessage(
          "bot",
          `✓ **Pré-Reserva Confirmada!** Suas **${totalItems} peça(s) única(s)** foram reservadas por 30 minutos. Para concluir o pagamento com **5% OFF no PIX** ou em **6x sem juros**, nosso atelier enviará o link seguro de checkout.`
        );
      });

    // Chatbot Open/Close Triggers
    chatbotLauncherBtn.addEventListener("click", () => {
      if (chatbotPanelEl.classList.contains("open")) {
        closeChatbot();
      } else {
        openChatbot();
      }
    });
    chatbotCloseBtn.addEventListener("click", closeChatbot);

    [
      "nav-open-chat-btn",
      "hero-ask-concierge-btn",
      "consign-open-chat-btn",
      "footer-open-chat-btn"
    ].forEach((btnId) => {
      const el = document.getElementById(btnId);
      if (el) {
        el.addEventListener("click", openChatbot);
      }
    });

    // Quick suggestion chips
    document.querySelectorAll("[data-chip-query]").forEach((chip) => {
      chip.addEventListener("click", () => {
        const q = chip.getAttribute("data-chip-query");
        openChatbot();
        handleUserChatSubmit(q);
      });
    });

    // Chat form submit
    chatFormEl.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = chatUserInputEl.value;
      chatUserInputEl.value = "";
      handleUserChatSubmit(val);
    });
  }

  // Boot application
  renderCatalog();
  updateBagUI();
  initEvents();

  // Initial welcome message in Deterministic Concierge
  appendChatMessage(
    "bot",
    "Bem-vinda à **LeRo Atelier**! Sou o assistente local determinístico (sem LLM e sem API externa).<br><br>Posso ajudar exclusivamente com **roupas, sapatos, acessórios, medidas em centímetros, frete, pagamento, trocas** ou **venda de desapegos**. Experimente também testar meu **Guardrail**!"
  );
})();
