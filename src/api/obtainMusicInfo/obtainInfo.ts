import request from '../../utils/request';
/** 获取一个歌单的数据 */

/**
 * @description 获取歌单分类,包含 category 种类信息
 * @time 2020/01/11
 * @author zouzhu
 */
export function catlist(params:any){
    return request({
        url: '/playlist/catlist',
        method: 'post',
        data: params
    });
}

/**
 * @description 可获取热门歌单分类，包含 category 种类信息
 * @time 2020/01/11
 * @author zouzhu
 */
export function hot(params:any){
    return request({
        url: '/playlist/hot',
        method: 'post',
        data: params
    });
}

/**
 * @description 可获取网友精选碟歌单
 * @time 2020/01/11
 * @author zouzhu
 */
export function playlist(params:any){
    return request({
        url: '/top/playlist',
        method: 'post',
        data: params
    });
}

/**
 * @description 获取精品歌单标签列表
 * @time 2020/01/11
 * @author zouzhu
 */
export function tags(params:any){
    return request({
        url: '/playlist/highquality/tags',
        method: 'post',
        data: params
    });
}

/**
 * @description 调用此接口 , 可获取精品歌单
 * cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从精品歌单标签列表接口获取
 * @time 2020/01/11
 * @author zouzhu
 */
export function highquality(params:any){
    return request({
        url: '/top/playlist/highquality',
        method: 'post',
        data: params
    });
}

/**
 * @description 传入歌单 id 可获取相关歌单(对应页面 https://music.163.com/#/playlist?id=1)
 * @time 2020/01/11
 * @author zouzhu
 */
export function playlists(params:any){
    return request({
        url: '/related/playlist',
        method: 'post',
        data: params
    });
}

/**
 * @description (获取歌单详情)获取歌单里面的所有音乐
 * 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可以获取对应歌单内的所有的音乐
 * (未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的 trackIds 是完整的，tracks 则是不完整的，
 * 可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情 
 * (https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452)
 * @time 2020/01/11
 * @author zouzhu
 */
export function detail(params:any){
    return request({
        url: '/playlist/detail',
        method: 'post',
        data: params
    });
}

/**
 * @description 获取音乐 url
 * 说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口, 
 * 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url,未登录状态返回试听
 * 片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
 * @time 2020/01/11
 * @author zouzhu
 */
export function url(params:any){
    return request({
        url: '/song/url',
        method: 'post',
        data: params
    });
}

/**
 * @description 音乐是否可用
 * 调用此接口,传入歌曲 id, 可获取音乐是否可用,返回 { success: true, message: 'ok' } 或者 
 * { success: false, message: '亲爱的,暂无版权' }
 * @time 2020/01/11
 * @author zouzhu
 */
export function music(params:any){
    return request({
        url: '/check/music',
        method: 'post',
        data: params
    });
}

