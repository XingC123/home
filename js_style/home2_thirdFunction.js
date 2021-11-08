function onKeyPress(event) {
/*     注释来自:XingC(2021.11.2)
    方法来源:https://blog.51cto.com/jslmes/1604370
    监听回车键。在textarea输入内容时，监测到回车立即执行"home2.js:search_searchBox();"语句。 */
    event = event || window.event;
    if (event.keyCode == 13) {
        event.returnValue = false;
        search_searchBox();
    }
}