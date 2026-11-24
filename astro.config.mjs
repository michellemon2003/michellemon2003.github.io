import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const { githubUsername, portfolioRepository } = JSON.parse(
  readFileSync(new URL('./src/profile.json', import.meta.url), 'utf8'),
);
const userSite = portfolioRepository.toLowerCase() === `${githubUsername}.github.io`.toLowerCase();

export default defineConfig({
  site: `https://${githubUsername}.github.io`,
  base: userSite ? '/' : `/${portfolioRepository}`,
  trailingSlash: 'always',
  integrations: [tailwind()],
});
