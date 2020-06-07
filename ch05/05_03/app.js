var PullDownMenu = {
  data: function () {
    return {
      isShown: false,
      name: '메뉴',
      items: [
        '1-1',
        '1-2',
        '1-3'
      ]
    };
  },
  template: `
    <div @mouseleave="isShown = false">
      <p @mouseover="isShown = true">
        <a href="#" class="menu">{{ name }}</a>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
          :css="false">
          <ul v-if="isShown">
            <li v-for="item in items" :key="item">
              <a href="#" class="menu-item">{{ item }}</a>
            </li>
          </ul>
        </transition>
      </p>
    </div>
  `,
  methods: {
    beforeEnter: function (el) {
      // el: 트랜지션 대상 DOM 요소
      // 애니메이션 처음 상태 (높이 0, 불투명도 0)를 설정
      el.style.height = '0px';
      el.style.opacity = 0;
    },
    enter: function (el, done) {
      // 요소의 높이를 알아본 다음 Anime.js를 사용해 메뉴를 아래 방향으로 전개
      // 3초 동안 불투명도와 높이를 바꿔가며 나타나게 함
      anime({
        targets: el,
        opacity: 1,
        height: el.scrollHeight + 'px',
        duration: 3000,
        complete: done
      });
    },
    leave: function (el, done) {
      anime({
        targets: el,
        opacity: 0,
        height: '0px',
        duration: 300,
        complete: done
      });
    }
  }
};

new Vue({
  el: '#app',
  components: {
    PullDownMenu: PullDownMenu
  }
});