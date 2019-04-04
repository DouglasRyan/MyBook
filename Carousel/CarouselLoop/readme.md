这是无缝轮播的初步实现方案<br>

主要有以下功能：<br>
实现的思想是：<br>
欢迎优化和改进<br>



第一个版本：<br>
使用css建立状态集合（用户可以用css自己定义样式）
使用js切换状态（使用jQuery库）
本状态集合为——横向平移

第二个版本：<br>
使用flex横向布局，使用transform改变位置实现轮播，<br>
复制最后一张图片到第一张前面，复制第一张图片到最后一张后面，监听最后一张和第一张改变，在改变结束后用正确的图片替换复制的图片。<br>
用按钮click事件绑定改变位置的功能，<br>
监听图片的onmouseenter事件和onmouseleave事件，实现悬停在图片上，停止轮播。<br>
[预览链接](https://douglasryan.github.io/MyBook/Carousel/CarouselLoop)
