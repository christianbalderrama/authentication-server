pipeline {
  agent any
  stages {
    environment {
      JOB_NAME = env.JOB_NAME
      BUILD_NAME = env.BUILD_NAME
      BUILD_ID = env.BUILD_ID
    }
    stage("Build") {
      steps {
        slackSend(
          color: "warning",
          message: '@here Build Stage Started - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
        )
        slackSend(
          color: "good",
          message: "Build Stage Done!"
        )
      }
    }
    stage("Test") {
      steps {
        slackSend(
          color: "warning",
          message: '@here Testing Stage Started - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
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
          message: '@here Deployment Stage Started - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
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
        message: '@here Success - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
      )
    }
    failure {
      slackSend(
        color: "danger",
        message: '@here Failed - ${JOB_NAME}-${BUILD_NUMBER}:${BUILD_ID}'
      )
    }
  }
}