# AGENTS.md - Shark Dive

Guia de contexto e convenções para trabalhar no site institucional da Shark Dive.

## Contexto

Site estático de um centro de mergulho em Salvador, Bahia. O MVP apresenta:

- batismo de mergulho;
- cursos SDI e TDI;
- safari para observação de baleias;
- apresentação institucional da equipe e canais de contato.

Toda conversão acontece por WhatsApp, Instagram ou e-mail. Não há backend, CMS,
formulário ou pagamento.

O site substitui a instalação antiga da Wix e está hospedado no GitHub Pages com
o domínio canônico `https://www.sharkdive.com.br`.

## Princípios

1. Não inventar informação comercial.
2. Tratar material antigo da Wix como inventário, não como oferta confirmada.
3. Preservar a componentização e os padrões existentes.
4. Evitar dependências e JavaScript sem necessidade.
5. Priorizar acessibilidade, desempenho e manutenção simples.
6. Tratar `www.sharkdive.com.br` como produção e o endereço `github.io` apenas
   como infraestrutura de publicação ou preview técnico.
7. Não alterar DNS, e-mail, domínio ou serviços externos como parte de uma
   mudança de código.

## Repositório Público E Segurança

Este repositório é público. Todo arquivo versionado deve ser seguro para leitura
por qualquer pessoa.

- nunca commitar senhas, tokens, chaves de API, cookies, códigos de recuperação,
  arquivos `.env`, credenciais ou URLs autenticadas;
- não registrar situação de cobrança, dados de cartão, conversas de suporte,
  identificadores de conta ou detalhes de acesso a provedores;
- não versionar exportações completas de DNS, capturas de painéis ou documentos
  operacionais que revelem informações além dos registros públicos necessários;
- não incluir dados pessoais de clientes, mensagens recebidas ou conteúdo de
  formulários;
- contatos comerciais já publicados no site podem permanecer no código;
- variáveis e segredos de implantação devem ser configurados no provedor, nunca
  escritos no repositório;
- antes de commitar, revisar o diff e procurar acidentalmente por credenciais ou
  dados privados.

## Stack

| Categoria | Tecnologia |
| --- | --- |
| Framework | Astro 5, TypeScript strict, saída estática |
| Pacotes | Yarn |
| Estilo | CSS puro: entrada global modular + `<style>` com escopo por componente |
| Imagens | `astro:assets` (`<Picture>`/`getImage`) a partir de `src/assets/` |
| Fontes | auto-hospedadas em `public/fonts` (Inter variável + Barlow Condensed 700) |
| Ícones | `@lucide/astro` e `simple-icons` |
| Interação | JavaScript vanilla somente para menu, idiomas e tema |
| Hospedagem | GitHub Pages |

Não adicionar React, Vue, Svelte, Tailwind, CSS-in-JS ou integração Astro sem uma
necessidade concreta que não possa ser atendida pela stack atual.

## Estrutura Atual

```text
src/
  assets/
    acervo/                    fotos otimizadas no build por astro:assets
  components/
    AboutSection.astro
    BrandIcon.astro
    ContactSection.astro
    CoursesSection.astro
    GallerySection.astro
    Header.astro
    Hero.astro
    LandingPage.astro          composição compartilhada dos três idiomas
    LegacyRedirect.astro       casca das rotas antigas da Wix
    QuickLinks.astro
    RecreationalSection.astro
    SafariSection.astro
    SiteFooter.astro
  content/
    site.ts                    textos e configurações localizadas
  layouts/
    BaseLayout.astro
  lib/
    contact.ts
    i18n.ts
    path.ts                      aplica o `base` às URLs internas
    routes.ts                    rotas equivalentes entre os idiomas
  pages/
    index.astro                /
    en/index.astro             /en/
    en/[section].astro         rotas limpas em inglês
    es/index.astro             /es/
    es/[section].astro         rotas limpas em espanhol
    [section].astro            rotas limpas em português
    dive-sites.astro           rotas legadas: só compõem LegacyRedirect
    courses.astro
    the-team.astro
    contact.astro
    paginainicial.astro
    programao-de-mergulho.astro
  styles/
    global.css                ponto de entrada dos estilos compartilhados
    fonts.css                 declarações de fontes auto-hospedadas
    tokens.css                tokens de tema claro e escuro
    base.css                  reset, documento e tipografia base
    primitives.css            padrões reutilizados entre componentes
public/
  fonts/                       woff2 auto-hospedados
  images/                      só o logo (favicon precisa de URL estável)
  favicon*.png
  robots.txt
  sitemap.xml                  mantido à mão: página nova exige editar aqui
scripts/
  publish-pages.sh             publica dist/ no branch gh-pages
astro.config.mjs
```

`src/pages/` contém rotas. `src/components/` contém componentes compartilhados e
seções da landing page. Não duplicar a página entre idiomas: português, inglês e
espanhol compõem `LandingPage.astro` e passam apenas o idioma e a seção inicial.

Foto de seção vai em `src/assets/`, nunca em `public/`: arquivo em `public/` o
Astro copia cru, sem gerar AVIF/WebP nem `srcset`.

## Rotas E Idiomas

| Rota | Idioma |
| --- | --- |
| `/` | Português do Brasil |
| `/en/` | Inglês |
| `/es/` | Espanhol |

As seções também possuem URLs limpas e equivalentes definidas em
`src/lib/routes.ts`, como `/cursos/`, `/en/courses/` e `/es/cursos/`. Não montar
navegação nova com hashes; os IDs continuam existindo para compatibilidade e
rolagem interna.

Todo componente com texto recebe `lang: Locale`, seleciona sua configuração com
`selectCopy()` de `src/lib/i18n.ts` e mantém o conteúdo localizado em
`src/content/site.ts`.

Regras:

- usar `lang="pt-BR"` na página portuguesa, `lang="en"` na inglesa e `lang="es"`
  na espanhola;
- manter os três idiomas semanticamente equivalentes;
- nomes oficiais dos cursos permanecem em inglês;
- todo texto novo deve ser adicionado nos três idiomas;
- não escrever blocos de tradução diretamente no markup do componente;
- manter canonical, `hreflang` e `x-default` em `BaseLayout.astro`.

## Âncoras

Os IDs abaixo são contratos usados pelo menu, CTAs e futuras rotas legadas:

| Âncora | Seção |
| --- | --- |
| `#inicio` | Hero |
| `#acessos` | Atalhos de serviços |
| `#mergulho-recreativo` | Batismo de mergulho |
| `#cursos` | Cursos SDI e TDI |
| `#safari-baleias` | Safari de baleias |
| `#sobre` | Sobre nós e equipe |
| `#contato` | Contato |

Não renomear uma âncora sem atualizar menu, acessos rápidos e redirecionamentos
legados.

## Escopo Comercial

O MVP oferece somente:

- batismo de mergulho;
- cursos SDI e TDI;
- safari para observação de baleias.

Não apresentar como oferta ativa:

- serviços de mergulho profissional;
- engenharia, inspeção ou obras subaquáticas;
- locação de embarcação;
- saídas para mergulhadores certificados;
- programação ou catálogo de pontos de mergulho.

Embarcações podem aparecer nas fotos como parte da operação, não como produto
independente.

## Estado Do Conteúdo

Dados recebidos e usados no MVP, ainda sujeitos à aprovação final do cliente:

- WhatsApp: `+55 71 99274-7781`;
- Instagram: `https://www.instagram.com/sharkdiveoperadora`;
- e-mail: `atendimento@sharkdive.com.br`;
- endereço: Terminal Turístico Náutico da Bahia, Salvador;
- texto institucional sobre a equipe, sem nomes individuais;
- inventário de cursos SDI e TDI.

Regras:

1. Não adicionar preço, duração, idade mínima, requisito médico, temporada,
   capacidade ou garantia de avistamento sem aprovação.
2. Cursos são inventário preliminar até validação por instrutor responsável.
3. `Cavern Diver` não faz parte da oferta atual em Salvador.
4. Formação de Divemaster e instrutor é curso de carreira, não comprovação de
   serviço técnico subaquático.
5. Texto recebido pode ser adaptado para não comunicar serviços fora do escopo,
   mas precisa de aprovação final antes da publicação.
6. Não reintroduzir nomes de instrutores sem uma nova solicitação do cliente.

## Imagens

As imagens atuais foram fornecidas como capturas de publicações da Shark Dive e
são provisórias.

Regras de conteúdo:

- não buscar ou incorporar conteúdo diretamente do Instagram em tempo de execução;
- não usar vídeos ou Reels no MVP;
- não adicionar banco de imagens ou imagem gerada sem decisão explícita;
- substituir capturas pelos arquivos originais quando eles forem disponibilizados;
- confirmar autoria, autorização e créditos;
- usar nomes descritivos em kebab-case;
- imagem informativa precisa de `alt` localizado; decorativa usa `alt=""`.

Regras técnicas:

- foto de seção vai em `src/assets/` e é renderizada com `<Picture>` de
  `astro:assets`, com `formats={["avif", "webp"]}`, `fallbackFormat="jpeg"`,
  `widths` e `sizes` adequados ao contexto;
- `public/` guarda apenas o que precisa de URL estável: favicons e o logo. Arquivo
  em `public/` não passa por otimização;
- hero usa `loading="eager"` e `fetchpriority="high"`; imagem abaixo da dobra usa
  `loading="lazy"`;
- `<Picture>` já emite `width` e `height`. Imagem escrita à mão precisa dos dois,
  ou de proporção estável em CSS;
- o wrapper `<picture>` é neutralizado por `picture { display: contents }` no
  `global.css` — sem isso, altura percentual resolveria contra ele;
- imagem de compartilhamento social é gerada por `getImage()` em 1200×630 no
  `BaseLayout`; crawler não lê `srcset` e precisa de URL absoluta.

## Componentes E Markup

- Página compõe seções; conteúdo repetido deve ser gerado por arrays e `.map()`.
- Componentes de seção ficam em `src/components/`.
- Helpers compartilhados ficam em `src/lib/`.
- Um único `<h1>` por idioma; seções usam hierarquia `h2` e `h3`.
- Links com `target="_blank"` usam `rel="noreferrer"` ou proteção equivalente.
- Botões somente com ícone precisam de `aria-label` e `title` quando útil.
- Menu controla `aria-expanded` e fecha após navegação.
- Não criar cards decorativos ou componentes sem função real.

## CSS E Tema

O CSS é dividido por responsabilidade, não por arquivo único:

| Onde | O que mora ali |
| --- | --- |
| `src/styles/global.css` | Somente o ponto de entrada que importa os módulos globais na ordem correta |
| `src/styles/fonts.css` | Declarações `@font-face` das fontes auto-hospedadas |
| `src/styles/tokens.css` | Tokens `:root` e overrides do tema escuro |
| `src/styles/base.css` | Reset, documento e tipografia base |
| `src/styles/primitives.css` | Padrões usados por **mais de um** componente: `.shell`, `.section`, `.eyebrow`, `.lead-copy`, `.split-layout`, `.text-link`, `.button*`, `.section-media`, `.media-crop*` |
| `<style>` do componente | CSS da própria seção, incluindo suas media queries e seus modificadores |

Regra de decisão: **usado por um componente só, mora nele.** Só sobe para o
conjunto global o que dois ou mais componentes precisam.

O motivo não é tamanho — é que CSS de seção morre junto com a seção. Enquanto
tudo era global, apagar um componente deixava regra órfã para sempre.

Astro dá escopo automático ao `<style>`. O escopo não atravessa componente: para
alcançar interno de outro, use `:global()` — mas antes considere promover a regra
a primitiva no `global.css`.

### Tokens

- **nomear por papel, nunca por lugar.** `--text-on-dark`, não `--contact-copy`.
  Se o nome precisa citar uma seção, o papel certo ainda não foi achado;
- cor opaca reutilizada só entra como token em `:root`;
- transparências de branco ou preto podem usar `rgb(... / alpha)` localmente;
- não criar cor nova quando já existir token de papel equivalente;
- **preferir override de token a override de seletor no tema escuro.** Se a regra
  base já lê um token que o bloco `html[data-theme="dark"]` troca, redeclarar a
  propriedade é no-op. Override de seletor só quando o valor no escuro **não** é
  o mesmo token (ex.: superfície que vira `--course-surface` em vez de `--paper`)
  ou quando não é cor (ex.: `display` na troca dos ícones de tema).

### Layout e movimento

- manter `.shell` como contêiner padrão;
- manter breakpoints principais em `940px` e `640px`;
- usar `clamp()` em tipografia de destaque;
- garantir dimensões estáveis para imagens, botões e controles;
- toda animação nova deve respeitar `prefers-reduced-motion`;
- não usar `font-size` baseado diretamente em largura de viewport sem limites;
- não usar letter-spacing negativo.

### Contraste — verificar, não estimar

- texto normal precisa de **4.5:1**; foco e componente, **3:1**;
- `--red` (#e91f2b) dá 4.47:1 sobre branco e **falha** em texto. Em corpo de
  texto usar `--red-dark`; `--red` só em preenchimento e borda;
- o anel de foco troca por superfície: `--focus` (escuro) é o padrão das seções
  claras; seção de fundo escuro declara `--focus: var(--focus-on-dark)` no
  próprio `<style>`. Custom property herda, então nenhum override de seletor é
  necessário. No tema escuro o âmbar já vale para a página inteira;
- ao introduzir par cor/fundo novo, calcular o contraste antes de commitar.

## JavaScript

JavaScript no cliente existe apenas para:

- menu mobile;
- seletor de idiomas;
- alternância e persistência do modo claro/noturno.

Preferir HTML e CSS. Não adicionar carrossel automático, rastreamento, widget de
terceiros ou dependência de runtime sem aprovação.

## Métricas

A ferramenta escolhida para métricas é o Umami. A integração deve ser ativada
somente em produção e quando houver configuração própria para o domínio oficial,
evitando misturar acessos de desenvolvimento e do preview com os dados reais.

Regras:

- carregar o script somente em produção e somente quando houver um identificador
  configurado por variável do repositório;
- medir apenas visualizações e conversões essenciais, como cliques em WhatsApp,
  Instagram e e-mail;
- não enviar nome, telefone, e-mail, conteúdo de mensagem ou outro dado pessoal
  em eventos;
- documentar os nomes dos eventos antes de implementá-los;
- validar no painel do Umami depois da publicação no domínio oficial.

## SEO

`BaseLayout.astro` é responsável por:

- título e descrição;
- canonical;
- `hreflang` para português, inglês e espanhol;
- metadados Open Graph e Twitter;
- favicon e cor de tema.

Regras:

- títulos e descrições devem ser específicos para cada idioma;
- usar somente termos correspondentes aos serviços ativos;
- imagem social deve ser local e possuir URL absoluta;
- páginas legadas devem usar `noindex` e apontar para o destino canônico;
- não duplicar títulos genéricos entre rotas.

## Rotas Legadas

O GitHub Pages não oferece redirecionamento server-side. Manter páginas estáticas
com `meta refresh`, canonical e link manual de fallback:

| Rota antiga | Destino |
| --- | --- |
| `/dive-sites` | `/batismo/` |
| `/courses` | `/cursos/` |
| `/the-team` | `/sobre/` |
| `/contact` | `/contato/` |
| `/paginainicial` | `/inicio/` |
| `/programao-de-mergulho` | `/batismo/` |

Não corrigir o slug legado `/programao-de-mergulho`.

## Domínio, DNS E E-mail

O domínio canônico é `https://www.sharkdive.com.br`, servido pelo GitHub Pages.
O domínio raiz deve encaminhar para a versão com `www`. O e-mail corporativo é
um serviço independente da hospedagem do site.

Mudanças neste repositório não autorizam alterações em DNS ou e-mail. Quando uma
tarefa externa for explicitamente solicitada:

- alterar somente registros comprovadamente ligados ao objetivo;
- preservar MX, SPF, DKIM, DMARC e verificações do provedor de e-mail;
- registrar valores anteriores em local privado e manter plano de retorno;
- testar site, HTTPS, redirecionamento canônico, envio e recebimento de e-mail;
- nunca publicar credenciais, dados de cobrança ou snapshots completos da zona.

## Publicação No GitHub Pages

O Pages publica o branch `gh-pages` em modo branch. A publicação suportada pelo
projeto é feita pelo script:

```sh
scripts/publish-pages.sh preview      # igordantasdev.github.io/sharkdive-site/
scripts/publish-pages.sh production   # publica em www.sharkdive.com.br
DRY_RUN=1 scripts/publish-pages.sh preview   # gera o commit, sem push
```

O script exige working tree limpa, roda `typecheck` e `build` com o
`SITE_BASE_PATH` certo (`/sharkdive-site` no preview, `/` em produção), mantém
`.nojekyll` e sincroniza `dist/` no `gh-pages`. Canonical, sitemap e Open Graph
apontam para `https://www.sharkdive.com.br` nos dois modos.

Em `production` o script grava `dist/CNAME` com `www.sharkdive.com.br`. No modo
branch é esse arquivo que mantém o domínio cadastrado no Pages; publicar sem ele
pode remover a associação. Exigir working tree limpa e concluir as verificações
antes de publicar.

## Verificação

Comandos:

```sh
yarn dev
yarn typecheck
yarn build
yarn preview
```

Não há suíte automatizada completa. Antes de concluir uma alteração:

1. Rodar `yarn typecheck` e `yarn build`.
2. Conferir `/`, `/en/` e `/es/`.
3. Conferir desktop, 940px e 640px.
4. Testar menu, tema, âncoras e links externos.
5. Navegar por teclado (Tab) nas seções claras **e** escuras: o anel de foco tem
   de ser visível nas duas.
6. Conferir que imagens não causam deslocamento de layout.
7. Conferir rotas legadas quando forem alteradas.

Ao mover CSS entre `global.css` e componente, comparar as declarações do CSS
buildado antes e depois (neutralizando os hashes `[data-astro-cid-*]`) para
garantir que nada foi perdido. Isso não pega regra aplicando no lugar errado —
essa parte só o olho pega.

## Não Fazer

- Não publicar conteúdo comercial não confirmado.
- Não reintroduzir serviços profissionais ou embarcações no escopo sem decisão.
- Não misturar cursos de carreira com serviços técnicos.
- Não copiar o site Wix como fonte de verdade.
- Não depender do Instagram para renderizar conteúdo.
- Não adicionar vídeo no MVP.
- Não remover as versões inglesa ou espanhola nem o modo noturno.
- Não desfazer a componentização.
- Não devolver CSS de seção para o `global.css`; lá só entra primitiva compartilhada.
- Não criar token nomeado por lugar (`--contact-x`, `--footer-y`) — nomear por papel.
- Não colocar foto de seção em `public/`; ela precisa passar por `astro:assets`.
- Não voltar a carregar fonte de origem externa; os woff2 são auto-hospedados.
- Não adicionar framework de UI ou runtime desnecessário.
- Não renomear âncoras sem atualizar seus consumidores.
- Não quebrar registros de e-mail em operações externas de domínio ou DNS.
