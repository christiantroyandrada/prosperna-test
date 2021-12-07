<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([                //this function receives the data from the frontend and posts in dataabase
            'item_id' => 'required',
            'paypal_order_id' => 'required',
            'payer_name' => 'required',
            'email' => 'required',
            'billing_address' => 'required',
            'subtotal' => 'required',
            'order_string' => 'required',

        ]);
        $orders = Orders::create([
            'item_id' => $request->get('item_id'),
            'paypal_order_id' => $request->get('paypal_order_id'),
            'payer_name' => $request->get('payer_name'),
            'email' => $request->get('email'),
            'billing_address' => $request->get('billing_address'),
            'subtotal' => $request->get('subtotal'),
            'order_string' => $request->get('order_string'),
        ]);

        $orders->save();
        return ['message' => 'Ordered successfully'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
