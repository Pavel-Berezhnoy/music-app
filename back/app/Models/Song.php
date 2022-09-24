<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DateTime;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Song extends Model
{
    use HasFactory;
    /**
     * Table name.
     *
     * @var string
     */
    protected $table = 'song';

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'datetime',
    ];

    public function setCreatedAtAttribute($date): DateTime
    {
        return $this->attributes['created_at'] = new DateTime($date);
    }

    public function musician(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'musician_id');
    }

    public function album(): HasOne
    {
        return $this->hasOne(User::class);
    }

    public function playlists(): HasManyThrough
    {
        return $this->hasManyThrough(Playlist::class, SongPlaylist::class, 'song_id', 'id', 'id', 'playlist_id');
    }
}
