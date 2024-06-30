// Home.js
import React from 'react';
import { Space } from 'antd';
import Header from '../component/Header';
import {GithubOutlined, LinkedinOutlined, MailOutlined, ZhihuOutlined} from "@ant-design/icons";

export default function Home() {
    return (
        <div style={{fontFamily:'Verdana,sans-serif'}}>
            <Space direction="vertical" style={{ marginLeft: '30%', width: '100%', textAlign: 'start' }}>
                <Header />
                <h1>Hi, I'm Qss!</h1>
                <div>
                    Junior Student at <a href="http://www.sjtu.edu.cn" target="_blank" rel="noopener noreferrer">SJTU</a>, major in Software Engineering, minor in Law.
                </div>
                <div style={{marginTop: '40px'}}>
                    Find me on:

                </div>
                <div>
                    <MailOutlined style={{fontSize: '30px', marginRight: '10px'}}/>
                    <a href="mailto:qgs7777@163.com">qgs7777@163.com</a>
                </div>
                <div style={{marginTop: '20px'}}>
                    <GithubOutlined style={{fontSize: '30px', marginRight: '10px'}}/>
                    <a href="https://github.com/qsstcl" target="_blank"
                       rel="noopener noreferrer">GitHub</a>
                </div>
                <div style={{marginTop: '20px'}}>
                    <LinkedinOutlined style={{fontSize: '30px', marginRight: '10px'}}/>
                    <a href="https://www.linkedin.com/in/your-linkedin-username/" target="_blank"
                       rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div style={{marginTop: '20px'}}>
                    <ZhihuOutlined style={{fontSize: '30px', marginRight: '10px'}}/>

                    <a href="https://www.zhihu.com/people/ggliao-44-59" target="_blank"
                       rel="noopener noreferrer">Zhihu</a>
                </div>
            </Space>
        </div>
    );
}
