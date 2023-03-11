import { Schema, model, Document } from "mongoose";

interface IUserRole extends Document {
  name: string;
  description: string;
}

const UserRoleSchema = new Schema<IUserRole>({

  name: { type: String, required: true, unique: true },
  description: { type: String }

})

export default model('userrole', UserRoleSchema);