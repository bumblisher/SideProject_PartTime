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
	// $(".subtab_wrap ul li button").on("click", function () {
	// 	$(".subtab_wrap ul li").removeClass("on");
	// 	$(this).parent().addClass("on");
	// 	if ($(this).parent().index() == 0) {
	// 		$(".subtab_cont.dog").show();
	// 		$(".subtab_cont.cat").hide();
	// 	} else if ($(this).parent().index() == 1) {
	// 		$(".subtab_cont.dog").hide();
	// 		$(".subtab_cont.cat").show();
	// 	}
	// });

});




