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
		} else {
			$(".list_acco li").removeClass("on");
			$(".list_acco li > div").slideUp(300);
			$(this).parent().addClass("on");
			$(this).next().slideDown(300);
		}
	});

	// 태그
	$(".list_tag button").on("click", function () {
		$(".list_tag button").removeClass("on");
		$(this).addClass("on");
	});

	$(".dim").on("click", function () {
		$(".popup").removeClass("on");
	});

	// 모든 .tabbox에 대해 탭 동작 적용
	document.querySelectorAll('.tabbox').forEach(function (tabbox) {
		const tabButtons = tabbox.querySelectorAll('.tab_list button');
		const tabContents = tabbox.querySelectorAll('.tab_cont > div');

		tabButtons.forEach(function (btn, idx) {
			btn.addEventListener('click', function () {
				// 모든 버튼에서 'on' 클래스 제거
				tabButtons.forEach(b => b.classList.remove('on'));
				// 클릭한 버튼에만 'on' 클래스 추가
				btn.classList.add('on');

				// 모든 컨텐츠 숨김
				tabContents.forEach(c => c.style.display = 'none');
				// 해당 인덱스 컨텐츠만 표시
				tabContents[idx].style.display = 'block';
			});
		});

		// 초기화: 첫 번째 탭만 표시
		tabContents.forEach((c, i) => c.style.display = i === 0 ? 'block' : 'none');
	});

});




