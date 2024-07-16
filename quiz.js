function checkAnswer() {
    // تحديد الإجابة الصحيحة
    const correctAnswer = "4";

    // الحصول على إجابة المستخدم
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // مقارنة إجابة المستخدم مع الإجابة الصحيحة
    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// إضافة مستمع الحدث إلى زر "Submit Answer"
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
