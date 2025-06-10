$(function () {

	// 헤더 고정
	window.addEventListener('scroll', function () {
		const header = document.querySelector('.header');
		if (window.scrollY > 0) {
			header.classList.add('scrolled');
		} else {
			header.classList.remove('scrolled');
		}
	});

	// 아코디언
	$(".list_acco button").on("click", function () {
		if ($(this).parent().hasClass("on")) {
			$(this).next().slideUp(300);
			$(this).parent().removeClass("on");
		}else {
			$(".list_acco li").removeClass("on");
			$(".list_acco li > div").slideUp(300);
			$(this).parent().addClass("on");
			$(this).next().slideDown(300);
		}
	});

	// 햄버거 메뉴
	// $(".btn_menu").on("click", function () {
	// 	$(this).toggleClass("on");
	// 	$("html,body").toggleClass("menu_on");
	// });

	// 탭
	$(".tabbox button").on("click", function () {
		$(".tabbox button").removeClass("on");
		$(this).addClass("on");
		if ($(this).index() == 0) {
			$(this).parent().next().children("div").hide();
			$(this).parent().next().children("div:nth-child(1)").show();
		} else if ($(this).index() == 1) {
			$(this).parent().next().children("div").hide();
			$(this).parent().next().children("div:nth-child(2)").show();
		}
	});

});




