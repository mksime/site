from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer

# Create your views here.

@api_view(["GET"])
@csrf_exempt
def blog_index(request):
    posts = Post.objects.all().order_by('created_on')
    serializers = PostSerializer(posts, many=True)
    # content = {
    #     "posts": posts,
    # }
    return JsonResponse({'posts': serializers.data}, safe=False, status=status.HTTP_200_OK)
