json.array!(@images) do |image|
  json.extract! image, :id, :filename, :title, :dateCreated, :user_id
  json.url image_url(image, format: :json)
end
