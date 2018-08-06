<?php
namespace App\Controller;

use App\Controller\AppController;

class StringHandlesController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $str = 
        "プロジェクト名:2018OJT
Problem:CakePHPについて理解がたりない。
Try:bootstrapを使ってみる。
つつくトライ内容";
        dump($str);

        $str = explode("\n", $str);
        dump($str);
    }

    
}