pipeline {
    def dockerHome = tool 'MyDocker'
    env.PATH = "${dockerHome}/bin:${env.PATH}" 
    agent { docker { image 'node:14-alpine' } }
    
    stages {
        
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}