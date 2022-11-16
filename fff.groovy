pipeline {
    agent any

    environment {
        NEXT_VERSION = nextVersion(writeVersion: false)
    }

    stages {
        stage('Update Version') {
            steps {
                bat '''
             node version-updater.js %NEXT_VERSION%
             git add .
             git commit -m "Update Version"
             git.exe push -f origin main
             '''
            }
        }
    }
}

