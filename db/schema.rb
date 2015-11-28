# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151128012020) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "editions", force: :cascade do |t|
    t.integer  "image_id"
    t.string   "size"
    t.integer  "number"
    t.string   "soldTo"
    t.date     "saleDate"
    t.decimal  "saleAmount"
    t.integer  "numberRemaining"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "editions", ["image_id"], name: "index_editions_on_image_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.string   "filename"
    t.string   "title"
    t.date     "dateCreated"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "image"
  end

  add_index "images", ["user_id"], name: "index_images_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "session_token"
  end

  add_foreign_key "editions", "images"
  add_foreign_key "images", "users"
end
