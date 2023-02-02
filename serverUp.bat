cd API
call rails db:create
set result1=%errorlevel%
if %result1% NEQ 0 (
  echo Database creation failed
)
call rails db:migrate
set result2=%errorlevel%
if %result2% NEQ 0 (
  echo Database migration failed
)
echo Database created and migrated successfully
call rails server