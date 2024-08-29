from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter


router=DefaultRouter()
router.register('register',RegisterViewset,basename='register')
router.register('login',LoginViewset,basename='login')
router.register('users',UsersViewset,basename='users')

urlpatterns = router.urls

