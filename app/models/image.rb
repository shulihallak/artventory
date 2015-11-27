class Image < ActiveRecord::Base
  belongs_to :users
  has_many :editions, dependent: :destroy
  mount_uploader :picture, PictureUploader
end
