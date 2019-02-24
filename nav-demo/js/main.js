    //初始化数据
    var keys = {
        '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
        '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
        '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
        'length': 3
    }
    var hash = {
        'q': 'qq.com', 'w': 'weibo.com'
    }


    //生成键盘
    console.log(keys['length'])
    for (var index=0;index<keys['length'];index=index+1){
        var div = document.createElement('div')
        #main.appendChild(div)
        div.className='row'

        var row=keys[index]
        console.log(keys[index])
        for (var index2=0;index2<row['length'];index2=index2+1){
            var kbd=document.createElement('kbd')
            kbd.className='key'
            div.appendChild(kbd)
            var span =document.createElement('span')
            span.textContent=row[index2]
            span.className='text'
            kbd.appendChild(span)

            var button=document.createElement('button')
            button.id=row[index2]
            //点击button按钮
            button.onclick=function(click){
                var button2=click['target']
                console.log(click['target'])
                var img2=button2.previousSibling
                var key=button2['id']
                var x=prompt('给我一个网址')
                hash[key] = x  // hash 变更
                img2.src = 'http://'+x + '/favicon.ico'
                img2.onerror = function(xxx){
                    xxx.target.src = '../ico.png'
                }
                localStorage.setItem('zzz', JSON.stringify(hash))
            }
            button.textContent='编辑'
            kbd.appendChild(button)

            var img=document.createElement('img')
            if(hash[row[index2]]){
                img.src = 'http://'+ hash[row[index2]] + '/favicon.ico'
            }else{
                img.src = '../ico.png'
            }
            img.onerror = function(xxx){
                xxx.target.src = '../ico.png'
            }
            kbd.appendChild(img)
        }
    }


    //3、监听用户动作
    document.onkeypress=function (press) {
        var key = press['key']
        var website =hash[key]
        window.open('http://'+website, '_blank')

    }


    //工具函数