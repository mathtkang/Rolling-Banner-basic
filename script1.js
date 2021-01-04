var slideIndex = 0;
showSlides(slideIndex);

//좌우버튼 클릭시
// function minusSlides(){ //왼쪽화살표 
//     slideIndex -= 1;
//     showSlides(slideIndex);
// }
// function plusSlides(){ //오른쪽화살표
//     slideIndex += 1;
//     showSlides(slideIndex);
// }
function clickSlides(n){
    slideIndex += n;
    showSlides(slideIndex);
}

//배너페이지 지정 함수
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

//메인함수
function showSlides(si) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // index0,1,2 그 이전과이후 순환하는 작업
    if (si >= slides.length) {
        slideIndex = 0; //초기화
    }
    if (si < slideIndex) {
        slideIndex = 2;
    }

    for (let i = 0; i < slides.length; i++) {//전체배너가리기
        slides[i].style.display = "none";
        
    }
    slides[slideIndex].style.display = "block";//해당배너보이기

    //현재배너 위치표시
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        //replace(찾을문자열,바꿀문자열)
    }
    dots[slideIndex].className += " active";

    // setTimeout(showSlides, 1000);
    // slideIndex++;
} 