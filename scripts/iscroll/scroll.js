var myScroll;
  function loaded() {
      myScroll = new IScroll('#wrap-category',{
        mouseWheel: true,
        scrollbars: true,
        scrollX: true,
        scrollbars: 'custom',
        eventPassthrough: true,
        mouseWheel: true
      });
  }