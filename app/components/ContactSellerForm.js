import React from "react";
import { Form, FormField, SubmitButton } from "./forms";
import * as Yup from "yup";
import { Alert, Keyboard } from "react-native";
import messagesApi from "../api/messages";
import { Notifications } from "expo";

const validationSchema = Yup.object().shape({
  message: Yup.string().min(5).label("Message"),
});

export default function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: "Awesome",
      body: "Your message was sent to the seller.",
    });
  };

  return (
    <Form
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Type your message here..."
      />
      <SubmitButton title="Contact Seller" />
    </Form>
  );
}
