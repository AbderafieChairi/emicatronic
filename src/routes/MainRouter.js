import React from 'react';
import { HashRouter, Routes, Route,Outlet } from "react-router-dom";
import Home from '../screens/Home/Home'

import DrawerAppBar from './Drawer';
import ProjectDetails from '../screens/Project/Project';
import { Projects } from '../screens/Project/Project'
import Events from '../screens/Events/Event';
import Members from '../screens/Members/Members';
import Blog from '../screens/Blog/Blog';
import Achievement from '../screens/achievements/Achievements';
function MainRouter() {
    return ( 
        <HashRouter>
            <Routes>
                <Route path="/" element={<RouterContainer />}>
                    <Route index element={<Home />} />
                    {/* <Route path='/projectDetails/:id' element={<ProjectDetails />} /> */}
                    <Route path='/project/:id' element={<ProjectDetails />} />
                    <Route path='/project' element={<Projects />} />
                    <Route path='/achievement' element={<Achievement />} />
                    <Route path='/members' element={<Members />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blog/:id' element={<Blog />} />
                    <Route path='/event' element={<Events />} />

                </Route>   
            </Routes>
        </HashRouter>
     );
}

// achievement
function RouterContainer() {
    return (<div>
        <DrawerAppBar/>
        <Outlet />
    </div>);
}






export default MainRouter;