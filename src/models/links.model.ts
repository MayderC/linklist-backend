import { model, Schema, Document } from "mongoose";

interface ILinks extends Document {
  name: string;
  link: string;
  color : string;
  backgroundColor : string;
}

const LinkSchema = new Schema<ILinks>({
  name: { type: String },
  link: { type: String },
  color: { type: String, default: '#505050' },
  backgroundColor: { type: String, default: '#fff'}
})

export default model('link', LinkSchema);