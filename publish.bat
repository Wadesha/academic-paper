@echo off
REM ============================================================================
REM  publish.bat  --  One-click build + push to GitHub (Wadesha/academic-paper)
REM
REM  This script does two things:
REM    1) Runs "python convert.py --src ..\generator\output --out ." to assemble
REM       the real corpus (OpenAlex/arXiv citations + prerequisite modules).
REM    2) Force-pushes the site to the Wadesha/academic-paper repository root,
REM       replacing the old template site. GitHub Pages then serves it.
REM
REM  SECURITY: your GitHub PAT is read from the GH_TOKEN environment variable
REM  only. It is NOT written into this file or any repo file.
REM
REM  Before running, open cmd in this folder and set your token once:
REM       set GH_TOKEN=ghp_your_token_here
REM  Then run this file. Or run "gh auth login" once instead.
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
REM git needs an author to commit; set it locally for this repo only.
git config user.email "wade@users.noreply.github.com" 2>nul
git config user.name "Wade" 2>nul
git remote remove origin 2>nul
git remote add origin https://github.com/Wadesha/academic-paper.git
git add -A
git commit -q -m "Verified-corpus site: real OpenAlex/arXiv citations + prerequisite modules" || echo No new commit.
git push --force https://%GH_TOKEN%@github.com/Wadesha/academic-paper.git main
IF ERRORLEVEL 1 (
  echo ERROR: git push failed.
  pause
  exit /b 1
)

echo.
echo Done. GitHub Pages URL: https://wadesha.github.io/academic-paper/
echo If Pages does not update, check Settings -^> Pages source is "main / (root)".
pause
