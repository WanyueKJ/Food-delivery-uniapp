module.exports = {
    // 一维数组转二维数组
    listToMatrix(list, elementsPerSubArray) {
        let matrix = [], i, col, row;
        for (i = 0, row = -1; i < list.length; i += 1) {
            col = i % elementsPerSubArray;
            row = Math.floor(i / elementsPerSubArray);
            if (!matrix[row]) matrix[row] = [0, 0, 0];
            matrix[row][col] = list[i];
        }
        return matrix;
    },
    // 选中文件之后，计算一个随机的短文件名
    getRandFileName: function (filePath) {
        var extIndex = filePath.lastIndexOf('.');
        var extName = extIndex === -1 ? '' : filePath.substr(extIndex);
        return parseInt('' + Date.now() + Math.floor(Math.random() * 900 + 100), 10).toString(36) + extName;
    },
    // 对更多字符编码的 url encode 格式
    camSafeUrlEncode: function (str) {
        return encodeURIComponent(str)
            .replace(/!/g, '%21')
            .replace(/'/g, '%27')
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29')
            .replace(/\*/g, '%2A');
    },
};