from rest_framework import serializers

from person.models import Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ["user_name", "room_id"]
