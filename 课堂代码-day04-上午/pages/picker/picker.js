// pages/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //普通选择器数据
    lessionDatas:["HTML","CSS","JAVASCRIPT","VUE","NODE","小程序"],
    lessionIndex:3,
    time:"10:29",
    odate:"2020-06-06",
    cityDatas:["河南省","郑州市","金水区"],
    allCity:"全部",
    cars:[["宝马","奥迪","大众"],["宝马X1","宝马X2","宝马X3","宝马X5"]],
    carIndex:[0,0]
  },
  changeLession(e){
    console.log(e);
    this.setData({
      lessionIndex:e.detail.value
    })
    
  },
  changeTime(e){
    this.setData({
      time:e.detail.value
    })
  },
  changeDate(e){
    this.setData({
      odate:e.detail.value
    })
  },
  changeCity(e){
    this.setData({
      cityDatas:e.detail.value
    })
  },
  //多列事件
  changeCarValue(e){
    console.log("值改变");
    console.log(e.detail.value);
    this.setData({
      carIndex:e.detail.value
    })
    
  },
  changeColumn(e){
    console.log("列改变");
    console.log(e.detail);  //detail: {column: 0, value: 2}
    //cars:[["宝马","奥迪","大众"],["宝马X1","宝马X2","宝马X3","宝马X5"]],
    var carData={
      cars:this.data.cars,
      carIndex:this.data.carIndex
    }
    console.log(carData);
    carData.carIndex[e.detail.column]=e.detail.value
    if(e.detail.column==0){
       if(e.detail.value==0){  //第一列的宝马
        carData.cars[1]=["宝马X1","宝马X2","宝马X3","宝马X5"]
       }else if(e.detail.value==1){ //第一列的奥迪
        carData.cars[1]=["Q1","Q2","Q3","Q7"]
       } else if(e.detail.value==2){ //第一列的大众
        carData.cars[1]=["大众Q1","大众Q2","大众Q3","大众Q7"]
       } 
    }

    this.setData(carData)
    

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})