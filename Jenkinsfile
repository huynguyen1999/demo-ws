pipeline {
  agent any
  stages {
    stage("build") {
      steps {
        sh 'echo "Building the game..."'
        sh 'echo "Notify to Slack after build..."'
      }
    }

    stage("test") {
      steps {
        sh 'echo "Testing the game..."'
        sh 'echo "Notify to Slack after test..."'
      }
    }

    stage("scan-virus"){
      steps {
        sh 'echo "Scanning virus..."'
        sh 'echo "Notify to Slack after scan virus..."'
      }
    }

    stage("deploy") {
      steps {
        sh 'echo "Deploying the game..."'
        sh 'echo "Notify to Slack after deploy..."'
      }
    }
  }
}