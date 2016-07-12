
form2.querySelector('input[name="phone"]').addEventListener('change', function (event) {
	if (!this.value.match(/^[+380][0-9\+]{1,}[0-9\-]{3,15}$/)) {
		form2.querySelector('input[name="phone"]').className = form2.querySelector('input[name="phone"]').className + ' error', this.value=''}
	console.log(this.value)
})

form2.addEventListener('submit', function (event){
	getFormData(this)
	event.preventDefault();
	return false;
})
function getFormData (form) {
	var elemList = form.elements

	dataobj = {}
	for (var i = 0, len = elemList.length-1; i<len; i++) {
		var name = elemList[i].name
		var val = elemList[i].value
		dataobj[name] = val

	} console.log (dataobj)
}

