import React, { useState } from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const [toggle,setToggle]=useState(false)
   
    const routes=[
        {id: 1, name:'Home', link:'/home'},
        {id: 2, name:'Shop', link:'/shop'},
        {id: 3, name:'Deals', link:'/deals'},
        {id: 4, name:'Coupons', link:'/coupons'},
        {id: 5, name:'Contact', link:'/contact'}
    ]
    return (
        <div>
           <nav>
            <div onClick={()=>setToggle(!toggle)} className='w-6 h-6 md:hidden'>
        {toggle?<i class="fa-solid fa-hourglass-half"></i>: <i class="fa-solid fa-bars"></i>}
            </div>
         
           <ul className={`md:flex justify-center absolute w-full bg-indigo-200 md:static  ${toggle ? 'top-6' : 'top-[-120px]'}`}>
                
                {
                  routes.map(route=> <Link
                     key={route.id} 
                     route={route}
                     />)    
                }
                 </ul>
           </nav>
            
        </div>
    );
}; 

export default Navbar;