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
});

ClassicEditor.replace('editor', {
	height: 300
});



  //File Upload Button
  function loadFile(input) {
      const file = input.files[0];
  
      const name = document.getElementById('fileName');
      name.textContent = file.name;
  };


	//Add/Remove tag button >> Need to edit to operate in diffrent way
	// function addTag() {
	// 	const addVal = document.getElementById('tag').value;

	// 	const li = document.createElement("li");
	// 	li.setAttribute('id', addVal);

	// 	const txtNode = document.createTextNode(addVal);
	// 	li.appendChild(txtNode);

	// 	document.getElementById('tag-list').appendChild(li);
	// }

	// function removeTag(){
	// 	const ul = document.getElementById('tag-list');

	// 	const tags = ul.getElementsByTagName('li');

	// 	if(tags.length > 0){
	// 		tags[0].remove();
	// 	}
	// }
const input = document.querySelector('.tagTxtArea');
const tagList = document.querySelector('.tag-list');

const onAdd = () => {
	const text = input.value;
	if(input.value === ''){
		input.focus();
		return;
	}

	const listItem = document.createElement('li');
	listItem.setAttribute('class', 'listItem');

	const listTxt = document.createElement('span');
	listTxt.setAttribute('class', 'listTxt');
	listTxt.innerHTML = text;

	const listDel = document.createElement('button');
	listDel.setAttribute('class', 'listDel');
	listDel.innerHTML = '<i>x</i>';
	listDel.addEventListener('click', () => {
		tagList.removeChild(listItem);
	});

	listItem.appendChild(listTxt);
	listItem.appendChild(listDel);
	tagList.appendChild(listItem);
	input.value = '';
	input.focus();
};

input.addEventListener('keydown', (event) => {
	if(event.keycode === 13) {
		onAdd();
	}
	return;
});






//Prevent Enter Key >> Need to edit to run only on forumQuestion.html
document.addEventListener('keydown', function(event){
	if(event.keyCode === 13){
		event.preventDefault();
	};
}, true);