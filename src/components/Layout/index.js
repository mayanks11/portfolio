import './index.scss';
import Sidebar from '../sidebar';
import { Outlet } from 'react-router-dom';
function Layout(){
    return(
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
                <Outlet />
                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    
                    <span className='botom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout;