function baidu(query) {// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    var appid = '20160106000008641';
    var key = 'LVjWg6Iy2890a58vIAzg';
    var salt = (new Date).getTime();
    var from = 'en';
    var to = 'zh';
    var str1 = appid + query + salt +key;
    var sign = MD5(str1);
    $.ajax({
        url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
        type: 'get',
        dataType: 'json',
        data: {
            q: query,
            appid: appid,
            salt: salt,
            from: from,
            to: to,
            sign: sign
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XHR, errInfo) {
            console.error(errInfo);
//             52000	成功
// 52001	请求超时	重试
// 52002	系统错误	重试
// 52003	未授权用户	检查您的appid是否正确
// 54000	必填参数为空	检查是否少传参数
// 58000	客户端IP非法	检查您填写的IP地址是否正确
// 可修改您填写的服务器IP地址
// 54001	签名错误	请检查您的签名生成方法
// 54003	访问频率受限	请降低您的调用频率
// 58001	译文语言方向不支持	检查译文语言是否在语言列表里
// 54004	账户余额不足	前往管理控制台为账户充值
// 54005	长query请求频繁	请降低长query的发送频率，3s后再试
        }
    });
}

function youdao(query) {
    $.ajax({
        url: 'http://fanyi.youdao.com/openapi.do',
        type: 'get',
        dataType: 'json',
        data: {
            q: query,
            keyfrom: 'oneUsefulWordBook',
            key: '294495695',
            type: 'data',
            doctype: 'json',
            version: '1.1'
        },
        success: function (data) {
            console.log(data);
        },
        error: function (XHR, errInfo) {
            console.error(errInfo);
//             0 - 正常
// 　20 - 要翻译的文本过长
// 　30 - 无法进行有效的翻译
// 　40 - 不支持的语言类型
// 　50 - 无效的key
// 　60 - 无词典结果，仅在获取词典结果生效
        }
    });
}

function lookup(query) {
    if (query.split(" ").length > 1) {
        baidu(query);
    } else {
        youdao(query);
    }
}
