/**
 * 歌单 -> 播放的过程的逻辑；(歌单 -> 获取歌单 ID -> 获取 mp3 ID ->播放)
 * @time 2021/01/11
 * @author zouzhu
 */
import { detail, url } from '../../api/obtainMusicInfo/obtainInfo'

const musicItemToPlay = async (id:String) => {
    let detailInfo = await detail({ id }) as any;
    let urlInfo = await url({ id: detailInfo.id }) as any;
    return urlInfo;
}

export default musicItemToPlay;