$(function(){
	$('.cmtBtn').on('click',function(){
		$('.detail').attr('style','display: none')
		$(this).next().attr('style','display: block');
	})
	
	$('.back').on('click',function(){
		$(this).parent().attr('style','display: none');
	})
});