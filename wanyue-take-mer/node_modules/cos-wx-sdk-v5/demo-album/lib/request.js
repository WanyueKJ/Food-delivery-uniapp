

module.exports = (options) => {
    return new Promise((resolve, reject) => {
        options = Object.assign(options, {
            success(result) {
                if (result.statusCode === 200) {
                    resolve(result.data);
                } else {
                    reject(result);
                }
            },
            fail: reject,
        });
        wx.request(options);
    });
};