from django.urls import path

from . import views

app_name = "person"
urlpatterns = [
    path("", views.HomeView.as_view(), name="home"),
    path("createroom/", views.CreateRoomView.as_view(), name="createroom"),
    path("enterroom/", views.EnterRoomView.as_view(), name="enterroom"),
]
