const renderList = (data) => {
	return Object.values(data).map((item) => {
		if(!item.spamDetection) {
			return `<li><b>${item.fieldName}</b>: ${item.value}</li>`;
		} else {
			return ``;
		}
	}).join('')
}

const template = (data) => {
	return `<html><body>
		<style>
			.title h2 {
				margin-bottom:0px;
			}
			.title p {
				margin-top:0px;
			}
			.list {
				margin-top:0px;
				padding-top:0px;
			}
		</style>
		<div class="title">
			<h2>Появилась новая заявка на сайте levelupworlds.com</h2>
			<p>Обработайте данную заявку и обязательно свяжитесь с клиентом, которые оставил следующие данные</p>
		</div>
		<ul class="list">
			${renderList(data)}
		</ul>
	</body></html>`
}

export default template