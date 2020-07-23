from django.urls import path
from . import views

urlpatterns = [
    path('getposts/', views.blog_index),
    path('getposts/<int:post_id>', views.post_detail),
    path('editposts/<int:post_id>', views.post_detail),
    path('deleteposts/<int:post_id>', views.post_detail),
]
