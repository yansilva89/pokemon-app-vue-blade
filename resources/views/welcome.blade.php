@extends('layouts.app')

@section('content')
<div class="wrapper-home">
  <div class="wrapper-home__overlay">
    <div class="wrapper-home__content">
      <div class="wrapper-home__content-in">
        <div class="wrapper-home__info">
          <h1>Pokedex</h1>
          <p>Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more! Search for a Pokémon by name or using its National Pokédex number.</p>
          <a href="{{ url('/list') }}" class="btn">Search Pokemon</a>
        </div>
        {{-- Desktop View --}}
        <div class="carousel">
          <ul class="carousel__images">
            @foreach (['venusaur', 'charizard', 'blastoise'] as $image)
            <li class="carousel__item">
              <img src='{{ asset("images/pokemons/{$image}.png") }}' alt="{{ $image }}">
            </li>
            @endforeach
          </ul>
          {{-- Slide Selectors --}}
          <ul class="carousel__selectors">
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection

