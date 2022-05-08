from django.db import models

class Curso(models.Model):
    
    title = models.CharField(max_length=255)
    body = models.TextField()
    data_curso = models.TextField()
    certificado = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    # categories = models.ManyToManyField('Category', related_name='posts')

    # def __str__(self):
    #     return self.title
    
