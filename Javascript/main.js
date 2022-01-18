//Navigation Change font color  
//동작되나 새로고침 되면 유지되지 않음
function changeColor(){
  document.getElementById("nav__menu__li").style.color = "#FA3D4B";
  window.location.reload(true);
  console.log("change!");
}


//forumQuest.html > Error Code > Auto Height
$("textarea.ta__eCode").on('keydown keyup', function(){
  $(this).height(1).height($(this).prop('scrollHeight')+1);
})


//Display Date
const el = document.getElementById("date");

function date2Digits(){
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();

  el.innerText =
  `${year}.${("00" + month.toString()).slice(-2)}.${("00" + date.toString()).slice(-2)}`  //Display in double digits
}
date2Digits();


//CKEditor
ClassicEditor
	.create( document.querySelector( '#editor' ), {
		toolbar: {
			items: [
				'heading',
				'|',
				'fontFamily',
				'fontSize',
				'fontColor',
				'bold',
				'underline',
				'italic',
        'highlight',
        'bulletedList',
				'numberedList',
				'specialCharacters',
				'|',
        'alignment',
				'indent',
				'outdent',
				'|',
        'link',
				'imageUpload',
				'insertTable',
				'blockQuote',
        'code',
        'codeBlock',
        'mediaEmbed',
        '|',
				'undo',
				'redo'
			]
		},
		language: 'ko',
		image: {
			toolbar: [
				'imageTextAlternative',
				'imageStyle:inline',
				'imageStyle:side',
        'imageStyle:block'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		licenseKey: '',
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:' );
		console.error( error );
	} );

	ClassicEditor.replace('editor', {
		height: 300
	});



  //File Upload Button
  function loadFile(input) {
      const file = input.files[0];
  
      const name = document.getElementById('fileName');
      name.textContent = file.name;
  };