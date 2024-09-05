from rest_framework import serializers
from .models import *

class RegisteredWorkersSerializer(serializers.ModelSerializer):
    class Meta:
        model=RegisteredWorkers
        fields=('id','name','status','comments','start_date','end_date','last_name','position','salary','phone')