Ext.define('Desktopapp.view.main.Grid', {

	extend: 'Ext.grid.Panel'

	,xtype: 'mygrid'

	,title: 'Contacts'
	,forceFit: true
	,columns: [{
		text: 'Name'
		,dataIndex: 'name'
	},{
		text: 'Age'
		,width: 50
		,dataIndex: 'age'
	}]
	,store: 'Contacts'
	
	,tbar: [{
		xtype: 'button'
		,text: 'Refresh'
		,itemId: 'refresh'
	}]
})