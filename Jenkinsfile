pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') {
            steps {
                npm install
            }
        }
 
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}
