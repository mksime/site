from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.parsers import JSONParser

# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .models import Post
from .serializers import PostSerializer #, CommentSerializer

@api_view(["GET"])
# @csrf_exempt
# @permission_classes([IsAuthenticated])
def welcome(request):
    content = {"message": "Bem-vindo, usuário!"}
    return JsonResponse(content)

@api_view(["GET"])
# @csrf_exempt
# @permission_classes([IsAuthenticated])
def blog_index(request):
    # if request.method == "GET":
    posts = Post.objects.all().order_by('-created_on')
    serializers = PostSerializer(posts, many=True)
    return JsonResponse(serializers.data, safe=False,
                        status=status.HTTP_200_OK)
        # return Response(serializers.data)

@api_view(["POST"])
# @csrf_exempt
@permission_classes([IsAuthenticated])
def create_post(request):
    # elif request.method == 'POST':
    # permission_classes = [IsAuthenticated]
    post_data = JSONParser().parse(request)
    post_serializer = PostSerializer(data=post_data)
    if post_serializer.is_valid():
        post_serializer.save()
        return JsonResponse(post_serializer.data,
                            status=status.HTTP_201_CREATED)
    return JsonResponse(post_serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "PUT", "DELETE"])
# @csrf_exempt
@permission_classes([IsAuthenticated])
def post_detail(request, post_id):
    try:
        post = Post.objects.get(pk=post_id)
    except Post.DoesNotExist:
        return JsonResponse({'message': 'Post não existe'},
                            status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        post_serializer = PostSerializer(post)
        return JsonResponse(post_serializer.data)
    elif request.method == "PUT":
        post_data = JSONParser().parse(request)
        post_serializer = PostSerializer(post, data=post_data)
        if post_serializer.is_valid():
            post_serializer.save()
            return JsonResponse(post_serializer.data)
        return JsonResponse(post_serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        post.delete()
        return JsonResponse({'message': 'Post deletado com sucesso.'},
                            status=status.HTTP_204_NO_CONTENT)
