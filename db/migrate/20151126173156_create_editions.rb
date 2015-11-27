class CreateEditions < ActiveRecord::Migration
  def change
    create_table :editions do |t|
      t.references :image, index: true, foreign_key: true
      t.string :size
      t.integer :number
      t.string :soldTo
      t.date :saleDate
      t.decimal :saleAmount
      t.integer :numberRemaining

      t.timestamps null: false
    end
  end
end
