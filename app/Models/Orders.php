<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    protected $fillable = [ //comments is about the location of the 'order' object post purchase
        'item_id', //can be fetched from route id
        'paypal_order_id', //order.id
        'payer_name',  //order.payer.name.given_name + order.payer.name.surname
        'email', //order.payer.email_address
        'billing_address', //order.purchase_units[0].shipping.address.address_line_1 + 
                           // order.purchase_units[0].shipping.address.admin_area_2 +
                           //order.purchase_units[0].shipping.address.admin_area_1 +
                           //order.purchase_units[0].shipping.address.country_code +
                           //order.purchase_units[0].shipping.address.postal_code
        'subtotal', //order.purchase_units[0].amount.value + order.purchase_units[0].amount.currency_code
        'order_string'
    ];

    public function item()
    {
        return $this->belongsTo('App\Models\Items');
    }
}
