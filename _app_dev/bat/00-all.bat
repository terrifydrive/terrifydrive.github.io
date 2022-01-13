
set gitServerUrl="https://github.com"

call 01-clone
call 02-angular-packages
call 03-build-app
call 04-publish

PAUSE