 	<div class="padding20">
            	<!--1st banner start-->
                <div class="firstB">
                	<div class="firstB_text">
                    	设备管理系统
                        <span class="firstB_text_sub">系统首页</span>
                    </div>
                    <div class="describe">
                    	<a href="#">系统首页</a>
                        >
                        <a href="#">分块展示</a>
                    </div>
                </div>
                <!--1st banner end-->
                <!--main content start-->
                <div class="mainInfo">
                	<div class="col-sm-3">
                    	<div class="infoDetail bgcolor_1 clear">
                        	<div class="left infoDetail_logo">
                                	<i class="fa fa-sitemap fa-3"></i>
                            </div>
                            <div class="infoDetail_content">
                            	<p>设备类别数量</p>
                                <a id="mainInfo1_num" href="#" data-toggle="modal" data-target="#modal_device"><img src="application/views/images/loading.gif" /></a>
                            </div>
                            
                            <div class="infoDetail_more bgcolor_6">
                            	<a href="#" data-toggle="modal" data-target="#modal_device">more</a>
                            </div>
                        </div>
                    </div>
                    <div id="mainInfo2"class="col-sm-3">
                    	<div class="infoDetail bgcolor_2 clear">
                        	<div class="left infoDetail_logo">
                                	<i class="fa fa-info-circle fa-3"></i>
                            </div>
                            <div class="infoDetail_content">
                            	<p>品牌种类</p>
                                <a id="mainInfo2_num" href="#" data-toggle="modal" data-target="#modal_brand"><img src="application/views/images/loading.gif" /></a>
                            </div>
                            <div class="infoDetail_more bgcolor_7">
                            	<a href="#" data-toggle="modal" data-target="#modal_brand">more</a>
                            </div>
                        </div>
                    </div>
                    <div id="mainInfo3"class="col-sm-3">
                    	<div class="infoDetail bgcolor_3 clear">
                        	<div class="left infoDetail_logo">
                                	<i class="fa fa-windows fa-3"></i>
                            </div>
                            <div class="infoDetail_content">
                            	<p>系统分类</p>
                                <a id="mainInfo3_num" href="#" data-toggle="modal" data-target="#modal_system"><img src="application/views/images/loading.gif" /></a>
                            </div>
                            <div class="infoDetail_more bgcolor_8">
                            	<a href="#" data-toggle="modal" data-target="#modal_system">more</a>
                            </div>
                        </div>
                    </div>
                    <div id="mainInfo4"class="col-sm-3">
                    	<div class="infoDetail bgcolor_4 clear">
                        	<div class="left infoDetail_logo">
                                	<i class="fa fa-files-o fa-3"></i>
                            </div>
                            <div class="infoDetail_content">
                            	<p>资产信息</p>
                                <a id="mainInfo4_num" href="#" data-toggle="modal" data-target="#modal_assets"><img src="application/views/images/loading.gif" /></a>
                            </div>
                            <div class="infoDetail_more bgcolor_9">
                            	<a href="#" data-toggle="modal" data-target="#modal_assets">more</a>
                            </div>
                        </div>
                    </div>
					<!--modal start-->
                    <!-- Modal device -->
                    <div class="modal fade" id="modal_device" tabindex="-1" role="dialog" aria-labelledby="modalLabel_device">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="modalLabel_device">设备类别数量</h4>
                          </div>
                          <div class="modal-body">
                            <div class="row text-center font-size16" id="modal_body_device">
                            	<div class="col-xs-8 col-sm-6 margin-bottom20"><strong> 设备品种名称 </strong></div>
                                <div class="col-xs-8 col-sm-6 margin-bottom20"><strong> 数量 </strong></div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    
                    <!-- Modal brand -->
                    <div class="modal fade" id="modal_brand" tabindex="-1" role="dialog" aria-labelledby="modalLabel_brand">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="modalLabel_brand">品牌种类</h4>
                          </div>
                          <div class="modal-body">
                            <div class="row text-center font-size16" id="modal_body_brand">
                            	<div class="col-xs-8 col-sm-6 margin-bottom20"><strong> 品牌名称 </strong></div>
                                <div class="col-xs-8 col-sm-6 margin-bottom20"><strong> 数量 </strong></div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    
                    <!-- Modal system -->
                    <div class="modal fade" id="modal_system" tabindex="-1" role="dialog" aria-labelledby="modalLabel_system">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="modalLabel_system">系统分类</h4>
                          </div>
                          <div class="modal-body">
                            <div class="row text-center font-size16" id="modal_body_system">
                            	<div class="col-xs-8 col-sm-4 margin-bottom20"><strong> 所属系统 </strong></div>
                            	<div class="col-xs-8 col-sm-4 margin-bottom20"><strong> 功能模块 </strong></div>
                                <div class="col-xs-8 col-sm-4 margin-bottom20"><strong> 数量 </strong></div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    
                    <!-- Modal assets -->
                    <div class="modal fade" id="modal_assets" tabindex="-1" role="dialog" aria-labelledby="modalLabel_assets">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="modalLabel_assets">资产信息</h4>
                          </div>
                          <div class="modal-body">
                            <div class="row text-center font-size16" id="modal_body_assets">
                            	<div class="col-xs-8 col-sm-6 margin-bottom20"><strong> 资产编号 </strong></div>
                                <div class="col-xs-8 col-sm-6 margin-bottom20"><strong> 数量 </strong></div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                	<!--modal end-->
                </div>
                
                <!--main content end-->
                <!--position content start-->
                <div class="position_content">
                    <div class="position_content_title">
                        <span class="position_content_title_span">
                           <i class="fa fa-map-marker fa-3"></i>
                            设备位置
                        </span>
                    </div>
                    <div class="position_content_tabs">
                    	<ul id="position_content_tabs" class="nav nav-tabs">
<!--
                            <li class="active"><a href="#position_content_content_3f" data-toggle="tab">3楼</a></li>
                            <li><a href="#position_content_content_5f" data-toggle="tab">5楼</a></li>
                            <li><a href="#position_content_content_6f" data-toggle="tab">6楼</a></li>
                            <li><a href="#position_content_content_16f" data-toggle="tab">16楼</a></li>
                            <li><a href="#position_content_content_32f" data-toggle="tab">32楼</a></li>
-->
                    	</ul>
                    
                    	<div id="position_content_tabs_content" class="tab-content">
<!--
                            <div id="position_content_content_3f" class="tab-pane fade in active">	
                            	<img src="application/views/images/loading.gif" />
                            </div>
                            <div id="position_content_content_5f" class="tab-pane fade">
                            	<img src="application/views/images/loading.gif" />
                            </div>
                            <div id="position_content_content_6f" class="tab-pane fade">	
                            	<img src="application/views/images/loading.gif" />
                            </div>
                            <div id="position_content_content_16f" class="tab-pane fade">	
                            	<img src="application/views/images/loading.gif" />
                            </div>
                            <div id="position_content_content_32f" class="tab-pane fade">	
                            	<img src="application/views/images/loading.gif" />
                            </div>
                        -->
                        </div>
                    </div>
                </div>
                
                <!--tab's modal start-->
                <div class="modal fade" id="modal_assets" tabindex="-1" role="dialog" aria-labelledby="modalLabel_assets">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="modalLabel_assets">资产信息</h4>
                          </div>
                          <div class="modal-body">
                            <div class="row text-center font-size16" id="modal_body_assets">
                            	<div class="col-xs-8 col-sm-6 margin-bottom20"><strong> 资产编号 </strong></div>
                                <div class="col-xs-8 col-sm-6 margin-bottom20"><strong> 数量 </strong></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                <!--tab's modal end-->
                <!--position content end-->
                
                <!--bottom tables start-->
                <div class="table_content">
                
                <!--
                	<div class="table_content_left left marginLeft20 bgcolor_1">
                        <div class="table_content_title">
                            <span class="table_content_title_span">
                                <i class="fa fa-map-marker fa-3"></i>
                                设备位置
                            </span>
                        </div>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>11</th>
                                    <th>22</th>
                                    <th>33</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                 
                    </div>
                 -->
                    <div class="table_content_left left marginLeft20 bgcolor_2">
                        <div class="table_content_title">
                            <span class="table_content_title_span">
                                <i class="fa fa-wrench fa-3"></i>
                                维修记录
                            </span>
                        </div>
                        <div id="fix_log"><img src='application/views/images/loading.gif' /></div>
                    </div>
                    <div class="table_content_mid left marginLeft20 bgcolor_3">
                    	 <div class="table_content_title">
                            <span class="table_content_title_span">
                                <i class="fa fa-check-square fa-3"></i>
                                定检记录
                            </span>
                        </div>
                        <div id="check_log"><img src='application/views/images/loading.gif' /></div>
                  
                    </div>
                    <div class="table_content_right left marginLeft20 bgcolor_3">
                    	 <div class="table_content_title">
                            <span class="table_content_title_alert">
                                <i class="fa fa-exclamation-triangle fa-3"></i>
                                保修到期预警
                            </span>
                        </div>
                        <div id="what_will_end"><img src='application/views/images/loading.gif' /></div>
                    </div>
                </div>
                <!--bottom tables end-->
            </div>