const { writeFileSync } = require('fs');
const { join } = require('path');

function handler (data, serverless, options) {
  const template = `const tilesDistributionHostname = "${data.TilesDistributionDomainName}"`;

  console.log(`\n---------------------------------------------------------------------------------\n`);
  console.log(`-> The map can be viewed at https://${data.CloudFrontDistributionDomainName}/#13.54/53.54958/9.99286\n`);
  console.log(`-> The basemap themes can be viewed at https://${data.CloudFrontDistributionDomainName}/basemap.html#13.54/53.54958/9.99286`);
  console.log(`-> Please do a 'npm run website:sync' on your console to sync the static website assets\n`);
  console.log(`-> Afterwards, run 'npm run website:invalidate' to invalidate the website's CloudFront distribution cache`);
  console.log(`\n---------------------------------------------------------------------------------\n`);

  writeFileSync(join(__dirname, '../../website', 'urlConfig.js'), template, { encoding: 'utf-8' });
}

module.exports = { handler }