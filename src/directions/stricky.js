import Vue from 'vue';

Vue.directive('stricky', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  },
  update: function(el, binding){
    let {value, oldValue} = binding;
    if (value && (value != oldValue)){
        let child = document.getElementById(value);
        console.log('el...', binding);



        el.scrollTop = child.offsetTop;
    }
  }
})