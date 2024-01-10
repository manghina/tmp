export interface FeedbackState {
  open: boolean;
  type: "success" | "warning" | "info" | "error";
  message: string;
}
