from rest_framework import serializers

from .models import Projeto


class ProjetoSerializer(serializers.Serializer):
    
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=255)
    body = serializers.CharField()
    data_projeto = serializers.CharField()
    disponivel = serializers.CharField()
    created_on = serializers.DateTimeField()
    last_modified = serializers.DateTimeField()
    
    def create(self, validated_data):
        return Projeto.objects.create(**validated_data)
        
    class Meta:
        model = Projeto
        fields = '__all__'