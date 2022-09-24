<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Playlist extends Model
{
    use HasFactory;

    protected $table = 'playlist';

    /**
    * List of songs
    *
    * @var HasOne
    */
    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    /**
    * List of songs
    *
    * @var HasManyThrough
    */
    public function songs(): HasManyThrough
    {
        return $this->hasManyThrough(Song::class, 'song_playlist', 'playlist_id', 'id', 'id', 'song_id');
    }
}
