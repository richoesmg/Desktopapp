Ext.define('Desktopapp.store.Contacts', {
	extend: 'Ext.data.Store'
	
	,fields: ['id', 'name', 'age']
	
	,proxy: {
		type: 'rest'
		,url: 'data/contacts.json'
	}
	
	// ,autoLoad: true
	// ,autoSync: true
	// ,batch: true
})