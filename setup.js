const { exec } = require('child_process');

const startRailsServer = () => {
    return new Promise((resolve, reject) => {
        exec('cd API && rails server', (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve();
        });
    });
};

const runReactTests = () => {
    return new Promise((resolve, reject) => {
        exec('cd frontend && npm run start', (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve();
        });
    });
};

(async () => {
    try {
        await startRailsServer();
        setTimeout(runReactTests, 5000);
    } catch (error) {
        console.error(error);
    }
})();