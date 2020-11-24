git config --local user.name "nthnchu-bot"
git config --local user.email "70061530+nthnchu-bot@users.noreply.github.com"
git add README.md
git commit -m "Update README.md"
if [[ $(git log -2 --pretty=format:"%an <%ae>") == "nthnchu-bot <70061530+nthnchu-bot@users.noreply.github.com>
nthnchu-bot <70061530+nthnchu-bot@users.noreply.github.com>" ]] && [[ $(git log -2 --pretty=format:"%cn <%ce>") == "nthnchu-bot <70061530+nthnchu-bot@users.noreply.github.com>
nthnchu-bot <70061530+nthnchu-bot@users.noreply.github.com>" ]] && [[ $(git log -2 --pretty="%s") == "Update README.md
Update README.md" ]]; then
    git reset --soft HEAD~2
    git add README.md
    git commit -m "Update README.md"
    git push --force-with-lease https://nthnchu-bot:${TOKEN}@github.com/${GITHUB_REPOSITORY}.git HEAD
else
    git push https://nthnchu-bot:${TOKEN}@github.com/${GITHUB_REPOSITORY}.git HEAD
fi
