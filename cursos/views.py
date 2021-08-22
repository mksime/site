# from django.shortcuts import render

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Curso
from .serializers import CursoSerializer

class CursoList(APIView):

    def get_object(self, pk):
        try:
            return Curso.objects.get(pk=pk)
        except Curso.DoesNotExist:
            raise Http404
    
    def get(self, request, format=None):
        cursos = Curso.objects.all()
        serializer = CursoSerializer(cursos, many=True)

        return Response(serializer.data)




