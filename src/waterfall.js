class WaterFall {
  /**
   *
   * @param {String} el 主容器class或者id 例如 '#container'
   * @param {Object} param1 num 列数，className 子元素标识, padding 间距
   */
  constructor(el, { num = 4, className = null, padding = 10 } = {}) {
    if (!el) throw new Error('missing passed element');
    if (typeof el !== 'string') throw new Error('element must be string');
    this.$el = el;
    this.$num = num;
    this.$className = className;
    this.$width = 100 / num;
    this.$padding = padding;
    this.sortImg(false);
    // 监听页面变化
    window.addEventListener('resize', () => {
      this.sortImg(false);
    });
  }
  /**
   * 排序方法
   * @param {Boolean} type 是否需要刷新排序
   */
  sortImg(type) {
    let container = document.querySelector(this.$el);
    if (container) {
      // 为父元素设定绝对定位
      container.style.position = 'relative';
      let children = container.children;
      if (children && children.length > 0) {
        // 遍历子元素
        for (let i = 0; i < children.length; i += 1) {
          if (this.$className && children[i].className !== this.$className) continue;
          const state = children[i].getAttribute('imgFormat');
          if (type && state && state === '1') continue;
          // 标记图片格式化完成，type为ture时跳过此元素
          children[i].setAttribute('imgFormat', '1');
          let imgElement = children[i].children;
          // 遍历查找img子元素并设置样式
          for (let j = 0; j < imgElement.length; j += 1) {
            //  判断是否为img元素，设置样式
            if (imgElement[j].tagName !== 'IMG') continue;
            imgElement[j].style.cssText = 'width: 100%; height: auto; display: block';
          }
          imgElement = null; // 释放三级元素
          // 计算图片需要的宽度
          const elLeft = Math.floor(i % this.$num);
          // 计算距离顶部的定位
          let elTop = 0;
          if (i >= this.$num) {
            elTop =
              Number(children[i - this.$num].style.top.replace('px', '')) +
              Number(children[i - this.$num].offsetHeight);
          }
          // 设置样式
          children[i].style.cssText =
            'width:' +
            this.$width +
            '%; position: absolute; left: ' +
            elLeft * this.$width +
            '%; top: ' +
            elTop +
            'px;box-sizing: border-box;padding: ' +
            this.$padding +
            'px';
        }
        children = null; // 释放二级子元素
      }
      container = null; // 释放父元素
    }
  }
}

export default WaterFall;
