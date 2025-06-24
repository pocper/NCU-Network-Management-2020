# ncu-course-networkManagement
## 簡介
- **學校** : 國立中央大學
- **開課單位** : 機械工程學系
- **課程名稱** : 電腦網路及程式
- **授課教授** : 林錦德 助理教授
- **修課時間** : 2020年02月~2020年06月
- **最終成績** : 95

## 課程內容
1. 網路基礎架構
   * OSI
   * TCP/IP
   * 拓譜
   * 遮罩
   * 集線器、交換器、路由器
2. 前端
   * html
   * CSS
   * Javascript
3. 後端
   * PHP
4. 資料庫
   * SQLite
5. Linux
   * 作業系統
   * 虛擬化
   * 基本指令
   * WSL
6. AWS
   * AWS基本介紹
   * EC2
   * RDS
7. 期末專題

## 開發環境與需求
- **php**  
  [php offical website](https://www.php.net/downloads.php)

## 後端(php)
目的:轉置(transpose)一個3x3矩陣，並顯示結果
1. open the php service
   ```sh
   $ cd ncu-course-networkManagement/php
   $ php -S localhost:8000
   ```
2. open the website  
   http://localhost:8000/108303013_1.php  
   - Input  
      <img src="./php/result/ex1.png" alt="transpose_matrix_input" width="50%">  
   - Output  
      <img src="./php/result/ex2.png" alt="transpose_matrix_result" width="10%">

## 期末考試(html/css/javascript/php/AWS database)
1. 題目:設計一個購物書平台，當使用者採購相對應的數目時，資料庫會顯示對應的數量。<br>Notice:資料庫已關閉，目前無法與資料庫互動
   1. open the php service
      ```sh
      $ cd ncu-course-networkManagement/final_exam
      $ php -S localhost:8000
      ```
   2. open the website  
   http://localhost:8000/1083030132_1.html
      - Input  
       <img src="./final_exam/result/ex2_1.png" alt="booking_input" width="100%">  
      - Output  
       <img src="./final_exam/result/ex2_3.png" alt="booking_output" width="50%">  


2. 題目:使用者輸入兩個不同的年月，可以計算出相差多少個月份
   1. open the php service
      ```sh
      $ cd ncu-course-networkManagement/final_exam
      $ php -S localhost:8000
      ```
   2. open the website  
   http://localhost:8000/1083030133_1.html
      - Input  
       <img src="./final_exam/result/ex3_1.png" alt="calculate_difference_month_input" width="100%">  
      - Output  
       <img src="./final_exam/result/ex3_2.png" alt="calculate_difference_month_output" width="10%">  

## 期末專題(html/css/javascript/php/AWS database)
**題目:**  
設計至少三個不同的網頁且含有後端與資料庫互動的網站  
<br>
**網頁介紹:**  
本網站以遊戲為主題，內容涵蓋經典的「貪吃蛇」以及「瘋狂魔塔」兩款遊戲。
- **貪吃蛇故事背景：**  
  貪吃蛇是一款經典的休閒遊戲，玩家控制一條不斷成長的蛇，在有限的空間內吃食物並避免撞牆或咬到自己。遊戲簡單卻極具挑戰性，考驗玩家的反應速度與策略規劃能力。

- **瘋狂魔塔故事背景與說明：**  
  瘋狂魔塔是一款經典的角色扮演遊戲，玩家操控主角在多層魔塔中逐層挑戰怪物與陷阱，尋找通往頂層的道路。原始遊戲是以Flash製作（如[遊戲天堂-瘋狂魔塔](https://i-gamer.net/play/663.html)所示），由於Flash已停止支援，我們自行重新設計並開發了此遊戲的版本，並非直接使用Flash原作，而是以其遊戲機制為靈感來源，完成了部分實作。
<br>

**成員及工作內容:**  
| 成員     | 工作內容                                         |
|--------- |-------------------------------------------------|
| 黃鉦淳   | 主頁:HTML、CSS、JavaScript 編寫<br>關於我們:HTML、CSS、JavaScript 編寫<br>遊戲_貪吃蛇:HTML、CSS、JavaScript 編寫<br>遊戲_瘋狂魔塔:HTML、CSS、JavaScript (遊戲關卡設計 / 角色互動機制 / 角色碰撞機制 / 美術及素材製作) |
| 郭耀中   | 瘋狂魔塔:php(進度保存至資料庫的後端開發與資料庫設計) |

1. open the php service
      ```sh
      $ cd ncu-course-networkManagement/final_project
      $ php -S localhost:8000
      ```
2. open the website  
http://localhost:8000/main.html
- 主頁
   ![main_page1](./final_project/result/page_main1.png)
   ![main_page2](./final_project/result/page_main2.png)
- 關於我們
   ![about_us_page](./final_project/result/page_aboutUs.png)
- 遊戲_貪吃蛇
   ![game_snake_page](./final_project/result/game_snake.png)
- 遊戲_瘋狂魔塔
   ![game_tower_layer1_page](./final_project/result/game_tower_layer_1.png)
   ![game_tower_layer2_page](./final_project/result/game_tower_layer_2.png)
   ![game_tower_layer3_page](./final_project/result/game_tower_layer_3.png)
   ![game_tower_layer4_page](./final_project/result/game_tower_layer_4.png)
   ![game_tower_layer5_page](./final_project/result/game_tower_layer_5.png)
   ![game_tower_pass_page](./final_project/result/game_tower_pass.png)
   ![game_tower_fail_page](./final_project/result/game_tower_fail.png)

## 修課心得
這門課程需要花費大量時間自行查找不熟悉的內容。課堂上老師會點出最基本的觀念，但許多進階或細節部分需要靠自己查詢來補足。老師與助教從最基礎的概念開始教起，讓我們對於網頁架構（前端／後端／資料庫）以及 Linux 系統有了基本的認識。

透過這門課程的學習，最終能夠實作出一個屬於自己的網站，回頭看這整個學期的努力，感覺非常值得且充實。