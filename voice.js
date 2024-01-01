let speechSynthesis = window.speechSynthesis;

function speakText(text) {
    // Stop current speech, if any
    speechSynthesis.cancel();

    // Speak the new text
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
                  