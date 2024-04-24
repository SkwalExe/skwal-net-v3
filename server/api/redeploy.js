//////////////////////////////////////////////////
// GitHub Webhook for automatic redeployment
// copy-pasted from :
// https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries#javascript-example
//////////////////////////////////////////////////

import * as crypto  from 'crypto'
import * as fs from 'fs'

let encoder = new TextEncoder();

async function verifySignature(secret, header, payload) {
    let parts = header.split("=");
    let sigHex = parts[1];

    let algorithm = { name: "HMAC", hash: { name: 'SHA-256' } };

    let keyBytes = encoder.encode(secret);
    let extractable = false;
    let key = await crypto.subtle.importKey(
        "raw",
        keyBytes,
        algorithm,
        extractable,
        [ "sign", "verify" ],
    );

    let sigBytes = hexToBytes(sigHex);
    let dataBytes = encoder.encode(payload);
    let equal = await crypto.subtle.verify(
        algorithm.name,
        key,
        sigBytes,
        dataBytes,
    );

    return equal;
}

function hexToBytes(hex) {
    let len = hex.length / 2;
    let bytes = new Uint8Array(len);

    let index = 0;
    for (let i = 0; i < hex.length; i += 2) {
        let c = hex.slice(i, i + 2);
        let b = parseInt(c, 16);
        bytes[index] = b;
        index += 1;
    }

    return bytes;
}

//////////////////// COPY PASTE END ////////////////////

export default defineEventHandler(async (event) => {
  // Only POST
  if (event.method !== 'POST')
    return new Response(null, { status: 405 })

  // Validate signature
  const body = await readRawBody(event)
  let validated = await verifySignature("kd8bYDufPd23bVK5sdLfSN9RLeNmvrE6xZfV8LvK9fWFcgDjKaa2UEen6MHnx53kWoyGp45hSQlYykeODsiLvtU0t0qj5hKoDdkARTdenoYLHWZBP4GHlJsNqhfdnq5F",
    event.headers.get("X-Hub-Signature-256"),
    body)
  
  if (!validated) 
    return new Response(null, { status: 401 })

  // Verify pushed branch
  const json = JSON.parse(body)
  const ref = json.ref
  // If not pushed to main branch, return 202
  if (ref !== 'refs/heads/main')
    return new Response(null, { status: 202 })

  // Write redeploy hook
  const file = fs.openSync('./hooks/redeploy', 'w')
  fs.writeFileSync(file, 'redeploy')
  fs.close(file)
  return new Response(null, { status: 200 })
})
