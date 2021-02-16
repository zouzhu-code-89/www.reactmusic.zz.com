import React, { useState, useEffect } from 'react';
import * as Antd from 'antd';
import './index.css';
import LogoPng from '../../assets/public/logo.png';
import AiXing from '../../assets/public/aixing.png';
import aixing_svg from '../../assets/svg/aixing.svg';
import aixing_love_svg from '../../assets/svg/aixing-love.svg';
import pre_svg from '../../assets/svg/pre.svg';
import next_svg from '../../assets/svg/next.svg';
import play_svg from '../../assets/svg/play.svg';
import { createFromIconfontCN } from '@ant-design/icons';
import MyIcon from '../../components/Icon/index';
import SilderBar from '../../components/homeComponent/silderBar/index';
import ContentSolt from '../../components/homeComponent/contentSolt/index'


class Home extends React.Component <any, any>{
    
    private projectStart = {
        percent: 100,
        playStart: false
    }

    constructor(props:any){
        super(props);
        this.state = {
            
            projectStart: this.projectStart
        }
    }

    public componentDidMount(){
        // this.play();
    }

    private getCategories(){

    }   

    /**
     * 触发播放器函数
     * @param id 歌单 ID
     * @time 2021-02-15
     */
    private triggerAudioFunction(){
        const playAudioComponent = document.getElementById("playAudio") as any;
        this.projectStart.playStart = !this.projectStart.playStart;
        this.setState(this.projectStart);
        if(this.projectStart.playStart){
            this.play(playAudioComponent);
        }else{
            this.pause(playAudioComponent);
        }
    }

    private pause(audioObject:any){
        audioObject.pause();
    }

    private play(audioObject:any){
        audioObject.play();
    }

    render(){
        return (
            <>
                <Antd.Layout>
                    <Antd.Layout.Header>
                        <div className="home_header">
                            <img className="home_logo" src={LogoPng} alt="logo" />
                            <h2 className="home_title">ZZMUSICS</h2>
                        </div>
                    </Antd.Layout.Header>
                    <Antd.Layout>
                        <Antd.Layout.Sider>
                            <SilderBar />
                        </Antd.Layout.Sider>
                        <Antd.Layout.Content>
                            <ContentSolt />
                        </Antd.Layout.Content>
                    </Antd.Layout>
                    <Antd.Layout.Footer>
                        <div className="footer_play">
                            <div className="footer_play_item1">
                                <div>
                                    <img src="http://p3.music.126.net/RX-ACBm2xqUaJGBBXcLgPg==/109951165087798350.jpg" alt=""/>
                                </div>
                                <div>
                                    <p>东大街</p>
                                    <p>张超阳</p>
                                </div>
                                <div>
                                    <span>
                                        <MyIcon type="icon-aixin" />
                                    </span>
                                </div>
                            </div>
                            <div className="footer_play_item2">
                                <div className="footer_play_item2_1">
                                    <div>
                                        <MyIcon type="icon-huaban" />
                                    </div>
                                    <div>
                                        <MyIcon type="icon-shangyiqu" />
                                    </div>
                                    <div onClick={ () => this.triggerAudioFunction() }>
                                        { this.state.projectStart.playStart ? <MyIcon type="icon-pause" /> : <MyIcon type="icon-bofang" /> }
                                    </div>
                                    <div>
                                        <MyIcon type="icon-xiayiqu" />
                                    </div>
                                    <div>
                                        <MyIcon type="icon-cibiaoquanyi" /> 
                                    </div>
                                </div>
                                <div>
                                    <Antd.Progress percent={50} 
                                                       size="small" 
                                                       showInfo={false}
                                                       strokeColor="#ff4e4e"
                                                       trailColor="#e6e6e8" />
                                </div>
                            </div>
                            <div>
                                <audio src=" https://m801.music.126.net/20210216121643/26b7852133918253fd19283c0a801c39/jdyyaac/520f/0f5c/540b/ee2271021b86ec91177dca817cdead6f.m4a" 
                                       controls={ false }
                                       id="playAudio"/>
                            </div>
                        </div>
                    </Antd.Layout.Footer>
                </Antd.Layout>
            </>
        )
    }
}

export default Home;