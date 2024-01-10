const qnas = document.querySelectorAll(".qna");

qnas.forEach((eachQna) => {
	eachQna.addEventListener("click", () => {
		let qnaValue = eachQna.dataset.value;
		let qnaAnswer = eachQna.lastElementChild;
		let qnaIcon = eachQna.firstElementChild.lastElementChild;

		// !changing plus & minus icons

		switch (qnaValue) {
			case "inactive":
				qnaAnswer.classList.add("show-answer");
				eachQna.dataset.value = "active";
				qnaIcon.src = "/assets/images/icon-minus.svg";
				break;
			case "active":
				qnaAnswer.classList.remove("show-answer");
				eachQna.dataset.value = "inactive";
				qnaIcon.src = "/assets/images/icon-plus.svg";
				break;
			default:
				break;
		}
	});
});
