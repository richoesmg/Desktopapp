Ext.define('Desktopapp.view.main.Form', {

	extend: 'Ext.form.Panel'

	,xtype: 'myform'

	,title: 'Your Details'
	,items: [{
		xtype: 'textfield'
		,name: 'name'
		,fieldLabel: 'Name'
		,allowBlank: false
	},{
		xtype: 'numberfield'
		,name: 'age'
		,fieldLabel: 'Age'
	}]
})