// ////////////////////////////////////////////////
// GitHub Webhook for automatic redeployment
// copy-pasted from :
// https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries#javascript-example
// ////////////////////////////////////////////////

import * as crypto from 'crypto'
import * as fs from 'fs'

const encoder = new TextEncoder()

const verifySignature = async (secret: string, header: string, payload: string) => {
    const parts = header.split('=')
    const sigHex = parts[1]

    const algorithm = {name: 'HMAC', hash: {name: 'SHA-256'}}

    const keyBytes = encoder.encode(secret)
    const extractable = false
    const key = await crypto.subtle.importKey('raw', keyBytes, algorithm, extractable, ['sign', 'verify'])

    const sigBytes = hexToBytes(sigHex)
    const dataBytes = encoder.encode(payload)
    const equal = await crypto.subtle.verify(algorithm.name, key, sigBytes, dataBytes)

    return equal
}

const hexToBytes = (hex: string) => {
    const len = hex.length / 2
    const bytes = new Uint8Array(len)

    let index = 0
    for (let i = 0; i < hex.length; i += 2) {
        const c = hex.slice(i, i + 2)
        const b = parseInt(c, 16)
        bytes[index] = b
        index += 1
    }

    return bytes
}

// ///////////////// COPY PASTE END ////////////////////

export default defineEventHandler(async (event) => {
    // Only POST
    if (event.method !== 'POST') return new Response(null, {status: 405})

    // Validate signature
    const signature = event.headers.get('X-Hub-Signature-256')
    if (signature === null) return new Response(null, {status: 400})

    const body = await readRawBody(event)
    if (body === undefined) return new Response(null, {status: 400})

    const validated = await verifySignature(
        'kd8bYDufPd23bVK5sdLfSN9RLeNmvrE6xZfV8LvK9fWFcgDjKaa2UEen6MHnx53kWoyGp45hSQlYykeODsiLvtU0t0qj5hKoDdkARTdenoYLHWZBP4GHlJsNqhfdnq5F',
        signature,
        body
    )

    if (!validated) return new Response(null, {status: 401})

    // Verify pushed branch
    const json = JSON.parse(body)
    const ref = json.ref
    // If not pushed to main branch, return 202
    if (ref !== 'refs/heads/main') return new Response(null, {status: 202})

    // Write redeploy hook
    const file = fs.openSync('./hooks/redeploy', 'w')
    fs.writeFileSync(file, 'redeploy')
    fs.close(file)
    return new Response(null, {status: 200})
})
