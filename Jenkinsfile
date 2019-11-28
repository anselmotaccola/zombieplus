pipeline {
    agent {
        docker {image "margelotaccola/node"}
    }
    stages {
        stage('Build') {
            steps{
                sh "npm install"   
            }
        }
        stage("Tests"){
            steps {
                sh "npm run test:ci"
            }
        }
    }
}
