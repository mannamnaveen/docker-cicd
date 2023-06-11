pipeline {
    agent any

    stages {
        stage('Git Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/mannamnaveen/docker-cicd.git']])
            }
        }
        stage('docker build'){
            steps {
                sh "docker build -t hello:v1 ."
            }
        }
        stage('Scan the image'){
          steps {
              sh 'trivy image --no-progress --exit-code 1 --severity HIGH,CRITICAL hello:v1'
            }
        }
    }
}

