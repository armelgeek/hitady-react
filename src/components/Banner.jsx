import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const SearchBar = () =>{

    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
            </TabPane>
        </Tabs>
    )
}
const Banner = () => {
    return (
        <div className="w-100 h-screen bg-gray-300 bg-hitady relative">
            <div className="flex flex-col justify-center items-center h-100">
            <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-4xl">
                <h1 class="text-5xl font-bold font-hitady text-white tracking-tight hero-title  sm:text-5xl sm:leading-none">
                    Découvrez en numérique les merveilles de 
                    <span class="relative inline-block px-2 mt-3">
                        <div class="absolute inset-0 transform -skew-x-12 bg-gray-50"></div>
                        <span class="relative text-primary font-hitady"> vos destinations</span>
                    </span>
                </h1>
                <p class="text-base  text-white md:text-lg">
                    <span class="text-primary font-logo mr-1"> Hitady  </span>   est la première site internet de visite virtuelle Malagasy
                </p>
                 <div className="absolute  w-50 left-1/4 pt-5 pb-5    bottom-0 text-white">
                 <SearchBar />
                </div>    
            </div>
          
        </div>
    </div>
    );
};
export default Banner;
