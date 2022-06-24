module.exports = {
  aws: [
    {
      name: "ec2",
      icon: "/ec2.png",
      cost: 1,
      stability: 1,
      speed: 1,
      security: 0,
	  test: "Elastic Compute v2"
    },
    {
      name: "rds",
      icon: "/rds.webp",
      cost: 1,
      stability: 1,
      speed: 1,
      security: 0,
	  test: "Relational Database Service"
    },
    {
      name: "cloudfront",
      icon: "/cloudfront.webp",
      cost: 2,
      speed: 3,
      stability: 2,
      security: 1,
	  test: "CloudFront"
    },
    {
      name: "s3",
      icon: "/s3.png",
      cost: 1,
      speed: 2,
      stability: 2,
      security: 0,
	  test: "Scalable Storage Service v2"
    },
  ],
  azure: [
    {
      name: "VM",
      icon: "/azure_vm.png",
      cost: 1,
      stability: 1,
      speed: 1,
      security: 0,
	  test: "Virtual Machine"
    },
    {
      name: "cosmosDB",
      icon: "/cosmos_db.svg",
      cost: 1,
      stability: 1,
      speed: 1,
      security: 0,
	  test: "CosmosDB"
    },
    {
      name: "cdn",
      icon: "/cdn.jpeg",
      cost: 2,
      speed: 3,
      stability: 2,
      security: 1,
	  test: "Content Delivery Network"
    },
    {
      name: "ASP",
      icon: "/app_service_plan.png",
      cost: 1,
      speed: 4,
      stability: 4,
      security: 2,
	  test: "Application Services Plan"
    },
    {
      name: "ASE",
      icon: "app_service_environment.png",
      cost: 10,
      speed: 5,
      stability: 4,
      security: 2,
	  test: "Application Service Environment"
    },
  ],
};
