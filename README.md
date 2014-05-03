## About
repo中各个语言代码行数统计的Py小脚本
daisyDisk - 菊花盘

### Visualization of a Repo
Github上的commits面板和contributors面板已经非常不错了
代码量每天的提交timeseries
主要开发者的每天提交timeseries

### Fork of sizeChecker
相关可视化的例子 - 
funnel of navigation url path D3 sunburst visualization

### Setup
- Install Node-webkit pre-build binary of macx distribution
- `echo 'alias nw="/Applications/node-webkit.app/Contents/MacOS/node-webkit"' >> ~/.zshrc`
- `nw .`

### Tips

Debugging with devtools
1.
```
{
  "window": {
    "toolbar": true
  }
}
```
2.
require('nw.gui').Window.get().showDevTools()

source code explained
lzadialog.js - open os file|directory dialog program
- by silently create input element and fake a click to trigger etc

rightclick.js
```
body.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    menu2.popup(ev.x, ev.y);
    return false;
});
var menu2 = new gui.Menu();
menu2.append(new gui.MenuItem({label: 'Export Result'}));
menu2.items[0].click = reSelect();
```

