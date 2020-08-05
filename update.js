#!/usr/bin/env node
const fs = require('fs');
const github_readme_stats_themes = [ "dark", "radical", "merko", "gruvbox", "tokyonight", "onedark", "cobalt", "synthwave", "highcontrast", "dracula", "prussian", "monokai", "vue", "shades-of-purple", "nightowl", "buefy", "blue-green", "algolia", "great-gatsby", "solarized-light", "solarized-dark", "bear" ];
const github_readme_stats_theme = random(github_readme_stats_themes);
const npm_expansions = [ "Nice Thinking Nacho", "Native Talented Navigator", "Noble Tall Nitrogen", "Now Talk Nathan", "Numberless Third Nationality", "Narrow Tender Nickname", "Numerous Tangy Negotiator", "Nonstop Thirsty Novel", "Neighborly Thundering Numeracy", "Natural Tightfisted Notion" ];
const npm_expansion = random(npm_expansions);
function random(e) {
  return(e[Math.floor(Math.random() * e.length)])
}
console.log('github readme stats theme: "' + github_readme_stats_theme + '"')
console.log('npm expansion: "' + npm_expansion + '"')
fs.readFile('src/README.md', 'utf8', function (err,data) {
  if (err) {
    return console.error(err);
  }
  data = data.replace(/{{ github_readme_stats_theme }}/g, github_readme_stats_theme);
  data = data.replace(/{{ npm_expansion }}/g, npm_expansion)
  fs.writeFile("README.md", data, 'utf8', function (err) {
     if (err) return console.error(err);
  });
});
