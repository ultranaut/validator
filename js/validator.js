var U = {};

U.validator = (function () {
	var _config,
		_checks = {
			isValidEmail: function (v) {
				return (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/).test(v)
			},
			isNonEmpty: function (v) {
				return v !== ''
			}
		},

		/* fields is an object with name/data fields corresponding to the form */
		_validate = function (fields) {
			var f, type, check, errors
			for (f in fields) {
				if (fields.hasOwnProperty(f) && _config[f]) {
					type = _config[f]
					check = _checks[type]

					if (!check(fields[f])) {
						if (!errors) { errors = [] }
						errors.push({ field: f, check: type })
					}
				}
			}
			return errors
		},
		_configure = function (o) {
			_config = o
		}
	// end of vars

	return {
		validate: _validate,
		configure: _configure
	}

})();
