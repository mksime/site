from django.urls import path
from . import views

urlpatterns = [
    path('', views.CursoList.as_view())
]
