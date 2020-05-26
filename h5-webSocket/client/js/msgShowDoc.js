// 获取服务端的信息，然后展示到界面上
export default function msgShowDoc( msg , ul) {
    if(window.isFirst){
        const span = document.createElement('SPAN')
        span.className = "moveName";
        span.innerHTML = msg.data
        ul.appendChild(span)
        let ulWidth  = ul.offsetWidth;
        let spanWidth = span.offsetWidth;
        let right = 0;
        let timer = setInterval(function(){
            right+=2;
            span.style.right = right + "px";
            if(right>ulWidth+spanWidth){
                clearInterval(timer)
                span.style.display = "none"
            }
        },10)
        window.isFirst = false
    }else{
        const li = document.createElement('LI')
        li.innerHTML = msg.data
        const p = document.createElement('P')
        p.innerHTML = window.userName + '  ' + filterDate( Date.now() )
        li.prepend(p)
        ul.appendChild(li)
        ul.scrollTop = ul.offsetHeight;
    }
}  
function filterDate ( val ) {
    const date = new Date( val )
    return date.getFullYear() +'-'+ (date.getMonth() + 1) +'-'+ date.getDate()
}
