# Сайт «ВключиСебя» (CozyReset)

Премиальный лендинг на **Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion**.

## Локально

```bash
cd website
npm install
npm run dev
```

Откроется на `http://localhost:5173` (базовый путь `/`).

## Сборка как на GitHub Pages

Репозиторий: [`site-cozy-`](https://github.com/ozharov164-glitch/site-cozy-), сайт: `https://ozharov164-glitch.github.io/site-cozy-/`

```bash
VITE_BASE=/site-cozy-/ npm run build
```

## Первый push в пустой репозиторий

Из папки `website/`:

```bash
git init
git add .
git commit -m "feat: landing ВключиСебя"
git branch -M main
git remote add origin https://github.com/ozharov164-glitch/site-cozy-.git
git push -u origin main
```

## GitHub Pages

1. После первого push: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Workflow `.github/workflows/pages.yml` соберёт проект с `VITE_BASE=/site-cozy-/` и выложит артефакт.

## Свой домен (позже)

В **Settings → Pages → Custom domain** укажите домен и добавьте у регистратора **CNAME** на `ozharov164-glitch.github.io`. Затем в `vite.config.ts` для прод-сборки задайте `VITE_BASE=/` (корень сайта) и при необходимости добавьте шаг копирования файла `CNAME` в `public/`.
