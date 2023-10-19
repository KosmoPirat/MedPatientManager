<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $roles = [
            'admin', //1
            'doctor', //2
        ];
        foreach ($roles as $role) {
            DB::table('roles')->insert([
                'name' => $role,
            ]);
        }

        $cancerCodes = [
            'Молочная железа (C50)', //1
            'Толстая кишка (C18, C19)', //2
            'Прямая кишка (C20)', //3
            'Желудок (C16)', //4
            'Почка (C64)', //5
            'Шейка матки (C53)', //6
            'Легкое (C34)', //7
            'Пищевод (C15)', //8
            'Мочевой пузырь (C67)', //9
            'Гепатоцеллюлярный рак (C22)', //10
            'Меланома (C43)', //11
            'Поджелудочная железа (C25)', //12
            'Билиарный тракт (C24)', //13
            'Яичники (C56)', //14
        ];
        foreach ($cancerCodes as $cancerCode) {
            DB::table('cancer_codes')->insert([
                'name' => $cancerCode,
            ]);
        }

        $cancerTypes = [
            'Ранний / операбельный', //1
            'Метастатический / не операбельный', //2
        ];
        foreach ($cancerTypes as $cancerType) {
            DB::table('cancer_types')->insert([
                'name' => $cancerType,
            ]);
        }

        $cancerCodeParams = [
            'Люминальный А', //1
            'Люминальный B, HER2 -', //2
            'Нелюминальный, HER2 +', //3
            'Триждынегативный', //4
            'HER2 +', //5
            'Аденокарцинома', //6
            'Мелкоклеточный', //7
            'Плоскоклеточный', //8
            'Люминальный B, HER2 +', //10
            'Почечно-клеточная карцинома', //11
            'Мутация PIK3CA +', //12
            'Мутация PIK3CA -', //13
            'Мутация BRCA+', //14
        ];
        foreach ($cancerCodeParams as $cancerCodeParam) {
            DB::table('cancer_code_params')->insert([
                'name' => $cancerCodeParam,
            ]);
        }

        $cancerTypeParams = [
            'Предоперационная', //1
            'Послеоперационная', //2
            'Линия-1', //3
            'Линия-2 и последующие', //4
            'Линия-2', //5
        ];
        foreach ($cancerTypeParams as $cancerTypeParam) {
            DB::table('cancer_type_params')->insert([
                'name' => $cancerTypeParam,
            ]);
        }

        $statuses = [
            'Выполнена', //1
            'Отменена', //2
            'Выполняется', //3
            'Ожидает обработки', //4
        ];
        foreach ($statuses as $status) {
            DB::table('registration_statuses')->insert([
                'name' => $status,
            ]);
        }

        $hospitals = [
            [
                'name' => 'Клиническая больница №1 в Отрадном',
                'address' => 'МО, г.о. Красногорск, пос. Отрадное, влд. 2, стр. 1',
                'phone' => '+7 (926) 417-93-16',
                'email' => 'denisovaas@mail.ru',
            ],
            [
                'name' => 'Клиническая больница №2 в Боткинском проезде',
                'address' => 'Москва, 2-й Боткинский проезд, дом 5, корпус 4',
                'phone' => '+7 (985) 474-44-41',
                'email' => 'ledin@inbox.ru',
            ],
        ];
        foreach ($hospitals as $hospital) {
            DB::table('hospitals')->insert([
                'name' => $hospital['name'],
                'address' => $hospital['address'],
                'phone' => $hospital['phone'],
                'email' => $hospital['email'],
            ]);
        }

        $research_managers = [
            [
                'name' => 'Мочалова Анастасия Сергеевна',
                'phone' => '+7 (926) 417-93-16',
            ],
            [
                'name' => 'Ледин Евгений Витальевич',
                'phone' => '+7 (985) 474-44-41',
            ],
        ];
        foreach ($research_managers as $research_manager) {
            DB::table('research_managers')->insert([
                'name' => $research_manager['name'],
                'phone' => $research_manager['phone'],
            ]);
        }

        $users = [
            [
                'role_id' => 1,
                'name' => 'Мочалова Анастасия Сергеевна',
                'login' => 'mochalovaAS',
                'login_verified_at' => now(),
                //'password' => Hash::make(Str::random(8)), // password
                'password' => Hash::make('79264179316AS'), // password
                'phone' => '+7 (926) 417-93-16',
                'remember_token' => Str::random(10),
            ],
            [
                'role_id' => 1,
                'name' => 'Ледин Евгений Витальевич',
                'login' => 'ledinEV',
                'login_verified_at' => now(),
                //'password' => Hash::make(Str::random(8)), // password
                'password' => Hash::make('79854744441EV'), // password
                'phone' => '+7 (985) 474-44-41',
                'remember_token' => Str::random(10),

            ],
            [
                'role_id' => 2,
                'name' => 'Алиескеров Мирзахмед',
                'login' => 'alieskerovM',
                'login_verified_at' => now(),
                //'password' => Hash::make(Str::random(8)), // password
                'password' => Hash::make('79969188255AM'), // password
                'phone' => '+7 (996) 918-82-55',
                'remember_token' => Str::random(10),

            ],
            [
                'role_id' => 2,
                'name' => 'Черепова Евгения',
                'login' => 'cherepovaE',
                'login_verified_at' => now(),
                //'password' => Hash::make(Str::random(8)), // password
                'password' => Hash::make('79161410600CHE'), // password
                'phone' => '+7 (916) 141-06-00',
                'remember_token' => Str::random(10),

            ],
            [
                'role_id' => 2,
                'name' => 'Суетина Маргарита',
                'login' => 'suetinaM',
                'login_verified_at' => now(),
                //'password' => Hash::make(Str::random(8)), // password
                'password' => Hash::make('79201613333SM'), // password
                'phone' => '+7 (920) 161-33-33',
                'remember_token' => Str::random(10),

            ],
            [
                'role_id' => 2,
                'name' => 'Кашанова Алина',
                'login' => 'kashanovaA',
                'login_verified_at' => now(),
                //'password' => Hash::make(Str::random(8)), // password
                'password' => Hash::make('79209034984KA'), // password
                'phone' => '+7 (920) 903-49-84',
                'remember_token' => Str::random(10),

            ],
            [
                'role_id' => 2,
                'name' => 'Нигматулина Софья',
                'login' => 'nigmatulinaS',
                'login_verified_at' => now(),
                //'password' => Hash::make(Str::random(8)), // password
                'password' => Hash::make('79083085420NS'), // password
                'phone' => '+7 (908) 308-54-20',
                'remember_token' => Str::random(10),

            ],
            [
                'role_id' => 2,
                'name' => 'Огородников Виталий',
                'login' => 'ogorodnikovV',
                'login_verified_at' => now(),
                //'password' => Hash::make(Str::random(8)), // password
                'password' => Hash::make('79858083032OG'), // password
                'phone' => '+7 (985) 808-30-32',
                'remember_token' => Str::random(10),

            ],
            [
                'role_id' => 2,
                'name' => 'Климова Елизавета',
                'login' => 'klimovaE',
                'login_verified_at' => now(),
                //'password' => Hash::make(Str::random(8)), // password
                'password' => Hash::make('79251833395KE'), // password
                'phone' => '+7 (925) 183-33-95',
                'remember_token' => Str::random(10),

            ],
        ];
        foreach ($users as $user) {
            DB::table('users')->insert([
                'role_id' => $user['role_id'],
                'name' => $user['name'],
                'login' => $user['login'],
                'login_verified_at' => $user['login_verified_at'],
                'password' => $user['password'],
                'phone' => $user['phone'],
            ]);
        }


        //\App\Models\User::factory(2)->create();


        DB::table('researches')->insert([
            'name' => 'Alexandra (WO39391)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
                    'research_id' => 1,
                    'cancer_code_id' => 1,
                    'cancer_type_id' => 1,
                    'cancer_type_param_id' => 2,
                ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 1,
            'cancer_code_param_id' => 4,
        ]);

        DB::table('researches')->insert([
            'name' => 'Emerald-2',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 2,
            'cancer_code_id' => 10,
            'cancer_type_id' => 1,
            'cancer_type_param_id' => 2,
        ]);

        DB::table('researches')->insert([
            'name' => 'Fermata (BCD-100-5)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 3,
            'cancer_code_id' => 6,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);

        DB::table('researches')->insert([
            'name' => 'BCD-201-1',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 4,
            'cancer_code_id' => 7,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 4,
            'cancer_code_param_id' => 6,
        ]);

        DB::table('researches')->insert([
            'name' => 'BCD-201-1',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 5,
            'cancer_code_id' => 7,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 5,
            'cancer_code_param_id' => 8,
        ]);

        DB::table('researches')->insert([
            'name' => 'BCD-201-1',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 6,
            'cancer_code_id' => 11,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);

        DB::table('researches')->insert([
            'name' => 'CBYL719H12301',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 7,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 7,
            'cancer_code_param_id' => 4,
        ]);

        DB::table('researches')->insert([
            'name' => 'CBYL719H12301',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 8,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 8,
            'cancer_code_param_id' => 4,
        ]);

        DB::table('researches')->insert([
            'name' => 'APD-SMG-I',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 9,
            'cancer_code_id' => 5,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);

        DB::table('researches')->insert([
            'name' => 'APD-SMG-I',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 10,
            'cancer_code_id' => 7,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 10,
            'cancer_code_param_id' => 6,
        ]);

        DB::table('researches')->insert([
            'name' => 'APD-SMG-I',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 11,
            'cancer_code_id' => 7,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 11,
            'cancer_code_param_id' => 8,
        ]);

        DB::table('researches')->insert([
            'name' => 'APD-SMG-I',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 12,
            'cancer_code_id' => 11,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);

        DB::table('researches')->insert([
            'name' => 'Breast07 (D967JC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 13,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 13,
            'cancer_code_param_id' => 9,
        ]);

        DB::table('researches')->insert([
            'name' => 'Breast07 (D967JC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 14,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 14,
            'cancer_code_param_id' => 3,
        ]);

        DB::table('researches')->insert([
            'name' => 'Breast08 (D967JC00002)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 15,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 15,
            'cancer_code_param_id' => 1,
        ]);

        DB::table('researches')->insert([
            'name' => 'Breast08 (D967JC00002)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 16,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 16,
            'cancer_code_param_id' => 2,
        ]);

        DB::table('researches')->insert([
            'name' => 'Breast08 (D967JC00002)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 17,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 17,
            'cancer_code_param_id' => 4,
        ]);

        DB::table('researches')->insert([
            'name' => 'Breast09 (D967UC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 18,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 18,
            'cancer_code_param_id' => 9,
        ]);

        DB::table('researches')->insert([
            'name' => 'Breast09 (D967UC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 19,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 19,
            'cancer_code_param_id' => 3,
        ]);

        DB::table('researches')->insert([
            'name' => 'WO41554',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 20,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 20,
            'cancer_code_param_id' => 1,
        ]);

        DB::table('researches')->insert([
            'name' => 'WO41554',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 21,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 21,
            'cancer_code_param_id' => 2,
        ]);

        DB::table('researches')->insert([
            'name' => '213831 (Zest)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 22,
            'cancer_code_id' => 1,
            'cancer_type_id' => 1,
            'cancer_type_param_id' => 2,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 22,
            'cancer_code_param_id' => 1,
        ]);

        DB::table('researches')->insert([
            'name' => '213831 (Zest)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 23,
            'cancer_code_id' => 1,
            'cancer_type_id' => 1,
            'cancer_type_param_id' => 2,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 23,
            'cancer_code_param_id' => 2,
        ]);

        DB::table('researches')->insert([
            'name' => '213831 (Zest)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 24,
            'cancer_code_id' => 1,
            'cancer_type_id' => 1,
            'cancer_type_param_id' => 2,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 24,
            'cancer_code_param_id' => 4,
        ]);

        DB::table('researches')->insert([
            'name' => 'WO41994',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 25,
            'cancer_code_id' => 5,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);

        DB::table('researches')->insert([
            'name' => 'BP40657',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 26,
            'cancer_code_id' => 7,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 26,
            'cancer_code_param_id' => 6,
        ]);

        DB::table('researches')->insert([
            'name' => 'BP40657',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 27,
            'cancer_code_id' => 7,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 27,
            'cancer_code_param_id' => 8,
        ]);

        DB::table('researches')->insert([
            'name' => 'Gastric03 (D967LC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '2',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 28,
            'cancer_code_id' => 4,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 28,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 29,
            'cancer_code_id' => 4,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 29,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 30,
            'cancer_code_id' => 4,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 30,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 31,
            'cancer_code_id' => 5,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 31,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 32,
            'cancer_code_id' => 5,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 32,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 33,
            'cancer_code_id' => 6,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 33,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 34,
            'cancer_code_id' => 6,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 34,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 35,
            'cancer_code_id' => 8,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 35,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 36,
            'cancer_code_id' => 8,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 36,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 37,
            'cancer_code_id' => 9,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 37,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 38,
            'cancer_code_id' => 9,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 38,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 39,
            'cancer_code_id' => 10,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 39,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 40,
            'cancer_code_id' => 10,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 40,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 41,
            'cancer_code_id' => 11,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 41,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 42,
            'cancer_code_id' => 11,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 42,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 43,
            'cancer_code_id' => 12,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 43,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 44,
            'cancer_code_id' => 12,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 44,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 45,
            'cancer_code_id' => 13,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 45,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 46,
            'cancer_code_id' => 13,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 46,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 47,
            'cancer_code_id' => 14,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 47,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'PanTumor (D967VC00001)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 48,
            'cancer_code_id' => 14,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 48,
            'cancer_code_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'ASTEFANIA (WO42633)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 49,
            'cancer_code_id' => 1,
            'cancer_type_id' => 1,
            'cancer_type_param_id' => 2,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 49,
            'cancer_code_param_id' => 9,
        ]);

        DB::table('researches')->insert([
            'name' => 'ASTEFANIA (WO42633)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 50,
            'cancer_code_id' => 1,
            'cancer_type_id' => 1,
            'cancer_type_param_id' => 2,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 50,
            'cancer_code_param_id' => 3,
        ]);

        DB::table('researches')->insert([
            'name' => 'GO41717',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 51,
            'cancer_code_id' => 7,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 51,
            'cancer_code_param_id' => 6,
        ]);

        DB::table('researches')->insert([
            'name' => 'GO41717',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 52,
            'cancer_code_id' => 7,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 52,
            'cancer_code_param_id' => 8,
        ]);

        DB::table('researches')->insert([
            'name' => 'MK-7339-003',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 53,
            'cancer_code_id' => 2,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'MK-7339-003',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 54,
            'cancer_code_id' => 3,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 5,
        ]);

        DB::table('researches')->insert([
            'name' => 'MK-6482-011',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 55,
            'cancer_code_id' => 5,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);

        DB::table('researches')->insert([
            'name' => 'MK-7339-002',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 56,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 56,
            'cancer_code_param_id' => 1,
        ]);

        DB::table('researches')->insert([
            'name' => 'MK-7339-002',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 57,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 57,
            'cancer_code_param_id' => 2,
        ]);

        DB::table('researches')->insert([
            'name' => 'MK-7339-002',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 58,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 58,
            'cancer_code_param_id' => 4,
        ]);

        DB::table('researches')->insert([
            'name' => 'MO42541',
            'hospital_id' => 2,
            'research_manager_id' => 2,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 59,
            'cancer_code_id' => 10,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);

        DB::table('researches')->insert([
            'name' => 'SGN22E-003',
            'hospital_id' => 2,
            'research_manager_id' => 2,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 60,
            'cancer_code_id' => 9,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);

        DB::table('researches')->insert([
            'name' => 'COPITELLO',
            'hospital_id' => 2,
            'research_manager_id' => 2,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 61,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 61,
            'cancer_code_param_id' => 4,
        ]);

        DB::table('researches')->insert([
            'name' => 'TROPION',
            'hospital_id' => 2,
            'research_manager_id' => 2,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 62,
            'cancer_code_id' => 7,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 62,
            'cancer_code_param_id' => 6,
        ]);

        DB::table('researches')->insert([
            'name' => 'TROPION',
            'hospital_id' => 2,
            'research_manager_id' => 2,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 63,
            'cancer_code_id' => 7,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 63,
            'cancer_code_param_id' => 8,
        ]);

        DB::table('researches')->insert([
            'name' => 'BP42772',
            'hospital_id' => 2,
            'research_manager_id' => 2,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 64,
            'cancer_code_id' => 8,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 3,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 64,
            'cancer_code_param_id' => 8,
        ]);

        DB::table('researches')->insert([
            'name' => 'BP42772',
            'hospital_id' => 2,
            'research_manager_id' => 2,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 65,
            'cancer_code_id' => 8,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 4,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 65,
            'cancer_code_param_id' => 8,
        ]);

        DB::table('researches')->insert([
            'name' => 'Breast08 (D967JC00002)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 66,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 5,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 66,
            'cancer_code_param_id' => 1,
        ]);

        DB::table('researches')->insert([
            'name' => 'Breast08 (D967JC00002)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 67,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 5,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 67,
            'cancer_code_param_id' => 2,
        ]);

        DB::table('researches')->insert([
            'name' => 'Breast08 (D967JC00002)',
            'hospital_id' => 1,
            'research_manager_id' => 1,
            'active' => '1',
        ]);
        DB::table('research_specifications')->insert([
            'research_id' => 68,
            'cancer_code_id' => 1,
            'cancer_type_id' => 2,
            'cancer_type_param_id' => 5,
        ]);
        DB::table('cancer_code_param_research_specification')->insert([
            'research_specification_id' => 68,
            'cancer_code_param_id' => 4,
        ]);

    }
}
