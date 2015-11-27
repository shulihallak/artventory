class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :filename
      t.string :title
      t.date :dateCreated
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
