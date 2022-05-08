from rest_framework import serializers
from blog.models import Post

# class CategorySerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Category
#         fields = ("name")

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = '__all__'

# class CommentSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Comment
#         fields = '__all__' 
