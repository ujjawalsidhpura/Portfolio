import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

export default function CustomChatbot(props) {

    const theme = {
        background: "#d1d5db",
        fontFamily: "Arial, Helvetica, sans-serif",
        headerBgColor: "#d1d5db",
        headerFontColor: "Black",
        headerFontSize: "25px",
        botBubbleColor: "#f4f4f5",
        botFontColor: "Black",
        userBubbleColor: "f4f4f5",
        userFontColor: "#4c4c4c",

    };

    const config = {
        width: "300px",
        height: "400px",
        floating: true
    };

    const steps = [
        {
            id: "Greet",
            message: "Welcome to my portfolio. Did you like it?",
            trigger: "Liked or not"
        },
        {
            id: "Liked or not",
            options: [
                {
                    value: true,
                    label: "Yes",
                    trigger: "Liked"
                },
                {
                    value: false,
                    label: "No",
                    trigger: "Disliked"
                }
            ]
        },
        {
            id: "Liked",
            user: false,
            message: "Thank you very much. Please leave your contact information and I will reach out to you as soon as possible.",
            trigger: "ConnectForm"
        },
        {
            id: "ConnectForm",
            user: true,
            trigger: "Success"
        },
        {
            id: "Success",
            message: "Received. Have a great day!",
            end: true
        },
        {
            id: "Disliked",
            user: false,
            message: "Sorry to hear that. Can you please leave a feedback on what did you not like or areas of improvement? !!",
            trigger: "FeedbackForm"
        },
        {
            id: "FeedbackForm",
            user: true,
            trigger: "Feedback"
        },
        {
            id: "Feedback",
            message: "Feedback Received.Have a great day!",
            end: true
        }
    ];

    return (
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps} {...config} />
        </ThemeProvider>
    )
}
