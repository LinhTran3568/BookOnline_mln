# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# BookOnline_mln

## Deploy lên GitHub Pages (FE thuần)

Repo này dùng Vite, nên khi deploy lên GitHub Pages (Project Pages) cần build ra thư mục `dist/` và deploy bằng GitHub Actions.

### 1) Chuẩn bị

- Commit & push code lên GitHub.
- Đảm bảo branch chính là `main` (workflow hiện deploy theo `main`).

### 2) Bật GitHub Pages (Deploy from Actions)

Trên GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### 3) Deploy

Mỗi lần bạn push lên `main`, workflow `.github/workflows/deploy-pages.yml` sẽ:

- `npm ci`
- `npm run build`
- deploy thư mục `dist/` lên Pages

Sau khi chạy xong, URL thường là:

- `https://<username>.github.io/<repo>/`

### Ghi chú

- `vite.config.js` đã tự set `base` theo tên repo khi build trên GitHub Actions, để chạy đúng trên Pages.
