const mongoose = require('mongoose');

// Prevent multiple connections in development
const conn = mongoose.connection.readyState >= 1
  ? mongoose.connection
  : mongoose.connect('mongodb://localhost:27017/facultyDashboard', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Notification Schema
const notificationSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Schedule Schema
const scheduleSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Task Schema
const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create Models
const Notification = mongoose.models.Notification || mongoose.model('Notification', notificationSchema);
const Schedule = mongoose.models.Schedule || mongoose.model('Schedule', scheduleSchema);
const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

module.exports = { Notification, Schedule, Task };