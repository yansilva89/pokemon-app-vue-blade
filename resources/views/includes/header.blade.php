<div class="header">
  <div class="header__logo">
    <a href="{{ url('/') }}">PokeAtlas</a>
    <div class="header__line"></div>
  </div>
  <div class="menu">
    <div class="menu__toggle">
      <a href="#"><img src="{{ asset('images/icons/menu.svg') }}" alt="Open Menu"></a>
    </div>
    <ul class="menu__list">
      <div class="menu__header">
        <a href="{{ url('/') }}">PokeAtlas</a>
        <a href="#" class="menu__toggle"><img src="{{ asset('images/icons/close.svg') }}" alt="Close Menu"></a>
      </div>
      <div class="menu__items">
        <li class="menu__item">
          <a href="{{ url('/') }}">
            <img src="{{ asset('images/icons/home.svg') }}" alt="Home">
            Home
          </a>
        </li>
        <div class="menu__line"></div>
        <li class="menu__item">
          <a href="{{ url('/list') }}">
            <img src="{{ asset('images/icons/list.svg') }}" alt="List">
            Lista
          </a>
        </li>
      </div>
    </ul>
  </div>
  <div class="desktop-menu">
    <ul class="desktop-menu__list">
      <li class="desktop-menu__item">
        <a href="{{ url('/') }}">Home</a>
      </li>
      <div class="desktop-menu__line"></div>
      <li class="desktop-menu__item">
        <a href="{{ url('/list') }}">Lista</a>
      </li>
    </ul>
  </div>
</div>

