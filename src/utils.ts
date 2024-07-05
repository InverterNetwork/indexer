import { keccak256, encodeAbiParameters } from 'viem';
import { Metadata } from './types';

export const getMetadataId = (metadata: Metadata) => {
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
