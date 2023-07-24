const MarketplaceMigration = artifacts.require("CourseMarketplace");

export default function (deployer) {
  deployer.deploy(MarketplaceMigration);
}
