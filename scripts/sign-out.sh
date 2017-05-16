curl "http://tic-tac-toe.wdibos.com/delete?id=$ID" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
