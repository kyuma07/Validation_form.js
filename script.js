//------------------------------------------変数の宣言---------------------------------------------------------
var $title=$('#title');
var $textarea=$('#text');
var $btn=$('#btn');
var $error_message=$('#message');
var $select=$('#category');
//------------------------------------------関数の定義---------------------------------------------------------

function toggleDisabled(){
	if($textarea.val()===''||$title.val()===''||$select.val()===''){
		$btn.prop('disabled',true);
	}else if($error_message.children().length===0){
		$btn.prop('disabled',false);
	}else if($error_message.children().length>0){
		$btn.prop('disabled',true);
	}
}

function textareaAppendMessage(){
	var $textLength=$textarea.val().length;
	if($textLength<11){
		$error_message.append('<li class="text_alert">本文は１０文字以上にしてください</li>');
	}else if($textLength>21){
		$error_message.append('<li class="text_alert">本文は２０文字以内にしてください</li>');
	}
}

function titleAppendMessage(){
	var $titleLength=$title.val().length;
	if($titleLength>11){
		$error_message.append('<li class="title_alert">タイトルは１０文字以内にしてください</li>');
	}else if($titleLength===0){
		$error_message.append('<li class="title_alert">タイトルを入力してください</li>');
	}
}

function selectAppendMessage(){
}

//------------------------------------------フォームの処理---------------------------------------------------------

$btn.prop('disabled',true);

$title.on('keyup blur',function(){
	$error_message.children().remove('.title_alert');
	titleAppendMessage()
	toggleDisabled()
});

$textarea.on('keyup blur',function(){
	$error_message.children().remove('.text_alert');
	textareaAppendMessage()
	toggleDisabled()
});

$btn.on('click',function(e){
	e.preventDefault();
	$title.val('');
	$textarea.val('');
	$select.val('');
});

$select.on('change blur',function(){
	$error_message.children().remove('.select_alert');
	var $current_option=($select.val());
	if($current_option==='')$error_message.append('<li class="select_alert">カテゴリーの選択は必須です</li>');
	toggleDisabled()
});

