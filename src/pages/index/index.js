// index.js
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