class Image < ActiveRecord::Base
  has_attachments :photos
  belongs_to :users
  has_many :editions, dependent: :destroy
  accepts_nested_attributes_for :editions,
    :allow_destroy => true, :update_only => true
  # mount_uploader :picture, PictureUploader



  # validates_associated
end
