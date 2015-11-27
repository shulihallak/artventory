json.image_id @edition.image_id

json.edition do
  json.id @edition.id
  json.size @edition.size
  json.number @edition.number
  json.soldTo @edition.soldTo
  json.saleDate @edition.saleDate
  json.saleAmount @edition.saleAmount
  json.numberRemaining @edition.numberRemaining
  json.created_at @edition.created_at
  json.updated_at @edition.updated_at
end
