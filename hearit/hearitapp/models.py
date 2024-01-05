from django.db import models

# Create your models here.

# Create login model for a user
class Login(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)