
from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, JsonResponse

from hearitapp.models import Login
from hearitapp.serializers import LoginSerializer
from rest_framework import viewsets
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_data(request):
	if request.method == 'GET':
		data = Login.objects.all()
		serializer = LoginSerializer(data, many=True)
		return JsonResponse(serializer.data, safe=False)
	
@api_view(['POST'])
def create_user(request):
	if request.method == 'POST':
		serializer = LoginSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse(serializer.data, status=201)
		return JsonResponse(serializer.errors, status=400)
