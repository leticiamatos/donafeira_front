var myScroll;
  function loaded() {
    if($("#wrap-category").length > 0){
      myScroll = new IScroll('#wrap-category',{
        mouseWheel: true,
        scrollbars: false,
        scrollX: true
      });
    }
    if($("#wrap-table-orders").length > 0){
      myScroll = new IScroll('#wrap-table-orders',{
        scrollbars: true,
        scrollbars: 'custom',
        mouseWheel: true
      });
    }
  }