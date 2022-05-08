from django.shortcuts import render

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Projeto
from .serializers import ProjetoSerializer

class ProjetoList(APIView):

    def get_object(self, pk):
        try:
            return Projeto.objects.get(pk=pk)
        except Projeto.DoesNotExist:
            raise Http404
    
    def get(self, request, format=None):
        projetos = Projeto.objects.all()
        serializer = ProjetoSerializer(projetos, many=True)

        return Response(serializer.data)


