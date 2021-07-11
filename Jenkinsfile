pipeline {
  agent any
  stages {
    stage("Build") {
      steps {
        echo "Building Stage: ${BRANCH_NAME}"
        echo "Building Docker image"
        docker.withRegistry("https://registry.hub.docker.com", "dockerHub") {
          def image = docker.build("christianbalderrama/authentication-server:${BUILD_NAME}");
          image.push();
        }
        echo "Docker image built successfully!"
      }
    }
    stage("Test") {
      steps {
        sh 'node --version'
        echo "Testing Stage: ${BRANCH_NAME}"
      }
    }
    stage("Deploy") {
      steps {
        echo "Deployment Stage: ${BRANCH_NAME}"
        sh 'docker push christianbalderrama/authentication-server:${BRANCH_NAME}'
        echo 'Successfully pushed with tag ${BRANCH_NAME}'
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