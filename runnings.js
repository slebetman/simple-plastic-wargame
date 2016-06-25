
exports.header = null;

exports.footer = {
	height: "1cm",
	contents: function(pageNum, numPages) {
		return '<div style="' +
			'text-align:center;' +
			'font: 0.5em sans-serif;' +
			'width:100%;' +
			'padding-top:2em;' +
		'">' +
			'page ' + pageNum + ' of ' + numPages +
		'</div>';
	}
}

