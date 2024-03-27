const config = {
    local: {
        /// local environment
        API_URL: 'http://localhost:8000/api/v1',
    },
    test: {
        // test environment
        API_URL: '',
    },
    production: {
        // production environment
        API_URL: '',
    },
}

const nodeEnv = import.meta.env.VITE_NODE_ENV || 'local'
export default config[nodeEnv]