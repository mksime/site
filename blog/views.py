import json

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.parsers import JSONParser

from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer

# Create your views here.

@api_view(["GET", "POST"])
@csrf_exempt
def blog_index(request):
    if request.method == "GET":
        posts = Post.objects.all().order_by('created_on')
        serializers = PostSerializer(posts, many=True)
        return JsonResponse({'posts': serializers.data}, safe=False, status=status.HTTP_200_OK)
        # return Response(serializers.data)
    elif request.method == 'POST':
        post_data = JSONParser().parse(request)
        post_serializer = PostSerializer(data=post_data)
        if post_serializer.is_valid():
            post_serializer.save()
            return JsonResponse(post_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
