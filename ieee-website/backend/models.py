from django.db import models

# Create your models here.


class Database(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    url = models.URLField()
    text = models.CharField(max_length=300)
