from django.shortcuts import render
from django.urls import reverse, reverse_lazy
from django.views.generic import TemplateView

from .models import Person, Room


class HomeView(TemplateView):
    template_name = "person/home.html"


class CreateRoomView(TemplateView):
    template_name = "person/createroom.html"

    def post(self, request, *args, **kwargs):
        print(self)
        return render(request, "person/home.html", {})


class EnterRoomView(TemplateView):
    template_name = "person/enterroom.html"

    def post(self, request, *args, **kwargs):
        pass
