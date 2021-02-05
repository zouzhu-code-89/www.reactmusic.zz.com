import React, { useState, useEffect } from 'react';
import * as Antd from 'antd';
import {
    catlist
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
    };
    
    constructor(props:any){
        super(props);
        this.state = {
            songCategoriesMessage: this.songCategoriesMessage
        }
    }

    public componentDidMount(){
        this.getList();
    }

    /**
     * @description 获取音乐主列表数据
     * @time 2021-02-05
     */
    private async getList(){
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
                                                    <span className={ item.hot ? "hot":""}>{item.name}</span>
                                                </span>
                                            )   
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default SongListComponent;