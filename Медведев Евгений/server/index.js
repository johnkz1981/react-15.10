const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const Message = require('./models/messages');

const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.use(cors());

io.on('connection', (socket) => {
  socket.on('message', async (msg) => {
    let message = new Message(msg);
    message = await message.save();

    socket.broadcast.emit('message', message);
    socket.emit('message', message);
  });
});

app.get('/messages', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

app.get('/messages/:id', async (req, res) => {
  const messages = await Message.findById(req.params.id);
  res.json(messages);
});

server.listen(3000, () => {
  console.log('Server has been started');
});