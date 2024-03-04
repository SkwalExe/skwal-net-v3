module.exports = {
  apps: [
    {
      name: 'skwal-net-v3',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      env: {
        NODE_ENV: 'production',
        NITRO_PORT: 3000,
        NITRO_HOST: '127.0.0.1',
      },
      script: './.output/server/index.mjs'
    }
  ]
}

