export interface IMessage {
  role: "user" | "assistant";
  text: string;
}

export class Message implements IMessage {
  role: "user" | "assistant";
  text: string;

  constructor(iMessage: IMessage) {
    this.role = iMessage.role;
    this.text = iMessage.text;
  }
}
