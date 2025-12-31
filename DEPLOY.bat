@echo off
REM Kit Laundry Shop - Quick Deploy Script for Windows

echo.
echo ================================
echo Kit Laundry Shop - Deployment
echo ================================
echo.

REM Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git is not installed. Please install Git from https://git-scm.com
    pause
    exit /b 1
)

REM Initialize git repo if not exists
if not exist ".git" (
    echo [INFO] Initializing Git repository...
    git init
)

REM Add all files
echo [INFO] Adding files to Git...
git add .

REM Create commit
echo [INFO] Creating commit...
set /p message="Enter commit message (default: Kit Laundry Shop Update): "
if "%message%"=="" set message=Kit Laundry Shop Update
git commit -m "%message%"

REM Check deployment target
echo.
echo Choose deployment platform:
echo 1) Railway (Recommended - Easiest)
echo 2) Heroku
echo 3) DigitalOcean
echo 4) Vercel
echo.
set /p choice="Select option (1-4): "

if "%choice%"=="1" (
    echo.
    echo [INFO] Deploying to Railway...
    echo.
    echo Steps to deploy to Railway:
    echo 1. Go to https://railway.app
    echo 2. Click "New Project" and select "Deploy from GitHub"
    echo 3. Connect your GitHub account
    echo 4. Select this repository
    echo 5. Add environment variables in Railway dashboard:
    echo    - TWILIO_ACCOUNT_SID
    echo    - TWILIO_AUTH_TOKEN
    echo    - TWILIO_PHONE_NUMBER
    echo.
    echo [INFO] Push to GitHub:
    set /p github_url="Enter your GitHub repository URL: "
    git remote add origin %github_url%
    git branch -M main
    git push -u origin main
    echo [SUCCESS] Pushed to GitHub! Now connect on Railway.app
) else if "%choice%"=="2" (
    echo.
    echo [INFO] Deploying to Heroku...
    echo.
    echo Prerequisites: Heroku CLI installed from https://devcenter.heroku.com/articles/heroku-cli
    echo.
    heroku login
    set /p app_name="Enter Heroku app name: "
    heroku create %app_name%
    echo [INFO] Setting environment variables...
    set /p twilio_sid="Enter TWILIO_ACCOUNT_SID: "
    set /p twilio_token="Enter TWILIO_AUTH_TOKEN: "
    set /p twilio_phone="Enter TWILIO_PHONE_NUMBER: "
    heroku config:set TWILIO_ACCOUNT_SID=%twilio_sid%
    heroku config:set TWILIO_AUTH_TOKEN=%twilio_token%
    heroku config:set TWILIO_PHONE_NUMBER=%twilio_phone%
    git push heroku main
    echo [SUCCESS] Deployed to Heroku!
    heroku open
) else if "%choice%"=="3" (
    echo.
    echo [INFO] Deploying to DigitalOcean...
    echo.
    echo Steps:
    echo 1. Create a Droplet at https://cloud.digitalocean.com
    echo 2. SSH into your server
    echo 3. Run these commands:
    echo.
    echo    curl -fsSL https://deb.nodesource.com/setup_20.x ^| sudo -E bash -
    echo    sudo apt-get install -y nodejs git
    echo    git clone YOUR_REPO_URL
    echo    cd kit-laundry-shop
    echo    npm install
    echo    nano .env
    echo    (Add your Twilio credentials)
    echo    sudo npm install -g pm2
    echo    pm2 start server.js
    echo    pm2 startup
    echo    pm2 save
    echo.
    pause
) else if "%choice%"=="4" (
    echo.
    echo [INFO] Deploying to Vercel...
    echo.
    echo Steps:
    echo 1. Go to https://vercel.com
    echo 2. Click "New Project"
    echo 3. Import your GitHub repository
    echo 4. Add environment variables in Vercel dashboard
    echo 5. Deploy!
    echo.
    pause
) else (
    echo [ERROR] Invalid choice!
    pause
    exit /b 1
)

echo.
echo ================================
echo Deployment Complete!
echo ================================
echo.
pause
