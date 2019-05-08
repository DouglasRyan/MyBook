//添加kbd标签
let keys = {
    '0': {
        0: 'q',
        1: 'w',
        2: 'e',
        3: 'r',
        4: 't',
        5: 'y',
        6: 'u',
        7: 'i',
        8: 'o',
        9: 'p',
        length: 10
    },
    '1': {
        0: 'a',
        1: 's',
        2: 'd',
        3: 'f',
        4: 'g',
        5: 'h',
        6: 'j',
        7: 'k',
        8: 'l',
        length: 9
    },
    '2': {
        0: 'z',
        1: 'x',
        2: 'c',
        3: 'v',
        4: 'b',
        5: 'n',
        6: 'm',
        length: 7
    },
    'length': 3
}
let hash = {
    'q': 'qq.com',
    'w': 'weibo.com',
    'e': 'ele.me',
    'r': 'renren.com',
    'u': 'uc.com',
    'i': 'iqiyi.com',
    'o': 'opera.com',
    'p': undefined,
    's': 'sohu.com',
    'z': 'zhihu.com',
    'm': 'www.mcdonalds.com.cn'
}

let localStorageHash = JSON.parse(localStorage.getItem('localWebsite' || 'null'))
if (localStorageHash) {
    hash = localStorageHash
}
let index1 = 0
while (index1 < keys.length) {
    let div1 = document.createElement('div')
    let rows = keys[index1]
    div1.className = 'row'
    let index2 = 0
    while (index2 < rows.length) {
        let kbd1 = document.createElement('kbd')
        kbd1.className = 'key'

        let span = document.createElement('span')
        span.textContent = rows[index2]
        span.className = "text"
        kbd1.appendChild(span)

        let img = document.createElement('img')
        if (hash[rows[index2]]) {
            img.src = 'http://' + hash[rows[index2]] + '/favicon.ico'
        } else {
            img.src = '//s2.ax1x.com/2019/05/08/EcYgkn.png'
        }
        img.onerror = function(x) {
            x.target.src = '//s2.ax1x.com/2019/05/08/EcYgkn.png'
        }


        kbd1.appendChild(img)

        let btn = document.createElement('button')
        btn.textContent = '编辑'
        btn.id = rows[index2]
        btn.onclick = function(x) {
            let btn2 = x.target
            let img2 = btn2.previousSibling
            let key = btn2.id
            let y = prompt('给我一个网址')
            hash[key] = y //hash 变更
            img2.src = 'http://' + x + '/favicon.ico'
            img2.onerror = function(x) {
                x.target.src = '//s2.ax1x.com/2019/05/08/EcYgkn.png'
            }
            localStorage.setItem('localWebsite', JSON.stringify(hash))
        }
        kbd1.appendChild(btn)
        div1.appendChild(kbd1)
        index2 += 1
    }
    main.appendChild(div1)
    index1 += 1
}

//监听键盘事件
document.onkeypress = function(x) {
    let key = x['key']
    let website = hash[key]
        //location.href = 'http://' + website   当前窗口打开
    window.open('http://' + website, '_blank')
}