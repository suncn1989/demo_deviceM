<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
| example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
| http://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
| $route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
| $route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
| $route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples: my-controller/index -> my_controller/index
|   my-controller/my-method -> my_controller/my_method
*/
$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = TRUE;

/*
| -------------------------------------------------------------------------
| DEV-MANAGER REST API Routes
| -------------------------------------------------------------------------
*/
/*
| --------- |
| CATEGORYS |
| --------- |
*/
//依据ID获取一个设备类型，返回404表示没有这个类型
$route['api/categorys/(:num)']['GET'] = 'api/categorys/getone/$1';
//获取设备类型列表，如果需要分页可以带上num（每页数），page（第几页）,返回404代表超出。
$route['api/categorys/num/(:num)/page/(:num)'] = 'api/categorys/index/$1/$2';
/*增加设备类型，post一个JSON数据，格式如下：

[
	{
	"name": "工作站"
	}
]

|  成功后将会返回201 ，同时返回添加的数据JSON格式
*/
$route['api/categorys']['POST'] = 'api/categorys/addcategorys';
/*修改设备类型，put一个JSON数据，格式如下：

[
	{
	"id":"9",
	"name": "工作站"
	}
]

|  成功后将会返回200 ，同时返回修改后的数据JSON格式
*/
$route['api/categorys']['PUT'] = 'api/categorys/updatecategorys';
$route['api/categorys/(:num)']['DELETE'] = 'api/categorys/deletecategorys/$1';

$route['api/example/users/(:num)'] = 'api/example/users/id/$1'; // Example 4
$route['api/example/users/(:num)(\.)([a-zA-Z0-9_-]+)(.*)'] = 'api/example/users/id/$1/format/$3$4'; // Example 8


/*
| ------ |
| BRANDS |
| ------ |
*/
//依据ID获取一个设备品牌，返回404表示没有这个类型
$route['api/brands/(:num)']['GET'] = 'api/brands/getone/$1';
//获取设备品牌列表，如果需要分页可以带上num（每页数），page（第几页）,返回404代表超出。
$route['api/brands/num/(:num)/page/(:num)'] = 'api/brands/index/$1/$2';
/*增加设备品牌，post一个JSON数据，格式如下：
[
	{
		"name": "华为HUAWEI"
	}
]

|  成功后将会返回201 ，同时返回添加的数据JSON格式
*/

$route['api/brands']['POST'] = 'api/brands/addbrands';
/*修改设备品牌，put一个JSON数据，格式如下：

[
	{
		"id":"7",
		"name": "netapp"
	}
]

|  成功后将会返回200 ，同时返回修改后的数据JSON格式
*/
$route['api/brands']['PUT'] = 'api/brands/updatebrands';
$route['api/brands/(:num)']['DELETE'] = 'api/brands/deletebrands/$1';

/*
| --------- |
| position |
| --------- |
*/
//依据ID获取一个设备类型，返回404表示没有这个位置
$route['api/position/(:num)']['GET'] = 'api/position/getone/$1';
//获取设备位置列表，如果需要分页可以带上num（每页数），page（第几页）,返回404代表超出。
$route['api/position/num/(:num)/page/(:num)'] = 'api/position/index/$1/$2';
/*增加设备类型，post一个JSON数据，格式如下：

[
	{
	"name": "工作站"
	}
]

|  成功后将会返回201 ，同时返回添加的数据JSON格式
*/
$route['api/position']['POST'] = 'api/position/addposition';
/*修改设备类型，put一个JSON数据，格式如下：

[
	{
	"id":"9",
	"name": "工作站"
	}
]

|  成功后将会返回200 ，同时返回修改后的数据JSON格式
*/
$route['api/position']['PUT'] = 'api/position/updateposition';
$route['api/position/(:num)']['DELETE'] = 'api/position/deleteposition/$1';

$route['api/maininfo/(:num)']['GET'] = 'api/maininfo/getone/$1';
$route['api/maininfo/num/(:num)/page/(:num)'] = 'api/maininfo/index/$1/$2';



/*
| --------- |
| ASSET_TAG |
| --------- |
*/
//依据ID获取一个设备品牌，返回404表示没有这个类型
$route['api/assettags/(:num)']['GET'] = 'api/assettags/getone/$1';
//获取设备品牌列表，如果需要分页可以带上num（每页数），page（第几页）,返回404代表超出。
$route['api/assettags/num/(:num)/page/(:num)'] = 'api/assettags/index/$1/$2';
/*增加设备品牌，post一个JSON数据，格式如下：
[
	{
		"number": "number0303040115"
	}
]

|  成功后将会返回201 ，同时返回添加的数据JSON格式
*/

$route['api/assettags']['POST'] = 'api/assettags/addassettags';
/*修改设备品牌，put一个JSON数据，格式如下：

[
	{
		"id":"1",
		"number": "number03030401150000"
	}
]

|  成功后将会返回200 ，同时返回修改后的数据JSON格式
*/
$route['api/assettags']['PUT'] = 'api/assettags/updateassettags';
$route['api/assettags/(:num)']['DELETE'] = 'api/assettags/deleteassettags/$1';


/*
| ------ |
| sYSTEM |
| ------ |
*/
//依据ID获取一个设备品牌，返回404表示没有这个类型
$route['api/system/(:num)']['GET'] = 'api/system/getone/$1';
//获取设备品牌列表，如果需要分页可以带上num（每页数），page（第几页）,返回404代表超出。
$route['api/system/num/(:num)/page/(:num)'] = 'api/system/index/$1/$2';
/*增加设备品牌，post一个JSON数据，格式如下：
[
	{
		"name": "nameWindows555555"
	}
]

|  成功后将会返回201 ，同时返回添加的数据JSON格式
*/

$route['api/system']['POST'] = 'api/system/addsystem';
/*修改设备品牌，put一个JSON数据，格式如下：

[
	{
		"id":"5",
		"name": "nameWindows66666"
	}
]

|  成功后将会返回200 ，同时返回修改后的数据JSON格式
*/
$route['api/system']['PUT'] = 'api/system/updatesystem';
$route['api/system/(:num)']['DELETE'] = 'api/system/deletesystem/$1';
