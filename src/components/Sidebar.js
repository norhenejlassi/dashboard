import React from 'react'


const Sidebar = () => {
    return (
 
  
    
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ }}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 " style={{backgroundColor:"#e9ecef",margin :"-70%",width:"300px",height:"600px"}}>
                
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5>Dashboard Admin</h5></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href='/employees'><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Utilisateur</span></a></li>
                <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Reports▾</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="/Dashboard"><i class="fas fa-book-reader"></i> Data Report </a></li>
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> File Report </a></li>
                    </ul>
                </li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-archive"></i> <span className="ml-3">historique</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file"></i> <span className="ml-3">importer</span></a></li>

                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3">Export</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Snippets</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-atom font-weight-bold"></i> <span className="ml-3">Flex</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/UploadFiles"><i class="far fa-folder font-weight-bold"></i> <span className="ml-3">Document</span></a></li>

               
            </ul>
       </div>
   
  
    )
}


export default Sidebar
