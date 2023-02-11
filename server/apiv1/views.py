from rest_framework import generics

from .serializers import RoomSerializer


class CreateRoomAPIView(generics.CreateAPIView):
    """ユーザーとルームIDを作成するAPI"""

    serializer_class = RoomSerializer
