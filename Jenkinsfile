pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/PavanYadavR/qr-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t qr-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker rm -f qr-container || exit 0'
                bat 'docker run -d -p 3000:3000 --name qr-container qr-app'
            }
        }

    }
}