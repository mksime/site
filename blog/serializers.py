from rest_framework import serializers
from blog.models import Category, Post, Comment

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ("name")

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ("title",
                  "body",
                  "created_on",
                  "last_modified",
                  "categories")

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ("title",
                  "body",
                  "created_on",
                  "post")
