import './indec.scss';
import WaterFall from './waterfall';

let wf = null;
window.onload = () => {
  // 页面加载完成后初始化事件
  wf = new WaterFall('.container', 4, 'items', 5);
};

// 监听滚动
document.querySelector('.container').addEventListener('scroll', function () {
  const nowScrollTop = this.scrollTop;
  const nowClientHeight = this.clientHeight;
  const elHeight = this.scrollHeight;
  if (Math.ceil(nowScrollTop + nowClientHeight) >= elHeight) {
    // 滚动到底部
    const self = this.innerHTML;
    this.innerHTML =
      self +
      `
      <div class="items">
        <img src="http://temp.im/200x300">
      </div>
      <div class="items">
        <img src="http://temp.im/160x400">
      </div>
      <div class="items">
        <img src="http://temp.im/230x230">
      </div>
      <div class="items">
        <img src="http://temp.im/200x300">
      </div>
      <div class="items">
        <img src="http://temp.im/180x100">
      </div>
      <div class="items">
        <img src="http://temp.im/100x130">
      </div>
      <div class="items">
        <img src="http://temp.im/300x300">
      </div>
      <div class="items">
        <img src="http://temp.im/200x300">
      </div>
      <div class="items">
        <img src="http://temp.im/250x300">
      </div>
    `;
    // 为新添加的样式重新排序
    wf.sortImg(true);
  }
});
