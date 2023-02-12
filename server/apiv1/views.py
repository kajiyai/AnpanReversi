from rest_framework import generics, viewsets

from person.models import Room

from .serializers import RoomSerializer


class CreateRoomAPIView(generics.CreateAPIView):
    """ユーザーとルームIDを作成するAPI"""

    serializer_class = RoomSerializer


class EnterRoomViewSet(viewsets.ModelViewSet):
    serializer_class = RoomSerializer
    queryset = Room.objects.all()
