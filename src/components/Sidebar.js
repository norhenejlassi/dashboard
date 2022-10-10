import React from 'react'


const Sidebar = () => {
    return (
 
  
    
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ }}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 " style={{backgroundColor:"#e9ecef",margin :"-75%",width:"300px",height:"800px"}}>
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="/admin"><h5>Dashboard Admin</h5></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href='/employees'><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Utilisateur</span></a></li>

                 
                    

                       <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#submenu3" data-toggle="collapse" data-target="#submenu3"><i  class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3"> Gestion des données▾</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu3" aria-expanded="false">
                    <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="chargefinanciere"> <i class="fas fa-tablet-alt font-weight-bold"></i> Charge financiére </a></li>
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="impots"> <i class="fas fa-tablet-alt font-weight-bold"></i> Impots </a></li>


                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="clees"> <i class="fas fa-tablet-alt font-weight-bold"></i> Key </a></li>
                       
                    </ul>
                </li>






                <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="fas fa-file"></i><span className="ml-3"> Import▾</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                    <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="importreve"> <i class="fas fa-file"></i> Revenu </a></li>
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="Importchargexpo"> <i class="fas fa-file"></i> Charge exploitation </a></li>


                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="/import"><i class="fas fa-file"></i> Expense </a></li>
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="importcle"> <i class="fas fa-file"></i> Key </a></li>
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="importcle"> <i class="fas fa-file"></i> Cle Dotation </a></li>

                       
                    </ul>
                </li>

                <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#submenu4" data-toggle="collapse" data-target="#submenu4"><i class="fas fa-calculator"></i> <span className="ml-3"> Calcul▾</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu4" aria-expanded="false">
                    <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="/calculchargexp"><i class="fas fa-calculator"></i> charge Exploitatio</a></li>
                    <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="/calculreve"><i class="fas fa-calculator"></i> revenue</a></li>


                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="/pagination"><i class="fas fa-calculator"></i> Dépense </a></li>
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="/calculpnl"> <i class="fas fa-calculator"></i> P&L </a></li>

                    </ul>
                </li>




                <li class="nav-item mb-2">
                    <a class="nav-link text-secondary" href="#submenu2" data-toggle="collapse" data-target="#submenu2"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Reports▾</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu2" aria-expanded="false">
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="/resultatfinal"><i class="fas fa-book-reader"></i> Dashboard Final </a></li>
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="/resultatregional"> <i class="fas fa-book-medical"></i> Dashboard Regional</a></li>
                    </ul>
                </li>

                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/Async"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3">Export</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="/UploadFiles"><i class="far fa-folder font-weight-bold"></i> <span className="ml-3">Document</span></a></li>

               
            </ul>
       </div>
   
  
    )
}


export default Sidebar
