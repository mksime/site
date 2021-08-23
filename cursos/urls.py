from django.urls import path
from . import views

urlpatterns = [
    path('', views.CursoList.as_view()),
    path('<int:curso_id>', views.CursoDetail.as_view()),
]
