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

    stage("deploy") {
      steps {
        sh 'echo "Deploying the game..."'
        sh 'echo "Notify to Slack after deploy..."'
      }
    }
  }
}