// components/ScrollableFixedHeaderTable/ScrollableFixedHeaderTable.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    columnNames: {
      type: Array,
      value: []
    },
    tableData: {
      type: Array,
      value: []
    },
    //单元格无数据时的显示内容
    noDataMsg:{
      type:String,
      value: '无'
    },
    //是否显示斑马纹
    stripe:{
       type:Boolean,
       value:true
    },
    //是否显示列边框
    borderline:{
      type:Boolean,
      value:false
    },
    //表头背景颜色
    headerBackground:{
      type:String,
      value:'#2d66cf'
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    minWidth: 80,
    headerHeight: 3,
    headerScrollLeft: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    calcMinWidth: function (cols) {
      //由最长的表头元素长度计算（表头与表格数据的）最小宽度
      var _max = -1;
      const padding = 5;
      const charWidth = 15;
      for (let i = 0; i < cols.length; i++) {
        if (cols[i].length > _max) {
          _max = cols[i].length;
        }
      }
      const maxTextLength = _max;
      return padding * 2 + charWidth * maxTextLength;
    },

    //实现表头的同步滑动
    syncScroll: function (e) {
      const scrollLeft = e.detail.scrollLeft;
      this.setData({
        headerScrollLeft: scrollLeft
      });
    },

    onCellTap: function (e) {
      this.triggerEvent('celltap', e.currentTarget.dataset);
    }
  },

  ready: function () {
    const minWidth = this.calcMinWidth(this.data.columnNames);
    this.setData({
      minWidth
    });
  }
});