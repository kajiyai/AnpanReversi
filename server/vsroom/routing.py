# chat/routing.py
from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path(r"ws/vsroom/(?P<room_name>\w+)/$", consumers.VSConsumer.as_asgi()),
]
