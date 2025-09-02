import { Alert } from "react-native";
import { IFeedbackService } from "../../IFeedBackService";

export const AlertFeedback: IFeedbackService = {
  send: (feedback) => {
    Alert.alert(feedback.message, feedback.description);
  },
};
