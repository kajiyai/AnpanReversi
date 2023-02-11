import uuid

from django.db import models


class Room(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)
    name = models.CharField(verbose_name="ルーム名", max_length=256)


class Person(models.Model):
    # id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    id = models.IntegerField(primary_key=True, editable=False)
    name = models.CharField(verbose_name="ユーザー名", max_length=256, unique=True)
    room = models.ForeignKey(Room, default=None, null=True, on_delete=models.CASCADE)
