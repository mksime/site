from django.db import models
from django.conf import settings

    

class Post(models.Model):
    
    author = models.ForeignKey(settings.AUTH_USER_MODEL,
                               on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=255)
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    # categories = models.ManyToManyField('Category', related_name='posts')

    def __str__(self):
        return self.title
    
# Não implementado ainda

# class Category(models.Model):
#     name = models.CharField(max_length=20)
    
#     def __str__(self):
#         return self.name

# class Comment(models.Model):
#     author = models.CharField(max_length=60)
#     body = models.TextField()
#     created_on = models.DateTimeField(auto_now_add=True)
#     post = models.ForeignKey('Post', on_delete=models.CASCADE)

#     def __str__(self):
#         return self.body
    