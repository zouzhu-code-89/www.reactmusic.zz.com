import React, { useState } from 'react';
import * as Antd from 'antd';
import {
    catlist
} from '../../../api/obtainMusicInfo/obtainInfo'

const SongListComponent: React.FC = (props: any) => {

    /**
     * @description 初始化数据
     * @time 2021/01/11
     */
    let getList = () => {
        catlist({}).then((data:any) => {        // 获取歌单分类

        });
    }

    return (
        <>
            <h3>这里是歌单 ：</h3>
        </>
    )
}

export default SongListComponent;