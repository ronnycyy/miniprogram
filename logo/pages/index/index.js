const capsuleHeight = wx.getMenuButtonBoundingClientRect().height; // 320/240

Page({
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    capsuleHeight: capsuleHeight,
    logoHeight: 1.5 * capsuleHeight,
    logoWidth: 1.5 * capsuleHeight * 4 / 3
  }
})
