module.exports = {
    apps: [
        {
            name: "Fantom-admin-api",
            script: 'bin/www',
            args: '',
            instances: 1,
            ignore_watch: ['uploades', '.git', 'node_modules'],
            autorestart: true,
            watch: true,
            max_memory_restart: '3G',
            env_local: {
                NODE_ENV: 'local',
            }
        }
    ]
}