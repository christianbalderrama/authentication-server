pipeline {
  agent any
  stages {
    stage("Build") {
      steps {
        echo "Building Stage: ${BRANCH_NAME}"
        withCredentials([
          usernamePassword(credentialsId: "test-credentials", usernameVariable: "USER", passwordVariable: "PWD")
        ]) {
          sh 'echo user : ${USER} password : ${PWD}'
        }
        echo "Building Docker image"
      }
    }
    stage("Test") {
      steps {
        echo "Testing Stage: ${BRANCH_NAME}"
      }
    }
    stage("Deploy") {
      steps {
        echo "Deployment Stage: ${BRANCH_NAME}"
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