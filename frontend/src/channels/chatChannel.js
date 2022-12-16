import consumer from "./consumer";

consumer.subscriptions.create(
  { channel: "ChatChannel", id: 1 },
  {
    received(data) {
      console.log(data);
    }
  })