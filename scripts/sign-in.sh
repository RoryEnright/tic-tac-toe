curl "http://tic-tac-toe.wdibos.com/post" \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=$EMAIL" \
  --data-urlencode "credentials[password]=$PASSWORD"

echo
