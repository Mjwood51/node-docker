node {
        stage('Initialize')
        {
            def dockerHome = tool 'MyDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
}

pipeline {
    agent { dockerfile true }
    
    stages {
        
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}