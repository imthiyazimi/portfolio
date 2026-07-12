@echo off
echo ========================================
echo  Portfolio GitHub Deployment
echo ========================================
echo.

cd /d "C:\Users\Imtiyaz\Documents\New OpenCode Project\portfolio"

echo [1/6] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)

echo [2/6] Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)

echo [3/6] Adding files...
git add .

echo [4/6] Committing...
git commit -m "Portfolio update - %date% %time%"

echo [5/6] Setting remote...
git remote set-url origin https://github.com/imthiyazimi/portfolio.git 2>nul || git remote add origin https://github.com/imthiyazimi/portfolio.git

echo [6/6] Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================
echo  Done! Vercel will auto-deploy.
echo ========================================
pause
