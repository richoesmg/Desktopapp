/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Desktopapp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Desktopapp.view.main.MainController',
        'Desktopapp.view.main.MainModel',
        'Desktopapp.view.main.List',

        'Desktopapp.view.main.Form',
        'Desktopapp.view.main.Grid'

    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
                    tabConfig: {                    
        tooltip: 'Tooltip text',
        textAlign: 'left'
    },
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Alert Me',
        iconCls: 'fa-warning',
        tip: 'bello',
		//html: 'That is alert Page',
		bind: {
			html: '{myalert}'
		},
		//renderTo: Ext.getBody(),
		listeners: {
            onItemSelected: function() {
                Ext.Msg.alert('Alert','Hello Alert bhai');
            }
        }
    }, {
        iconCls: 'fa-cloud',
        xtype: 'grid',
        title: 'Grid Details',
        store: { type: 'details' },
        columns: [
            { text: 'Name', dataIndex: 'name', flex: 1 },
            { text: 'Phone', dataIndex: 'phone', flex: 1 }
        ],
     /*   bind:{
            store: { type: 'details' }
        }*/
    }, {
        xtype: 'textfield',
        title: 'heel',
            fieldLabel: 'My label',
            fieldStyle: 'text-align: right;'
    },config: {
        items: [{
            title: 'Home'
             ,html: 'This is the Home Page'

        },{
            title: 'Contacts'
             ,html: 'About Us'
 
        }]
    }]
});
