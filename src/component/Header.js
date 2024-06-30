// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import {Space} from "antd";
const Header = () => {
    return (
        <Space
            direction="vertical"
            style={{ width: '100%', textAlign: 'start' }}
        >
            <header >
                <h2>Guangshuo Qin</h2>
                <Space style={{fontSize:'20px'}} size={30} direction="horizontal">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                </Space>
            </header>
        </Space>

    );
};

export default Header;
