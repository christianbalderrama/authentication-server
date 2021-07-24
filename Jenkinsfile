pipeline {
    agent any 
    environment {
        registry = "christianbalderrama/authentication-server:${env.BRANCH_NAME}"
        registryCredential = 'DockerHub'
        dockerImage = ''
    }
    
    stages {
    // Building Docker images
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry
        }
      }
    }
  }
}