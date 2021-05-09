node {
        stage('Initialize')
        {
            def dockerHome = tool 'MyDocker'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
        }
}

pipeline {
    agent { dockerfile true }
    // agent { 
    //     docker { 
    //         image 'node:14-alpine' 
    //         label 'agent1'
    //     } 
    // }

    stages {
        
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}