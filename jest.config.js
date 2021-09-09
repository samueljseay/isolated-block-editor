const baseConfig = require( '@wordpress/scripts/config/jest-unit.config.js' );

module.exports = {
	...baseConfig,
	globals: {
		CSS: {}, // This can be removed after @wordpress/components is updated to v17.0.0
	},
};
