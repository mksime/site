from django.urls import path
from . import views

urlpatterns = [
    path('getposts', views.blog_index),
]
