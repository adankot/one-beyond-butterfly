module.exports = {
	aws: {
		ec2: {
			credit: 1,
			stability: 1,
			speed: 1,
			security: 0,
		},
		rds: {
			credit: 1,
			stability: 1,
			speed: 1,
			security: 0,
		},
		cloudfront: {
			credit: 2,
			speed: 3,
			stability: 2,
			security: 1,
		},
	},
	azure: {
		VM: {
			credit: 1,
			stability: 1,
			speed: 1,
			security: 0,
		},
		cosmosDB: {
			credit: 1,
			stability: 1,
			speed: 1,
			security: 0,
		},
		cdn: {
			credit: 2,
			speed: 3,
			stability: 2,
			security: 1,
		},
		"App Service Plan": {
			credit: 1,
			speed: 4,
			stability: 4,
			security: 2
		},
		"App Service Environment": {
			credit: 10,
			speed: 5,
			stability: 4,
			security: 2
		}
	}
}
