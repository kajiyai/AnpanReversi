from django.db import models


class Room(models.Model):
    user_name = models.CharField(verbose_name="ユーザー名", max_length=256, unique=True)
    room_id = models.IntegerField(verbose_name="ルームID")
