$(function () {

	// 헤더 고정 배경색
	window.addEventListener('scroll', function () {
		const header = document.querySelector('.header');
		if (window.scrollY > 0) {
			header.classList.add('scrolled');
		} else {
			header.classList.remove('scrolled');
		}
	});

	// 햄버거 메뉴
	$(".btn_menu").on("click", function () {
		$(this).toggleClass("on");
		$("html,body").toggleClass("menu_on");
	});

	//메인 확인하기버튼
	$("#mainFormBtn").on("click", function () {
		$(".main_form").hide();
		$(".main_result").show();
	});

	//메인 상담예약시간
	$("#mainFormBtn2").on("click", function () {
		$(".result01").hide();
		$(".result02").show();
	});


	//서브 신청버튼
	$("#btnForm").on("click", function () {
		$(".center_form").hide();
		$(".center_done").show();
	});

	//서브 돌아오기 버튼
	$("#btnDone").on("click", function () {
		$(".center_form").show();
		$(".center_done").hide();
	});

	// 보상약관 서브탭
	$(".subtab_wrap ul li button").on("click", function () {
		$(".subtab_wrap ul li").removeClass("on");
		$(this).parent().addClass("on");
		if ($(this).parent().index() == 0) {
			$(".subtab_cont.dog").show();
			$(".subtab_cont.cat").hide();
		} else if ($(this).parent().index() == 1) {
			$(".subtab_cont.dog").hide();
			$(".subtab_cont.cat").show();
		}
	});

});




