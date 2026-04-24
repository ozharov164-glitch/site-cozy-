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

### Если в Actions ошибка `404` / `Failed to create deployment`

GitHub **не создаёт деплой**, пока в репозитории **не включён Pages с источником «GitHub Actions»**.

1. Открой настройки репозитория: **[Pages settings → site-cozy-](https://github.com/ozharov164-glitch/site-cozy-/settings/pages)**.
2. Блок **Build and deployment** → поле **Source** (источник).
3. Выбери **GitHub Actions** (не «Deploy from a branch»).
4. Если GitHub спросит разрешение на workflows — подтверди во вкладке **Actions**.
5. Зайди во вкладку **Actions** → последний workflow → **Re-run all jobs** (или дождись следующего push).

После этого шаг `deploy` перестанет отвечать 404.

### Обычная настройка

1. **Settings → Pages → Source: GitHub Actions**.
2. Файл `.github/workflows/pages.yml` собирает проект с `VITE_BASE=/site-cozy-/` и публикует `dist`.

## Свой домен (позже)

В **Settings → Pages → Custom domain** укажите домен и добавьте у регистратора **CNAME** на `ozharov164-glitch.github.io`. Затем в `vite.config.ts` для прод-сборки задайте `VITE_BASE=/` (корень сайта) и при необходимости добавьте шаг копирования файла `CNAME` в `public/`.
