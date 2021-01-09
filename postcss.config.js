module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer')({ overrideBrowserslist: ["last 2 version", "> 1%", "iOS 7"] }),
        require('postcss-plugin-px2rem')({
            remUnit: 75, // 75px = 1rem
            remPrecision: 8 // rem的小数点后位数
        })
    ]
};