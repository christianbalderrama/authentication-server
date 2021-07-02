pipeline {
  agent any
  stages {
    stage("Build") {
      steps {
        echo "Building Stage..."
        echo "Building Docker image"
      }
    }
    stage("Test") {
      steps {
        echo "Testing Stage..."
      }
    }
    stage("Deploy") {
      steps {
        echo "Deployment Stage..."
      }
    }
  }
  post {
    always {
      echo "I'm always printed after the stages"
    }
    success {
      echo "Post Success"
    }
    failure {
      echo "Failed"
    }
  }
}