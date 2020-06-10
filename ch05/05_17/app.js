/**
 * 믹스인 정의
 */
var Shareable = {
  data: function () {
    return {
      _isProcessing: false
    }
  },
  methods: {
    share: function () {
      if (this._isProcessing) {
        return;
      }
      if (!window.confirm('공유하시겠습니까?')) {
        return;
      }
      this._isProcessing = true;
      setTimeout(function () {
        window.alert('공유되었습니다');
        this._isProcessing = false;
      }, 300);
    }
  }
};

var IconShareButton = {
  mixins: [
    Shareable
  ],
  template: `
    <button @click="share">
      <i class="fas fa-share-square"></i>
    </button>
  `
};

var TextShareButton = {
  mixins: [
    Shareable
  ],
  template: `
    <button @click="share">
      {{ buttonLabel }}
    </button>
  `,
  data: function () {
    return {
      _isProcessing: true,
      buttonLabel: '공유하기'
    }
  },
  methods: {
    share: function () {
      // mixin에서 프로퍼티가 충돌하는 경우 컴포넌트 옵션이 우선이다.
      window.alert('컴포넌트로부터 공유되었습니다.');
    }
  }
};

new Vue({
  el: '#app',
  components: {
    IconShareButton,
    TextShareButton
  }
});