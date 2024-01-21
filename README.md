# 项目名称：ScrollableFixedHeaderTable

项目描述：一个具有固定表头、可滚动表格内容、自适应列宽和斑马线样式的微信小程序组件。

## 功能特性

- 固定表头：表头始终保持在屏幕顶部，方便用户在查看表格数据时始终保持对列标题的参考。
- 可滚动表格内容：表格内容可以在水平和垂直方向上滚动，以显示更多的数据。
- 自适应列宽：根据最长的表头元素长度计算最小列宽，使表头与表格数据保持同宽。
- 斑马线样式：表格行间隔的背景颜色不同，提高数据的可读性。
- 点击事件支持：支持单元格点击事件，以便在点击单元格时执行自定义操作。

## 安装

将本项目克隆到本地：

```bash
git clone https://github.com/your_username/ScrollableFixedHeaderTable.git
```



将`ScrollableFixedHeaderTable`文件夹复制到你的小程序项目的`components`目录下。

在需要使用此组件的页面的`JSON`文件中，添加以下代码以引入组件：

```json
{
  "usingComponents": {
    "scrollable-fixed-header-table": "/components/ScrollableFixedHeaderTable/ScrollableFixedHeaderTable"
  }
}
```



## 使用

在需要使用此组件的页面的`WXML`文件中，添加以下代码以使用组件：

```html
<scrollable-fixed-header-table
  column-names="{{columnNames}}"
  table="{{table}}"
  bindcelltap="onCellTap"
></scrollable-fixed-header-table>
```



## 示例

以下是一个使用`ScrollableFixedHeaderTable`组件的简单示例：

`index.json`：

```json
{
  "usingComponents": {
    "scrollable-fixed-header-table": "/components/ScrollableFixedHeaderTable/ScrollableFixedHeaderTable"
  }
}
```



`index.wxml`：

```html
<scrollable-fixed-header-table
  column-names="{{columnNames}}"
  table="{{table}}"
  bindcelltap="onCellTap"
></scrollable-fixed-header-table>
```



`index.js`：

```javascript
Page({
  data: {
    columnNames: ['Header 1', 'Header 2', 'Header 3'],
    table: [
      ['Row 1, Col 1', 'Row 1, Col 2', 'Row 1, Col 3'],
      ['Row 2, Col 1', 'Row 2, Col 2', 'Row 2, Col 3'],
      ['Row 3, Col 1', 'Row 3, Col 2', 'Row 3, Col 3']
    ]
  },

  onCellTap: function (e) {
    console.log('Cell tapped:', e.detail);
  }
});
```



## 许可证

MIT License
