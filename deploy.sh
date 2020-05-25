# deploy.sh
#!/usr/bin/env sh

# Use `chmod +x deploy.sh` to allow executing deploy.sh
# abort on errors
set -e

# build
echo Building. This may take a minute...
npm run deploy-build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# Creating new git repository for deploy
now=$(date +"%d-%m-%Y %H:%M")
echo Deploying...
rm -rf .git
git init
git add -A
git commit -m "Deploy ${now}"

# Pushing to gh-pages
echo Pushing to GitHub Pages...
# Add your own GitHub UserName and RepoName
git push -f https://github.com/danil-kuk/ActiveUsersTest.git master:gh-pages

# Removing output build folder and cache
echo Removing build folder...
cd -
rm -rf dist
rm -rf .cache