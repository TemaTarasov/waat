<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

$pattern = '^((?!api\/)(?!\.).)*$';

Route::group(
  ['domain' => 'dashboard.' . env('APP_DOMAIN', 'localhost')],
  function () use ($pattern) {
    Route::get(
      '/sign-in',
      function () {
        if (Auth::check()) {
          return redirect()->route('dashboard.root');
        }

        return view('dashboard');
      }
    )->name('dashboard.sign-in');

    Route::get('{react}', fn() => view('dashboard'))
         ->where('react', $pattern)
         ->middleware('auth')
         ->name('dashboard.root');
  }
);

Route::get('{react}', fn() => view('website'))->where('react', $pattern);
