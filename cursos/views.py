from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from django.http import Http404

from .models import Curso
from .serializers import CursoSerializer

class CursoList(APIView):

    def get_object(self):
        try:
            return Curso.objects.all()
        except Curso.DoesNotExist:
            raise Http404
    
    def get(self, request, format=None):
        cursos = self.get_object()
        serializer = CursoSerializer(cursos, many=True)

        return Response(serializer.data)


class CursoDetail(APIView):

    def get_object(self, pk):
        try:
            return Curso.objects.get(pk=pk)
        except Curso.DoesNotExist:
            raise Http404
    
    def get(self, request, curso_id, format=None):
        curso = self.get_object(pk=curso_id)
        serializer = CursoSerializer(curso)

        return Response(serializer.data)


