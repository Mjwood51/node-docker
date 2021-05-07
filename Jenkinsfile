pipeline {
    agent { docker { image 'node:14-alpine' } }
    node {
        stage('Initialize')
        {
            def dockerHome = tool 'MyDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
    }
    stages {
        
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}