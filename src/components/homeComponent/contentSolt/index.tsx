import React, { useState, useEffect } from 'react';
import * as Antd from 'antd';
import './index.css';
import MyIcon from '../../../components/Icon/index';
import { Link, Route, Switch } from 'react-router-dom';
import {
    foundMusicRouter,
    VideoRouter,
    friendRouter,
    liveStreamingRouter,
    privateFMRouter,
    localhostMusicRouter,
    downloadManagerRouter,
    myMusicCloudRouter,
    myStationRouter,
    myCollectRouter,
    myLiveMusicRouter
} from '../../../router/modules/home';
import FoundMusic from '../../../views/FoundMusic/index';
import VideoMC from '../../../views/videoMC/index';
import Friend from '../../../views/friend/index';
import LiveStreaming from '../../../views/LiveStreaming/index';
import PrivateFM from '../../../views/PrivateFM/index';
import LocalhostMusic from '../../../views/LocalhostMusic/index';
import DownloadManager from '../../../views/DownloadManager/index';
import MyMusicCloud from '../../../views/MyMusicCloud/index';
import MyStation from '../../../views/MyStation/index';
import MyCollect from '../../../views/MyCollect/index';
import MyLiveMusic from '../../../views/MyLiveMusic/index';

class SilderBar extends React.Component <any, any>{
    
    private sildarStart = {

    }

    constructor(props:any){
        super(props);
        this.state = {
            sildarStart: this.sildarStart
        }
    }

    public componentDidMount(){
        
    } 

    render(){
        return (
            <div>
                <Switch>
                    {/* 发现音乐 */}
                    <Route path={ foundMusicRouter } component={ FoundMusic }></Route>
                    {/* 视频 */}
                    <Route path={ VideoRouter } component={ VideoMC }></Route>
                    {/* 朋友 */}
                    <Route path={ friendRouter } component={ Friend }></Route>
                    {/* 直播 */}
                    <Route path={ liveStreamingRouter } component={ LiveStreaming }></Route>
                    {/* 私人FM */}
                    <Route path={ privateFMRouter } component={ PrivateFM }></Route>
                    {/* 本地音乐 */}
                    <Route path={ localhostMusicRouter } component={ LocalhostMusic }></Route>
                    {/* 下载管理 */}
                    <Route path={ downloadManagerRouter } component={ DownloadManager }></Route>
                    {/* 我的音乐云盘 */}
                    <Route path={ myMusicCloudRouter } component={ MyMusicCloud }></Route>
                    {/* 我的电台 */}
                    <Route path={ myStationRouter } component={ MyStation }></Route>
                    {/* 我的收藏 */}
                    <Route path={ myCollectRouter } component={ MyCollect }></Route>
                    {/* 我喜欢的音乐 */}
                    <Route path={ myLiveMusicRouter } component={ MyLiveMusic }></Route>
                </Switch>
            </div>
        )
    }
}

export default SilderBar;