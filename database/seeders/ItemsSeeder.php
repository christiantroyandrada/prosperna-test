<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Items;

class ItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [

            [   'name' => 'off white air jordan 1 retro high unc',
                'description' => 'A very nice, sporty and premium shoe inspired from Michael Jordan',
                'price' => '2777.00',
                'image'=> 'https://images.solecollector.com/complex/images/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/mbgke3li5gctnhikxqog/off-white-air-jordan-1-i-unc-release-date-aq0818-148-main'
            ],
            [
                'name'=> 'iPhone 13',
                'description' => 'The very latest creation off from Apple.  Powered by Apple Bionic A15',
                'price' => '500.00',
                'image'=> 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=441&hei=529&fmt=jpeg&qlt=95&.v=1567022175704'
            ],
            [
                'name' => 'Xiaomi Mi 11 Ultra',
                'description' => 'The best creation from Xiaomi yet.  Powered by Qualcomm snapdragon 888+',
                'price' => '1100.00',
                'image'=> 'https://www.gizmochina.com/wp-content/uploads/2021/02/mi11ultra-white.jpg'
            ]
        ];

        foreach ($items as $item){
            $merch = Items::create([
                'name' => $item['name'],
                'description' => $item['description'],
                'price' => $item['price'],
                'image' => $item['image'],
            ]);
        }
    }
}
