'use strict';
const path = require('path');
const fs = require('fs');

const vendor = path.resolve(__dirname, '../vendor');

const dataBindingLocation = path.resolve(vendor, process.platform === 'darwin' ? 'osx' : process.platform, 'jpeg-recompress');
const dest = path.resolve(vendor,'jpeg-recompress', process.platform === 'win32' ? '.exe' : '');

if(!fs.existsSync(vendor)){
	fs.mkdirSync(vendor);
}

fs.createReadStream(dataBindingLocation).pipe(fs.createWriteStream(dest,{
	mode: 755,
	autoClose: true
}));

// fs.chmodSync(dest,755);

module.exports = {
	path: function(){
		return dest;
	}
}


// module.exports = new BinWrapper(})
// 	.src(`${vendor}osx/jpeg-recompress`, 'darwin')
// 	.src(`${vendor}linux/jpeg-recompress`, 'linux')
// 	.src(`${vendor}win/jpeg-recompress.exe`, 'win32')
// 	.dest(vendor)
// 	.use(process.platform === 'win32' ? 'jpeg-recompress.exe' : 'jpeg-recompress');
