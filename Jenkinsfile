pipeline {
    
    agent any
    
    stages{
    
    stage('Build') {
            steps {
               sh("npm install")
            }
        }
    
        stage('parallel') {
            parallel {
                // start several test jobs in parallel, and they all
                // will use Cypress Dashboard to load balance any found spec files
                stage('Run tests in parallel A') {
                    steps {
                        sh("npx cypress run --record --key a3c89f30-ec51-42b8-af67-b1157737989b --parallel")
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        sh("npx cypress run --record --key a3c89f30-ec51-42b8-af67-b1157737989b --parallel")
                    }
                }
            }
        }
    }
}
