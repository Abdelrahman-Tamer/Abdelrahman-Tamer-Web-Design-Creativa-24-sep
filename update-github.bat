@echo off
setlocal ENABLEDELAYEDEXPANSION
title Git Auto Update - Abdelrahman Repo

REM === Change to your repo directory ===
cd /d "D:\Abdelrahman-Tamer-Web-Design-Creativa-24-sep-main" || (
  echo [ERROR] Can't change directory. Make sure the path exists.
  pause
  exit /b 1
)

REM === Quick sanity check ===
git rev-parse --is-inside-work-tree >NUL 2>&1 || (
  echo [ERROR] This folder is not a Git repository.
  pause
  exit /b 1
)

REM === Network robustness (helps on some connections) ===
git config --local http.version HTTP/1.1
git config --local http.maxRequests 2
git config --local http.lowSpeedLimit 0
git config --local http.lowSpeedTime 0

echo.
echo ==== Adding changes ====
git add -A

REM Commit even if there are no staged changes (won't fail the script)
for /f "tokens=1-3 delims=/:. " %%a in ("%date% %time%") do (
  set TS=%date% %time%
)
git commit -m "Auto update %date% %time%" 1>nul 2>nul
if %errorlevel%==0 (
  echo Commit created.
) else (
  echo No new commit needed (maybe nothing changed).
)

echo.
echo ==== Rebase pull (to avoid merge commits) ====
git pull --rebase origin main
if errorlevel 1 goto retry

echo.
echo ==== Pushing to origin/main ====
git push origin main
if errorlevel 1 goto retry

echo.
echo [SUCCESS] GitHub repo updated successfully!
goto end

:retry
echo.
echo [WARN] Pull/Push failed. Trying a repack and retry...
git repack -ad
git gc --prune=now

echo.
echo ==== Retry push ====
git push origin main
if errorlevel 1 (
  echo.
  echo [ERROR] Still failed to push. Check your internet connection or credentials.
  echo        If you use a proxy or antivirus, you may need to whitelist Git.
  goto end
) else (
  echo.
  echo [SUCCESS] Pushed successfully after repack.
)

:end
echo.
pause
