import { Schema, model, Document, Model } from "mongoose";

interface IMembership extends Document {
  name: string;
  price: number;
  description: string;
}


const MembershipSchema = new Schema<IMembership>({

  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: { type: String, required: true }

})


export default model('membership', MembershipSchema);