#### 需求描述

完成下述gif图展示效果。页面中有一个100*100px的方块，有两条垂直相交的线，交点位于方块的中心位置。当鼠标点击方块并移动鼠标，方块和两条线的位置也会随之发生改变。

![](https://s3.cn-north-1.amazonaws.com.cn/tws-upload/images/1554886623494-cacbd5b0-2217-4f07-bbc1-3ff5415d46ae.gif)


#### 实现步骤

1. 根据需求画 tasking 图
2. 使用面向过程的方式实现需求功能（可参考附录代码，参考的同时根据前面学到的整洁代码方法将代码重构）
3. 重构，将面向过程的代码重构为面向对象的方式实现


#### 作业要求

1. 保持代码整洁及可读性

---



#### 附录：

**HTML 代码**

```html
<body>
  <p class='line a'></p>
  <p class='line b'></p>
  <div id="box"></div>
</body>
```



**CSS 代码**

```css
  body {
    padding:0;
    margin: 0px
  }
  #box {
    position: absolute;
    width: 200px;
    height: 200px;
    background: red
  }

  .line {
    position: absolute;
    border: 0.5px dotted red;
  }

  .a {
    left: 100px;
    height: 100%;
    
  }

  .b {
    top: 100px;
    width: 100%;
  }
```

**JavaScript 代码**

```javascript
 window.onload = function () {
      var oBox = document.getElementById('box'),
        disX = 0, disY = 0;
      var a = document.querySelector('.a')
      var b = document.querySelector('.b')
      oBox.onmousedown = function (e) {
        disX = e.clientX - this.offsetLeft;
        disY = e.clientY - this.offsetTop;
        document.onmousemove = function (e) {
          oBox.style.left = (e.clientX - disX) + 'px';
          oBox.style.top = (e.clientY - disY) + 'px';
          a.style.left = (e.clientX - disX + 100) + 'px';
          b.style.top = (e.clientY - disY + 100) + 'px';
        };
        document.onmouseup = function () {
          document.onmousemove = null;
          document.onmouseup = null;
        };
        return false;
      };
    };
```

