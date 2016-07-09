Ext.define('Desktopapp.controller.Main', {

	extend: 'Ext.app.Controller'

	,init: function(){
		this.control({
			'mygrid button#refresh': {
				click: 'onRefresh'
			}
		})
	}

	,onRefresh: function(btn){
		console.info('onRefresh');
		// Ext.getStore('Contacts').load();
		btn.up('grid').getStore().load();
	}

	,onLaunch: function(){
		console.info('controller loaded');
	}
})