function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

  

    // Simple responses
    if (input == "hey") {
        return "How can I help you";
    } else if (input == "hello") {
        return "How can I help you";
    } else if (input == "good Morning") {
        return "How can I help you";
    }else if (input == "goodbye") {
        return "Talk to you later!";
    }else if (input == "what's up") {
        return "I'm Fine";
    }else if (input == "See you soon") {
        return "Take care";
    }else if (input == "bored") {
        return "Same here!";
    }else {
        return "Try asking something else!";
    }
}