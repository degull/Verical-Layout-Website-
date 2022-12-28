//이미지 소스를 활용한 모든 컨텐츠 로딩완료 ->
window.addEventListener("load", ()=> {
   init();  //화면 초기화 함수
   filter(btn);   //정렬버튼 기능 함수 호출
});

//화면 초기화 함수 정의
function init(){
   grid = new Iostope(frame, {
      itemSelector : box,
      columnWidth : box,
      transitionDuration : speed
   });
}

//정렬버튼 기능 함수 정의
function filter(arr) {
   for (let el of arr) {
      el.addEventListener("click", e=>{
         e.preventDefault();
         const sort = e.currentTarget.querySelector("a").getAttribute("href");
         grid. arrange ({
            filter:sort
         });

         for (let le of arr) {
            el.classList.remove(activeClass);
         }

         e.currentTarget.classList.add(activeClass);
      })
   }
}