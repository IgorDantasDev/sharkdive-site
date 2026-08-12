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

O site substituirá uma instalação antiga da Wix e será hospedado no GitHub Pages
com o domínio `sharkdive.com.br`.

O planejamento editorial e operacional fica em `../sharkdive-planejamento/`,
principalmente em `PLANO-SITE.md`.

## Princípios

1. Não inventar informação comercial.
2. Tratar material antigo da Wix como inventário, não como oferta confirmada.
3. Preservar a componentização e os padrões existentes.
4. Evitar dependências e JavaScript sem necessidade.
5. Priorizar acessibilidade, desempenho e manutenção simples.
6. O preview pode permanecer público no endereço provisório, mas não deve ser
   divulgado como versão final nem receber o domínio oficial sem validação do
   cliente.
7. Não alterar DNS de e-mail durante a migração do site.

## Stack

| Categoria | Tecnologia |
| --- | --- |
| Framework | Astro 5, TypeScript strict, saída estática |
| Pacotes | Yarn |
| Estilo | CSS puro: `src/styles/global.css` + `<style>` com escopo por componente |
| Imagens | `astro:assets` (`<Picture>`/`getImage`) a partir de `src/assets/` |
| Fontes | auto-hospedadas em `public/fonts` (Inter variável + Barlow Condensed 700) |
| Ícones | `@lucide/astro` e `simple-icons` |
| Interação | JavaScript vanilla somente para menu e tema |
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
    LegacyRedirect.astro       casca das rotas antigas da Wix
    QuickLinks.astro
    RecreationalSection.astro
    SafariSection.astro
    SiteFooter.astro
  layouts/
    BaseLayout.astro
  lib/
    contact.ts
    i18n.ts
    path.ts                      aplica o `base` às URLs internas
  pages/
    index.astro                /
    en/index.astro             /en/
    dive-sites.astro           rotas legadas: só compõem LegacyRedirect
    courses.astro
    the-team.astro
    contact.astro
    programao-de-mergulho.astro
  styles/
    global.css
public/
  fonts/                       woff2 auto-hospedados
  images/                      só o logo (favicon precisa de URL estável)
  favicon*.png
  robots.txt
  sitemap.xml                  mantido à mão: página nova exige editar aqui
astro.config.mjs
```

`src/pages/` contém rotas. `src/components/` contém componentes compartilhados e
seções da landing page. Não duplicar a página em português e inglês: ambas devem
compor os mesmos componentes e passar apenas o idioma.

Foto de seção vai em `src/assets/`, nunca em `public/`: arquivo em `public/` o
Astro copia cru, sem gerar AVIF/WebP nem `srcset`.

## Rotas E Idiomas

| Rota | Idioma |
| --- | --- |
| `/` | Português do Brasil |
| `/en/` | Inglês |

Todo componente com texto recebe `lang: Locale` e usa `translate()` de
`src/lib/i18n.ts`.

Regras:

- usar `lang="pt-BR"` na página portuguesa e `lang="en"` na inglesa;
- manter os dois idiomas semanticamente equivalentes;
- nomes oficiais dos cursos permanecem em inglês;
- todo texto novo deve ser adicionado nos dois idiomas;
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
- substituir capturas pelos arquivos originais antes da publicação definitiva;
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
| `src/styles/global.css` | `@font-face`, tokens `:root`, bloco do tema escuro, reset, tipografia base e primitivas usadas por **mais de um** componente: `.shell`, `.section`, `.eyebrow`, `.lead-copy`, `.split-layout`, `.text-link`, `.button*`, `.section-media`, `.media-crop*` |
| `<style>` do componente | CSS da própria seção, incluindo suas media queries e seus modificadores |

Regra de decisão: **usado por um componente só, mora nele.** Só sobe para o
`global.css` o que dois ou mais componentes precisam.

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
- alternância e persistência do modo claro/noturno.

Preferir HTML e CSS. Não adicionar carrossel automático, rastreamento, widget de
terceiros ou dependência de runtime sem aprovação.

## Métricas

A ferramenta escolhida para métricas é o Umami. A integração deve ser ativada
somente quando o domínio oficial estiver conectado e validado, evitando misturar
acessos de desenvolvimento e do preview com os dados reais.

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
- `hreflang` para português e inglês;
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
| `/dive-sites` | `/#mergulho-recreativo` |
| `/courses` | `/#cursos` |
| `/the-team` | `/#sobre` |
| `/contact` | `/#contato` |
| `/programao-de-mergulho` | `/#mergulho-recreativo` |

Não corrigir o slug legado `/programao-de-mergulho`.

## Domínio, DNS E E-mail

O domínio é registrado no Registro.br, mas usa `ns1.wix.com` e `ns2.wix.com`.
A zona DNS autoritativa é administrada pela Wix. O e-mail utiliza Google
Workspace e sua assinatura pode ter sido adquirida por meio da Wix.

O domínio canônico adotado pelo projeto é `https://www.sharkdive.com.br`. No
lançamento, `https://sharkdive.com.br` deve encaminhar para a versão com `www`.

Na migração:

- alterar somente registros comprovadamente ligados ao site;
- preservar MX, SPF, DKIM, DMARC e verificações Google;
- preservar `mail.sharkdive.com.br` até validação técnica;
- registrar todos os valores anteriores;
- manter os nameservers da Wix na primeira tentativa de migração e alterar apenas
  os registros web, caso o painel permita apontamento externo;
- testar envio e recebimento de e-mail após a troca;
- validar domínio raiz, `www`, redirecionamento canônico e HTTPS;
- não cancelar a Wix antes da estabilização do novo site.
- não cancelar a assinatura separada de Business Email/Google Workspace.

Nunca alterar DNS sem confirmação explícita, acesso ao provedor autoritativo e
plano de retorno.

## Publicação No GitHub Pages

O workflow `.github/workflows/deploy.yml` publica o conteúdo de `dist/`.
O preview já está publicado em
`https://igordantasdev.github.io/sharkdive-site/`. Enquanto ele usa o formato
`usuario.github.io/repositorio/`, o `base` é inferido de `GITHUB_REPOSITORY`.

Ao ativar o domínio próprio, criar nas variáveis do repositório:

```text
SITE_BASE_PATH=/
```

Essa variável é obrigatória no domínio próprio para que os assets deixem de usar
o nome do repositório como prefixo. Canonical, sitemap e Open Graph continuam
apontando para `https://www.sharkdive.com.br` em ambos os ambientes.

Também é necessário cadastrar `www.sharkdive.com.br` como domínio personalizado
no GitHub Pages, configurar os registros web na zona da Wix sem alterar os
registros de e-mail e aguardar a emissão do certificado HTTPS.

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
2. Conferir `/` e `/en/`.
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
- Não remover a versão inglesa ou o modo noturno.
- Não desfazer a componentização.
- Não devolver CSS de seção para o `global.css`; lá só entra primitiva compartilhada.
- Não criar token nomeado por lugar (`--contact-x`, `--footer-y`) — nomear por papel.
- Não colocar foto de seção em `public/`; ela precisa passar por `astro:assets`.
- Não voltar a carregar fonte de origem externa; os woff2 são auto-hospedados.
- Não adicionar framework de UI ou runtime desnecessário.
- Não renomear âncoras sem atualizar seus consumidores.
- Não quebrar registros de e-mail durante a migração.
