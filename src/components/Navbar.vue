<template>
  <div className="navbar bg-slate-50">
    <div className="navbar-start">
      <a className="btn btn-ghost normal-case text-xl text-zinc-900" href="/">AnimaHubLab</a>
    </div>
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/sobre">Sobre</a></li>
      </ul>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li><a>Sobre</a></li>
        <div class="dropdown dropdown-hover">
          <label tabindex="0" class="btn m-1">Hover <svg className="fill-current" xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg></label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
        <li><a>Coisas</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn bg-red-700">Começar</a>
    </div>
  </div>

</template>