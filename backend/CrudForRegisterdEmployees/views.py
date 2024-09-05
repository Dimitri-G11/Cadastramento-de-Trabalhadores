from django.shortcuts import render
from rest_framework import viewsets,permissions
from .models import *
from .serializers import *
from rest_framework.response import Response

class RegisteredWorkersView(viewsets.ViewSet):
    permission_classes=[permissions.AllowAny]
    queryset=RegisteredWorkers.objects.all()
    serializer_class=RegisteredWorkersSerializer

    def list(self,request):
        queryset=RegisteredWorkers.objects.all()
        serializer=self.serializer_class(queryset,many=True)
        return Response(serializer.data,status=200)
    
    def create(self,request):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        else:
            return Response(serializer.errors, status=400)


    def retrieve(self,request,pk=None):
        queryset=self.queryset.get(pk=pk)
        serializer=self.serializer_class(queryset)
        return Response(serializer.data,status=200)

    def update(self,request,pk=None):
        queryset=self.queryset.get(pk=pk)
        serializer=self.serializer_class(queryset,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        else:
            return Response(serializer.errors, status=400)
    
    def destroy(self,request,pk=None):
        queryset=self.queryset.get(pk=pk)
        queryset.delete()
        return Response({f"The Worker with id: {pk}":" was eleminated succesfully"},status=200)