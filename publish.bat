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

REM ---- 1. assemble real corpus ----
python convert.py --src ..\generator\output --out .
IF ERRORLEVEL 1 (
  echo ERROR: convert.py failed. Make sure Python is on PATH.
  pause
  exit /b 1
)

REM ---- 2. push to GitHub ----
git init -q 2>nul
REM Local git identity for this repo only (commit requires an author).
git config user.email "wade@users.noreply.github.com" 2>nul
git config user.name "Wade" 2>nul
git remote remove origin 2>nul
git remote add origin https://github.com/Wadesha/academic-paper.git
git add -A
git commit -q -m "Verified-corpus site: real OpenAlex/arXiv citations + prerequisite modules" || echo Note: nothing new to commit.
REM git init may create "master"; rename current branch to "main" before push.
git branch -M main 2>nul
git push --force https://%GH_TOKEN%@github.com/Wadesha/academic-paper.git main
IF ERRORLEVEL 1 (
  echo ERROR: git push failed.
  pause
  exit /b 1
)

echo.
echo Done. GitHub Pages URL: https://wadesha.github.io/academic-paper/
pause
