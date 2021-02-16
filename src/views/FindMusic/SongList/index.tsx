import React, { useState, useEffect } from 'react';
import * as Antd from 'antd';
import {
    catlist, hot, playlists, detail
} from '../../../api/obtainMusicInfo/obtainInfo'
import './index.css';
class SongListComponent extends React.Component <any, any>{
    private songCategoriesMessage = {
        categories: {
            0: [],
            1: [],
            2: [],
            3: [],
            4: []
        },
        categoriesName: "",
        hot: [],
        categoriesList: []
    };

    private categoriesDetails = [];
    
    constructor(props:any){
        super(props);
        this.state = {
            songCategoriesMessage: this.songCategoriesMessage
        }
    }

    public componentDidMount(){
        this.getCategories();
        this.getHotCategories();
    }

    /**
     * @description 获取音乐主列表数据
     * @time 2021-02-05
     */
    private async getCategories(){
        const data = await catlist({}) as any;
        this.songCategoriesMessage.categoriesName = data.categories;
        data.sub.map((item:any) => {
            switch(item.category){
                case 0: (this.songCategoriesMessage.categories[0] as any).unshift(item);break;
                case 1: (this.songCategoriesMessage.categories[1] as any).unshift(item);break;
                case 2: (this.songCategoriesMessage.categories[2] as any).unshift(item);break;
                case 3: (this.songCategoriesMessage.categories[3] as any).unshift(item);break;
                case 4: (this.songCategoriesMessage.categories[4] as any).unshift(item);break;
                default: break;
            }
        });
        this.setState({songCategoriesMessage: this.songCategoriesMessage});
    }

    /**
     * @description 获取热门的歌单分类
     * @time 2021-02-10
     */
    private async getHotCategories(){
        const data = await hot({}) as any;
        this.songCategoriesMessage.hot = data.tags;
        this.setState({songCategoriesMessage: this.songCategoriesMessage});
    }

    /**
     * 通过歌单 ID 获取获取相关歌单列表
     * @param id 歌单 ID
     * @time 2021-02-13
     */
    private getPlayLists(id:Number){
        playlists({id}).then((data:any) => {
            this.songCategoriesMessage.categoriesList = data.playlists;
            this.setState({songCategoriesMessage: this.songCategoriesMessage});
        });
    }

    /**
     * 通过歌单 ID 获取，歌单列表的详细信息
     * @param id 歌单 ID
     * @time 2021-02-12
     */
    private getCategoriesDetail(id:Number){
        const data = detail({id}) as any;
    }

    render(){
        return (
            <>
                <div className="box">
                    <span className="btn">全部歌单</span>
                    <div className="categor">
                        { 
                            Object.keys(this.state.songCategoriesMessage.categoriesName).map((item:any) => 
                                <div className="categor_item">
                                    <div className="categor_left">{ this.state.songCategoriesMessage.categoriesName[item]}</div>
                                    <div className="categor_right"> 
                                        { 
                                            this.state.songCategoriesMessage.categories[item].map((item:any) => 
                                                <span className="categor_right_item">
                                                    <span className={ item.hot ? "hot":""}>
                                                        {item.name}
                                                    </span>
                                                </span>
                                            )   
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div>
                    { 
                        this.state.songCategoriesMessage.hot.map((item:any) => 
                            <button onClick={ ()=>this.getPlayLists(item.id) }>
                                { item.name }
                            </button>
                        ) 
                    }
                </div>
                {/* 歌单相关列表 */}
                <div className="categor_list">
                    { 
                        this.state.songCategoriesMessage.categoriesList.map((item:any) => 
                            <div className="categor_list_item">
                                <div>
                                    <img src={ item.coverImgUrl } alt=""/>
                                    <span className="antour">{ item.creator.nickname }</span>
                                </div>
                                <span className="introduce">{ item.name }</span>
                            </div>
                        ) 
                    }
                </div>
            </>
        )
    }
}

export default SongListComponent;