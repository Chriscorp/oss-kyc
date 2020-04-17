module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*"
        },
        production: {
            host: "localhost",
            port: 8545,
            network_id: "*",
            gasPrice: 10000000000
        }
    }
};
