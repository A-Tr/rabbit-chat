import {$,jQuery} from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$('#chatForm').on('submit', function(e) {
	e.preventDefault()

	const form = $('#chatForm').serializeArray()
	const JSONdata = getFormData(form)

	$.ajax({
		type: 'POST',
		url: 'http:localhost:3000/api/chat',
		processData: false,
		data: JSONdata,
		success: function(response) {
			alert(JSON.stringify(response))
		}
	})
})

function getFormData($form){
	let unindexed_array = $form.serializeArray()
	let indexed_array = {}

	$.map(unindexed_array, function(n, i){
		indexed_array[n['name']] = n['value']
	})

	return indexed_array
}