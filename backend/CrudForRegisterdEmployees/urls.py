from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('Workers',RegisteredWorkersView,basename='Workers')
urlpatterns = router.urls
