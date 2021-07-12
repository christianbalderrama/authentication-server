pipeline {
  agent any
  stages {
    stage("Build") {
      steps {
        slackSend(
          color: "warning",
          message: "@here Build Stage Started - ${env.JOB_NAME}-${env.BUILD_NUMBER}:${env.BUILD_ID}"
        )
        slackSend(
          color: "good",
          message: "Build Stage Done!"
        )
        // script {
          // Docker commands
        // }
      }
    }
    stage("Test") {
      steps {
        slackSend(
          color: "warning",
          message: "@here Testing Stage Started - ${env.JOB_NAME}-${env.BUILD_NUMBER}:${env.BUILD_ID}"
        )
        slackSend(
          color: "good",
          message: "Testing Stage Done!"
        )
      }
    }
    stage("Deploy") {
      steps {
        slackSend(
          color: "warning",
          message: "@here Deployment Stage Started - ${env.JOB_NAME}-${env.BUILD_NUMBER}:${env.BUILD_ID}"
        )
        slackSend(
          color: "good",
          message: "Deployment Stage Done!"
        )
      }
    }
  }
  post {
    success {
      slackSend(
        color: "good",
        message: "@here Success - ${env.JOB_NAME}-${env.BUILD_NUMBER}:${env.BUILD_ID}"
      )
    }
    failure {
      slackSend(
        color: "danger",
        message: "@here Failed - ${env.JOB_NAME}-${env.BUILD_NUMBER}:${env.BUILD_ID}"
      )
    }
  }
}