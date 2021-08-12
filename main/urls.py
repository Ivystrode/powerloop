from django.urls import path, include
from . import views
print("main urls\n\n\n\n")
urlpatterns = [
    path('', views.landing, name="landing"),
]