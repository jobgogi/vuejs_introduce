var IconShareButton = {
  template: `
    <button @click="share">
      <i class="fas fa-share-square"></i>
    </button>
  `,
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

var TextShareButton = {
  template: `
    <button @click="share">
      {{ buttonLabel }}
    </button>
  `,
  data: function () {
    return {
      buttonLabel: '공유하기',
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

new Vue({
  el: '#app',
  components: {
    IconShareButton,
    TextShareButton
  }
});