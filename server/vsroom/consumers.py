import json

from channels.generic.websocket import AsyncWebsocketConsumer


class VSConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        print('connect')
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = "chat_%s" % self.room_name

        # Join room group
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)

        await self.accept()

    async def disconnect(self, close_code):
        print('disconnect')
        # Leave room group
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    # Receive message from WebSocket
    async def receive(self, text_data):
        print('receive', text_data)
        text_data_json = json.loads(text_data)
        banmen = text_data_json["banmen"]

        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name, {"type": "chat_message", "banmen": banmen}
        )

    # Receive message from room group
    async def chat_message(self, event):
        print('chat_message', event)
        banmen = event["banmen"]

        # Send message to WebSocket
        await self.send(text_data=json.dumps({"banmen": banmen}))
