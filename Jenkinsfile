pipeline {
  agent any
  stages {
    stage("build") {
      steps {
        sh 'echo "Building the game..."'
      }
      steps {
        sh 'notify to slack after build'
      }
    }

    stage("test") {
      steps {
        sh 'echo "Testing the game..."'
      }

      steps {
        sh 'notify to slack after test'
      }
    }

    stage("deploy") {
      steps {
        sh 'echo "Deploying the game..."'
      }

      steps {
        sh 'notify to slack after deploy'
      }
    }
  }
}
