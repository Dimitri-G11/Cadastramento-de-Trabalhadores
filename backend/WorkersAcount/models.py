from django.db import models

class WorkersAcount(models.Model):
    name=models.CharField(max_length=50, null=False)
    last_name=models.CharField(max_length=50,null=False)
    start_date=models.DateField(null=False)
    end_date=models.DateField(null=True)
    comments=models.CharField(max_length=50, null=True)
    status=models.CharField(max_length=50,null=True)
    position=models.CharField(max_length=50,null=False)
    salary=models.IntegerField(null=False)
    phone=models.CharField(max_length=50,null=True)

    def __str__(self):
        return self.name
    