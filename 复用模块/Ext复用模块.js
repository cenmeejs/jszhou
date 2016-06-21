{
    xtype:'button',
    text:'',
    border: false,
    width:32,
    height:32,
    style:{
        'margin-left':'20px',
        background:'url("../Gui/resources/images/grid/question_button.png") center no-repeat'
    },
    showWin:null,
    listeners:{
        mouseover:function(btn){
            btn.showWin = Ext.create({
                xtype:'window',
                height:43,
                minHeight:43,
                header:false,
                modal:false,
                layout:{
                    type:'hbox',
                    align:'middle'
                },
                bodyStyle:'border:0;background:#F6FBFF',
                y:btn.getY()-6,
                defaults:{
                    xtype:'tbtext',
                    height:24,
                    style:'padding-left:30px;line-height:24px;margin:0 10px;'
                },
                items:[
                    {
                        cls:'use-icon',
                        text:'启用'
                    },
                    {
                        cls:'unuse-icon',
                        text:'禁用'
                    },
                    {
                        cls:'edit-icon',
                        text:'编辑'
                    },
                    {
                        cls:'setAccess-icon',
                        text:'配置权限'
                    },
                    {
                        cls:'chongzhimima-icon',
                        text:'重置密码'
                    },
                    {
                        cls:'yongjinzhengce-icon',
                        text:'佣金管理'
                    },
                    {
                        cls:'advertiseManage-icon',
                        text:'广告管理'
                    },
                    {
                        cls:'channelManage-icon',
                        text:'电商渠道管理'
                    },
                    {
                        cls:'shangjia-icon',
                        text:'上架'
                    },
                    {
                        cls:'xiajia-icon',
                        text:'下架'
                    },
                    {
                        cls:'detail-icon',
                        text:'详情'
                    },
                    {
                        cls:'structure-icon',
                        text:'组织架构'
                    },
                    {
                        cls:'delete-icon',
                        text:'删除'
                    },
                    {
                        cls:'chongfa-icon',
                        text:'重发短信'
                    },
                    {
                        cls:'zhuanfa-icon',
                        text:'转发短信'
                    },
                    {
                        cls:'guanlian-icon',
                        text:'重新关联'
                    },
                    {
                        cls:'quxiaoguanlian-icon',
                        text:'解除关联'
                    },
                    {
                        cls:'edu-icon',
                        text:'信用额度'
                    },
                    {
                        cls:'remark-icon',
                        text:'备注'
                    }
                ]
            });
            btn.showWin.show();
            btn.showWin.setX(btn.getX()-btn.showWin.getWidth()-10);
        },
        mouseout:function(btn){
            btn.showWin.hide();
        }
    }
}
/**
 *grid中的鼠标悬停
 *
 */
renderer:function(value,metaData,record){
    metaData.tdAttr = 'data-qtip="' + value+'"';
    return value
}

/**
 *view模板
 *
 */
 Ext.define('App.view.systemSetting.ticketTemplateGrid',{
    extend:'Ext.grid.Panel',
    xtype:'ticketTemplateGrid',
    initComponent:function(){
        Ext.apply(this,{
            store:Ext.create('App.store.systemSetting.ticketTemplateStore'),
            columns:[
                {
                    xtype: 'rownumberer',
                    text: '序号',
                    align: 'center',
                    width: 50
                },
                {
                    text:'门票名称',
                    dataIndex:'name',
                    flex:1
                },
                {
                    xtype: 'actioncolumn',
                    id: 'ticketTemplateGridActionColumn',
                    menuDisabled: true,
                    text: '操作',
                    width: USERINFO.base_user_type == '3' ? 50 : 120,
                    align: 'center',
                    items: [
                        {
                            iconCls: 'x-hidden',
                            authRuleName: 'ticketTemplate_edit',
                            tooltip: '编辑',
                            getClass: function(v, metadata, record, rowIndex, colIndex, store) {
                                if (record.get('user_id') != USERINFO.id) {
                                    return 'x-hidden';
                                }
                                return 'edit-icon';
                            },
                            handler: function(view, rowIndex, colIndex, item, e, record) {
                                this.fireEvent('edit', record);
                            }
                        },
                        {
                            iconCls: 'x-hidden',
                            authRuleName: 'ticketTemplate_showDetail',
                            tooltip: '详情',
                            getClass: function(v, metadata, record, rowIndex, colIndex, store) {
                                return 'detail-icon';
                            },
                            handler: function(view, rowIndex, colIndex, item, e, record) {
                                this.fireEvent('showDetail', record);
                            }
                        },
                        {
                            iconCls: 'x-hidden',
                            authRuleName: 'ticketTemplate_delete',
                            tooltip: '删除',
                            getClass: function(v, metadata, record, rowIndex, colIndex, store) {
                                if (record.get('user_id') != USERINFO.id) {
                                    return 'x-hidden';
                                }
                                return 'delete-icon';
                            },
                            handler: function(view, rowIndex, colIndex, item, e, record) {
                                this.fireEvent('delete', record);
                            }
                        }
                    ]
                }
            ]
        });
        this.callParent(arguments);
    }
});

/**
 *controller模板
 *
 */
Ext.define('App.controller.systemSetting.ticketTemplateGridController',{
    extend:'Ext.app.Controller',
    views:'App.view.systemSetting.ticketTemplateGrid',
    init:function(){
        this.control({
            ticketTemplateGrid:{
                afterrender:function(grid){
                    
                }
            }
        });
    }
});

/**
 *store模板
 *
 */
Ext.define('App.store.systemSetting.ticketTemplateStore',{
    extend:'Ext.data.Store',
    model:'App.model.systemSetting.ticketTemplateModel',
    autoLoad:true,
    proxy:{
        type:'ajax',
        url:APP_URL+'',
        reader:{
            type:'json',
            rootProperty:'list',
            totalProperty:'total'
        }
    }
    //data: [
    //    {
    //        title: '升级了！',
    //        content: '美景秀平台已经优化升级啦……',
    //        publisher: 'glanhu',
    //        publishTime: '2016-1-11 15:45',
    //        updateTime: '2016-1-11 18:32'
    //    }
    //]
});

/**
 *model模板
 *
 */
 Ext.define('App.model.systemSetting.ticketTemplateModel',{
    extend:'Ext.data.Model',
    fields:[]
});

/**
 *window模块
 *
 */
Ext.create('Ext.window.Window',{
	title:'',
	width:600,
	height:500,
	autoShow:true,
	closable:true,
	scrollable:'y',
	modal:true,
	layout:'hbox',
	bbar:['->',{
		text:'删除',
		handler:function(o){
			o.up('window').close();
		}
	}],
	items:[{
		
	}]
})

/**
 *Ajax请求模块
 *
 */
Ext.Ajax.request({
    url:APP_URL+'Channel/changeUserPlatformInterface',
    method:'post',
    params:{
        id:record.get('id')
    },
    success: function(response, opts) {
        var text = Ext.decode(response.responseText);
        checkTimeOut(text)
        if (text.success === false) {
            Ext.Msg.alert('提示',text.msg);
            return;
        }
        Ext.toast({
            title: '提示',
            width: 200,
            align: 't',
            html: text.msg
        });
        Ext.getCmp('myChannelGrid').getStore().loadPage(1);
    },
    failure: function(response, opts) {
        Ext.Msg.alert('提示','请求失败的状态码：' + response.status);
    }
});
/**
 *表单提交
 */
form.getFrom().submit({
    waitMsg: '提交中...',
    submitEmptyText: false,
    method: 'post',
    url: __APP__+"/Contract/addContract",
    params:{
      pid:o.up('window').pid
    },
    success: function(form, action){
        var result = action.result;
        checkTimeOut(text)
        Ext.toast({
            title: '提示',
            width: 200,
            align: 't',
            html: result.msg
        });
    },
    failure: function(form, action) {
        switch (action.failureType) {
            case Ext.form.action.Action.CLIENT_INVALID:
              Ext.Msg.alert('失败', '无效输入');
              break;
            case Ext.form.action.Action.CONNECT_FAILURE:
              Ext.Msg.alert('失败', '联网失败');
              break;
            case Ext.form.action.Action.SERVER_INVALID:
             Ext.Msg.alert('失败', action.result.msg);
        }
    }
});
/**
 *store定义
 *
 */
Ext.create('Ext.data.Store',{
	fields:['payTime','sort','sum'],
	autoLoad:true,
	pageSize:'25',
	proxy: {
		type: 'ajax',
		url: APP_URL+'Account/consumeList',
		reader: {
			type: 'json',
			rootProperty: 'list',
			totalProperty: 'total'
		}
	}
})
/**
 *pagingtoolbar
 *
 */
bbar:[{
	xtype:'pagingtoolbar',
	store:'',
	displayInfo: true,
	border:false
}]
/**
 *加载数据
 *
 */
afterrender:function(o){
	o.down('grid').getStore().getProxy().setConfig('extraParams',{
		starttime:''
		endtime:'',
		type:''
	});
	o.down('grid').getStore().loadPage(1);
}
/**
 * 响应式插件
 * Ext.plugin.Responsive: 为Ext.Component添加响应能力
 * Ext.mixin.Responsive: 为其他类添加响应能力
 *
 */
plugins: 'responsive',
responsiveConfig: {
	'width<820':{
		width:200
	},
	'width < 1020 && width>=820': {
		width: '100%'
	},
	'width >= 1020': {
		width: 1020
	}
},
/**
 *Ext.toast
 *
 */
Ext.toast({
	html: text.msg,
	title: '提示',
	width: 200,
	align: 't'
});
/**
 *手机号正则
 *
 */
 /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/


/**
 * 动态增加控制器
 * @param name 控制器名字
 */
window.Controllers = function(name){
    var ctls=Ext.Array.from(name);
    var app=App.getApplication();
    for (var i = 0, ln = ctls.length; i < ln; i++) {
         app.getController(ctls[i]);
    }
}

/**
 * 标记为必填项
 */
afterLabelTextTpl: '<span style="color:red">*</span>',

/**
 *双线夹字
 */
{
	xtype:'component',
	autoEl:'div',
	height:1,
	style:'background-color:#ccc;',
	margin:0
},
{
	xtype:'tbtext',
	text:'订单信息',
	margin:'10 0 10 5'
},
{
	xtype:'component',
	autoEl:'div',
	height:1,
	style:'background-color:#ccc;',
	margin:0
}
/**
 *提交中
 */
var myMask = new Ext.LoadMask({
    msg    : '提交中',
    autoShow:true,
    target : 
});
var myMask = Ext.create('Ext.window.Window', {
    width: 32,
    height: 32,
    autoShow:true,
    header: false,
    bodyStyle: 'border: 0;background-color: transparent;',
    style: 'border: 0;background-color: transparent;',
    modal: true,
    html: '<img src="../Gui/resources/images/common/loading.gif">'
});
/**
 *
 */
plugins: {
    ptype: 'rowediting',
    clicksToEdit: 2
},
editor: {
    xtype: 'textfield',
    allowBlank: false
}

/**
 *
 */
 {
	xtype: 'combo',
	fieldLabel: '企业名称',
	displayField:'name',
	valueField:'id',
	itemId:'comp_name',
	store: Ext.create('Ext.data.Store',{
		field:['id','name'],
		autoLoad:true,
		proxy: {
			type: 'ajax',
			url: APP_URL + '/Channel/getCompanyList',
			reader: {
				type: 'json',
				rootProperty: 'list',
				totalProperty: 'total'
			}
		},
	})
}
/**
 *
 */
 Ext.create('Ext.window.Window', {
    title: '详细信息',
    width: 500,
    height: 500,
    autoShow: true,
    scrollable: 'y',
	bbar:['->',{
		text:'关闭',
		margin:'0 30 0 0',
		handler:function(btn){
			btn.up('window').close();
		}
	}],
    items: [{
        xtype: 'form',
        defaults: {
			xtype: 'displayfield',
            margin: '-10 10 10 60',
			labelAlign:'right'
        },
		border:0,
        items: [{
			xtype:'tbtext',
			text:'产品基本信息',
			margin:'10 0 10 5',
			style:'font-size:20px;font-weight:bold;'
		},{
			xtype:'component',
			autoEl:'div',
			height:1,
			style:'background-color:#5FA2DD;',
			margin:0
		},{
            fieldLabel: '产品名称',
			margin: '10 10 10 60',
            name: 'productName'
        },{
            fieldLabel: '产品编号',
            name: 'productCode'
        },{
			fieldLabel: '产品图片',
			value:'<img src="../Gui/extjs6/images/bg3.jpg" style="width:100px;height:100px;">'
        },{
            fieldLabel: '产品类型',
            name: 'productType'
        },{
            fieldLabel: '成人价',
            name: ''
        },{
            fieldLabel: '儿童价',
            name: ''
        },{
            fieldLabel: '<b>供货方</b>',
            name: ''
        },{
			xtype:'component',
			autoEl:'div',
			height:1,
			style:'background-color:#5FA2DD;',
			margin:0
		},{
			xtype:'tbtext',
			text:'订单信息',
			margin:'10 0 10 5',
			style:'font-size:20px;font-weight:bold;'
		},{
			xtype:'component',
			autoEl:'div',
			height:1,
			style:'background-color:#5FA2DD;',
			margin:0
		},{
            margin: '10 10 10 60',
            fieldLabel: '订单编号',
            name: 'orderNumber'
        },{
            fieldLabel: '原订单编号',
            name: 'oldOrderNumber'
        },{
			labelSeparator:'',
			fieldLabel:' ',
			value:'成人<span style="color:red"> 3 </span>张 &nbsp;儿童<span style="color:red"> 5 </span>张'
		},{
            fieldLabel: '总价',
            name: 'sum'
        },{
            fieldLabel: '游玩时间',
            name: 'touringDate'
        },{
            fieldLabel: '订单来源',
            name: 'channel'
        },{
            fieldLabel: '下单用户',
            name: ''
        },{
            fieldLabel: '成交时间',
            name: 'orderDate'
        },{
            fieldLabel: '购票人',
            name: ''
        },{
            fieldLabel: '手机号码',
            name: ''
        },{
            fieldLabel: '游客备注',
            name: ''
        },{
			xtype:'component',
			autoEl:'div',
			height:1,
			style:'background-color:#5FA2DD;',
			margin:0
		},{
			xtype:'tbtext',
			text:'电子码信息',
			margin:'10 0 10 5',
			style:'font-size:20px;font-weight:bold;'
		},{
			xtype:'component',
			autoEl:'div',
			height:1,
			style:'background-color:#5FA2DD;',
			margin:0
		},{
			margin: '10 10 10 60',
            fieldLabel: '码号',
            name: 'EPC'
        },{
            fieldLabel: '状态',
            name: 'status'
        },{
            fieldLabel: '消费数量',
            name: ''
        },{
            fieldLabel: '退款数量',
            name: ''
        },{
            fieldLabel: '消费时间',
            name: ''
        }],
        listeners: {
            afterrender: function(form) {
                Ext.Ajax.request({
                   url: APP_URL + 'Orders/showOrders',
                   method: 'post',
                   params: {
                       id: record.get('id')
                   },
                   success: function(response) {
                       var text = Ext.decode(response.responseText);
                       if (text.success) {
                           form.getForm().setValues(text.data);
                       } else {
                           Ext.Msg.alert('提示', text.msg);
                       }
                   },
                   failure: function(response) {
                       var text = Ext.decode(response.responseText);
                       Ext.Msg.alert('提示', text.msg);
                   }
                });
            }
        }
    }]
});
 /**
  *
  */
Ext.create('Ext.window.Window', {
    title: '详细信息',
    width: 500,
    height: 500,
    autoShow: true,
    scrollable: 'y',
    bbar:['->',{
        text:'关闭',
        margin:'0 30 0 0',
        handler:function(btn){
            btn.up('window').close();
        }
    }],
    items: [{
        xtype: 'form',
        defaults: {
            xtype: 'displayfield',
            margin: '-10 10 10 60',
            labelAlign:'right'
        },
        border:0,
        items: [{
            xtype:'tbtext',
            text:'企业信息',
            margin:'10 0 10 5',
            style:'font-size:20px;font-weight:bold;'
        },{
            xtype:'component',
            autoEl:'div',
            height:1,
            style:'background-color:#5FA2DD;',
            margin:0
        },{
            fieldLabel: '企业名称',
            margin: '10 10 10 60',
            name: 'name'
        },{
            fieldLabel: '企业码',
            name: 'comp_sign'
        },{
            fieldLabel: '联系人',
            name:'contact_name'
        },{
            fieldLabel: '联系电话',
            name: 'contact_tel'
        },{
            xtype:'component',
            autoEl:'div',
            height:1,
            style:'background-color:#5FA2DD;',
            margin:0
        },{
            xtype:'tbtext',
            text:'管理员信息',
            margin:'10 0 10 5',
            style:'font-size:20px;font-weight:bold;'
        },{
            xtype:'component',
            autoEl:'div',
            height:1,
            style:'background-color:#5FA2DD;',
            margin:0
        },{
            margin: '10 10 10 60',
            fieldLabel: '用户名',
            name: 'uname'
        },{
            fieldLabel: '手机',
            name: 'mobile'
        },{
            fieldLabel: '邮箱',
            name: 'email'
        },{
            fieldLabel: '证件号码',
            name: 'id_card'
        },,{
            xtype:'component',
            autoEl:'div',
            height:1,
            style:'background-color:#5FA2DD;',
            margin:0
        },{
            xtype:'tbtext',
            text:'API信息',
            margin:'10 0 10 5',
            style:'font-size:20px;font-weight:bold;'
        },{
            xtype:'component',
            autoEl:'div',
            height:1,
            style:'background-color:#5FA2DD;',
            margin:0
        },{
            margin: '10 10 10 60',
            fieldLabel: '对接平台',
            name: 'auth_code'
        },{
            fieldLabel: '状态',
            name: 'status'
        }],
        listeners: {
            afterrender: function(form) {
                Ext.Ajax.request({
                    url: APP_URL + 'Channel/getCompanyExtraDetail',
                    method: 'post',
                    params: {
                        id: record.get('id')
                    },
                    success: function(response) {
                        var text = Ext.decode(response.responseText);
                        if (text.success) {
                            text.data.status==0?text.data.status='禁用':text.data.status='启用'
                            form.getForm().setValues(text.data);
                        } else {
                            Ext.Msg.alert('提示', text.msg);
                        }
                    },
                    failure: function(response) {
                        var text = Ext.decode(response.responseText);
                        Ext.Msg.alert('提示', text.msg);
                    }
                });
            }
        }
    }]
});