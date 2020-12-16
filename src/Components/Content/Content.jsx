
import React from 'react';
import Header from "../Header/Header"
import Home from '../Home/Home';
import s from "./Content.module.css"



function Content() {
  return (
    <div className={s.Content}>
          <Header/>
            <div className={s.ContentBlock}>
              <Home/>
              </div>                            
    </div>
  );
}

export default Content;
