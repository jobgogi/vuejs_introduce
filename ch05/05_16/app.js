/**
 * 믹스인 정의
 */
var Shareable = {
  data: function () {
    return {
      _isProcessing: false
    }
  },
  // CREATE HOOK
  created: function () {
    console.log('Shareable 믹스인의 훅이 호출됨');
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
  `,
  created: function () {
    console.log('IconShareButton의 훅이 호출되었음.');
  }
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
      buttonLabel: '공유하기'
    }
  },
  created: function () {
    console.log('TextShareButton의 훅이 호출되었음.');
  }
};

new Vue({
  el: '#app',
  components: {
    IconShareButton,
    TextShareButton
  }
});