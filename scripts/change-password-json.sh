curl "http://tic-tac-toe.wdibos.com/patch?id=${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data "{
    \"passwords\": {
      \"old\": \"${OLD}\",
      \"new\": \"${NEW}\"
    }
  }"

echo
