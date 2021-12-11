import { model, Document, Schema } from "mongoose";


interface IUserSchema extends Document {
  username: string;
  email: string;
  password: string;
  membership: Schema.Types.ObjectId;
  rol: Schema.Types.ObjectId;
  links: [{}];
}

const UserSchema = new Schema<IUserSchema>({
  username: {
    type: String,
    unique: true,
    required: [true, "the user is required"]
  },
  email: {
    type: String,
    unique: true,
    required: [true, "the email is required"]
  },
  password: {
    type: String,
    required: [true, "the password is required"]
  },
  membership: {
    type: Schema.Types.ObjectId, ref: 'membership',
    price: Number
  },
  rol: {
    type: Schema.Types.ObjectId, ref: 'userrole'
  },
  links: [{ type: Schema.Types.ObjectId, ref: 'link' }]
})


export default model('user', UserSchema);