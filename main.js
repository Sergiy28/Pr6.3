function checkAnswer(element, isCorrect) {
	if (isCorrect) {
			element.classList.add('correct');
			alert('Правильно!');
	} else {
			element.classList.add('incorrect');
			alert('Неправильно! Спробуйте ще раз.');
	}
}