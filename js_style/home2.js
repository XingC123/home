//otherApp_XingC:"下载"按钮的事件
function download(targetPath) {
    if (targetPath != undefined) {
        window.open(targetPath);
    }
}


function search_searchBox() {
    //home2:"搜索引擎"项目
    let textarea = document.getElementById('content_searchBox');
    let select = document.getElementById('select_searchBox');

    let baidu_searchEngine = 'https://www.baidu.com/s?tn=15007414_9_dg&wd=';
    let google1_searchEngine = 'https://www.google.com/search?source=lmns&q=';
    let google2_searchEngine = '&hl=zh-CN&sa=X&ved=2ahUKEwjRxpTeva7uAhUB35QKHRS1D_YQ_AUoAHoECAAQAw';
    let searchEngine = select.value;
    let content = textarea.value;

    if (content != '') {
        if (searchEngine == '百度') {
            window.open(baidu_searchEngine + content);
        }
        if (searchEngine == '谷歌') {
            window.open(google1_searchEngine + content + google2_searchEngine);
        }
    }
}

function cleanTextareaContent_searchBox() {
    //点击按钮后清除文本框内容
    document.getElementById('content_searchBox').value = '';
}