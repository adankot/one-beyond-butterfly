module.exports = {
	aws: {
		ec2: {
			cost: 1,
			stability: 1,
			speed: 1,
			security: 0,
		},
		rds: {
			cost: 1,
			stability: 1,
			speed: 1,
			security: 0,
		},
		cloudfront: {
			cost: 2,
			speed: 3,
			stability: 2,
			security: 1,
		},
		s3: {
			cost: 1,
			stability: 1,
			speed: 1,
			security: 0,
		},
	},
	azure: {
		VM: {
			cost: 1,
			stability: 1,
			speed: 1,
			security: 0,
		},
		cosmosDB: {
			cost: 1,
			stability: 1,
			speed: 1,
			security: 0,
		},
		cdn: {
			cost: 2,
			speed: 3,
			stability: 2,
			security: 1,
		}
	}
}
