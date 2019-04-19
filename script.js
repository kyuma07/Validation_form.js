//------------------------------------------変数の宣言---------------------------------------------------------
var $title=$('#title');
var $textarea=$('#text');
var $btn=$('#btn');
var $error_message=$('#message');
var $error_box=[];
var $select=$('#category');
//------------------------------------------関数の定義---------------------------------------------------------
function validate_form(){
	$error_box=[];
	var $textLength=$textarea.val().length;
	if($textLength<11)$error_box.push('本文は１０文字以上にしてください');
	if($textLength>21)$error_box.push('本文は２０文字以内にしてください');
	var $titleLength=$title.val().length;
	if($titleLength>11)$error_box.push('タイトルは１０文字以内にしてください');
	if($titleLength===0)$error_box.push('タイトルを入力してください');
	var $current_option=($select.val());
	if($current_option==='')$error_box.push('カテゴリーの選択は必須です');
	$error_message.children().remove();
	if($error_box.length>0){
		for(var cnt=0; cnt<$error_box.length; cnt++){
			$error_message.append('<li>'+$error_box[cnt]+'</li>');
		}
		$btn.prop('disabled',true);
	}else{
		$btn.prop('disabled',false);
	}
}
//------------------------------------------フォームの処理---------------------------------------------------------

$btn.prop('disabled',true);

$title.on('keyup blur',validate_form);

$textarea.on('keyup',validate_form);

$select.on('change',validate_form);

$btn.on('click',function(e){
	e.preventDefault();
	$title.val('');
	$textarea.val('');
	$select.val('');
	alert('入力内容が送信されました。');
});
