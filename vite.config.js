import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  // For GitHub Pages (Project Pages), assets must be served from /<repo>/
  // GitHub Actions provides GITHUB_REPOSITORY as "owner/repo".
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

  return {
    plugins: [react()],
    base: isGitHubActions && repoName ? `/${repoName}/` : '/',
  }
})
