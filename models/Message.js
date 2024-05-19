import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({

  content: {
      type: String,
      required: true,
  },
  sender: {
      id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
      },
    
  },
  receiver: {
      id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
      },
    
  },
}, { timestamps: true });

export default mongoose.model('Message', messageSchema);