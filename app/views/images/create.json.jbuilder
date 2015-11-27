json.image do
  json.id @image.id
  json.filename @image.filename
  json.title @image.title
  json.dateCreated @image.dateCreated
  json.editions []
end
