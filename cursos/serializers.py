from rest_framework import serializers

from .models import Curso


class CursoSerializer(serializers.Serializer):
    
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=255)
    body = serializers.CharField()
    data_curso = serializers.CharField()
    certificado = serializers.CharField()
    created_on = serializers.DateTimeField()
    last_modified = serializers.DateTimeField()
    
    def create(self, validated_data):
        return Curso.objects.create(**validated_data)
        
    class Meta:
        model = Curso
        fields = '__all__'