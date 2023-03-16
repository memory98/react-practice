import React from 'react';
import '../assets/scss/layout/Header.scss';
import {NavLink} from "react-router-dom";
import Login from '../component/user/Login';
import Join from '../component/user/Join';
import Settings from '../component/user/Settings';
export default function Header() {
    return (
        <header>
            <h1>
                <NavLink to={'/'}>Header</NavLink>
            </h1>
            <ul>
                <li><NavLink to={'/user/login'} element={<Login />}>로그인</NavLink></li>
                <li><NavLink to={'/user/join'} element={<Join />}>회원가입</NavLink></li>
                <li><NavLink to={'/user/settings'} element={<Settings />}>회원정보수정</NavLink></li>
            </ul>
        </header>
    );
}