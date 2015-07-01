function SafeAcces() {}

//mediante getters y setters podemos controlar que existe la propiedad a la que estamos accediendo.
SafeAcces.prototype.get = function (prop) {
	var value = this[prop]
	if (value === undefined) {
		throw new Error('"' + prop + '" doesn\'t exist.')
	}
	return value
}

SafeAcces.prototype.set = function (prop, value) {
	this.get(prop);
	this[prop] = value
	return value
}

module.exports = SafeAcces
