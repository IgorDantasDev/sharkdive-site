# Shark Dive

Site institucional estático da Shark Dive, centro de mergulho em Salvador,
Bahia. Apresenta batismo de mergulho, cursos SDI e TDI e safari para observação
de baleias, com atendimento por WhatsApp, Instagram e e-mail.

Construído com Astro, TypeScript e CSS. Possui versões em português e inglês,
modo noturno e publicação no GitHub Pages (`scripts/publish-pages.sh`).

Preview: <https://igordantasdev.github.io/sharkdive-site/>

## Como Iniciar

Requer Node.js 22 e Yarn.

```sh
yarn install
yarn dev
```

Para validar o projeto:

```sh
yarn typecheck
yarn build
```

## Estrutura

```text
src/
  assets/       imagens processadas pelo Astro
  components/   componentes e seções da página
  layouts/      layout base e metadados
  lib/          contatos, traduções e caminhos
  pages/        páginas e rotas legadas
  styles/       estilos e tokens globais
public/         fontes, favicons e arquivos estáticos
```

As convenções e restrições do projeto estão em [`AGENTS.md`](./AGENTS.md).
