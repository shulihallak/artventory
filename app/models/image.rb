class Image < ActiveRecord::Base
  belongs_to :users
  has_many :editions, dependent: :destroy
  accepts_nested_attributes_for :editions,
    :allow_destroy => true
  has_attachments :photos
  mount_uploader :picture, PictureUploader


  # validates_associated
end
