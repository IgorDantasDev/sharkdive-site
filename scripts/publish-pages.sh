#!/usr/bin/env bash
# Publica dist/ no branch gh-pages (GitHub Pages em modo "branch").
#
# Uso:
#   scripts/publish-pages.sh preview      # https://igordantasdev.github.io/sharkdive-site/
#   scripts/publish-pages.sh production   # https://www.sharkdive.com.br (so no lancamento)
#   DRY_RUN=1 scripts/publish-pages.sh preview   # gera e mostra, sem push
#
# Existe porque o GitHub Actions da conta esta bloqueado por cobranca.
# Em production o CNAME vai junto em todo publish; sem ele o dominio
# personalizado e removido do Pages.
set -euo pipefail

mode="${1:-}"
case "$mode" in
  preview) base="/sharkdive-site" ;;
  production) base="/" ;;
  *) echo "uso: $0 preview|production" >&2; exit 1 ;;
esac

root="$(git rev-parse --show-toplevel)"
cd "$root"

if [ -n "$(git status --porcelain)" ]; then
  echo "working tree com alteracoes; faca commit antes de publicar" >&2
  exit 1
fi

sha="$(git rev-parse --short HEAD)"

yarn typecheck
SITE_BASE_PATH="$base" yarn build
printf '\n' > dist/.nojekyll
if [ "$mode" = production ]; then
  echo "www.sharkdive.com.br" > dist/CNAME
fi

worktree="$(mktemp -d)"
trap 'git worktree remove --force "$worktree" >/dev/null 2>&1 || true' EXIT

git fetch origin gh-pages
git worktree add --detach "$worktree" origin/gh-pages
rsync -a --delete --exclude .git dist/ "$worktree"/

cd "$worktree"
git add -A
if git diff --cached --quiet; then
  echo "nada mudou no gh-pages"
  exit 0
fi
git commit -q -m "chore(pages): publish $sha ($mode)"
git --no-pager show --stat --oneline HEAD | head -20

if [ -n "${DRY_RUN:-}" ]; then
  echo "DRY_RUN: push nao executado"
  exit 0
fi
git push origin HEAD:gh-pages
