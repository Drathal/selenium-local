var nightwatchCucumber = require('nightwatch-cucumber')({
    runner: 'nightwatch',
    featureFiles: 'test/features',
    stepDefinitions: 'test/features/step_definitions',
    closeSession: 'afterFeature'
})

module.exports = {
    src_folders: [nightwatchCucumber],
    live_output: false,
    disable_colors: false,
    output_folder: 'reports',
    custom_commands_path: '',
    custom_assertions_path: '',
    page_objects_path: '',
    globals_path: '',

    selenium: {
        start_process: false,
        server_path: './',
        log_path: './',
        host: '127.0.0.1',
        port: 4444
    },

    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: false,
                path: 'reports'
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}
