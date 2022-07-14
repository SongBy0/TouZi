Page({
    data: {
        hello: 'Hello World!+'
    },
    change: function () {
        this.setData({
            hello: this.data.hello + "666",
        })
    }
});