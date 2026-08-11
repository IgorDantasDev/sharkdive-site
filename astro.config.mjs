import { defineConfig } from "astro/config";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBase = repositoryName && !repositoryName.endsWith(".github.io")
  ? `/${repositoryName}`
  : "/";
const configuredBase = process.env.SITE_BASE_PATH?.trim();

export default defineConfig({
  site: "https://www.sharkdive.com.br",
  base: configuredBase || (process.env.GITHUB_ACTIONS ? githubPagesBase : "/"),
  output: "static",
});
