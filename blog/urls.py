from django.urls import path
from . import views

urlpatterns = [
    path('welcome/', views.welcome),
    path('getposts/', views.blog_index),
    path('createpost/', views.create_post),
    path('getposts/<int:post_id>', views.post_detail),
    path('editposts/<int:post_id>', views.post_detail),
    path('deleteposts/<int:post_id>', views.post_detail),
]
