import { model, Schema } from "mongoose";
import { ILinks } from "../../../Application/Entities/Pojo/ILinks";

const LinkSchema = new Schema<ILinks>({
  name: { type: String },
  link: { type: String },
  color: { type: String, default: "#505050" },
  backgroundColor: { type: String, default: "#fff" },
});

export default model("link", LinkSchema);
