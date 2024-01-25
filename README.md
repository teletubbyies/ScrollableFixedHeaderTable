# ScrollableFixedHeaderTable

一个具有固定表头、自适应列宽、单元格点击事件支持、可滚动表格内容、和斑马线样式的微信小程序表格组件。

## 功能特性

- 固定表头：表头始终保持在屏幕顶部，方便用户在查看表格数据时始终保持对列标题的参考；
- 点击事件支持：支持单元格点击事件，以便在点击每个单元格时（除表头外）执行自定义操作；
- 可滚动表格内容：表格内容可以在水平和垂直方向上滚动，以显示更多的数据；
- 自适应列宽：根据最长的表头元素长度计算最小列宽，使表头与表格数据保持同宽；
- 斑马线样式：表格行间隔的背景颜色不同，提高数据的可读性；
- 可自定义表头背景颜色和单元格无数据时的显示内容。


## 安装

将本项目克隆到本地：

```bash
git clone https://github.com/teletubbyies/ScrollableFixedHeaderTable.git
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
  table-data="{{table}}"
  bind:celltap="onCellTap"
  stripe="{{stripe}}"
  borderline="{{borderline}}"
  header-background="{{headerbg}}"
  no-data-msg="无数据"
/>
```
## 属性列表


| 属性              | 类型        | 默认值    | 必填 | 说明                                       |
| :---------------- | ----------- | :-------- | ---- | ------------------------------------------ |
| column-names      | Array       | []        | yes  | 表头的列名数组                             |
| table-data        | Array       | []        | yes  | 表格数据的二维数组                         |
| bind:celltap      | eventhandle | -         | yes  | 点击每个单元格时（除表头外）执行自定义操作。其中，形参的e.detail.row得到当前单元格的行下标；e.detail.col得到当前单元格的列下标 |
| stripe            | Boolean     | true      | no   | 是否显示斑马纹                             |
| borderline        | Boolean     | false     | no   | 是否显示边框                               |
| header-background | String      | '#2d66cf' | no   | 表头的背景颜色                             |
| no-data-msg       | String      | '无'      | no   | 单元格无数据时的显示内容                   |



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
  table-data="{{table}}"
  bind:celltap="onCellTap"
  stripe="{{stripe}}"
  borderline="{{borderline}}"
  header-background="{{headerbg}}"
  no-data-msg="无"
/>
```



`index.js`：

```javascript
Page({
  data: {
    stripe: true,
    borderline:false,
    headerbg:'#2d66cf',
    columnNames: ['Header 1', 'Header 2', 'Header 3', 'Header 4'],
    table: [
      ['', 'Row 1, Col 2', 'Row 1, Col 3', 'Row 1, Col 4'],
      ['Row 2, Col 1', 'Row 2, Col 2', 'Row 2, Col 3', 'Row 2, Col 4'],
      ['Row 3, Col 1', 'Row 3, Col 2', 'Row 3, Col 3', 'Row 3, Col 4'],
      ['Row 4, Col 1', 'Row 4, Col 2', 'Row 4, Col 3', 'Row 4, Col 4'],
      ['Row 5, Col 1', 'Row 5, Col 2', 'Row 5, Col 3', 'Row 5, Col 4'],
      ['Row 6, Col 1', 'Row 6, Col 2', 'Row 6, Col 3', 'Row 6, Col 4'],
      ['Row 7, Col 1', 'Row 7, Col 2', 'Row 7, Col 3', 'Row 7, Col 4'],
      ['Row 8, Col 1', 'Row 8, Col 2', 'Row 8, Col 3', 'Row 8, Col 4'],
      ['Row 9, Col 1', 'Row 9, Col 2', 'Row 9, Col 3', 'Row 9, Col 4'],
      ['Row 10, Col 1', 'Row 10, Col 2', 'Row 10, Col 3', 'Row 10, Col 4'],
      ['Row 11, Col 1', 'Row 11, Col 2', 'Row 11, Col 3', 'Row 11, Col 4'],
      ['Row 12, Col 1', 'Row 12, Col 2', 'Row 12, Col 3', 'Row 12, Col 4'],
      ['Row 13, Col 1', 'Row 13, Col 2', 'Row 13, Col 3', 'Row 13, Col 4'],
      ['Row 14, Col 1', 'Row 14, Col 2', 'Row 14, Col 3', 'Row 14, Col 4'],
      ['Row 15, Col 1', 'Row 15, Col 2', 'Row 15, Col 3', 'Row 15, Col 4'],
      ['Row 16, Col 1', 'Row 16, Col 2', 'Row 16, Col 3', 'Row 16, Col 4'],
      ['Row 17, Col 1', 'Row 17, Col 2', 'Row 17, Col 3', 'Row 17, Col 4'],
      ['Row 18, Col 1', 'Row 18, Col 2', 'Row 18, Col 3', 'Row 18, Col 4'],
      ['Row 19, Col 1', 'Row 19, Col 2', 'Row 19, Col 3', 'Row 19, Col 4'],
      ['Row 20, Col 1', 'Row 20, Col 2', 'Row 20, Col 3', 'Row 20, Col 4'],

    ]
  },
  
  onCellTap: function (e) {
    console.log('点击的单元格行索引为：', e.detail.row, ' 列索引为：', e.detail.col);
  }

});
```

## 注意事项

- 本组件仅适用于微信小程序，不支持其他平台；
- 建议在使用此表格时，页面不展示除该表格以外的内容；
- 没有处理表头点击事件的函数

## 贡献

欢迎提出问题、报告 bug 或提供改进建议。请通过 GitHub 的 Issues 功能进行反馈和讨论。

## 许可证

该项目基于 MIT 许可证。更多信息请参阅 [LICENSE](https://github.com/teletubbyies/ScrollableFixedHeaderTable?tab=MIT-1-ov-file) 文件。
