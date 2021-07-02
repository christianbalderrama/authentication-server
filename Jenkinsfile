pipeline {
  agent any
  environment {
    TEST_CREDENTIALS = credentials("test-credentials");
  }
  stages {
    stage("Build") {
      steps {
        echo "Building Stage: ${BRANCH_NAME}"
        echo "${TEST_CREDENTIALS_USR} ${TEST_CREDENTIALS_PWD}"
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