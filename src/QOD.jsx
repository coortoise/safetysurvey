// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "What is most important factor in food safety?",
                choices: [
                    "Cleanliness", "Organization", "Profit", "Communication"
                ],
                correctAnswer: "Cleanliness"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "Which foods require extra caution?",
                choices: [
                    "Undercooked meats and eggs", "Oystes and sprouts", "Unpasteurized milk or juices", "All of the above"
                ],
                correctAnswer: "All of the above"
            },
            {
                type: "radiogroup",
                name: "question3",
                title: "What are you protecting when using gloves?",
                choices: [
                    "Your hands from food", "Your hands from germs", "Your food from germs", "Your food from hands"
                ],
                correctAnswer: "Your food from germs"
            },
            {
                type: "radiogroup",
                name: "question4",
                title: "What is the most common food hazard?",
                choices: [
                    "Physical", "Biological", "Chemical", "Miscommunication"
                ],
                correctAnswer: "Biological"
            },
            {
                type: "radiogroup",
                name: "question5",
                title: "Use a seperate cutting board for:",
                choices: [
                    "Raw meat", "Vegetables", "Seafood", "All of the above"
                ],
                correctAnswer: "All of the above"
            },
            {
                type: "radiogroup",
                name: "question6",
                title: "Always wash your hands when:",
                choices: [
                    "Handling raw meat", "Using the bathroom", "Touching your face or nose", "All of the above"
                ],
                correctAnswer: "All of the above"
            },
            {
                type: "radiogroup",
                name: "question7",
                title: "What is an example of a physical hazard?",
                choices: [
                    "Bacteria", "Mold", "Broken glass", "Chemicals"
                ],
                correctAnswer: "Broken glass"
            },
            {
                type: "radiogroup",
                name: "question8",
                title: "How often should you wash food contact surfaces?",
                choices: [
                    "Once a day", "Once a week", "After each use", "Only when it looks dirty"
                ],
                correctAnswer: "After each use"
            },
            {
                type: "radiogroup",
                name: "question9",
                title: "Which of the following is a common food allergen?",
                choices: [
                    "Salt", "Water", "Nuts", "Garlic"
                ],
                correctAnswer: "Nuts"
            },
            {
                type: "radiogroup",
                name: "question10",
                title: "What food is the most dangerous if not fully cooked?",
                choices: [
                    "Beef", "Vegetables", "Chicken", "Fruits"
                ],
                correctAnswer: "Chicken"
            }];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Kitchen Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Kitchen Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}