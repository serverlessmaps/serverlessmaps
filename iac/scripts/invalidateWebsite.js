const { CloudFrontClient, CreateInvalidationCommand } = require('@aws-sdk/client-cloudfront');
const { readFileSync } = require('fs');
const { join } = require('path');

const outputs = JSON.parse(readFileSync(join(__dirname, 'outputs.json')));

const client = new CloudFrontClient({
  region: outputs.Region,
});

const input = { 
  DistributionId: outputs.CloudFrontDistributionId,
  InvalidationBatch: {
    Paths: {
      Quantity: 1,
      Items: [
        "/*",
      ],
    },
    CallerReference: new Date().getTime().toString(),
  },
};

const command = new CreateInvalidationCommand(input);

async function run () {
  const response = await client.send(command);
  console.log(`Invalidation request sent: ID is '${response.Invalidation.Id}'. This can take a few minutes to finish!`);
}

run();
