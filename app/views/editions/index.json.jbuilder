json.array!(@editions) do |edition|
  json.extract! edition, :id, :image_id, :size, :number, :soldTo, :saleDate, :saleAmount, :numberRemaining
  json.url edition_url(edition, format: :json)
end
