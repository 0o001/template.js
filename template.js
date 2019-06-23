module.exports = String.prototype.template = function(formats = {}) {

    if(formats.constructor !== Object) {

        throw new 'formats is not Object'

	}

    return new Function( ...Object.keys(formats), ` return \`${this}\` ` )( ...Object.values(formats) )
    
}