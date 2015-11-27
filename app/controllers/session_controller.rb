class SessionController < ApplicationController
  # def create
  #   user = User.find_by(email: params[:session][:email].downcase)
  # if user && user.authenticate(params[:session][:password])
  #   redirect_to user_path(user_id)
  # else
  #   render 'new'
  # end

  def create
    user = User.find_by(email: user_params[:email])

    if user && user.authenticate(user_params[:password])
      # session[:current_user_id] = user.id

      token = SecureRandom.urlsafe_base64

      session[:session_token] = token
      user.update(session_token: token)

      flash[:message] = "Thank you for logging in."
    else
      flash[:message] = "Email / Password combo does not exist!"
    end

    redirect_to images_path
  end


  def destroy
    session.delete(:user_id)
   @current_user = nil

    redirect_to root_path
  end

  def current_user
    redirect_to root_path
  end


  private

  def user_params
    return params.require(:user).permit(:email, :password)
  end
end
