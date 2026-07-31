@echo off
REM ============================================================================
REM  publish.bat  --  One-click build + push to GitHub (Wadesha/academic-paper)
REM ============================================================================

cd /d "%~dp0"

IF "%GH_TOKEN%"=="" (
  echo ERROR: GH_TOKEN environment variable is not set.
  echo Please run in this window first:
  echo   set GH_TOKEN=ghp_your_token_here
  echo Then run this file again.
  pause
  exit /b 1
)

REM ---- 1. generate KB data (46 prerequisite modules from kb.py) ----
python gen_kb_js.py
IF ERRORLEVEL 1 (
  echo ERROR: gen_kb_js.py failed. Make sure Python is on PATH.
  pause
  exit /b 1
)

REM ---- 2. assemble real corpus ----
python convert.py --src ..\generator\output --out .
IF ERRORLEVEL 1 (
  echo ERROR: convert.py failed. Make sure Python is on PATH.
  pause
  exit /b 1
)

REM ---- 3. push to GitHub (with retry + network fixes) ----
git init -q 2>nul
git config user.email "wade@users.noreply.github.com" 2>nul
git config user.name "Wade" 2>nul
REM Network compatibility fixes for "Connection was reset"
git config http.version HTTP/1.1 2>nul
git config http.postBuffer 524288000 2>nul
git config http.sslVerify true 2>nul
git remote remove origin 2>nul
git remote add origin https://github.com/Wadesha/academic-paper.git
git add -A
git commit -q -m "Verified-corpus site: real OpenAlex/arXiv citations + 46 prerequisite modules" || echo Note: nothing new to commit.
git branch -M main 2>nul

REM Try push up to 3 times
set RETRY=0
:push_retry
git push --force https://%GH_TOKEN%@github.com/Wadesha/academic-paper.git main
IF ERRORLEVEL 1 (
  set /a RETRY+=1
  IF %RETRY% LSS 3 (
    echo Push attempt %RETRY% failed. Retrying in 3 seconds...
    timeout /t 3 /nobreak >nul
    goto push_retry
  )
  echo.
  echo ERROR: git push failed after 3 attempts.
  echo If behind a proxy/firewall, try:
  echo   git config --global http.proxy http://your-proxy:port
  echo Or switch to SSH: git remote set-url origin git@github.com:Wadesha/academic-paper.git
  pause
  exit /b 1
)

echo.
echo Done. GitHub Pages URL: https://wadesha.github.io/academic-paper/
pause
