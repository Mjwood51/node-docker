node {
        stage('Initialize')
        {
            def dockerHome = tool 'MyDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
}

pipeline {
    agent { docker { image 'node:14-alpine' } }
    
    stages {
        
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}