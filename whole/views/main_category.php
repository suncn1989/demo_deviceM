<div class="padding20">
	<!--1st banner start-->
    <div class="firstB">
        <div class="firstB_text">
            当前位置
            <span class="firstB_text_sub">设备类别</span>
        </div>
        <div class="describe">
            <a href="#">设备类别</a>
            >
            <a href="#">类别操作</a>
        </div>
    </div>
    <!--1st banner end-->
    <!--main content start-->
    <div class="mainInfo">
    	<div class="describe">
            <button type="button" class="btn btn-primary" id="C_add" data-toggle="modal" data-target="#modal_C_add">增加</button>
            <button type="button" class="btn btn-danger" id="C_del" onclick=changeDisable("C")>删除</button>
        </div>
        <div class="C_content">
            <table class="table table-striped">
            	<thead>
                	<tr>
                    	<th>设备类别ID</th>
                        <th>设备类别名称</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody id="C_content_table">
                <!--
                    <tr>
                    	<th scope="row">1</th>
                        <td>服务器</td>
                        <td>
                        	<button type="button" class="btn btn-primary">修改</button>
                            <button type="button" class="btn btn-primary C_content_del" disabled="disabled" id="C_content_d_server">删除</button>
                        </td>
                    </tr>
                    <tr>
                    	<th scope="row">2</th>
                        <td>交换机</td>
                        <td>
                        	<button type="button" class="btn btn-primary">修改</button>
                            <button type="button" class="btn btn-primary C_content_del" disabled="disabled" id="C_content_d_switcher">删除</button>
                        </td>
                    </tr>
                    <tr>
                    	<th scope="row">3</th>
                        <td>存储</td>
                        <td>
                        	<button type="button" class="btn btn-primary">修改</button>
                            <button type="button" class="btn btn-primary C_content_del" disabled="disabled" id="C_content_d_storage">删除</button>
                        </td>
                    </tr>
                -->
                </tbody>
            </table>
        </div>
    </div>

	<!--modal delete start-->
    <div class="modal fade" id="modal_C_add" tabindex="-1" role="dialog" aria-labelledby="modal_C_add">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="modal_C_add"><b>增加设备类别</b></h4>
          </div>
          <div class="modal-body">
            <div class="row text-center font-size16" id="">
                <div class="col-xs-8 col-sm-6 text-right margin-top5">设备类别名称:</div>
                <div class="col-xs-8 col-sm-6 text-left"><input type="text" placeholder="设备类别名称" /></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary">保存</button>
          </div>
        </div>
      </div>
    </div>
    <!--modal delete end-->
    

    <!--main content end-->
</div>