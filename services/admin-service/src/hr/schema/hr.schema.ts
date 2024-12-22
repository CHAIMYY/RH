
import { Schema } from 'mongoose';

export const HRSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String, required: true },
  
 
}, { timestamps: true });
