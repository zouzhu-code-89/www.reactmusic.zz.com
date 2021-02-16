import React, { useState, useEffect } from 'react';
import * as Antd from 'antd';
import './index.css';
import MyIcon from '../../../components/Icon/index';
import { Link } from 'react-router-dom';
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
            <div className="silbar">
                <div className="silbar_item1">
                    <ul>
                        <li>
                            <Link to={ foundMusicRouter }>
                                <span>发现音乐</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={ VideoRouter }>
                                <span>视频</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={ friendRouter }>
                                <span>朋友</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={ liveStreamingRouter }>
                                <span>直播</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={ privateFMRouter }>
                                <span>私人FM</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="silbar_item2">
                    <span className="silbar_name">我的音乐</span>
                    <ul>
                        <li>
                            <Link to={ localhostMusicRouter }>
                                <MyIcon type="icon-yinyueclick" /> 
                                <span>本地音乐</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={ downloadManagerRouter }>
                                <MyIcon type="icon-xiazai" /> 
                                <span>下载管理</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={ myMusicCloudRouter }>
                                <MyIcon type="icon-yun" /> 
                                <span>我的音乐云盘</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={ myStationRouter }>
                                <MyIcon type="icon-wodediantai" /> 
                                <span>我的电台</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={ myCollectRouter }>
                                <MyIcon type="icon-wodeshoucang" /> 
                                <span>我的收藏</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="silbar_item3">
                    <div className="silbar_item3_header">
                        <span>
                            <span className="silbar_name">创作的歌单</span>
                            <span></span>
                        </span>
                        <span>
                            <MyIcon type="icon-jia1" /> 
                        </span>
                    </div>
                    <ul>
                        <li>
                            <Link to={ myLiveMusicRouter }>
                                <MyIcon type="icon-xinaixin" /> 
                                <span>我喜欢的音乐</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SilderBar;