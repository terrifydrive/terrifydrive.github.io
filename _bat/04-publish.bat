echo.
echo --------------------------------------------------------------------------
echo PUBLISH START...

RMDIR "terrifydrive.github.io.tmp" /S /Q
ren "./terrifydrive.github.io" "./terrifydrive.github.io.tmp"
mkdir "terrifydrive.github.io"

robocopy "./terrifydrive.github.io.tmp/.git" "./terrifydrive.github.io/.git" /s /e
move "./terrifydrive.github.io.tmp/_app_dev" "./terrifydrive.github.io/_app_dev"
move "./terrifydrive.github.io.tmp/_old_version" "./terrifydrive.github.io/_old_version"
move "./terrifydrive.github.io.tmp/_bat" "./terrifydrive.github.io/_bat"
copy ".\terrifydrive.github.io.tmp\.gitignore" ".\terrifydrive.github.io\.gitignore"
RMDIR "terrifydrive.github.io.tmp" /S /Q

robocopy "./terrifydrive.github.io/_app_dev/dist/tdapp" "./terrifydrive.github.io" /s /e
copy ".\terrifydrive.github.io\index.html" ".\terrifydrive.github.io\404.html"

echo.
echo --------------------------------------------------------------------------
echo PUBLISH DONE!
REM PAUSE