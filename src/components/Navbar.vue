<template >

  <div class="navbar bg-white">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-60">
          <li><a className="text-black hover:bg-red-500" href="/">Home</a></li>
          <li><a className="text-black hover:bg-red-500" href="/cadastrop">Cadastro para Professores</a></li>
          <li><a className="text-black hover:bg-red-500" href="/cadastroa">Cadastro para Alunos</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl" href="/">daisyUI</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><a className="text-black hover:bg-red-500" href="/">Home</a></li>
        <li><a className="text-black hover:bg-red-500" href="/cadastrop">Cadastro para Professores</a></li>
        <li><a className="text-black hover:bg-red-500" href="/cadastroa">Cadastro para Alunos</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn bg-red-700">Get started</a>
    </div>
  </div>

</template>