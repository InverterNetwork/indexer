const { keccak256, encodeAbiParameters } = require('viem');

const getMetadataId = (metadata) => {
  console.log(metadata);
  const [majorVersion, , url, name] = metadata;
  return keccak256(
    encodeAbiParameters(
      [
        { name: 'majorVersion', type: 'uint256' },
        { name: 'url', type: 'string' },
        { name: 'title', type: 'string' },
      ],
      [majorVersion, url, name]
    )
  );
};

module.exports = { getMetadataId };
