pipeline { 
    agent any
    
    stages{
       
        stage('Build') {
           steps {
                withNPM(npmrcConfig: 'MyNpmrcConfig') {
    sh('npm install')
   }  
 }
    
        stage('parallel') {
            parallel {
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
}
