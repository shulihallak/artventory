class Edition < ActiveRecord::Base
  belongs_to :image
  has_one :user, through: :image
end
