var myScroll;
  function loaded() {
    if($("#wrap-category").length > 0){
      myScroll = new IScroll('#wrap-category',{
        mouseWheel: true,
        scrollbars: true,
        scrollX: true,
        scrollbars: 'custom',
        eventPassthrough: true,
        mouseWheel: true
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