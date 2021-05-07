pipeline {
    agent { docker { image 'node:14-alpine' } }
    
    stages {
        stage('initialize')
        {
            steps {
            def dockerHome = tool 'MyDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}" 
            }          
        }
        
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}