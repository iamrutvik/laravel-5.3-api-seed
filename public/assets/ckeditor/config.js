/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.extraPlugins = 'oembed,widget';
	config.oembed_maxWidth = '560';
	config.oembed_maxHeight = '315';
	config.oembed_WrapperClass = 'embededContent';
	config.extraPlugins = 'lineutils';
	config.removePlugins = 'elementspath'; 
	// If the default site font size is 12px, we may making it more explicit to the end user.
	config.fontSize_defaultLabel = '16px';
	config.toolbar_Basic =
	[
		['Source', '-','oembed','Bold', 'Italic', 'Underline', '-', 'NumberedList', 'BulletedList' ,'-' ,'Link', 'Unlink', 'Anchor','blocks', 'Image','Styles','Format','Font','FontSize','-','Undo','Redo','-','About']
	];
	config.toolbar = 'Basic';
};
