from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProjetoList.as_view())
]
