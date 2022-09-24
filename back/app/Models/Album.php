<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

use DateTime;

class Album extends Model
{
    use HasFactory;

    protected $table = 'album';

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

    public function songs(): BelongsToMany
    {
        return $this->belongsToMany(Song::class);
    }
}
