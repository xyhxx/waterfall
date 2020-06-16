# css 瀑布流结构

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- css书写瀑布流 竖向排列 -->
    <link rel="stylesheet" href="./css/index.css" />
    <title>Document</title>
  </head>

  <body>
    <!-- 整体容器 -->
    <div class="container">
      <!-- 内容容器 -->
      <div class="items">
        <!-- 图片 -->
        <img src="http://temp.im/200x300" />
      </div>
      <div class="items">
        <img src="http://temp.im/160x400" />
      </div>
      <div class="items">
        <img src="http://temp.im/230x230" />
      </div>
      <div class="items">
        <img src="http://temp.im/200x300" />
      </div>
      <div class="items">
        <img src="http://temp.im/180x100" />
      </div>
      <div class="items">
        <img src="http://temp.im/100x130" />
      </div>
      <div class="items">
        <img src="http://temp.im/300x300" />
      </div>
      <div class="items">
        <img src="http://temp.im/200x300" />
      </div>
      <div class="items">
        <img src="http://temp.im/250x300" />
      </div>
    </div>
  </body>
</html>
```

# js 瀑布流初始化

## new WaterFall(element, options);

> 初始化实例

| Param               |  Type  | Default | Description       |
| :------------------ | :----: | :-----: | :---------------- |
| element             | String |         | 类名或者 id 名称  |
| {options.num}       | Number |    4    | 列数              |
| {options.className} | String |         | 子元素 class 名称 |
| {options.padding}   | Number |   10    | 图片间距          |

```javascript
let wf = null;
window.onload = () => {
  // 页面加载完成后初始化事件
  const options = {
    num: 5,
    padding: 5,
    className: 'items',
  };
  wf = new WaterFall('.container', options);
};
```

## this.sortImg(type)

> 渲染数据

| Param |  Type   | Default | Description            |
| :---- | :-----: | :-----: | :--------------------- |
| type  | Boolean |  false  | 是否忽略已整理过的图片 |

```javascript
let wf = null;
window.onload = () => {
  // 页面加载完成后初始化事件
  const options = {
    num: 5,
    padding: 5,
    className: 'items',
  };
  wf = new WaterFall('.container', options);
};

wf.sortImg(true);
```
