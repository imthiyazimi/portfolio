@echo off
echo ========================================
echo  Portfolio GitHub Deployment
echo ========================================
echo.

cd /d "C:\Users\Imtiyaz\Documents\New OpenCode Project\portfolio"

echo [1/5] Initializing Git...
git init
echo.

echo [2/5] Adding files...
git add .
echo.

echo [3/5] Committing...
git commit -m "Initial portfolio - Mohammed Imthiyaz A"
echo.

echo [4/5] Adding remote...
git remote add origin https://github.com/imthiyazimi/portfolio.git
echo.

echo [5/5] Pushing to GitHub...
git branch -M main
git push -u origin main
echo.

echo ========================================
echo  Done! Now deploy on Vercel:
echo  https://vercel.com/new
echo ========================================
pause
