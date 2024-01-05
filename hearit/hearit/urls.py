"""
URL configuration for hearit project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import re_path as url
from django.urls import include, path
from django.contrib import admin
from django.views.generic.base import TemplateView
from hearitapp.views import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^getData/', get_data),
    url(r'^.*', TemplateView.as_view(template_name="home.html"), name="home"),
    path('api/create-user/', create_user, name='create_user'),
]