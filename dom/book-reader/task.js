const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

for (let el of fontSize) {

	el.onclick = function() {
		for (let el of fontSize) {
			el.classList.remove('font-size_active');
		}
		el.classList.add('font-size_active');
		let dataSize = el.getAttribute("data-size");
		if (dataSize == 'big') {
			book.className = "book_fs-big";
		} else if (dataSize == 'small') {
			book.className = "book_fs-small";
		} else {
			book.className = "book";
		}
		return false;
	}
}
