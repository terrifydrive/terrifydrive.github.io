@echo off

rmdir terrifydrive.github.io /s /q
mkdir terrifydrive.github.io
REM cd terrifydrive.github.io
git clone %gitServerUrl%/terrifydrive/terrifydrive.github.io.git
if errorlevel 1 goto fend

echo.
echo --------------------------------------------------------------------------
echo CLONE DONE!


goto end

:fend
echo.
echo --------------------------------------------------------------------------
echo ERROR!!!
PAUSE

:end