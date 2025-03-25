from django.urls import path
from .views import RegisterView, LoginView, UserProfileView, SocialMediaLinksView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('social-media/', SocialMediaLinksView.as_view(), name='social-media'),
] 