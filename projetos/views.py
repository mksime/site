from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from django.http import Http404

from .models import Projeto
from .serializers import ProjetoSerializer

class ProjetoList(APIView):

    def get_object(self):
        try:
            return Projeto.objects.all()
        except Projeto.DoesNotExist:
            raise Http404
    
    def get(self, request, format=None):
        projetos = self.get_object()
        serializer = ProjetoSerializer(projetos, many=True)

        return Response(serializer.data)


class ProjetoDetail(APIView):

    def get_object(self, pk):
        try:
            return Projeto.objects.get(pk=pk)
        except Projeto.DoesNotExist:
            raise Http404
    
    def get(self, request, projeto_id, format=None):
        projeto = self.get_object(pk=projeto_id)
        serializer = ProjetoSerializer(projeto)

        return Response(serializer.data)

